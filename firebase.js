// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnclDwJjnujGmQBZi4uivdik8l5oJcscw",
    authDomain: "isg-depo-app.firebaseapp.com",
    projectId: "isg-depo-app",
    storageBucket: "isg-depo-app.firebasestorage.app",
    messagingSenderId: "105012578672",
    appId: "1:105012578672:web:dbdbd19db38cb3ccb4a7b5",
    measurementId: "G-MBB9RZ5DBH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// ===== Firebase Database Functions =====

// Stok verilerini Firebase'e kaydet
async function saveStockToFirebase(stock) {
    try {
        await db.collection('stock').doc('current').set({
            data: stock,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedBy: currentUser || 'unknown'
        });
        console.log('Stock saved to Firebase');
        return true;
    } catch (error) {
        console.error('Error saving stock to Firebase:', error);
        return false;
    }
}

// Stok verilerini Firebase'den yükle
async function loadStockFromFirebase() {
    try {
        const doc = await db.collection('stock').doc('current').get();
        if (doc.exists) {
            console.log('Stock loaded from Firebase');
            return doc.data().data;
        }
        return null;
    } catch (error) {
        console.error('Error loading stock from Firebase:', error);
        return null;
    }
}

// İşlemleri Firebase'e kaydet
async function saveTransactionToFirebase(transaction) {
    try {
        await db.collection('transactions').add({
            ...transaction,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Transaction saved to Firebase');
        return true;
    } catch (error) {
        console.error('Error saving transaction to Firebase:', error);
        return false;
    }
}

// Tüm işlemleri Firebase'den yükle
async function loadTransactionsFromFirebase() {
    try {
        const snapshot = await db.collection('transactions')
            .orderBy('date', 'desc')
            .get();
        
        const transactions = [];
        snapshot.forEach(doc => {
            transactions.push({ firebaseId: doc.id, ...doc.data() });
        });
        console.log('Transactions loaded from Firebase:', transactions.length);
        return transactions;
    } catch (error) {
        console.error('Error loading transactions from Firebase:', error);
        return [];
    }
}

// İşlemi Firebase'den sil
async function deleteTransactionFromFirebase(transactionId) {
    try {
        // Önce firebaseId ile bul
        const snapshot = await db.collection('transactions')
            .where('id', '==', transactionId)
            .get();
        
        if (!snapshot.empty) {
            await snapshot.docs[0].ref.delete();
            console.log('Transaction deleted from Firebase');
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error deleting transaction from Firebase:', error);
        return false;
    }
}

// Firebase'den tüm verileri senkronize et
async function syncFromFirebase() {
    try {
        showToast('Firebase\'den veriler yükleniyor...', 'info');
        
        // Stok verilerini yükle
        const firebaseStock = await loadStockFromFirebase();
        if (firebaseStock) {
            localStorage.setItem('isg_stock_v2', JSON.stringify(firebaseStock));
        }
        
        // İşlemleri yükle
        const firebaseTransactions = await loadTransactionsFromFirebase();
        if (firebaseTransactions.length > 0) {
            localStorage.setItem('isg_transactions', JSON.stringify(firebaseTransactions));
        }
        
        showToast('Veriler Firebase\'den senkronize edildi!', 'success');
        return true;
    } catch (error) {
        console.error('Sync from Firebase failed:', error);
        showToast('Firebase senkronizasyonu başarısız!', 'error');
        return false;
    }
}

// LocalStorage'dan Firebase'e yükle (ilk kurulum için)
async function uploadToFirebase() {
    try {
        showToast('Veriler Firebase\'e yükleniyor...', 'info');
        
        // Stok verilerini yükle
        const localStock = JSON.parse(localStorage.getItem('isg_stock_v2') || '{}');
        if (Object.keys(localStock).length > 0) {
            await saveStockToFirebase(localStock);
        }
        
        // İşlemleri yükle
        const localTransactions = JSON.parse(localStorage.getItem('isg_transactions') || '[]');
        for (const transaction of localTransactions) {
            // Eğer firebaseId yoksa yükle
            if (!transaction.firebaseId) {
                await saveTransactionToFirebase(transaction);
            }
        }
        
        showToast('Veriler Firebase\'e yüklendi!', 'success');
        return true;
    } catch (error) {
        console.error('Upload to Firebase failed:', error);
        showToast('Firebase yüklemesi başarısız!', 'error');
        return false;
    }
}

// Real-time listener for stock changes
function listenToStockChanges(callback) {
    return db.collection('stock').doc('current').onSnapshot(doc => {
        if (doc.exists) {
            const data = doc.data().data;
            callback(data);
        }
    }, error => {
        console.error('Stock listener error:', error);
    });
}

// Real-time listener for transaction changes
function listenToTransactionChanges(callback) {
    return db.collection('transactions')
        .orderBy('date', 'desc')
        .onSnapshot(snapshot => {
            const transactions = [];
            snapshot.forEach(doc => {
                transactions.push({ firebaseId: doc.id, ...doc.data() });
            });
            callback(transactions);
        }, error => {
            console.error('Transaction listener error:', error);
        });
}

console.log('Firebase initialized successfully');

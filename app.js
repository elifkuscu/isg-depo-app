// ===== İSG Depo Stok Takip Sistemi - Excel Tabanlı =====

// Admin Users - config.js dosyasından yüklenir
// Güvenlik için şifreler ayrı dosyada tutulur
// ADMIN_USERS değişkeni config.js'de tanımlı olmalı

// Initial Stock Data from Excel (Başlangıç Stok values)
// Düzeltilmiş veriler - Excel'den alınan doğru değerler
const INITIAL_STOCK_DATA = [
    // İş Ayakkabıları (cat-1)
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '36', minStock: 3, initialStock: 2 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '37', minStock: 3, initialStock: 1 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '38', minStock: 3, initialStock: 3 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '39', minStock: 3, initialStock: 5 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '40', minStock: 5, initialStock: 10 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '41', minStock: 5, initialStock: 14 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '42', minStock: 5, initialStock: 9 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '43', minStock: 5, initialStock: 19 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '44', minStock: 5, initialStock: 10 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '45', minStock: 3, initialStock: 4 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '46', minStock: 3, initialStock: 3 },
    { category: 'İş Ayakkabıları', colorClass: 'cat-1', item: 'İş Ayakkabısı', size: '47', minStock: 1, initialStock: 2 },

    // Reflektörlü Yelekler (cat-2)
    { category: 'Reflektörlü Yelekler', colorClass: 'cat-2', item: 'Reflektörlü Yelek', size: 'S', minStock: 5, initialStock: 23 },
    { category: 'Reflektörlü Yelekler', colorClass: 'cat-2', item: 'Reflektörlü Yelek', size: 'M', minStock: 5, initialStock: 10 },
    { category: 'Reflektörlü Yelekler', colorClass: 'cat-2', item: 'Reflektörlü Yelek', size: 'L', minStock: 5, initialStock: 0 },
    { category: 'Reflektörlü Yelekler', colorClass: 'cat-2', item: 'Reflektörlü Yelek', size: 'XL', minStock: 5, initialStock: 12 },
    { category: 'Reflektörlü Yelekler', colorClass: 'cat-2', item: 'Reflektörlü Yelek', size: 'XXL', minStock: 5, initialStock: 23 },
    { category: 'Reflektörlü Yelekler', colorClass: 'cat-2', item: 'Reflektörlü Yelek', size: 'XXXL', minStock: 5, initialStock: 25 },

    // Kişisel Koruyucu Donanımlar (cat-3)
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Şapka Baret', size: '-', minStock: 5, initialStock: 22 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Baret', size: 'Beyaz', minStock: 10, initialStock: 87 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Baret', size: 'Mavi', minStock: 0, initialStock: 0 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Baret', size: 'Kırmızı', minStock: 0, initialStock: 0 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Gözlük solus blue black kit clear', size: '-', minStock: 7, initialStock: 10 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Gözlük - Renkli', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Maske - Toz (FFP2)', size: '-', minStock: 20, initialStock: 201 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Maske - Gaz (Karbon)', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Maske - Cerrahi', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Eldiven - Sponsa-11 ısı eldiveni çifti', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Eldiven', size: '7 numara', minStock: 2, initialStock: 4 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Eldiven', size: '8 numara', minStock: 2, initialStock: 7 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Eldiven', size: '9 numara', minStock: 2, initialStock: 6 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'KKD Çantası', size: '-', minStock: 15, initialStock: 31 },
    { category: 'Kişisel Koruyucu Donanımlar', colorClass: 'cat-3', item: 'Kulak Tıkacı - Tek kullanımlık', size: '-', minStock: 10, initialStock: 28 },

    // Uyarı Levhaları (cat-4)
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Yangın Tüpü Levhası', size: '-', minStock: 5, initialStock: 32 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Üç Boyutlu Yangın Tüpü Levhası', size: '-', minStock: 3, initialStock: 12 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Acil Çıkış Levhası Yukarı', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Alçak Tavan', size: '-', minStock: 3, initialStock: 9 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Koruyucu Malzeme Kullan', size: '-', minStock: 3, initialStock: 9 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Toz Maskesi Tak', size: '-', minStock: 3, initialStock: 10 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Baret Giy', size: '-', minStock: 3, initialStock: 10 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Acil Çıkış Kapı Açma Butonu Levhası', size: '-', minStock: 3, initialStock: 14 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Elektrik Tehlikesi', size: '-', minStock: 3, initialStock: 20 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Toplanma Noktası', size: '-', minStock: 2, initialStock: 8 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Yetkili Personelden Başkası Müdahale Edemez', size: '-', minStock: 2, initialStock: 6 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Görevliden Başkası Kullanamaz', size: '-', minStock: 2, initialStock: 9 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Girmek Yasaktır', size: '-', minStock: 2, initialStock: 11 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'İş Ayakkabını Giy', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'İş Gözlüğünü Kullan', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'İş eldiveni giy', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Kulaklık Tak', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'İlkyardım Çantası Levhası', size: '-', minStock: 3, initialStock: 11 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'İlkyardım Dolabı', size: '-', minStock: 3, initialStock: 10 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Yangın Dolabı', size: '-', minStock: 4, initialStock: 21 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Yangın Alarm Butonu Levhası', size: '-', minStock: 3, initialStock: 14 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Işıklı Yönlendirme Levhası', size: '-', minStock: 2, initialStock: 5 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Acil Çıkış Levhası Aşağı', size: '-', minStock: 5, initialStock: 22 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Acil Çıkış Levhası Sağa', size: '-', minStock: 5, initialStock: 21 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Acil Çıkış Levhası Sola', size: '-', minStock: 5, initialStock: 20 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Bekleme Salonu', size: '-', minStock: 2, initialStock: 6 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Deprem Çantası', size: '-', minStock: 1, initialStock: 2 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Acil Durum Megafonu', size: '-', minStock: 1, initialStock: 2 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Kaygan Zemin Levhası', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Uyarı Levhaları', colorClass: 'cat-4', item: 'Acil Durum Sedyesi', size: '-', minStock: 1, initialStock: 0 },

    // Ecza Dolabı Malzemeleri (cat-5)
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Yara Bandı (kutu)', size: '-', minStock: 20, initialStock: 75 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Steril Gaz Kompres adet', size: '-', minStock: 20, initialStock: 700 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Su Geçirmez Yara Bandı', size: '-', minStock: 2, initialStock: 5 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'İpek Pamuk', size: '-', minStock: 1, initialStock: 3 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Stilex Krem', size: '-', minStock: 1, initialStock: 3 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Anestol Krem', size: '-', minStock: 1, initialStock: 3 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Sıcak Soğuk Kompres Jel', size: '-', minStock: 1, initialStock: 2 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Tansiyon Aleti', size: '-', minStock: 1, initialStock: 1 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Ateşölçer', size: '-', minStock: 1, initialStock: 1 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Soğuk akü', size: '-', minStock: 1, initialStock: 2 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Sargı Bezi Adet', size: '-', minStock: 20, initialStock: 300 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Steril Eldiven', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Silverdin', size: '-', minStock: 1, initialStock: 3 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Oksijenli Su', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Makas', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'Flaster (Makara)', size: '-', minStock: 2, initialStock: 5 },
    { category: 'Ecza Dolabı Malzemeleri', colorClass: 'cat-5', item: 'CPR Maske', size: '-', minStock: 2, initialStock: 10 },

    // Sabit Ekipmanlar (cat-6)
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Ecza Dolabı', size: '-', minStock: 2, initialStock: 6 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'İSG Panosu', size: '-', minStock: 3, initialStock: 9 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Acil Aydınlatma Armatürü', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Tahliye Planı Panosu', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Fotolümenli kaydırmaz bant (top)', size: '-', minStock: 1, initialStock: 2 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'İkaz şeridi', size: '-', minStock: 2, initialStock: 8 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Akordiyon Bariyer', size: '-', minStock: 2, initialStock: 5 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Deprem Çantası - Fener', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Deprem Çantası -Pil Küçük', size: '-', minStock: 5, initialStock: 30 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Deprem Çantası -Pil Büyük', size: '-', minStock: 5, initialStock: 20 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Deprem Çantası -Powerbank', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Deprem Çantası -Radyo', size: '-', minStock: 2, initialStock: 10 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Yangın Tahliye Megafonu', size: '-', minStock: 1, initialStock: 1 },
    { category: 'Sabit Ekipmanlar', colorClass: 'cat-6', item: 'Deprem Çantası', size: '-', minStock: 2, initialStock: 10 },

    // Yangın Ekipmanları (cat-7)
    { category: 'Yangın Ekipmanları', colorClass: 'cat-7', item: 'Yangın Tüpü', size: '6kg KKT', minStock: 0, initialStock: 0 },
    { category: 'Yangın Ekipmanları', colorClass: 'cat-7', item: 'Yangın Tüpü', size: '12kg KKT', minStock: 0, initialStock: 0 },
    { category: 'Yangın Ekipmanları', colorClass: 'cat-7', item: 'Yangın Tüpü CO2', size: '5kg', minStock: 0, initialStock: 0 },
    { category: 'Yangın Ekipmanları', colorClass: 'cat-7', item: 'Yangın Battaniyesi', size: '-', minStock: 2, initialStock: 10 },

    // Spill Kit / Kimyasal Dökülme Kiti (cat-8)
    { category: 'Spill Kit / Kimyasal Dökülme Kiti', colorClass: 'cat-8', item: '-', size: 'Genel Amaç', minStock: 0, initialStock: 0 },
    { category: 'Spill Kit / Kimyasal Dökülme Kiti', colorClass: 'cat-8', item: '-', size: 'Kimyasal', minStock: 0, initialStock: 0 },
    { category: 'Spill Kit / Kimyasal', colorClass: 'cat-8', item: 'Kimyasal Gözlük', size: '-', minStock: 0, initialStock: 0 },

    // Elektrik Güvenliği (cat-9)
    { category: 'Elektrik Güvenliği', colorClass: 'cat-9', item: 'İzolasyon Paspası', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Elektrik Güvenliği', colorClass: 'cat-9', item: 'Kauçuk İzolasyon Halısı', size: '-', minStock: 0, initialStock: 0 },

    // Yüksekte Çalışma (cat-10)
    { category: 'Yüksekte Çalışma', colorClass: 'cat-10', item: 'Emniyet Kemeri (Full Body)', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Yüksekte Çalışma', colorClass: 'cat-10', item: 'Şok Emici Lanyard', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Yüksekte Çalışma', colorClass: 'cat-10', item: 'Halat Tutucu', size: '-', minStock: 0, initialStock: 0 },
    { category: 'Yüksekte Çalışma', colorClass: 'cat-10', item: 'Karabina', size: '-', minStock: 0, initialStock: 0 },

    // Diğer Tüketimler (cat-11)
    { category: 'Diğer Tüketimler', colorClass: 'cat-11', item: 'Megafon', size: '-', minStock: 1, initialStock: 2 },

    // İlkyardım Çantası (cat-12)
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'İzotonik', size: '-', minStock: 5, initialStock: 30 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Sarı AirWay', size: '-', minStock: 5, initialStock: 30 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Yeşil Airway', size: '-', minStock: 5, initialStock: 30 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Işık Cihazı', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Boyunluk', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Elastik Sabitleme Bandı', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'İlkyardım Kiti', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Anestol Krem', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Madesaccol Krem', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Furaderm Krem', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Suni Solunum Cihazı Tek Kullanımlık', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Steril Bisturi Ucu', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Üçgen Bandaj', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Sarı Kanül', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Pembe Kanül', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Oksijen Maskesi', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Elastik Bandaj Küçük', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Elastik Bandaj Büyük', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Povisol Batikon', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Soğutucu Sprey', size: '-', minStock: 3, initialStock: 10 },
    { category: 'İlkyardım Çantası', colorClass: 'cat-12', item: 'Oksijen Tüpü', size: '-', minStock: 0, initialStock: 10 },
];

// App State
let currentUser = null;
let currentPage = 'welcome';

// ===== DOM Elements =====
const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const sidebar = document.getElementById('sidebar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeSidebar = document.getElementById('closeSidebar');
const currentUserSpan = document.getElementById('currentUser');
const pageTitle = document.getElementById('pageTitle');
const dateDisplay = document.getElementById('dateDisplay');

// Pages
const welcomeScreen = document.getElementById('welcomeScreen');
const envanterGirisPage = document.getElementById('envanterGirisPage');
const envanterCikisPage = document.getElementById('envanterCikisPage');
const kalanStokPage = document.getElementById('kalanStokPage');
const envanterListesiPage = document.getElementById('envanterListesiPage');

// Toast
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('isg_currentUser');
    if (savedUser) {
        currentUser = savedUser;
        showDashboard();
    } else {
        // Kayıtlı kullanıcı bilgilerini yükle
        loadSavedCredentials();
    }

    // Initialize stock data if not exists
    initializeStockData();

    // Set date display
    updateDateDisplay();

    // Populate dropdowns
    populateCategoryDropdowns();

    // Event listeners
    setupEventListeners();

    // Update stats
    updateStats();
    
    // Initialize theme
    initializeTheme();
}

function initializeStockData() {
    // Her zaman INITIAL_STOCK_DATA'dan yeniden oluştur
    // Mevcut giriş/çıkış verilerini koru
    const existingData = localStorage.getItem('isg_stock_v2');
    const existingStock = existingData ? JSON.parse(existingData) : {};
    
    const stock = {};
    INITIAL_STOCK_DATA.forEach((item, index) => {
        const key = `${item.colorClass}_${item.item}_${item.size}`;
        const existing = existingStock[key];
        
        stock[key] = {
            id: index,
            category: item.category,
            colorClass: item.colorClass,
            itemName: item.item,
            size: item.size,
            minStock: item.minStock,
            initialStock: item.initialStock,
            // Mevcut giriş/çıkış verilerini koru, yoksa 0
            totalEntry: existing ? existing.totalEntry : 0,
            totalExit: existing ? existing.totalExit : 0
        };
    });
    localStorage.setItem('isg_stock_v2', JSON.stringify(stock));
}

function getStock() {
    return JSON.parse(localStorage.getItem('isg_stock_v2') || '{}');
}

function saveStock(stock) {
    localStorage.setItem('isg_stock_v2', JSON.stringify(stock));
}

function getTransactions() {
    return JSON.parse(localStorage.getItem('isg_transactions') || '[]');
}

function saveTransaction(transaction) {
    const transactions = getTransactions();
    transactions.unshift(transaction);
    localStorage.setItem('isg_transactions', JSON.stringify(transactions));
}

function setupEventListeners() {
    // Login form
    loginForm.addEventListener('submit', handleLogin);

    // Sidebar toggle
    hamburgerBtn.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);
    
    // Theme toggle (only if element exists)
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            navigateTo(page);
        });
    });

    // Entry form
    document.getElementById('entryForm').addEventListener('submit', handleEntry);
    document.getElementById('entryCategory').addEventListener('change', handleEntryCategoryChange);
    document.getElementById('entryItem').addEventListener('change', handleEntryItemChange);

    // Exit form
    document.getElementById('exitForm').addEventListener('submit', handleExit);
    document.getElementById('exitCategory').addEventListener('change', handleExitCategoryChange);
    document.getElementById('exitItem').addEventListener('change', handleExitItemChange);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest('.filter-bar');
            parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            if (currentPage === 'kalan-stok') {
                stockCurrentPage = 1; // Reset page on filter change
                renderStockTable();
            } else if (currentPage === 'envanter-listesi') {
                renderTransactionTable();
            }
        });
    });

    // Search inputs
    document.getElementById('stockSearch').addEventListener('input', () => {
        stockCurrentPage = 1; // Reset page on search
        renderStockTable();
    });
    document.getElementById('listSearch').addEventListener('input', renderTransactionTable);
    document.getElementById('categoryFilter').addEventListener('change', () => {
        stockCurrentPage = 1; // Reset page on category change
        renderStockTable();
    });

    // Close sidebar on outside click
    document.addEventListener('click', (e) => {
        // Mobile: close when clicking outside
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });
    
    // Close/collapse sidebar when clicking on main content area
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.addEventListener('click', (e) => {
            // Don't close if clicking on hamburger button
            if (hamburgerBtn.contains(e.target)) return;
            
            // Mobile: close open sidebar
            if (window.innerWidth <= 1024 && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                const overlay = document.getElementById('sidebarOverlay');
                if (overlay) overlay.classList.remove('active');
            }
            
            // Desktop: collapse sidebar if not already collapsed
            if (window.innerWidth > 1024 && !sidebar.classList.contains('collapsed')) {
                sidebar.classList.add('collapsed');
            }
        });
    }
    
    // Sidebar overlay click to close
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });
    }
}

// ===== Authentication =====
// SHA-256 hash fonksiyonu
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Şifreyi hashle ve karşılaştır
    const hashedPassword = await hashPassword(password);
    const user = ADMIN_USERS.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === hashedPassword);

    if (user) {
        currentUser = username;
        localStorage.setItem('isg_currentUser', username);
        
        // Beni Hatırla seçiliyse kullanıcı bilgilerini kaydet
        if (rememberMe) {
            localStorage.setItem('isg_savedUsername', username);
            localStorage.setItem('isg_savedPassword', password);
            localStorage.setItem('isg_rememberMe', 'true');
        } else {
            localStorage.removeItem('isg_savedUsername');
            localStorage.removeItem('isg_savedPassword');
            localStorage.removeItem('isg_rememberMe');
        }
        
        loginError.classList.remove('show');
        showDashboard();
    } else {
        loginError.textContent = 'Kullanıcı adı veya şifre hatalı!';
        loginError.classList.add('show');
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('isg_currentUser');
    loginPage.style.display = 'flex';
    dashboard.style.display = 'none';
    
    // Beni Hatırla seçili değilse alanları temizle
    if (localStorage.getItem('isg_rememberMe') !== 'true') {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

function loadSavedCredentials() {
    if (localStorage.getItem('isg_rememberMe') === 'true') {
        const savedUsername = localStorage.getItem('isg_savedUsername');
        const savedPassword = localStorage.getItem('isg_savedPassword');
        
        if (savedUsername) document.getElementById('username').value = savedUsername;
        if (savedPassword) document.getElementById('password').value = savedPassword;
        document.getElementById('rememberMe').checked = true;
    }
}

function showDashboard() {
    loginPage.style.display = 'none';
    dashboard.style.display = 'flex';
    currentUserSpan.textContent = currentUser;
    navigateTo('welcome');
}

// ===== Navigation =====
function navigateTo(page) {
    currentPage = page;

    // Hide all pages
    welcomeScreen.style.display = 'none';
    envanterGirisPage.style.display = 'none';
    envanterCikisPage.style.display = 'none';
    kalanStokPage.style.display = 'none';
    envanterListesiPage.style.display = 'none';
    const yillikAnalizPage = document.getElementById('yillikAnalizPage');
    if (yillikAnalizPage) yillikAnalizPage.style.display = 'none';
    const yeniEnvanterPage = document.getElementById('yeniEnvanterPage');
    if (yeniEnvanterPage) yeniEnvanterPage.style.display = 'none';

    // Remove active from nav items
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    // Show selected page
    switch (page) {
        case 'welcome':
            welcomeScreen.style.display = 'block';
            pageTitle.textContent = 'İSG Depo Stok Takip';
            updateStats();
            break;
        case 'yeni-envanter':
            if (yeniEnvanterPage) {
                yeniEnvanterPage.style.display = 'block';
                pageTitle.textContent = 'Yeni Envanter Ekle';
                document.querySelector('[data-page="yeni-envanter"]').classList.add('active');
                populateNewInventoryCategories();
            }
            break;
        case 'envanter-giris':
            envanterGirisPage.style.display = 'block';
            pageTitle.textContent = 'Envanter Giriş';
            document.querySelector('[data-page="envanter-giris"]').classList.add('active');
            renderRecentEntries();
            break;
        case 'envanter-cikis':
            envanterCikisPage.style.display = 'block';
            pageTitle.textContent = 'Envanter Çıkış';
            document.querySelector('[data-page="envanter-cikis"]').classList.add('active');
            renderRecentExits();
            break;
        case 'kalan-stok':
            kalanStokPage.style.display = 'block';
            pageTitle.textContent = 'Kalan Stok';
            document.querySelector('[data-page="kalan-stok"]').classList.add('active');
            populateCategoryFilter();
            renderStockTable();
            break;
        case 'envanter-listesi':
            envanterListesiPage.style.display = 'block';
            pageTitle.textContent = 'Envanter Listesi';
            document.querySelector('[data-page="envanter-listesi"]').classList.add('active');
            renderTransactionTable();
            break;
        case 'yillik-analiz':
            if (yillikAnalizPage) {
                yillikAnalizPage.style.display = 'block';
                pageTitle.textContent = 'Yıllık Analiz';
                document.querySelector('[data-page="yillik-analiz"]').classList.add('active');
                initializeAnalysisPage();
            }
            break;
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
        sidebar.classList.remove('open');
    }
}

// Make navigateTo globally available
window.navigateTo = navigateTo;

// ===== Yeni Envanter Ekleme Fonksiyonları =====
function populateNewInventoryCategories() {
    const newCategorySelect = document.getElementById('newCategory');
    if (!newCategorySelect) return;
    
    const categories = getCategories();
    newCategorySelect.innerHTML = '<option value="">Kategori Seçin veya Yeni Ekleyin</option>';
    newCategorySelect.innerHTML += '<option value="__new__">+ Yeni Kategori Ekle</option>';
    
    categories.forEach(cat => {
        newCategorySelect.innerHTML += `<option value="${cat.name}" data-color="${cat.colorClass}">${cat.name}</option>`;
    });
}

// Yeni kategori input göster/gizle
document.addEventListener('change', function(e) {
    if (e.target && e.target.id === 'newCategory') {
        const newCategoryInputGroup = document.getElementById('newCategoryInputGroup');
        if (e.target.value === '__new__') {
            newCategoryInputGroup.style.display = 'block';
            document.getElementById('newCategoryName').required = true;
        } else {
            newCategoryInputGroup.style.display = 'none';
            document.getElementById('newCategoryName').required = false;
        }
    }
});

// Yeni envanter form submit
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'newInventoryForm') {
        e.preventDefault();
        addNewInventoryItem();
    }
});

function addNewInventoryItem() {
    const categorySelect = document.getElementById('newCategory');
    const newCategoryName = document.getElementById('newCategoryName');
    const itemName = document.getElementById('newItemName');
    const itemSize = document.getElementById('newItemSize');
    const minStock = document.getElementById('newMinStock');
    const initialStock = document.getElementById('newInitialStock');
    
    let category, colorClass;
    
    if (categorySelect.value === '__new__') {
        if (!newCategoryName.value.trim()) {
            showToast('Lütfen yeni kategori adı girin!', 'error');
            return;
        }
        category = newCategoryName.value.trim();
        // Yeni kategori için renk ata
        const existingCategories = getCategories();
        const colorIndex = (existingCategories.length % 12) + 1;
        colorClass = `cat-${colorIndex}`;
    } else {
        category = categorySelect.value;
        const selectedOption = categorySelect.options[categorySelect.selectedIndex];
        colorClass = selectedOption.dataset.color || 'cat-1';
    }
    
    if (!category || !itemName.value.trim()) {
        showToast('Lütfen kategori ve malzeme adı girin!', 'error');
        return;
    }
    
    // Yeni envanter öğesi oluştur
    const newItem = {
        category: category,
        colorClass: colorClass,
        item: itemName.value.trim(),
        size: itemSize.value.trim() || '',
        minStock: parseInt(minStock.value) || 3,
        initialStock: parseInt(initialStock.value) || 0
    };
    
    // Aynı ürün var mı kontrol et
    const existingItem = INITIAL_STOCK_DATA.find(item => 
        item.category === newItem.category && 
        item.item === newItem.item && 
        item.size === newItem.size
    );
    
    if (existingItem) {
        showToast('Bu ürün zaten mevcut!', 'error');
        return;
    }
    
    // INITIAL_STOCK_DATA'ya ekle
    INITIAL_STOCK_DATA.push(newItem);
    
    // Stock'a ekle (getStock/saveStock kullanarak)
    const stock = getStock();
    const stockKey = `${newItem.colorClass}_${newItem.item}_${newItem.size}`;
    stock[stockKey] = {
        id: Object.keys(stock).length,
        category: newItem.category,
        colorClass: newItem.colorClass,
        itemName: newItem.item,
        size: newItem.size,
        minStock: newItem.minStock,
        initialStock: newItem.initialStock,
        totalEntry: newItem.initialStock,
        totalExit: 0
    };
    saveStock(stock);
    
    // Dropdown'ları güncelle
    populateCategoryDropdowns();
    
    // Formu temizle
    document.getElementById('newInventoryForm').reset();
    document.getElementById('newCategoryInputGroup').style.display = 'none';
    
    showToast(`${newItem.item} başarıyla eklendi!`, 'success');
    
    // İstatistikleri güncelle
    updateStats();
}

// ===== CSV Fonksiyonları =====

// Örnek CSV şablonu indir
function downloadCSVTemplate() {
    const csvContent = `Kategori;Malzeme Adı;Beden/Özellik;Asgari Stok;Başlangıç Stok
İş Ayakkabıları;İş Ayakkabısı;42;3;10
İş Ayakkabıları;İş Ayakkabısı;43;3;8
Koruyucu Ekipman;Baret;Standart;5;20
Koruyucu Ekipman;Koruyucu Gözlük;;5;15
İş Eldivenleri;Nitril Eldiven;M;10;50
İş Eldivenleri;Nitril Eldiven;L;10;50`;
    
    // BOM ekle (Türkçe karakterler için)
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'envanter_sablonu.csv';
    link.click();
    URL.revokeObjectURL(link.href);
    showToast('Örnek CSV şablonu indirildi!', 'success');
}

// CSV dosyası yükle ve işle
function handleCSVUpload(event) {
    console.log('CSV yükleme başladı');
    
    const file = event.target.files[0];
    if (!file) {
        console.log('Dosya seçilmedi');
        return;
    }
    
    console.log('Dosya:', file.name, file.type, file.size);
    
    const resultDiv = document.getElementById('csvUploadResult');
    if (!resultDiv) {
        console.error('csvUploadResult elementi bulunamadı');
        alert('Hata: Sonuç alanı bulunamadı');
        return;
    }
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<p style="color: var(--gray-500);"><i class="fas fa-spinner fa-spin"></i> Dosya işleniyor...</p>';
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        console.log('Dosya okundu');
        try {
            let csvText = e.target.result;
            console.log('CSV içeriği (ilk 200 karakter):', csvText.substring(0, 200));
            
            // BOM karakterini kaldır
            if (csvText.charCodeAt(0) === 0xFEFF) {
                csvText = csvText.slice(1);
            }
            
            // Satırlara böl
            const lines = csvText.split(/\r?\n/).filter(line => line.trim());
            console.log('Satır sayısı:', lines.length);
            
            if (lines.length < 2) {
                resultDiv.innerHTML = '<p style="color: #ef4444;"><i class="fas fa-exclamation-circle"></i> CSV dosyası boş veya sadece başlık satırı var!</p>';
                return;
            }
            
            // Ayırıcıyı belirle (noktalı virgül veya virgül)
            const separator = lines[0].includes(';') ? ';' : ',';
            console.log('Ayırıcı:', separator);
            
            let addedCount = 0;
            let skippedCount = 0;
            let errors = [];
            
            // İlk satır başlık, atla
            for (let i = 1; i < lines.length; i++) {
                const row = lines[i].split(separator);
                if (!row || row.length === 0 || !row[0]) continue;
                
                const category = (row[0] || '').trim();
                const itemName = (row[1] || '').trim();
                const size = (row[2] || '').trim();
                const minStock = parseInt(row[3]) || 3;
                const initialStock = parseInt(row[4]) || 0;
                
                console.log(`Satır ${i}:`, category, itemName, size, minStock, initialStock);
                
                if (!category || !itemName) {
                    errors.push(`Satır ${i + 1}: Kategori veya malzeme adı eksik`);
                    skippedCount++;
                    continue;
                }
                
                // Aynı ürün var mı kontrol et
                const existingItem = INITIAL_STOCK_DATA.find(item => 
                    item.category === category && 
                    item.item === itemName && 
                    item.size === size
                );
                
                if (existingItem) {
                    console.log('Ürün zaten mevcut:', category, itemName, size);
                    skippedCount++;
                    continue;
                }
                
                // Kategori rengi belirle
                const existingCategories = getCategories();
                const existingCat = existingCategories.find(c => c.name === category);
                let colorClass;
                
                if (existingCat) {
                    colorClass = existingCat.colorClass;
                } else {
                    const colorIndex = (existingCategories.length % 12) + 1;
                    colorClass = `cat-${colorIndex}`;
                }
                
                // Yeni öğe oluştur
                const newItem = {
                    category: category,
                    colorClass: colorClass,
                    item: itemName,
                    size: size,
                    minStock: minStock,
                    initialStock: initialStock
                };
                
                // INITIAL_STOCK_DATA'ya ekle
                INITIAL_STOCK_DATA.push(newItem);
                
                // Stock'a ekle (getStock/saveStock kullanarak)
                const stock = getStock();
                const stockKey = `${newItem.colorClass}_${newItem.item}_${newItem.size}`;
                stock[stockKey] = {
                    id: Object.keys(stock).length,
                    category: newItem.category,
                    colorClass: newItem.colorClass,
                    itemName: newItem.item,
                    size: newItem.size,
                    minStock: newItem.minStock,
                    initialStock: newItem.initialStock,
                    totalEntry: newItem.initialStock,
                    totalExit: 0
                };
                saveStock(stock);
                
                addedCount++;
            }
            
            console.log('Eklenen:', addedCount, 'Atlanan:', skippedCount);
            
            // LocalStorage'a kaydet
            saveToLocalStorage();
            
            // Dropdown'ları güncelle
            populateCategoryDropdowns();
            
            // İstatistikleri güncelle
            updateStats();
            
            // Sonuç göster
            let resultHTML = `<div style="padding: 16px; background: #f0fdf4; border-radius: 8px; border: 1px solid #22c55e;">`;
            resultHTML += `<p style="color: #166534; font-weight: 600; margin-bottom: 8px;"><i class="fas fa-check-circle"></i> İşlem Tamamlandı!</p>`;
            resultHTML += `<p style="color: #166534;">✓ ${addedCount} ürün başarıyla eklendi</p>`;
            if (skippedCount > 0) {
                resultHTML += `<p style="color: #b45309;">⚠ ${skippedCount} ürün atlandı (zaten mevcut veya hatalı)</p>`;
            }
            if (errors.length > 0 && errors.length <= 5) {
                resultHTML += `<p style="color: #ef4444; font-size: 12px; margin-top: 8px;">${errors.join('<br>')}</p>`;
            }
            resultHTML += `</div>`;
            
            resultDiv.innerHTML = resultHTML;
            
            // Input'u temizle
            event.target.value = '';
            
            if (addedCount > 0) {
                showToast(`${addedCount} ürün başarıyla eklendi!`, 'success');
            }
            
        } catch (error) {
            console.error('CSV okuma hatası:', error);
            resultDiv.innerHTML = `<p style="color: #ef4444;"><i class="fas fa-exclamation-circle"></i> CSV dosyası okunamadı: ${error.message}</p>`;
        }
    };
    
    reader.onerror = function(error) {
        console.error('FileReader hatası:', error);
        resultDiv.innerHTML = `<p style="color: #ef4444;"><i class="fas fa-exclamation-circle"></i> Dosya okuma hatası!</p>`;
    };
    
    reader.readAsText(file, 'UTF-8');
}

// Global fonksiyonlar
window.downloadCSVTemplate = downloadCSVTemplate;
window.handleCSVUpload = handleCSVUpload;

function toggleSidebar() {
    const overlay = document.getElementById('sidebarOverlay');
    if (window.innerWidth <= 1024) {
        sidebar.classList.toggle('open');
        if (overlay) {
            overlay.classList.toggle('active', sidebar.classList.contains('open'));
        }
    } else {
        sidebar.classList.toggle('collapsed');
    }
}

// ===== Get unique categories from stock data =====
function getCategories() {
    const categories = [];
    const seen = new Set();
    INITIAL_STOCK_DATA.forEach(item => {
        if (!seen.has(item.category)) {
            seen.add(item.category);
            categories.push({ name: item.category, colorClass: item.colorClass });
        }
    });
    return categories;
}

// ===== Populate Dropdowns =====
function populateCategoryDropdowns() {
    const entryCategory = document.getElementById('entryCategory');
    const exitCategory = document.getElementById('exitCategory');

    const categories = getCategories();
    categories.forEach(category => {
        const option1 = new Option(category.name, category.colorClass);
        const option2 = new Option(category.name, category.colorClass);
        entryCategory.add(option1);
        exitCategory.add(option2);
    });
}

function populateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.innerHTML = '<option value="all">Tüm Kategoriler</option>';

    const categories = getCategories();
    categories.forEach(category => {
        const option = new Option(category.name, category.colorClass);
        categoryFilter.add(option);
    });
}

function handleEntryCategoryChange(e) {
    const colorClass = e.target.value;
    const itemSelect = document.getElementById('entryItem');

    itemSelect.innerHTML = '<option value="">Malzeme Seçin</option>';

    if (colorClass) {
        itemSelect.disabled = false;
        const items = INITIAL_STOCK_DATA.filter(item => item.colorClass === colorClass);
        items.forEach(item => {
            const displayName = item.size && item.size !== '-' ? `${item.item} (${item.size})` : item.item;
            const value = `${item.item}|||${item.size}`;
            itemSelect.add(new Option(displayName, value));
        });
    } else {
        itemSelect.disabled = true;
        itemSelect.innerHTML = '<option value="">Önce kategori seçin</option>';
    }

    document.getElementById('entryCurrentStock').value = 0;
}

function handleEntryItemChange(e) {
    const colorClass = document.getElementById('entryCategory').value;
    const selectedValue = e.target.value;

    if (colorClass && selectedValue) {
        const [itemName, size] = selectedValue.split('|||');
        const stock = getStock();
        const key = `${colorClass}_${itemName}_${size}`;
        const item = stock[key];
        if (item) {
            const remaining = item.initialStock + item.totalEntry - item.totalExit;
            document.getElementById('entryCurrentStock').value = remaining;
        }
    }
}

function handleExitCategoryChange(e) {
    const colorClass = e.target.value;
    const itemSelect = document.getElementById('exitItem');

    itemSelect.innerHTML = '<option value="">Malzeme Seçin</option>';

    if (colorClass) {
        itemSelect.disabled = false;
        const items = INITIAL_STOCK_DATA.filter(item => item.colorClass === colorClass);
        items.forEach(item => {
            const displayName = item.size && item.size !== '-' ? `${item.item} (${item.size})` : item.item;
            const value = `${item.item}|||${item.size}`;
            itemSelect.add(new Option(displayName, value));
        });
    } else {
        itemSelect.disabled = true;
        itemSelect.innerHTML = '<option value="">Önce kategori seçin</option>';
    }

    document.getElementById('exitCurrentStock').value = 0;
}

function handleExitItemChange(e) {
    const colorClass = document.getElementById('exitCategory').value;
    const selectedValue = e.target.value;

    if (colorClass && selectedValue) {
        const [itemName, size] = selectedValue.split('|||');
        const stock = getStock();
        const key = `${colorClass}_${itemName}_${size}`;
        const item = stock[key];
        if (item) {
            const remaining = item.initialStock + item.totalEntry - item.totalExit;
            document.getElementById('exitCurrentStock').value = remaining;
        }
    }
}

// ===== Entry & Exit Handlers =====
function handleEntry(e) {
    e.preventDefault();

    const colorClass = document.getElementById('entryCategory').value;
    const selectedValue = document.getElementById('entryItem').value;
    const quantity = parseInt(document.getElementById('entryQuantity').value);
    const notes = document.getElementById('entryNotes').value;

    if (!colorClass || !selectedValue || !quantity) {
        showToast('Lütfen tüm alanları doldurun!', 'error');
        return;
    }

    const [itemName, size] = selectedValue.split('|||');
    const stock = getStock();
    const key = `${colorClass}_${itemName}_${size}`;

    // Update stock - add to totalEntry
    if (stock[key]) {
        stock[key].totalEntry += quantity;
    }

    saveStock(stock);

    // Get category name
    const categoryName = INITIAL_STOCK_DATA.find(i => i.colorClass === colorClass && i.item === itemName && i.size === size)?.category || '';

    // Save transaction
    saveTransaction({
        id: Date.now(),
        type: 'entry',
        colorClass: colorClass,
        categoryName: categoryName,
        itemName: itemName,
        size: size,
        quantity: quantity,
        notes: notes,
        user: currentUser,
        date: new Date().toISOString()
    });

    // Reset form
    document.getElementById('entryForm').reset();
    document.getElementById('entryItem').disabled = true;
    document.getElementById('entryItem').innerHTML = '<option value="">Önce kategori seçin</option>';
    document.getElementById('entryCurrentStock').value = 0;

    const displayName = size && size !== '-' ? `${itemName} (${size})` : itemName;
    showToast(`${quantity} adet ${displayName} stoka eklendi!`, 'success');
    renderRecentEntries();
    updateStats();
}

function handleExit(e) {
    e.preventDefault();

    const colorClass = document.getElementById('exitCategory').value;
    const selectedValue = document.getElementById('exitItem').value;
    const quantity = parseInt(document.getElementById('exitQuantity').value);
    const person = document.getElementById('exitPerson').value;
    const notes = document.getElementById('exitNotes').value;

    if (!colorClass || !selectedValue || !quantity || !person) {
        showToast('Lütfen tüm zorunlu alanları doldurun!', 'error');
        return;
    }

    const [itemName, size] = selectedValue.split('|||');
    const stock = getStock();
    const key = `${colorClass}_${itemName}_${size}`;
    const item = stock[key];

    // Check if enough stock
    const remaining = item.initialStock + item.totalEntry - item.totalExit;
    if (remaining < quantity) {
        showToast('Yeterli stok yok!', 'error');
        return;
    }

    // Update stock - add to totalExit
    stock[key].totalExit += quantity;
    saveStock(stock);

    // Get category name
    const categoryName = INITIAL_STOCK_DATA.find(i => i.colorClass === colorClass && i.item === itemName && i.size === size)?.category || '';

    // Save transaction
    saveTransaction({
        id: Date.now(),
        type: 'exit',
        colorClass: colorClass,
        categoryName: categoryName,
        itemName: itemName,
        size: size,
        quantity: quantity,
        person: person,
        notes: notes,
        user: currentUser,
        date: new Date().toISOString()
    });

    // Reset form
    document.getElementById('exitForm').reset();
    document.getElementById('exitItem').disabled = true;
    document.getElementById('exitItem').innerHTML = '<option value="">Önce kategori seçin</option>';
    document.getElementById('exitCurrentStock').value = 0;

    const displayName = size && size !== '-' ? `${itemName} (${size})` : itemName;
    showToast(`${quantity} adet ${displayName} stoktan çıkarıldı!`, 'success');
    renderRecentExits();
    updateStats();
}

// ===== Render Functions =====
function renderRecentEntries() {
    const container = document.getElementById('recentEntries');
    const transactions = getTransactions().filter(t => t.type === 'entry').slice(0, 5);

    if (transactions.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>Henüz giriş işlemi yok</p></div>';
        return;
    }

    container.innerHTML = transactions.map(t => `
        <div class="transaction-item">
            <div class="transaction-icon entry">
                <i class="fas fa-plus"></i>
            </div>
            <div class="transaction-details">
                <div class="transaction-title">${t.itemName}</div>
                <div class="transaction-meta">${t.categoryName} • ${formatDate(t.date)}</div>
            </div>
            <div class="transaction-amount positive">+${t.quantity}</div>
            <button class="delete-transaction-btn" onclick="deleteTransaction(${t.id})" title="İşlemi Sil">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function renderRecentExits() {
    const container = document.getElementById('recentExits');
    const transactions = getTransactions().filter(t => t.type === 'exit').slice(0, 5);

    if (transactions.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>Henüz çıkış işlemi yok</p></div>';
        return;
    }

    container.innerHTML = transactions.map(t => `
        <div class="transaction-item">
            <div class="transaction-icon exit">
                <i class="fas fa-minus"></i>
            </div>
            <div class="transaction-details">
                <div class="transaction-title">${t.itemName}</div>
                <div class="transaction-meta">${t.categoryName} • ${t.person} • ${formatDate(t.date)}</div>
            </div>
            <div class="transaction-amount negative">-${t.quantity}</div>
            <button class="delete-transaction-btn" onclick="deleteTransaction(${t.id})" title="İşlemi Sil">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// Pagination state for stock table
let stockCurrentPage = 1;
const stockItemsPerPage = 10;
let stockFilteredItems = [];

function renderStockTable() {
    const tbody = document.getElementById('stockTableBody');
    const stock = getStock();
    const searchTerm = document.getElementById('stockSearch').value.toLocaleLowerCase('tr-TR');
    const categoryFilter = document.getElementById('categoryFilter').value;
    const activeFilter = document.querySelector('#kalanStokPage .filter-btn.active').dataset.filter;

    let items = Object.values(stock);

    // Apply search filter
    if (searchTerm) {
        items = items.filter(item =>
            item.itemName.toLocaleLowerCase('tr-TR').includes(searchTerm) ||
            item.category.toLocaleLowerCase('tr-TR').includes(searchTerm)
        );
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
        items = items.filter(item => item.colorClass === categoryFilter);
    }

    // Apply column filters
    if (columnFilters.category) {
        items = items.filter(item => item.category.toLocaleLowerCase('tr-TR').includes(columnFilters.category));
    }
    if (columnFilters.itemName) {
        items = items.filter(item => item.itemName.toLocaleLowerCase('tr-TR').includes(columnFilters.itemName));
    }
    if (columnFilters.size) {
        items = items.filter(item => (item.size || '').toLocaleLowerCase('tr-TR').includes(columnFilters.size));
    }

    // Calculate remaining stock for each item and apply status filter
    items = items.map(item => ({
        ...item,
        remaining: item.initialStock + item.totalEntry - item.totalExit
    }));

    // Apply stock status filter
    switch (activeFilter) {
        case 'order':
            // Items where remaining < minStock (needs order)
            items = items.filter(item => item.remaining < item.minStock && item.minStock > 0);
            break;
        case 'low':
            items = items.filter(item => item.remaining > 0 && item.remaining <= item.minStock);
            break;
        case 'out':
            items = items.filter(item => item.remaining === 0);
            break;
        case 'ok':
            items = items.filter(item => item.remaining > item.minStock);
            break;
    }

    // Apply sorting
    if (stockSortColumn) {
        items.sort((a, b) => {
            let aVal = a[stockSortColumn];
            let bVal = b[stockSortColumn];
            
            // Handle string comparison
            if (typeof aVal === 'string') {
                aVal = aVal.toLocaleLowerCase('tr-TR');
                bVal = bVal.toLocaleLowerCase('tr-TR');
            }
            
            if (aVal < bVal) return stockSortDirection === 'asc' ? -1 : 1;
            if (aVal > bVal) return stockSortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // Store filtered items for pagination
    stockFilteredItems = items;
    
    // Calculate pagination
    const totalPages = Math.ceil(items.length / stockItemsPerPage);
    if (stockCurrentPage > totalPages) stockCurrentPage = 1;
    
    const startIndex = (stockCurrentPage - 1) * stockItemsPerPage;
    const endIndex = startIndex + stockItemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    // Update pagination UI
    updateStockPagination(totalPages, items.length);

    if (items.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" class="empty-state">
                    <i class="fas fa-box-open"></i>
                    <h3>Sonuç bulunamadı</h3>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = paginatedItems.map(item => {
        const status = getStockStatus(item.remaining, item.minStock);
        const statusText = status === 'low' ? 'Stok Yok' : status === 'warning' ? 'Düşük' : 'Tamam';
        // Check if needs order (kalan stok < asgari stok)
        const needsOrder = item.minStock > 0 && item.remaining < item.minStock;
        const rowClass = needsOrder ? 'needs-order' : item.colorClass;
        const orderBadge = needsOrder ? '<span class="status-badge out">SİPARİŞ VER</span>' : `<span class="status-badge ${status}">${statusText}</span>`;

        return `
            <tr class="${rowClass}">
                <td class="action-cell">
                    <div class="action-buttons">
                        <button class="action-btn edit-btn" onclick="openEditModal('${item.itemName}')" title="Düzenle">
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button class="action-btn delete-btn" onclick="deleteStockItem('${item.itemName}')" title="Sil">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
                <td><span class="category-badge">${item.category}</span></td>
                <td><strong>${item.itemName}</strong></td>
                <td class="size-cell">${item.size || '-'}</td>
                <td class="number-cell">${item.minStock}</td>
                <td class="number-cell"><span class="stock-value ${needsOrder ? 'low' : status}">${item.remaining}</span></td>
                <td class="number-cell entry-value">${item.totalEntry > 0 ? '+' + item.totalEntry : '0'}</td>
                <td class="number-cell exit-value">${item.totalExit > 0 ? '-' + item.totalExit : '0'}</td>
                <td class="number-cell">${orderBadge}</td>
            </tr>
        `;
    }).join('');
}

function updateStockPagination(totalPages, totalItems) {
    const pageInfo = document.getElementById('pageInfo');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    
    if (totalItems === 0) {
        pageInfo.textContent = 'Sonuç yok';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        pageInfo.textContent = `Sayfa ${stockCurrentPage} / ${totalPages} (${totalItems} kayıt)`;
        prevBtn.disabled = stockCurrentPage === 1;
        nextBtn.disabled = stockCurrentPage === totalPages;
    }
}

function changeStockPage(direction) {
    const totalPages = Math.ceil(stockFilteredItems.length / stockItemsPerPage);
    const newPage = stockCurrentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        stockCurrentPage = newPage;
        renderStockTable();
        // Scroll to top of table
        document.querySelector('.stock-table-container').scrollIntoView({ behavior: 'smooth' });
    }
}

// Reset page when filters change
function resetStockPage() {
    stockCurrentPage = 1;
}

// Sorting state
let stockSortColumn = null;
let stockSortDirection = 'asc';

// Column filter state
let columnFilters = {
    category: '',
    itemName: '',
    size: ''
};

function applyColumnFilters() {
    columnFilters.category = (document.getElementById('filterCategory')?.value || '').toLocaleLowerCase('tr-TR');
    columnFilters.itemName = (document.getElementById('filterMaterial')?.value || '').toLocaleLowerCase('tr-TR');
    columnFilters.size = (document.getElementById('filterSize')?.value || '').toLocaleLowerCase('tr-TR');
    
    stockCurrentPage = 1;
    renderStockTable();
}

function sortStockTable(column) {
    // Toggle direction if same column
    if (stockSortColumn === column) {
        stockSortDirection = stockSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        stockSortColumn = column;
        stockSortDirection = 'asc';
    }
    
    stockCurrentPage = 1;
    renderStockTable();
}

function renderTransactionTable() {
    const tbody = document.getElementById('transactionBody');
    const transactions = getTransactions();
    const searchTerm = document.getElementById('listSearch').value.toLocaleLowerCase('tr-TR');
    const activeFilter = document.querySelector('#envanterListesiPage .filter-btn.active').dataset.filter;

    let filtered = transactions;

    // Apply search filter
    if (searchTerm) {
        filtered = filtered.filter(t =>
            t.itemName.toLocaleLowerCase('tr-TR').includes(searchTerm) ||
            t.categoryName.toLocaleLowerCase('tr-TR').includes(searchTerm) ||
            (t.person && t.person.toLocaleLowerCase('tr-TR').includes(searchTerm))
        );
    }

    // Apply type filter
    if (activeFilter === 'entry') {
        filtered = filtered.filter(t => t.type === 'entry');
    } else if (activeFilter === 'exit') {
        filtered = filtered.filter(t => t.type === 'exit');
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-state">
                    <i class="fas fa-inbox"></i>
                    <h3>İşlem bulunamadı</h3>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = filtered.map(t => `
        <tr>
            <td>${formatDate(t.date)}</td>
            <td><span class="type-badge ${t.type}">${t.type === 'entry' ? 'Giriş' : 'Çıkış'}</span></td>
            <td>${t.categoryName}</td>
            <td>${t.itemName}</td>
            <td style="font-weight: 600; color: ${t.type === 'entry' ? 'var(--success)' : 'var(--danger)'}">
                ${t.type === 'entry' ? '+' : '-'}${t.quantity}
            </td>
            <td>${t.person || '-'}</td>
            <td>${t.notes || '-'}</td>
            <td>
                <button class="delete-transaction-btn-table" onclick="deleteTransaction(${t.id})" title="İşlemi Sil">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// ===== Utility Functions =====
function getStockStatus(quantity, minQuantity) {
    if (quantity <= 0) return 'low';
    if (quantity <= minQuantity) return 'warning';
    return 'good';
}

function updateStats() {
    const stock = getStock();
    const items = Object.values(stock);

    const totalStock = items.reduce((sum, item) => sum + (item.initialStock + item.totalEntry - item.totalExit), 0);
    const totalItems = items.length;

    document.getElementById('totalStock').textContent = totalStock;
    document.getElementById('totalItems').textContent = totalItems;

    // Check for items that need ordering (kalan stok < asgari stok)
    const itemsNeedingOrder = items
        .map(item => ({
            ...item,
            remaining: item.initialStock + item.totalEntry - item.totalExit
        }))
        .filter(item => item.minStock > 0 && item.remaining < item.minStock);

    const orderAlert = document.getElementById('orderAlert');
    const orderAlertList = document.getElementById('orderAlertList');

    if (itemsNeedingOrder.length > 0) {
        orderAlert.style.display = 'block';
        orderAlertList.innerHTML = itemsNeedingOrder.slice(0, 10).map(item => `
            <div class="order-alert-item">
                ${item.itemName}
                <span class="item-stock">${item.remaining}/${item.minStock}</span>
            </div>
        `).join('') + (itemsNeedingOrder.length > 10 ? `<div class="order-alert-item">+${itemsNeedingOrder.length - 10} daha...</div>` : '');
    } else {
        orderAlert.style.display = 'none';
    }
}

function updateDateDisplay() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateDisplay.textContent = now.toLocaleDateString('tr-TR', options);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.className = 'toast show ' + type;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Delete Transaction =====
function deleteTransaction(transactionId) {
    if (!confirm('Bu işlemi silmek istediğinizden emin misiniz? Stok değerleri geri alınacaktır.')) {
        return;
    }

    const transactions = getTransactions();
    const transaction = transactions.find(t => t.id === transactionId);

    if (!transaction) {
        showToast('İşlem bulunamadı!', 'error');
        return;
    }

    // Reverse the stock change
    const stock = getStock();
    const size = transaction.size || '-';
    const key = `${transaction.colorClass}_${transaction.itemName}_${size}`;

    if (stock[key]) {
        if (transaction.type === 'entry') {
            // If it was an entry, subtract from totalEntry
            stock[key].totalEntry -= transaction.quantity;
            if (stock[key].totalEntry < 0) stock[key].totalEntry = 0;
        } else {
            // If it was an exit, subtract from totalExit
            stock[key].totalExit -= transaction.quantity;
            if (stock[key].totalExit < 0) stock[key].totalExit = 0;
        }
        saveStock(stock);
    }

    // Remove transaction from list
    const updatedTransactions = transactions.filter(t => t.id !== transactionId);
    localStorage.setItem('isg_transactions', JSON.stringify(updatedTransactions));

    showToast('İşlem silindi ve stok güncellendi!', 'success');

    // Refresh current view
    if (currentPage === 'envanter-giris') {
        renderRecentEntries();
    } else if (currentPage === 'envanter-cikis') {
        renderRecentExits();
    } else if (currentPage === 'envanter-listesi') {
        renderTransactionTable();
    }

    updateStats();
}

// Make deleteTransaction globally available
window.deleteTransaction = deleteTransaction;

// ===== Export to Excel (CSV) =====
function exportToExcel() {
    const stock = getStock();
    const items = Object.values(stock).map(item => ({
        ...item,
        remaining: item.initialStock + item.totalEntry - item.totalExit
    }));

    // Create CSV content with BOM for Excel Turkish character support
    const BOM = '\uFEFF';
    const headers = ['Kategori', 'Malzeme', 'Asgari Stok', 'Başlangıç Stok', 'Giriş (Toplam)', 'Çıkış (Toplam)', 'Kalan Stok', 'Durum'];

    const csvRows = [
        headers.join(';'),
        ...items.map(item => {
            const needsOrder = item.minStock > 0 && item.remaining < item.minStock;
            const status = needsOrder ? 'SİPARİŞ VER' : (item.remaining <= 0 ? 'Stok Yok' : (item.remaining <= item.minStock ? 'Düşük' : 'Tamam'));

            return [
                item.category,
                item.itemName,
                item.minStock,
                item.initialStock,
                item.totalEntry,
                item.totalExit,
                item.remaining,
                status
            ].join(';');
        })
    ];

    const csvContent = BOM + csvRows.join('\r\n');

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    const today = new Date().toISOString().split('T')[0];
    link.setAttribute('href', url);
    link.setAttribute('download', `ISG_Depo_Stok_${today}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Stok listesi Excel dosyası olarak indirildi!', 'success');
}

// ===== Edit/Delete Stock Items =====
function deleteStockItem(itemName) {
    if (!confirm(`"${itemName}" malzemesini silmek istediğinizden emin misiniz?`)) {
        return;
    }

    const stock = getStock();
    // Find key by item name
    const key = Object.keys(stock).find(k => stock[k].itemName === itemName);

    if (key) {
        delete stock[key];
        saveStock(stock);
        showToast('Malzeme silindi!', 'success');
        renderStockTable();
        updateStats();
    }
}

const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editStockForm');

function openEditModal(itemName) {
    const stock = getStock();
    const key = Object.keys(stock).find(k => stock[k].itemName === itemName);
    const item = stock[key];

    if (!item) return;

    document.getElementById('editItemOriginalName').value = key;
    document.getElementById('editCategory').value = item.category;
    document.getElementById('editItemName').value = item.itemName;
    document.getElementById('editMinStock').value = item.minStock;
    document.getElementById('editInitialStock').value = item.initialStock;
    document.getElementById('editTotalEntry').value = item.totalEntry;
    document.getElementById('editTotalExit').value = item.totalExit;

    editModal.style.display = 'block';
}

function closeEditModal() {
    editModal.style.display = 'none';
}

editForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const originalKey = document.getElementById('editItemOriginalName').value;
    const stock = getStock();

    if (!stock[originalKey]) return;

    // Update item
    stock[originalKey].category = document.getElementById('editCategory').value;
    stock[originalKey].itemName = document.getElementById('editItemName').value;
    stock[originalKey].minStock = parseInt(document.getElementById('editMinStock').value);
    stock[originalKey].initialStock = parseInt(document.getElementById('editInitialStock').value);
    stock[originalKey].totalEntry = parseInt(document.getElementById('editTotalEntry').value);
    stock[originalKey].totalExit = parseInt(document.getElementById('editTotalExit').value);

    saveStock(stock);
    closeEditModal();
    showToast('Malzeme güncellendi!', 'success');
    renderStockTable();
    updateStats();
});

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == editModal) {
        closeEditModal();
    }
}

// Make functions globally available
window.deleteStockItem = deleteStockItem;
window.openEditModal = openEditModal;
window.closeEditModal = closeEditModal;


// ===== Theme Toggle (Dark/Light Mode) =====
function initializeTheme() {
    const savedTheme = localStorage.getItem('isg_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('isg_theme', newTheme);
    updateThemeIcon(newTheme);
    
    showToast(newTheme === 'dark' ? 'Karanlık mod aktif' : 'Aydınlık mod aktif', 'success');
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// ===== Yıllık Analiz Fonksiyonları =====
let entryPieChart = null;
let exitPieChart = null;
let monthlyBarChart = null;

function initializeAnalysisPage() {
    populateYearSelector();
    updateAnalysisCharts();
}

function populateYearSelector() {
    const yearSelect = document.getElementById('analysisYear');
    const transactions = getTransactions();
    
    // Get unique years from transactions
    const years = new Set();
    const currentYear = new Date().getFullYear();
    years.add(currentYear); // Always include current year
    
    transactions.forEach(t => {
        const year = new Date(t.date).getFullYear();
        years.add(year);
    });
    
    // Sort years descending
    const sortedYears = Array.from(years).sort((a, b) => b - a);
    
    yearSelect.innerHTML = sortedYears.map(year => 
        `<option value="${year}" ${year === currentYear ? 'selected' : ''}>${year}</option>`
    ).join('');
}

function updateAnalysisCharts() {
    const selectedYear = parseInt(document.getElementById('analysisYear').value);
    const transactions = getTransactions();
    
    // Filter transactions by year
    const yearTransactions = transactions.filter(t => {
        const transYear = new Date(t.date).getFullYear();
        return transYear === selectedYear;
    });
    
    // Calculate totals
    const entryTransactions = yearTransactions.filter(t => t.type === 'entry');
    const exitTransactions = yearTransactions.filter(t => t.type === 'exit');
    
    const totalEntry = entryTransactions.reduce((sum, t) => sum + t.quantity, 0);
    const totalExit = exitTransactions.reduce((sum, t) => sum + t.quantity, 0);
    
    // Update summary cards
    document.getElementById('totalYearEntry').textContent = totalEntry;
    document.getElementById('totalYearExit').textContent = totalExit;
    document.getElementById('yearBalance').textContent = (totalEntry - totalExit >= 0 ? '+' : '') + (totalEntry - totalExit);
    document.getElementById('totalYearTransactions').textContent = yearTransactions.length;
    
    // Prepare data for pie charts
    const entryByCategory = {};
    const exitByCategory = {};
    
    entryTransactions.forEach(t => {
        entryByCategory[t.categoryName] = (entryByCategory[t.categoryName] || 0) + t.quantity;
    });
    
    exitTransactions.forEach(t => {
        exitByCategory[t.categoryName] = (exitByCategory[t.categoryName] || 0) + t.quantity;
    });
    
    // Prepare monthly data
    const monthlyData = {
        entry: new Array(12).fill(0),
        exit: new Array(12).fill(0)
    };
    
    yearTransactions.forEach(t => {
        const month = new Date(t.date).getMonth();
        if (t.type === 'entry') {
            monthlyData.entry[month] += t.quantity;
        } else {
            monthlyData.exit[month] += t.quantity;
        }
    });
    
    // Render charts
    renderEntryPieChart(entryByCategory);
    renderExitPieChart(exitByCategory);
    renderMonthlyBarChart(monthlyData);
    
    // Render top items
    renderTopItems(entryTransactions, exitTransactions);
}

function renderEntryPieChart(data) {
    const ctx = document.getElementById('entryPieChart').getContext('2d');
    
    if (entryPieChart) {
        entryPieChart.destroy();
    }
    
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    if (labels.length === 0) {
        entryPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Veri Yok'],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#e2e8f0']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
        return;
    }
    
    entryPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    '#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6',
                    '#06b6d4', '#ec4899', '#14b8a6', '#f97316', '#6366f1',
                    '#84cc16', '#a855f7'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12,
                        padding: 10,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} adet (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function renderExitPieChart(data) {
    const ctx = document.getElementById('exitPieChart').getContext('2d');
    
    if (exitPieChart) {
        exitPieChart.destroy();
    }
    
    const labels = Object.keys(data);
    const values = Object.values(data);
    
    if (labels.length === 0) {
        exitPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Veri Yok'],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#e2e8f0']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
        return;
    }
    
    exitPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    '#ef4444', '#f59e0b', '#3b82f6', '#22c55e', '#8b5cf6',
                    '#ec4899', '#06b6d4', '#14b8a6', '#f97316', '#6366f1',
                    '#84cc16', '#a855f7'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12,
                        padding: 10,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} adet (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function renderMonthlyBarChart(data) {
    const ctx = document.getElementById('monthlyBarChart').getContext('2d');
    
    if (monthlyBarChart) {
        monthlyBarChart.destroy();
    }
    
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 
                    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    
    monthlyBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Giriş',
                    data: data.entry,
                    backgroundColor: 'rgba(34, 197, 94, 0.8)',
                    borderColor: '#22c55e',
                    borderWidth: 1,
                    borderRadius: 4
                },
                {
                    label: 'Çıkış',
                    data: data.exit,
                    backgroundColor: 'rgba(239, 68, 68, 0.8)',
                    borderColor: '#ef4444',
                    borderWidth: 1,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function renderTopItems(entryTransactions, exitTransactions) {
    // Aggregate by item
    const entryByItem = {};
    const exitByItem = {};
    
    entryTransactions.forEach(t => {
        const key = `${t.itemName}|||${t.categoryName}`;
        entryByItem[key] = (entryByItem[key] || 0) + t.quantity;
    });
    
    exitTransactions.forEach(t => {
        const key = `${t.itemName}|||${t.categoryName}`;
        exitByItem[key] = (exitByItem[key] || 0) + t.quantity;
    });
    
    // Sort and get top 5
    const topEntry = Object.entries(entryByItem)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    const topExit = Object.entries(exitByItem)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    // Render entry list
    const entryContainer = document.getElementById('topEntryItems');
    if (topEntry.length === 0) {
        entryContainer.innerHTML = '<div class="empty-state"><p>Bu yıl giriş işlemi yok</p></div>';
    } else {
        entryContainer.innerHTML = topEntry.map(([key, value], index) => {
            const [itemName, categoryName] = key.split('|||');
            const rankClass = index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : '';
            return `
                <div class="top-item">
                    <span class="top-item-rank ${rankClass}">${index + 1}</span>
                    <div class="top-item-info">
                        <div class="top-item-name">${itemName}</div>
                        <div class="top-item-category">${categoryName}</div>
                    </div>
                    <span class="top-item-value entry">+${value}</span>
                </div>
            `;
        }).join('');
    }
    
    // Render exit list
    const exitContainer = document.getElementById('topExitItems');
    if (topExit.length === 0) {
        exitContainer.innerHTML = '<div class="empty-state"><p>Bu yıl çıkış işlemi yok</p></div>';
    } else {
        exitContainer.innerHTML = topExit.map(([key, value], index) => {
            const [itemName, categoryName] = key.split('|||');
            const rankClass = index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : '';
            return `
                <div class="top-item">
                    <span class="top-item-rank ${rankClass}">${index + 1}</span>
                    <div class="top-item-info">
                        <div class="top-item-name">${itemName}</div>
                        <div class="top-item-category">${categoryName}</div>
                    </div>
                    <span class="top-item-value exit">-${value}</span>
                </div>
            `;
        }).join('');
    }
}

function exportAnalysisReport() {
    const selectedYear = document.getElementById('analysisYear').value;
    const transactions = getTransactions();
    
    // Filter by year
    const yearTransactions = transactions.filter(t => {
        return new Date(t.date).getFullYear() === parseInt(selectedYear);
    });
    
    const entryTransactions = yearTransactions.filter(t => t.type === 'entry');
    const exitTransactions = yearTransactions.filter(t => t.type === 'exit');
    const entryTotal = entryTransactions.reduce((s, t) => s + t.quantity, 0);
    const exitTotal = exitTransactions.reduce((s, t) => s + t.quantity, 0);
    
    // Create workbook
    const wb = XLSX.utils.book_new();
    
    // Sheet 1: Özet
    const summaryData = [
        ['İSG DEPO YILLIK RAPOR - ' + selectedYear],
        [''],
        ['Rapor Tarihi:', new Date().toLocaleDateString('tr-TR')],
        [''],
        ['ÖZET BİLGİLER'],
        ['Toplam Giriş:', entryTotal, 'adet'],
        ['Toplam Çıkış:', exitTotal, 'adet'],
        ['Net Değişim:', entryTotal - exitTotal, 'adet'],
        ['Toplam İşlem:', yearTransactions.length, 'adet']
    ];
    const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
    summarySheet['!cols'] = [{ wch: 20 }, { wch: 15 }, { wch: 10 }];
    XLSX.utils.book_append_sheet(wb, summarySheet, 'Özet');
    
    // Sheet 2: Kategorilere Göre Giriş (Pasta Grafik Verisi)
    const entryByCategory = {};
    entryTransactions.forEach(t => {
        entryByCategory[t.categoryName] = (entryByCategory[t.categoryName] || 0) + t.quantity;
    });
    
    const entryPieData = [['Kategori', 'Giriş Miktarı', 'Yüzde (%)']];
    const entryTotalForPercent = Object.values(entryByCategory).reduce((a, b) => a + b, 0) || 1;
    Object.entries(entryByCategory).sort((a, b) => b[1] - a[1]).forEach(([cat, qty]) => {
        entryPieData.push([cat, qty, ((qty / entryTotalForPercent) * 100).toFixed(1) + '%']);
    });
    entryPieData.push(['', '', '']);
    entryPieData.push(['TOPLAM', entryTotal, '100%']);
    
    const entryPieSheet = XLSX.utils.aoa_to_sheet(entryPieData);
    entryPieSheet['!cols'] = [{ wch: 35 }, { wch: 15 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, entryPieSheet, 'Giriş - Kategori Dağılımı');
    
    // Sheet 3: Kategorilere Göre Çıkış (Pasta Grafik Verisi)
    const exitByCategory = {};
    exitTransactions.forEach(t => {
        exitByCategory[t.categoryName] = (exitByCategory[t.categoryName] || 0) + t.quantity;
    });
    
    const exitPieData = [['Kategori', 'Çıkış Miktarı', 'Yüzde (%)']];
    const exitTotalForPercent = Object.values(exitByCategory).reduce((a, b) => a + b, 0) || 1;
    Object.entries(exitByCategory).sort((a, b) => b[1] - a[1]).forEach(([cat, qty]) => {
        exitPieData.push([cat, qty, ((qty / exitTotalForPercent) * 100).toFixed(1) + '%']);
    });
    exitPieData.push(['', '', '']);
    exitPieData.push(['TOPLAM', exitTotal, '100%']);
    
    const exitPieSheet = XLSX.utils.aoa_to_sheet(exitPieData);
    exitPieSheet['!cols'] = [{ wch: 35 }, { wch: 15 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, exitPieSheet, 'Çıkış - Kategori Dağılımı');
    
    // Sheet 4: Aylık Veriler
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 
                    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    const monthlyEntry = new Array(12).fill(0);
    const monthlyExit = new Array(12).fill(0);
    
    yearTransactions.forEach(t => {
        const month = new Date(t.date).getMonth();
        if (t.type === 'entry') {
            monthlyEntry[month] += t.quantity;
        } else {
            monthlyExit[month] += t.quantity;
        }
    });
    
    const monthlyData = [['Ay', 'Giriş', 'Çıkış', 'Net']];
    months.forEach((month, i) => {
        monthlyData.push([month, monthlyEntry[i], monthlyExit[i], monthlyEntry[i] - monthlyExit[i]]);
    });
    monthlyData.push(['', '', '', '']);
    monthlyData.push(['TOPLAM', entryTotal, exitTotal, entryTotal - exitTotal]);
    
    const monthlySheet = XLSX.utils.aoa_to_sheet(monthlyData);
    monthlySheet['!cols'] = [{ wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 10 }];
    XLSX.utils.book_append_sheet(wb, monthlySheet, 'Aylık Veriler');
    
    // Sheet 5: En Çok Giriş Yapılan Malzemeler
    const entryByItem = {};
    entryTransactions.forEach(t => {
        const key = `${t.itemName}|||${t.categoryName}`;
        entryByItem[key] = (entryByItem[key] || 0) + t.quantity;
    });
    
    const topEntryData = [['Sıra', 'Malzeme', 'Kategori', 'Giriş Miktarı']];
    Object.entries(entryByItem)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .forEach(([key, qty], i) => {
            const [itemName, categoryName] = key.split('|||');
            topEntryData.push([i + 1, itemName, categoryName, qty]);
        });
    
    const topEntrySheet = XLSX.utils.aoa_to_sheet(topEntryData);
    topEntrySheet['!cols'] = [{ wch: 6 }, { wch: 35 }, { wch: 30 }, { wch: 15 }];
    XLSX.utils.book_append_sheet(wb, topEntrySheet, 'Top 10 Giriş');
    
    // Sheet 6: En Çok Çıkış Yapılan Malzemeler
    const exitByItem = {};
    exitTransactions.forEach(t => {
        const key = `${t.itemName}|||${t.categoryName}`;
        exitByItem[key] = (exitByItem[key] || 0) + t.quantity;
    });
    
    const topExitData = [['Sıra', 'Malzeme', 'Kategori', 'Çıkış Miktarı']];
    Object.entries(exitByItem)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .forEach(([key, qty], i) => {
            const [itemName, categoryName] = key.split('|||');
            topExitData.push([i + 1, itemName, categoryName, qty]);
        });
    
    const topExitSheet = XLSX.utils.aoa_to_sheet(topExitData);
    topExitSheet['!cols'] = [{ wch: 6 }, { wch: 35 }, { wch: 30 }, { wch: 15 }];
    XLSX.utils.book_append_sheet(wb, topExitSheet, 'Top 10 Çıkış');
    
    // Sheet 7: Tüm İşlemler
    const allTransactionsData = [['Tarih', 'İşlem Tipi', 'Kategori', 'Malzeme', 'Miktar', 'Teslim Alan', 'Not']];
    yearTransactions.forEach(t => {
        allTransactionsData.push([
            new Date(t.date).toLocaleDateString('tr-TR'),
            t.type === 'entry' ? 'GİRİŞ' : 'ÇIKIŞ',
            t.categoryName,
            t.itemName,
            t.quantity,
            t.person || '-',
            t.notes || '-'
        ]);
    });
    
    const allTransactionsSheet = XLSX.utils.aoa_to_sheet(allTransactionsData);
    allTransactionsSheet['!cols'] = [
        { wch: 12 }, { wch: 10 }, { wch: 30 }, { wch: 35 }, { wch: 10 }, { wch: 20 }, { wch: 30 }
    ];
    XLSX.utils.book_append_sheet(wb, allTransactionsSheet, 'Tüm İşlemler');
    
    // Download Excel file
    XLSX.writeFile(wb, `ISG_Depo_Yillik_Rapor_${selectedYear}.xlsx`);
    
    showToast(`${selectedYear} yılı Excel raporu indirildi!`, 'success');
}

// Make functions globally available
window.updateAnalysisCharts = updateAnalysisCharts;
window.exportAnalysisReport = exportAnalysisReport;

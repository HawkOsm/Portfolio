// Turkish overrides for the data in src/constants/index.js. Anything not listed here
// (titles, links, tech stacks, logos, numbers) is shared with English. Proper names such as
// product, library and project names are intentionally left untranslated.

export const hud = [
    { label: 'Durum', value: 'Açık · Oca 2027' },
    { label: 'Konum', value: 'İzmir, TR / uzaktan' },
    { label: 'Odak', value: 'Yapay Zekâ Teknolojileri · MLOps' },
];

export const projects = {
    kamikaze: {
        tag: 'Otonom Sistemler',
        role: 'Otonom sistemler ve yazılım geliştirici',
        short: 'ArduPilot + Jetson üzerinde görüntü güdümlü son dalış.',
        body: 'Yerdeki bir hedefe otonom olarak dalan bir yarışma İHA’sı için, 15 kişilik bir ekiple geliştirilen uçuş yazılımı. Uçaktaki Jetson üzerinde çalışan çift modelli bir YOLO11 hattı hedefe kilitleniyor, ardından bir QR okuyucu dalış sırasında vuruşu doğruluyor. TEKNOFEST 2026 Savaşan İHA’da 1.032 başvuru yapan takım arasından finale kalan 42 takım içinde 17. oldu.',
        problem: 'Savaşan İHA yarışmasında hava aracı, döngüde pilot olmadan hareketli bir yer hedefini bulmalı, kilitlenmeli ve üzerine dalmalı — kararsız bir veri bağlantısı altında, birkaç saniyelik kullanılabilir yaklaşma süresiyle ve ikinci bir deneme hakkı olmadan.',
        built: [
            'ArduPilot ve MAVLink üzerinde görev durum makinesi: kalkış, arama deseni, hedefe kilitlenme, son dalış, iptal et ve yüksel.',
            'Uçaktaki Jetson üzerinde iki aşamalı YOLO11 tespiti — hedefi bulmak için geniş bir model, dalış boyunca takip için dar bir model.',
            'Skor sayılmadan önce dalış sırasında doğru hedefi doğrulayan QR onay adımı.',
            'Raspberry Pi üzerinde GStreamer ile düşük gecikmeli video ve telemetri ile tekrar oynatma için Docker’lı yer istasyonu.',
            'Görev mantığını gerçek uçuşlardan önce Gazebo + ArduPilot SITL’de (Mini Talon modeli, QR hedefli bir dünya) test etti, ardından simülasyonun gerçek H-kuyruk uçaktan nerede ayrıştığını belgeledi — 1.585 parametrenin 902’si farklı.',
            'Gerçek dalışta yarışmanın vuruş kontrolünü geçti.',
            '2026-07-27’de 19 gerçek QR dalışı ölçüldü (ArduPlane 4.6.3): ortanca 8,5 sn, 90 m yükseklik kaybı, 10,9 m/sn ortalama alçalma hızı, en dik pikaj −42,6°. TECS_SPDWEIGHT’i 0 yapmak, 1’e kıyasla alçalma hızını kabaca ikiye katladı.',
        ],
        videoLabel: 'Gerçek bir otonom QR dalışının yer istasyonu ekran kaydı.',
    },
    'clevo-linux-fixes': {
        tag: 'Açık Kaynak',
        role: 'Yazar ve bakımcı',
        short: 'Linux’ta Clevo/TONGFANG dizüstü bilgisayarlar için saha rehberleri.',
        body: 'Clevo/TONGFANG tabanlı dizüstü bilgisayarlarda Linux çalıştırmak için resmî olmayan saha rehberleri — Monster, TUXEDO ve XMG aynı kasaların üzerine kurulu. Her çözüm gerçek donanımda karşılaşıldı, teşhis edildi ve doğrulandı: rastgele donmalar, Bluetooth yazılımı çökmeleri, çekirdek güncellemesinden sonra NVIDIA, çalışmayan klavye aydınlatması ve dokunmatik yüzey, termal kısıtlama. Monster Notebook Linux Fixes olarak başladı ve tek bir markayı aşınca yeniden adlandırıldı.',
        problem: 'Monster dizüstü bilgisayarlar, Linux’un kutudan çıkar çıkmaz iyi desteklemediği, yeniden markalanmış Clevo donanımıyla gelir: klavye aydınlatması ve dokunmatik yüzey bir sürücü yamasına kadar ölüdür, makine günlük kaydı olmadan rastgele donar, Bluetooth yazılımı çöker, ayrık ekran kartı hiç boşta kalmaz. Çözümler artık yanıt vermeyen forum başlıklarına dağılmış durumda.',
        built: [
            'Semptom başına adım adım rehberler; kopyala-yapıştır tavsiye yerine gerçek teşhisten yazıldı.',
            'Şeylerin neden bozulduğunu anlatan açıklamalar — PCIe ASPM üzerinden makineyi donduran DRAM’siz bir NVMe ve tuxedo-drivers’ın Monster donanımını reddeden DMI kontrolü.',
            'Referans tabloları — Windows’tan Linux’a sürücü haritası, donanım tabloları, EC kayıt haritaları ve tccd profil tanımları.',
            'Monster TULPAR T6 V2.1 AI Creator (Ubuntu 26.04 ve Hyprland’lı Arch) ve ABRA A5 V20.2 (Ubuntu 22.04) üzerinde doğrulandı; çözümler aynı kasaları kullanan TUXEDO, XMG/Schenker ve System76 makinelerine de uygulanabilir.',
        ],
    },
    'senior-app': {
        tag: 'Web Uygulaması · Takım Projesi',
        role: 'Takım Kaptanı',
        short: 'Tüm dersin üzerinde çalıştığı araçta bir bitirme projesi takımını koordine etmek.',
        body: 'Yaşar Üniversitesi’nde SE3318 dersi için ~10 kişilik bir takımla geliştirildi. Takım kaptanı olarak her özelliği Backend/Frontend/QA alt görevlerine böldüm, deponun issue’larının 138’ini açtım ve 28 pull request içinde 631 commit’in 148’ini yazdım. İlk haftalarda model uyuşmazlıklarını ve eksik modülleri tek tek yamaladıktan sonra kimlik doğrulama ve rol mimarisinin baştan yazılması gerektiğini fark ettim — onu yeniden tasarlayıp uyguladım, ardından projenin veri akış diyagramlarının ve API dokümantasyonunun çoğunu yazdım. Ayrıca yapay zekâ orkestrasyon katmanını geliştirdim: bulut maliyeti olmadan varsayılan olarak yerel bir Ollama modelini kullanan ve tek bir ortam değişkeniyle Anthropic’in Claude API’sine geçen, sağlayıcıdan bağımsız bir servis.',
        problem: 'Üniversite bitirme dersleri onlarca takımı JIRA, GitHub ve elektronik tablolarla belge tesliminde takip eder. Koordinatörlerin not rubriklerini bir kez belirlediği, danışmanların sprint ilerlemesini canlı gördüğü ve yapay zekânın bir pull request’in gerçekten incelenip incelenmediğini ya da sadece onaylanıp geçildiğini işaretlediği tek bir platforma ihtiyacımız vardı.',
        built: [
            'Takım kaptanı olarak her özelliği 138 issue ve 28 pull request boyunca Backend/Frontend/QA alt görevlerine böldüm.',
            'İlk yamalı yapı sürdürülemez çıkınca kimlik doğrulama ve role dayalı arayüz mimarisini sıfırdan yeniden yazdım.',
            'Yapay zekâ destekli kod inceleme doğrulaması için sağlayıcıdan bağımsız bir yapay zekâ servisi geliştirdim — varsayılan olarak yerel Ollama, ortam değişkeni ile Anthropic Claude.',
            'Projenin veri akış diyagramlarını ve API dokümantasyonunun büyük kısmını yazdım.',
        ],
    },
    blackbox: {
        tag: 'Sistemler · Linux',
        role: 'Tek başıma — tasarım ve geliştirme',
        short: 'Makinemde neyin ne zaman bozulduğunun kanıtını saklayan, sürekli açık bir hata kaydedici.',
        body: 'Bir Linux masaüstünde sürekli çalışan ve bir şeyler ters gittikten sonra ihtiyacım olanı kaydeden küçük bir Rust servisi: çökmeler, hata günlükleri, başarısız girişler, paket güncellemeleri, donmalar, sistem yükü, güç tüketimi ve sıcaklıklar. Yerel bir GTK uygulaması bu anlardan herhangi birini o sırada olan her şeyle birlikte gösterir. systemd kullanan her Linux dağıtımında çalışır, ki bu neredeyse hepsi demektir; tek bir CPU çekirdeğinin %0,14’ünü ve yaklaşık 6 MB bellek kullanır, bu yüzden çalıştığını hiç fark etmem.',
        sections: [
            {
                title: 'Problem',
                text: 'Bir masaüstü donduğunda ya da bir program çöktüğünde kanıt; systemd günlüğüne, audit günlüğüne, coredump’lara ve paket yöneticisinin günlüğüne dağılmış durumdadır. Aramaya gittiğimde bir kısmı çoktan silinmiş olur ve hiçbir şey geri kalanını zamanda hizalamaz. “Saat 14:02’de ne oldu ve başka ne oluyordu?” sorusu bir saatlik grep demekti. Bunun tek bir tıklama olmasını istedim.',
            },
            {
                title: 'Nasıl çalışır',
                items: [
                    ['Altı kaynak, tek yazıcı.', 'Çekirdekten süreç çıkışları; /proc, sysfs ve nvidia-smi’den sistem yükü, güç ve sıcaklıklar; journald; auditd; paket yöneticisinin geçmişi (pacman, apt, dnf veya zypper) ve bir önceki açılışın son günlük kaydı. Her biri kendi iş parçacığında, çökerse yeniden başlatan bir gözetmen altında çalışır ve bulduğunu tek bir yazıcı iş parçacığına iletir; yazıcı kuyruktaki her şeyi tek bir işlemde yazar, böylece yoğun bir patlama satır başına değil, bir disk senkronizasyonuna mal olur.'],
                    ['Zaman çizelgesi indeksi.', 'Her önemli olay, tam kaydına işaret eden, zamana göre indekslenmiş tek bir tabloda bir satır alır; böylece altı kaynak boyunca “±2 dakika içindeki her şey” altı tablo üzerinde bir join değil, tek bir indekste aralık taramasıdır.'],
                    ['Salt okunur görüntüleyici.', 'Yalnızca penceresi açıkken çalışan bir GTK4/libadwaita uygulaması. Herhangi bir olayı etrafındaki CPU/bellek/GPU grafiğiyle, çökmenin yığın izi, önceki haftanın paket güncellemeleri ve o penceredeki diğer tüm olaylarla birlikte gösterir.'],
                ],
            },
            {
                title: 'Mühendislik kararları',
                items: [
                    ['Filtrelemeyi Rust’ta değil çekirdekte yap.', 'Her süreç çıkışını kaydetmek saniyede yaklaşık 100 gürültü olayı demek olurdu. Netlink soketindeki klasik bir BPF programı fork’ları, iş parçacığı çıkışlarını ve temiz çıkışları çekirdek kuyruğa almadan önce eler. Bir birim testi, filtreyi küçük bir BPF yorumlayıcısıyla 65.536 olası çıkış durumunun tamamında çalıştırır ve Rust kuralıyla uyuştuğunu doğrular. 100 ms’lik gruplamayla birlikte uyanmalar saniyede 98–136’dan 8,5’e düştü.'],
                    ['Hızlı değil, dayanıklı.', 'SQLite synchronous=FULL ile çalışır. Varsayılanda son ~30 saniye sayfa önbelleğinde kalır ve donmuş bir makineyle birlikte yok olur; bir uçuş kaydedicinin var olma amacı tam olarak bu saniyelerdir. Her ~10 saniyede bir yazmada ekstra fsync fark edilir bir maliyet getirmez.'],
                    ['Donmayı olduktan sonra kaydet.', 'Makine donmuşken hiçbir şey yazamaz. Bu yüzden her açılışta Blackbox bir önceki açılışın son günlük kaydını okur: temiz bir kapanış her zaman “Journal stopped” ile biter, bunun dışındaki her şey günlüğün durduğu anda temiz olmayan bir son olarak saklanır. Makinemde kaydettiği 90 açılışın 2’si bu şekilde bitti.'],
                    ['Kaydı asla engellemeyen boyut sınırı.', 'Veritabanı 50 GB’lık bir halka tamponudur. En eski veriyi tek bir ifadeyle silmek yazıcıları 1,2 saniye durdurdu; bu yüzden kırpma 1.000’er satırlık parçalar halinde siler ve aralarda kilidi bırakır: kırpma sırasındaki en kötü yazma 7,4 ms’ye düştü. Bunun testi gerçek bir hatayı da yakaladı: uzak gelecekte damgalanmış tek bir satır, kırpmanın tüm gerçek satırları silmesine yol açıyordu.'],
                    ['Artık var olmayan süreçlere isimler.', 'Bir çıkış olayı isim taşımaz ve süreç geldiğinde genellikle /proc’tan çoktan kaybolmuştur. Toplayıcı, exec olaylarından beslenen bir pid-isim tablosu tutar ve çökmeleri sonradan, çalıştırılabilir dosya yolunu ve yığın izini de veren systemd-coredump’tan adlandırır.'],
                    ['Tek bir dağıtıma bağlı değil.', 'pacman, apt, dnf ve zypper paket geçmişlerinin her biri küçük bir trait’in arkasında durur ve dağıtımlar arasında farklı olan her şey tek bir dosyada yaşar. CI, kaydediciyi Arch, Debian, Ubuntu, Fedora, Rocky Linux ve openSUSE konteynerlerinde derler ve test eder, her birinde bir paket kurar ve kaydedicinin onu o dağıtımın gerçek geçmişinde bulduğunu doğrular.'],
                ],
            },
            {
                title: 'Ölçülenler',
                items: [
                    ['%0,14', 'tek bir CPU çekirdeğinin, journalctl ve tail yardımcıları dahil tüm servis için.'],
                    ['~6 MB', 'özel bellek ve saniyede 10’un altında uyanma.'],
                    ['~1 MB', 'mevcut olay hızında günlük veritabanı büyümesi.'],
                    ['82 test', 'her günlük formatının ayrıştırıcılarını, çıkış kuralını, çekirdek filtresini, çökme adlandırmayı, açılış sonlarını, audit günlüğü devamını, yazma yolunu ve halka tamponu kırpmasını kapsar; ayrıca gerçek ikili dosyanın uçtan uca testleri ve eşzamanlı yazmalar altında kırpma için bir stres testi vardır.'],
                ],
            },
        ],
        imageAlt: 'Blackbox görüntüleyici: solda kaydedilen sorunlar ve her birinin 24 saatlik mini grafiği; sağda günün özeti — olaylar, kullanım, sıcaklık ve güç tek bir zaman ekseninde — ve çalışan süreçler için duraklat, görevi bitir ve zorla sonlandır.',
    },
    'rsvp-reader': {
        tag: 'Web, Masaüstü ve Android Uygulaması',
        role: 'Tek başıma — tasarım ve geliştirme',
        short: 'Kelime kelime, hızlı tempolu hızlı okuma.',
        body: 'Metni belirlenen bir hızda kelime kelime gösteren bir hızlı okuma uygulaması; gözlerinizi sayfa boyunca gezdirmeden daha hızlı okumanızı sağlar. Üç ayrı uygulama olarak başladı — masaüstünde PyQt6, bir JavaScript web uygulaması ve bir Kotlin Android uygulaması — ve v0.2 hepsini hepsine yayımlanan tek bir TypeScript kod tabanında yeniden yazdı.',
        problem: 'Okuma zamanının çoğu anlamaya değil, gözleri hareket ettirmeye ve satırları yeniden okumaya gider. Hızlı Seri Görsel Sunum (RSVP) göz hareketini tamamen ortadan kaldırır — ancak mevcut araçlar yerinizi ve kütüphanenizi kaybeden tarayıcı oyuncaklarıdır.',
        built: [
            '50–1.500 WPM aralığında bir RSVP motoru: uzun kelimeleri ve noktalamadan önceki kelimeleri ekranda daha uzun tutar ve gerçek yazı tipi ölçümleriyle her kelimeyi odak harfine hizalar, böylece göz hiç hareket etmez.',
            'TXT, Markdown, PDF ve EPUB dosyalarını açar; arka plan işçisinde ayrıştırıldığı için büyük bir kitapta okuyucu asla donmaz.',
            'Mevcut kelimenin vurgulandığı ve metnin seçilebildiği gerçek PDF sayfasını gösteren ya da metin ve EPUB dosyalarını sayfalara yeniden akıtan bir kitap modu; herhangi bir kelimeye tıklayıp oradan devam edebilirsiniz.',
            'Her kitaptaki yerinizi hatırlayan ve devam etmeyi öneren bir IndexedDB kütüphanesi — tamamen yerel, hesap gerektirmez ve kitaplarınız cihazdan hiç çıkmaz.',
            'Tek bir React kod tabanı; kurulabilir çevrimdışı web uygulaması, Tauri ile masaüstü yükleyicileri ve Capacitor ile Android uygulaması olarak yayımlanır. İndirme boyutları Windows’ta 55,5 MB’tan 2,7 MB’a, macOS’ta 49,8 MB’tan 7,3 MB’a ve Android’de 17,1 MB’tan 5 MB’a düştü.',
            'v0.3 iki deneysel, varsayılan olarak kapalı özellik ekler: okuma konumunuzu, raflarınızı ve notlarınızı kendi Google Drive’ınızdaki gizli bir klasör üzerinden eşitlemek ve bir pasaj üzerine not almak.',
            'Bir sürüm etiketi göndermek GitHub Actions’ta Linux, Windows, macOS ve Android için ayrı birer indirme üretir; her push’ta 184 test çalışır.',
        ],
    },
};

export const education = {
    period: 'EYL 2024 — DEVAM EDİYOR',
    role: 'B.Sc. Yazılım Mühendisliği — GNO 3,45 / 4,00',
    notes: 'Şu anda 3. sınıf lisans öğrencisiyim — mezuniyet Haziran 2028’de bekleniyor.',
};

export const certificates = {
    'gdg-core-team': { title: 'Çekirdek Ekip Üyesi — GDG on Campus Yaşar Üniversitesi', date: 'EKİ 2026' },
    'teknofest-2026': { title: 'TEKNOFEST 2026 Savaşan İHA Yarışması', date: 'EYL 2026' },
    'yasar-efes': { title: 'EFES-2026 Savunma Projesi Yarışması', org: 'Yaşar Üniversitesi — Rektörlük yazısı', date: 'HAZ 2026' },
    ai4purpose: { org: 'Interreg NEXT MED · İzmir Katip Çelebi Üniversitesi', date: 'OCA — ŞUB 2026' },
    'thm-ethical-hacking': { date: 'TEM 2025' },
};

export const experience = {
    1: {
        period: 'ARA 2025 — AĞU 2026',
        role: 'Otonom Sistemler ve Yazılım Geliştirici',
        notes: [
            'Otonom kamikaze görev mantığı — kalkış, seyrüsefer ve yer hedeflerine görüntü güdümlü son dalışlar — ArduPilot ve MAVLink üzerinde.',
            'Yüksek irtifa hava görüntülerinde hedef tespitini destekleyen nesne algılama hatları — YOLO v8/v11, SAHI, iğne deliği kamera modelleri.',
            'Raspberry Pi üzerinde GStreamer ile düşük gecikmeli video ve donanım hızlandırma; yer istasyonu için Docker + Portainer.',
            'Gerçek uçuşlardan önce görevin Gazebo ve ArduPilot SITL ile simülasyonu — ve simüle edilen V-kuyruk uçağın gerçek H-kuyruk uçaktan nerede ayrıştığının yazılı bir dökümü.',
        ],
    },
    2: {
        period: 'OCA 2025 — EKİ 2025',
        role: 'Yazılım Geliştirici — Stajyer / Prototip',
        notes: [
            'OpenCV ve YOLOv5 ile endüstriyel nesne algılama için bilgisayarlı görü prototipleri.',
            'Özel etiketlenmiş veri kümeleri üzerinde model eğitimi ve hiperparametre optimizasyonu.',
            'Gerçek zamanlı veri işleme hatlarında performans profili çıkarma.',
        ],
    },
};

export const instrumentGroups = {
    Languages: 'Diller',
    'AI Stack': 'Yapay Zekâ Yığını',
    'Systems & Ops': 'Sistemler ve Operasyon',
};

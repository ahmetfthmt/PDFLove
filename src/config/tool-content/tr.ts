/**
 * English tool content for SEO
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * English tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentTr: Record<string, ToolContent> = {
  // ==================== POPULAR TOOLS ====================
  'pdf-multi-tool': {
    title: 'PDF Çok Amaçlı Araç',
    metaDescription: 'Hepsi bir arada PDF düzenleyici: sayfaları birleştirin, bölün, düzenleyin, silin, döndürün ve çıkarın.',
    keywords: ['pdf çok amaçlı araç', 'pdf düzenleyici', 'pdf birleştirme', 'pdf bölme', 'pdf düzenleme', 'hepsi bir arada pdf'],
    description: `
      <p>PDF Çok Amaçlı Araç, tüm PDF sayfa yönetimi görevleriniz için kapsamlı çözümünüzdür. Bu güçlü hepsi bir arada araç, birden fazla PDF işlemini tek bir sezgisel arayüzde birleştirerek size zaman ve emek tasarrufu sağlar.</p>
      <p>İster birden fazla belgeyi birleştirmeniz, ister büyük bir PDF'yi daha küçük dosyalara bölmeniz, sayfaları yeniden düzenlemeniz, istenmeyen içeriği silmeniz, sayfaları döndürmeniz veya belirli bölümleri çıkarmanız gereksin; bu araç, farklı uygulamalar arasında geçiş yapmadan her şeyi halleder.</p>
      <p>Tüm işlemler doğrudan tarayıcınızda gerçekleşir, böylece belgeleriniz gizli ve güvende kalır. Hiçbir dosya herhangi bir sunucuya yüklenmez.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı yükleme alanına sürükleyip bırakın veya cihazınızdaki dosyaları seçmek için tıklayın.' },
      { step: 2, title: 'İşleminizi Seçin', description: 'Mevcut işlemlerden birini seçin: birleştirme, bölme, düzenleme, sayfaları silme, döndürme, boş sayfalar ekleme veya sayfa çıkarma.' },
      { step: 3, title: 'Seçenekleri Yapılandırın', description: 'Sayfa aralıkları, döndürme açıları veya birleştirme sırası gibi seçtiğiniz işleme özgü ayarları yapın.' },
      { step: 4, title: 'İşleyin ve İndirin', description: 'İşlem düğmesine tıklayın ve işlem tamamlandığında düzenlenmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Belge Hazırlama', description: 'Gereksiz sayfaları kaldırarak, içeriği yeniden sıralayarak ve birden fazla dosyayı birleştirerek belgeleri teslim edilmeye hazır hale getirin.', icon: 'file-check' },
      { title: 'Rapor Montajı', description: 'Birden fazla rapor bölümünü birleştirin, kapak sayfaları ekleyin ve bölümleri tek bir profesyonel belge haline getirin.', icon: 'book-open' },
      { title: 'Arşiv Yönetimi', description: 'Büyük arşiv dosyalarını yönetilebilir bölümlere ayırın, ilgili sayfaları çıkarın ve geçmişe dönük belgeleri yeniden düzenleyin.', icon: 'archive' },
    ],
    faq: [
      { question: 'Aynı anda kaç PDF işleyebilirim?', answer: 'Cihazınızın performansına bağlı olarak aynı anda 10 adede kadar PDF yükleyebilir ve işleyebilirsiniz.' },
      { question: 'Yer işaretlerim korunacak mı?', answer: 'Evet, PDF\'leri birleştirirken mevcut yer işaretleri korunur ve isteğe bağlı olarak birleşik bir yer işareti yapısında birleştirilebilir.' },
      { question: 'Sayfa sınırı var mı?', answer: 'Kesin bir sayfa sınırı yoktur, ancak çok büyük dosyaların işlenmesi tarayıcı belleğine bağlı olarak daha uzun sürebilir.' },
    ],
  },

  'merge-pdf': {
    title: 'PDF Birleştir',
    metaDescription: 'Birden fazla PDF dosyasını tek bir belgede birleştirin. Sürükle-bırak yöntemiyle dosyaları sıralayın ve anında birleştirin.',
    keywords: ['pdf birleştir', 'pdf dosyalarını birleştir', 'pdf ekle', 'pdf merger', 'pdf birleştirme aracı'],
    description: `
      <p>PDF Birleştir, birden fazla PDF belgesini hızlı ve kolay bir şekilde tek bir dosyada birleştirmenizi sağlar. Raporları bir araya getiriyor, taranmış belgeleri birleştiriyor veya bir sunum hazırlıyor olun, bu araç süreci pürüzsüz hale getirir.</p>
      <p>Dosyalarınızı yükleyin, sürükle-bırak yöntemiyle dilediğiniz sıraya dizin ve tek bir bütünleşik belge halinde birleştirin. Araç, orijinal dosyalarınızın kalitesini korur ve isteğe bağlı olarak her bir kaynak belgedeki yer işaretlerini muhafaza edebilir.</p>
      <p>Tüm birleştirme işlemi yerel olarak tarayıcınızda gerçekleşir, böylece hassas belgelerinizin gizliliği tam olarak korunur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF Dosyalarını Yükleyin', description: 'Birden fazla PDF dosyasını yükleme alanına sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'Sıralamayı Ayarlayın', description: 'Dosyaları dilediğiniz sıraya koymak için sürükleyip bırakın.' },
      { step: 3, title: 'Birleştir ve İndir', description: 'Tüm dosyaları birleştirmek için Birleştir düğmesine tıklayın ve ardından birleşmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Raporları Birleştirin', description: 'Aylık veya üç aylık raporları, daha kolay dağıtım ve arşivleme için tek bir yıllık belgede birleştirin.', icon: 'file-text' },
      { title: 'Portfolyo Hazırlayın', description: 'Birden fazla proje belgesini, sertifikayı veya çalışma örneğini profesyonel bir portfolyoda bir araya getirin.', icon: 'briefcase' },
      { title: 'Faturaları Toplayın', description: 'Muhasebe ve kayıt tutma amaçları için birden fazla fatura veya makbuzu tek bir belgede birleştirin.', icon: 'receipt' },
    ],
    faq: [
      { question: 'Kaç PDF birleştirebilirim?', answer: 'Sistem kaynaklarınıza bağlı olarak 100 adede kadar dosyayı tek seferde birleştirebilirsiniz.' },
      { question: 'Kalite kaybı olur mu?', answer: 'Hayır, birleştirme işlemi herhangi bir sıkıştırma yapmadan orijinal kaliteyi korur.' },
      { question: 'Şifreli PDF\'leri birleştirebilir miyim?', answer: 'Şifre korumalı PDF\'lerin önce kilidinin açılması gerekir. Birleştirmeden önce "PDF Şifre Çöz" aracımızı kullanabilirsiniz.' },
    ],
  },

  'rotate-custom': {
    title: 'Özel Dereceyle Döndür',
    metaDescription: 'PDF sayfalarını dilediğiniz açıyla döndürün. Taranmış belgeleri düzeltmek için hassas özel döndürme.',
    keywords: ['pdf döndürme özel açı', 'pdf düzeltme', 'eğrilik düzeltme', 'pdf açı ayarı'],
    description: `
      <p>Özel Dereceyle Döndür, PDF sayfa yönlendirmesi üzerinde size tam kontrol sağlar. Sadece 90 derecelik artışları destekleyen standart döndürme araçlarının aksine, bu araç sayfaları herhangi bir spesifik açıyla döndürmenize olanak tanır.</p>
      <p>Tarayıcıya hafifçe yamuk beslenen taranmış belgeleri düzeltmek veya diyagramları tam istenen açıya getirmek için mükemmeldir. Münferit sayfaları düzeltebilir veya tüm belgeye aynı döndürme açısını uygulayabilirsiniz.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda gerçekleşir, böylece belgelerinizin gizliliği korunurken mükemmel hizalamayı elde edersiniz.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF Yükleyin', description: 'Döndürülmesi gereken sayfaları içeren PDF dosyasını yükleyin.' },
      { step: 2, title: 'Döndürme Açısını Ayarlayın', description: 'Her sayfa için tam döndürme derecesini girin veya tüm sayfalar için toplu bir açı belirleyin.' },
      { step: 3, title: 'Önizleyin ve Düzeltin', description: 'Sayfaların tam olarak hizalandığından emin olmak için gerçek zamanlı önizlemeyi kullanın.' },
      { step: 4, title: 'Uygula ve İndir', description: 'Değişiklikleri uygulamak ve düzeltilmiş PDF\'inizi indirmek için Döndür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Taranmış Belgeler', description: 'Tarayıcıya belirli bir açıyla giren taranmış sayfaları düzeltin.', icon: 'scan' },
      { title: 'Teknik Çizimler', description: 'Teknik diyagramların ve planların yönünü hassasiyetle ayarlayın.', icon: 'ruler' },
      { title: 'Yaratıcı Mizanpajlar', description: 'Sayfaları belirli sanatsal açılara döndürerek benzersiz tasarımlar oluşturun.', icon: 'pen-tool' },
    ],
    faq: [
      { question: 'Ondalıklı (örn. 45.5 derece) döndürebilir miyim?', answer: 'Şu anda tam sayı derecelerini destekliyoruz ancak ondalıklı hassasiyet üzerinde çalışıyoruz.' },
      { question: 'İçerik etkilenir mi?', answer: 'İçerik görsel olarak döndürülür. Sayfa boyutu, döndürülen içeriğe sığacak şekilde otomatik olarak ayarlanır.' },
      { question: 'Sadece bir sayfayı döndürebilir miyim?', answer: 'Evet, diğerlerini değiştirmeden dilediğiniz sayfaya özel bir açı verebilirsiniz.' },
    ],
  },

  'grid-combine': {
    title: 'Izgara Birleştirme',
    metaDescription: 'Birden fazla PDF dosyasını esnek bir ızgara düzeniyle tek sayfalarda birleştirin. Sayfa başına 2, 4, 6, 9 veya daha fazla PDF yerleştirin.',
    keywords: ['ızgara birleştirme', 'pdf ızgara', 'pdf kolaj', 'birden çok pdf tek sayfa', 'pdf n-up', 'pdf grid'],
    description: `
      <p>Izgara Birleştirme aracı, ayrı PDF dosyalarını tek bir sayfada bir araya getirmenin benzersiz bir yolunu sunar. Sayfaları sadece arka arkaya ekleyen standart "PDF Birleştir" aracından farklı olarak, Izgara Birleştirme birden çok dosyayı alır ve bunları özelleştirilebilir bir ızgara düzeninde yan yana yerleştirir.</p>
      <p>2x1, 2x2, 3x3 gibi çeşitli ızgara yapıları arasından seçim yapabilirsiniz. Bu, birden çok belgeyi karşılaştırmak, farklı kaynaklardan el ilanları oluşturmak veya birkaç dosyanın kompakt versiyonlarını yazdırmak için mükemmeldir.</p>
      <p>Sayfa boyutu, yönlendirme, kenar boşlukları ve çerçeveler üzerinde tam kontrol sahibi olun. Tüm işlemler maksimum gizlilik için yerel olarak tarayıcınızda yapılır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF Dosyalarını Yükleyin', description: 'Birleştirmek istediğiniz iki veya daha fazla PDF dosyasını yükleyin. Onları dilediğiniz sıraya koyabilirsiniz.' },
      { step: 2, title: 'Izgara Düzenini Seçin', description: 'İstediğiniz ızgarayı seçin (örn. sayfa başına 4 dosya için 2x2, 9 dosya için 3x3).' },
      { step: 3, title: 'Görünümü Özelleştirin', description: 'Sayfa boyutu (A4, Letter), yönlendirme, öğeler arası boşluk ve kenarlık gibi ayarları yapın.' },
      { step: 4, title: 'Birleştir ve İndir', description: 'Yeni belgenizi oluşturmak için "PDF\'leri Birleştir"e tıklayın ve sonucu indirin.' },
    ],
    useCases: [
      { title: 'Görsel Karşılaştırma', description: 'Kolay karşılaştırma için bir tasarımın farklı versiyonlarını tek bir sayfada yan yana yerleştirin.', icon: 'layout-grid' },
      { title: 'El İlanı Yazdırma', description: 'Baskı maliyetlerinden tasarruf etmek için birden fazla kısa belgeyi veya slaydı tek bir kağıda sığdırın.', icon: 'printer' },
      { title: 'Portfolyo Sunumu', description: 'Birden çok proje dosyasını temiz ve düzenli bir ızgara görünümünde sergileyin.', icon: 'image' },
    ],
    faq: [
      { question: 'N-Up aracından farkı nedir?', answer: 'N-Up, TEK bir PDF\'deki sayfaları alır; Izgara Birleştirme ise BİRDEN ÇOK FARKLI PDF dosyasını aynı sayfaya yerleştirir.' },
      { question: 'Kaç dosyayı birleştirebilirim?', answer: 'Tarayıcı belleğinize bağlı olarak 100 dosyaya kadar birleştirme yapabilirsiniz.' },
      { question: 'Kenarlık ekleyebilir miyim?', answer: 'Evet, her bir PDF dosyasının etrafına kenarlık ekleyebilir ve rengini özelleştirebilirsiniz.' },
    ],
  },

  'split-pdf': {
    title: 'PDF Böl',
    metaDescription: 'PDF dosyalarını birden fazla belgeye bölün. Belirli sayfaları çıkarın veya sayfa aralıklarına göre bölün.',
    keywords: ['pdf böl', 'pdf ayırma', 'sayfa çıkar', 'pdf splitter', 'pdf parçalama'],
    description: `
      <p>PDF Böl, tek bir PDF belgesini birden fazla küçük dosyaya ayırmanıza olanak tanır. Bu, belirli bölümleri çıkarmak, birleştirilmiş belgeleri ayırmak veya çok sayfalı bir PDF'den bağımsız dosyalar oluşturmak için mükemmeldir.</p>
      <p>Belirli sayfa aralıklarına göre bölebilir, tek tek sayfaları çıkarabilir veya belgeyi düzenli aralıklarla bölebilirsiniz. Araç, sayfalarınızın görsel bir önizlemesini sunarak tam olarak neye ihtiyacınız olduğunu seçmenizi kolaylaştırır.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Bölmek istediğiniz PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Bölme Yöntemini Seçin', description: 'Nasıl bölmek istediğinizi seçin: sayfa aralıklarına göre, belirli sayfaları çıkararak veya düzenli aralıklarla bölerek.' },
      { step: 3, title: 'Sayfa Aralıklarını Tanımlayın', description: 'Çıkarmak istediğiniz sayfa numaralarını veya aralıklarını girin (örn. 1-5, 8, 10-15).' },
      { step: 4, title: 'Böl ve İndir', description: 'Yeni PDF dosyalarınızı oluşturmak için Böl düğmesine tıklayın ve bunları tek tek veya ZIP arşivi olarak indirin.' },
    ],
    useCases: [
      { title: 'Bölümleri Çıkarın', description: 'Bir kitabı veya kılavuzu daha kolay okumak veya paylaşmak için bağımsız bölümlere ayırın.', icon: 'book' },
      { title: 'Birleştirilmiş Taramaları Ayırın', description: 'Toplu taranmış bir belgeyi her bir orijinal belge için ayrı dosyalara bölün.', icon: 'copy' },
      { title: 'Sunum Sayfaları Oluşturun', description: 'Odaklanmış bilgi notları oluşturmak için bir sunumdan belirli slaytları veya sayfaları çıkarın.', icon: 'presentation' },
    ],
    faq: [
      { question: 'PDF\'yi tek tek sayfalara bölebilir miyim?', answer: 'Evet, "Her sayfayı böl" seçeneğini seçerek bir PDF\'yi tek sayfalık dosyalara ayırabilirsiniz.' },
      { question: 'Bölerken yer işaretlerine ne olur?', answer: 'Çıkarılan sayfa aralığına denk gelen yer işaretleri, ortaya çıkan PDF dosyalarında korunur.' },
      { question: 'Şifreli PDF\'leri bölebilir miyim?', answer: 'Bölme işleminden önce "PDF Şifre Çöz" aracımızı kullanarak PDF\'in şifresini çözmeniz gerekir.' },
    ],
  },

  'compress-pdf': {
    title: 'PDF Sıkıştır',
    metaDescription: 'Kaliteyi koruyarak PDF dosya boyutunu küçültün. Daha küçük dosyalar için ücretsiz çevrimiçi PDF sıkıştırıcı.',
    keywords: ['pdf sıkıştır', 'pdf boyutu küçült', 'pdf compressor', 'pdf daraltma', 'pdf optimize et'],
    description: `
      <p>PDF Sıkıştır, kabul edilebilir kaliteyi korurken PDF belgelerinizin dosya boyutunu küçültür. Bu; e-posta ekleri, web yüklemeleri veya depolama alanından tasarruf etmek için gereklidir.</p>
      <p>Araç, dosya boyutu küçültme ve kalite koruma arasında denge kurmak için birden fazla sıkıştırma seviyesi sunar. Maksimum boyut küçültme için agresif sıkıştırmayı veya daha yüksek kaliteyi korumak için hafif sıkıştırmayı seçebilirsiniz.</p>
      <p>Tüm sıkıştırma işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz asla cihazınızdan ayrılmaz.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Sıkıştırmak istediğiniz PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Sıkıştırma Seviyesini Seçin', description: 'Tercih ettiğiniz sıkıştırma seviyesini seçin: Düşük (en iyi kalite), Orta (dengeli) veya Yüksek (en küçük boyut).' },
      { step: 3, title: 'Sıkıştır ve İndir', description: 'Dosya boyutunu küçültmek için Sıkıştır düğmesine tıklayın ve ardından optimize edilmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'E-posta Ekleri', description: 'E-posta eki sınırlarını karşılamak ve daha hızlı gönderim sağlamak için PDF boyutunu küçültün.', icon: 'mail' },
      { title: 'Web Yayıncılığı', description: 'Sayfa yükleme sürelerini ve kullanıcı deneyimini iyileştirmek için PDF\'leri web indirmeleri için optimize edin.', icon: 'globe' },
      { title: 'Depolama Optimizasyonu', description: 'Erişilebilirliği korurken disk alanından tasarruf etmek için arşivlenmiş belgeleri sıkıştırın.', icon: 'hard-drive' },
    ],
    faq: [
      { question: 'Dosya boyutunu ne kadar küçültebilirim?', answer: 'Sıkıştırma sonuçları PDF içeriğine göre değişir. Resim ağırlıklı PDF\'ler genellikle %50-80 oranında küçültülebilirken, sadece metin içeren PDF\'lerde daha küçük oranlar görülebilir.' },
      { question: 'Sıkıştırma metin kalitesini etkiler mi?', answer: 'Metin, tüm sıkıştırma seviyelerinde keskin ve okunabilir kalır. Sıkıştırmadan sadece resimler ve grafikler etkilenir.' },
      { question: 'Aynı anda birden fazla PDF sıkıştırabilir miyim?', answer: 'Evet, aynı anda 10 adede kadar PDF dosyası yükleyebilir ve sıkıştırabilirsiniz.' },
    ],
  },

  'edit-pdf': {
    title: 'Tam PDF Düzenleyici',
    metaDescription: 'PDF metinlerini, şekillerini ve resimlerini doğrudan düzenleyin. Mevcut içeriği, yazı tiplerini ve düzenleri değiştirmek için gelişmiş PDF düzenleyici.',
    keywords: ['pdf düzenle', 'pdf düzenleyici', 'pdf metin düzenleme', 'pdf içeriği değiştir', 'pdf resim değiştir', 'pdf yazı tipi düzenleyici'],
    description: `
      <p>Tam PDF Düzenleyici, PDF belgelerinizin her yönünü değiştirmenize olanak tanır. Basit not ekleme araçlarının aksine, bu araç size mevcut metni düzenleme, resimleri taşıma veya yeniden boyutlandırma ve şekilleri doğrudan sayfa üzerinde manipüle etme gücü verir.</p>
      <p>Orijinal kaynak dosyasına ihtiyaç duymadan yazı tipi stillerini değiştirin, paragrafları güncelleyin veya eski resimleri yenileriyle değiştirin. Son dakika düzeltmeleri, kapsamlı belge güncellemeleri ve profesyonel mizanpajlar için mükemmeldir.</p>
      <p>Düzenleyici ayrıca vurgulama, yorum yapma ve güvenli karartma gibi gelişmiş ek açıklama özelliklerini de içerir. Maksimum gizlilik ve güvenlik için tüm işlemler yerel olarak tarayıcınızda yapılır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Düzenlemek istediğiniz PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Düzenlenecek İçeriği Seçin', description: 'Metni düzenlemek için mevcut herhangi bir metin bloğuna tıklayın veya resimleri ve şekilleri seçerek boyutlandırıp taşıyın.' },
      { step: 3, title: 'Gelişmiş Araçları Kullanın', description: 'Belgenizi geliştirmek için yeni metin ekleyin, resim içe aktarın veya yan çubuktaki ek açıklama araçlarını kullanın.' },
      { step: 4, title: 'Kaydet ve İndir', description: 'Değişikliklerinizi uygulamak ve tamamen düzenlenmiş PDF belgenizi indirmek için Kaydet düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Mevcut İçeriği Güncelleyin', description: 'Yazım hatalarını düzeltin, tarihleri güncelleyin veya iletişim bilgilerini doğrudan PDF metni içinde değiştirin.', icon: 'edit-3' },
      { title: 'Grafik Değişiklikleri', description: 'Eski logoları değiştirin, diyagramları yeniden boyutlandırın veya herhangi bir sayfadaki görsel öğeleri yeniden sıralayın.', icon: 'image' },
      { title: 'Profesyonel İşaretleme', description: 'Dahili ve yasal incelemeler için profesyonel düzeyde ek açıklamalar ve karartmalar ekleyin.', icon: 'shield' },
    ],
    faq: [
      { question: 'PDF\'deki orijinal metni düzenleyebilir miyim?', answer: 'Evet! Herhangi bir metin bloğuna tıklayarak içeriğini değiştirebilir, yazı tipini değiştirebilir, boyutu ayarlayabilir veya stili doğrudan güncelleyebilirsiniz.' },
      { question: 'Resimler ve şekiller düzenlenebilir mi?', answer: 'Kesinlikle. Mevcut resimleri ve şekilleri seçerek taşıyabilir, boyutlandırabilir veya silebilir ve ayrıca yenilerini yükleyebilirsiniz.' },
      { question: 'Orijinal kaynak dosyasına ihtiyacım var mı?', answer: 'Hayır, bu araç doğrudan PDF dosyasının kendisi üzerinde değişiklik yapmanıza olanak tanır.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG\'den PDF\'e',
    metaDescription: 'JPG resimlerini PDF\'e dönüştürün. Birden fazla JPG dosyasını tek bir PDF belgesinde birleştirin.',
    keywords: ['jpg den pdf e', 'jpeg den pdf e', 'jpg dönüştür', 'resimden pdf e', 'fotoğraftan pdf e'],
    description: `
      <p>JPG\'den PDF\'e aracı, JPEG resimlerinizi hızlı ve kolay bir şekilde PDF belgelerine dönüştürür. İster tek bir fotoğrafınız ister birden fazla resminiz olsun, bu araç profesyonel görünümlü PDF dosyaları oluşturur.</p>
      <p>Birden fazla JPG dosyasını tek bir PDF\'de birleştirebilir, dilediğiniz sıraya dizebilir; sayfa boyutu ve yönlendirme ayarlarını özelleştirebilirsiniz. Dönüştürme işlemi, resim kalitesini korurken kompakt ve paylaşılabilir PDF dosyaları oluşturur.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece fotoğraflarınız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'JPG Resimleri Yükleyin', description: 'JPG dosyalarınızı sürükleyip bırakın veya cihazınızdan resimleri seçmek için tıklayın.' },
      { step: 2, title: 'Düzenleyin ve Yapılandırın', description: 'Resimleri sürükleyerek yeniden sıralayın; sayfa boyutu ve yönlendirme seçeneklerini belirleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın ve sonucu indirin.' },
    ],
    useCases: [
      { title: 'Fotoğraf Albümleri', description: 'Kolay paylaşım için tatil resimlerinden veya etkinlik fotoğraflarından PDF albümleri oluşturun.', icon: 'image' },
      { title: 'Belge Tarama', description: 'Belgelerin telefon kamerasıyla çekilmiş fotoğraflarını uygun PDF dosyalarına dönüştürün.', icon: 'camera' },
      { title: 'Portfolyo Hazırlama', description: 'Fotoğrafçılık çalışmalarını veya tasarım örneklerini profesyonel bir PDF portfolyosunda toplayın.', icon: 'folder' },
    ],
    faq: [
      { question: 'Kaç resim dönüştürebilirim?', answer: 'Tek bir PDF belgesine 100 adede kadar JPG resmi dönüştürebilirsiniz.' },
      { question: 'Resim kalitesi korunacak mı?', answer: 'Evet, resimler orijinal kalitelerinde gömülür. Dosya boyutunu küçültmek için isteğe bağlı olarak onları sıkıştırabilirsiniz.' },
      { question: 'Farklı resimler için farklı sayfa boyutları ayarlayabilir miyim?', answer: 'Araç, tüm sayfalara tek tip bir sayfa boyutu uygular. Her resim, en boy oranını koruyarak seçilen sayfa boyutuna sığacak şekilde ölçeklenir.' },
    ],
  },

  'sign-pdf': {
    title: 'PDF İmzala',
    metaDescription: 'PDF belgelerine elektronik imza ekleyin. İmzanızı çizin, yazın veya yükleyin.',
    keywords: ['pdf imzala', 'elektronik imza', 'e-imza', 'pdf imzalama', 'dijital imza'],
    description: `
      <p>PDF İmzala, PDF belgelerinize hızlı ve güvenli bir şekilde elektronik imza eklemenize olanak tanır. Çizerek, adınızı yazarak veya bir resim yükleyerek imzanızı oluşturun ve belgenizin istediğiniz yerine yerleştirin.</p>
      <p>Tek bir belgeye birden fazla imza ekleyebilir, bunları hassas bir şekilde yeniden boyutlandırıp konumlandırabilir ve gelecekte kullanmak üzere imzanızı kaydedebilirsiniz. Bu araç sözleşmeler, anlaşmalar, formlar ve imza gerektiren her türlü belge için mükemmeldir.</p>
      <p>Tüm imzalama işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz ve imzanız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'İmzalamanız gereken PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'İmzanızı Oluşturun', description: 'Farenizle veya dokunmatik ekranla imzanızı çizin, imza oluşturmak için adınızı yazın veya bir imza resmi yükleyin.' },
      { step: 3, title: 'Yerleştirin ve Ayarlayın', description: 'İmzanızı yerleştirmek için belgeye tıklayın, ardından gerektiği gibi sürükleyerek konumlandırın ve yeniden boyutlandırın.' },
      { step: 4, title: 'Kaydet ve İndir', description: 'İmzanızı uygulamak ve imzalı PDF\'i indirmek için Kaydet düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Sözleşme İmzalama', description: 'Sözleşmeleri ve anlaşmaları yazdırmadan ve taratmadan elektronik olarak imzalayın.', icon: 'file-signature' },
      { title: 'Form Tamamlama', description: 'Başvuru formlarına, muvafakatnamelere ve resmi belgelere imzanızı ekleyin.', icon: 'clipboard' },
      { title: 'Onay İş Akışları', description: 'İnceleme ve onay süreçlerinin bir parçası olarak belgeleri imzalayın.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Elektronik imza yasal olarak bağlayıcı mıdır?', answer: 'Elektronik imzalar çoğu ülkede yasal olarak tanınmaktadır. Ancak bazı belgeler belirli dijital imza türleri gerektirebilir. Yerel düzenlemelerinizi kontrol edin.' },
      { question: 'İmzamı gelecekte kullanmak üzere kaydedebilir miyim?', answer: 'Evet, gelecekteki belgeleri imzalarken hızlı erişim için imzanızı tarayıcınızın yerel depolama alanına kaydedebilirsiniz.' },
      { question: 'Tek bir belgeye birden fazla imza ekleyebilir miyim?', answer: 'Evet, dilediğiniz kadar imza ekleyebilir ve her birini herhangi bir sayfada bağımsız olarak konumlandırabilirsiniz.' },
    ],
  },

  'crop-pdf': {
    title: 'PDF Kırp',
    metaDescription: 'Kenar boşluklarını ve istenmeyen alanları kaldırmak için PDF sayfalarını kırpın. PDF belgelerini hassas bir şekilde kesin.',
    keywords: ['pdf kırp', 'pdf kesme', 'pdf kenar boşluğu sil', 'pdf sayfa boyutlandır', 'pdf cropper'],
    description: `
      <p>PDF Kırp, PDF sayfalarınızdaki kenar boşluklarını kırpmanıza ve istenmeyen alanları kaldırmanıza olanak tanır. Bu; fazla beyaz boşlukları temizlemek, belirli içerik alanlarına odaklanmak veya sayfa boyutlarını standart hale getirmek için kullanışlıdır.</p>
      <p>Tüm sayfaları tek tip olarak kırpabilir veya her sayfayı tek tek ayarlayabilirsiniz. Görsel arayüz nelerin tutulacağını tam olarak göstererek hassas sonuçlar elde etmenizi kolaylaştırır.</p>
      <p>Tüm kırpma işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Kırpmak istediğiniz PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Kırpma Alanını Belirleyin', description: 'Tutmak istediğiniz alanı belirlemek için kırpma tutamaçlarını sürükleyin veya hassas ölçümler girin.' },
      { step: 3, title: 'Sayfalara Uygulayın', description: 'Kırpma işlemini tüm sayfalara uygulamayı veya kırpılacak belirli sayfaları seçin.' },
      { step: 4, title: 'Kırp ve İndir', description: 'Değişiklikleri uygulamak ve kırpılmış PDF\'inizi indirmek için Kırp düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Kenar Boşluklarını Kaldırın', description: 'Taranmış belgelerden veya geniş çerçeveli PDF\'lerden fazla kenar boşluklarını kesin.', icon: 'maximize-2' },
      { title: 'İçeriğe Odaklanın', description: 'Üstbilgileri, altbilgileri veya yan çubukları kaldırarak belirli içerik alanlarını vurgulamak için kırpın.', icon: 'target' },
      { title: 'Sayfaları Standartlaştırın', description: 'Tek tip boyutlara kırparak tüm sayfaları aynı boyuta getirin.', icon: 'square' },
    ],
    faq: [
      { question: 'Kırpma işlemi içeriği kalıcı olarak kaldırır mı?', answer: 'Evet, kırpma işlemi kırpma alanının dışındaki içeriği kaldırır. Orijinal dosyanızın bir yedeğini tuttuğunuzdan emin olun.' },
      { question: 'Farklı sayfaları farklı şekilde kırpabilir miyim?', answer: 'Evet, münferit sayfalara veya sayfa gruplarına farklı kırpma ayarları uygulayabilirsiniz.' },
      { question: 'Kırpma metin kalitesini etkiler mi?', answer: 'Hayır, kırpma işlemi sadece kırpma sınırı dışındaki alanları kaldırır. Kalan içerik orijinal kalitesini korur.' },
    ],
  },

  'extract-pages': {
    title: 'Sayfaları Çıkar',
    metaDescription: 'PDF dosyalarından belirli sayfaları çıkarın. İstediğiniz sayfaları seçin ve yeni belgeler olarak kaydedin.',
    keywords: ['pdf sayfaları çıkar', 'pdf sayfası kaydet', 'pdf sayfası kopyala', 'pdf sayfa çıkarıcı'],
    description: `
      <p>Sayfaları Çıkar, bir PDF belgesindeki belirli sayfaları seçip yeni dosyalar olarak kaydetmenize olanak tanır. Bu; ilgili bölümleri çekmek, alıntılar oluşturmak veya birleştirilmiş belgeleri ayırmak için mükemmeldir.</p>
      <p>Tek tek sayfaları, sayfa aralıklarını veya art arda gelmeyen birden fazla sayfayı çıkarabilirsiniz. Görsel sayfa önizlemesi, tam olarak ihtiyacınız olan sayfaları tanımlamanızı ve seçmenizi kolaylaştırır.</p>
      <p>Tüm çıkarma işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Sayfa çıkarmak istediğiniz PDF belgesini sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Sayfaları Seçin', description: 'Seçmek için sayfa küçük resimlerine tıklayın veya giriş alanına sayfa numaralarını ve aralıklarını girin.' },
      { step: 3, title: 'Çıkar ve İndir', description: 'Seçtiğiniz sayfalarla yeni bir PDF oluşturmak için Çıkar düğmesine tıklayın ve dosyayı indirin.' },
    ],
    useCases: [
      { title: 'Alıntılar Oluşturun', description: 'Odaklanmış referans belgeleri oluşturmak için raporlardan veya kitaplardan ilgili sayfaları çıkarın.', icon: 'file-minus' },
      { title: 'Belirli İçeriği Paylaşın', description: 'Tüm belgeyi göndermeden sadece belirli sayfaları çekerek paylaşın.', icon: 'share-2' },
      { title: 'Önemli Sayfaları Arşivleyin', description: 'Belgelerdeki kilit sayfaları seçip uzun süreli arşivleme için kaydedin.', icon: 'archive' },
    ],
    faq: [
      { question: 'Art arda gelmeyen sayfaları çıkarabilir miyim?', answer: 'Evet, ister birleşik ister belgenin farklı yerlerine dağılmış olsun, herhangi bir sayfa kombinasyonunu seçebilirsiniz.' },
      { question: 'Yer işaretleri korunacak mı?', answer: 'Çıkarılan sayfalara işaret eden yer işaretleri yeni belgede korunur.' },
      { question: 'Birden fazla PDF\'den sayfa çıkarabilir miyim?', answer: 'Bu araç tek seferde bir PDF ile çalışır. Birden fazla PDF\'den sayfaları birleştirmek için PDF Birleştir aracını kullanın.' },
    ],
  },

  'organize-pdf': {
    title: 'PDF Düzenle',
    metaDescription: 'PDF sayfalarını yeniden sıralayın, çoğaltın ve silin. Belgelerinizi düzenlemek için sürükleyip bırakın.',
    keywords: ['pdf düzenle', 'pdf sayfa sırala', 'pdf yeniden düzenle', 'pdf sayfa düzenleyici'],
    description: `
      <p>PDF Düzenle, PDF belgelerinizdeki sayfaları yeniden düzenlemek için sezgisel bir sürükle-bırak arayüzü sunar. Sayfaları kolayca yeniden sıralayın, önemli bölümleri çoğaltın veya istenmeyen sayfaları kaldırın.</p>
      <p>Görsel sayfa küçük resimleri, içeriği tanımlamanızı ve sayfaları tam olarak ihtiyacınız olan şekilde sıralamanızı kolaylaştırır. Belgeleri yeniden yapılandırmak, özel sayfa sıraları oluşturmak veya taranmış dosyaları temizlemek için mükemmeldir.</p>
      <p>Tüm düzenleme işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Düzenlemek istediğiniz PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Sayfaları Yeniden Düzenleyin', description: 'Sayfaları yeniden sıralamak için küçük resimleri sürükleyin. Gerektiğinde her sayfanın üzerindeki çoğaltma veya silme düğmelerini kullanın.' },
      { step: 3, title: 'Kaydet ve İndir', description: 'Değişikliklerinizi uygulamak ve düzenlenen PDF\'i indirmek için Kaydet düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Sayfa Sırasını Düzeltin', description: 'Yanlış taranmış veya yanlış birleştirilmiş sayfaların sırasını düzeltin.', icon: 'arrow-up-down' },
      { title: 'Özel Sıralama Oluşturun', description: 'Sayfaları sunumlar veya raporlar için belirli bir sıraya göre dizin.', icon: 'list' },
      { title: 'İstenmeyen Sayfaları Kaldırın', description: 'Belgelerdeki boş sayfaları, kopyaları veya alakasız içerikleri silin.', icon: 'trash-2' },
    ],
    faq: [
      { question: 'Sayfaları çoğaltabilir miyim?', answer: 'Evet, herhangi bir sayfayı çoğaltabilir ve kopyasını belgenin istediğiniz yerine yerleştirebilirsiniz.' },
      { question: 'Geri al işlevi var mı?', answer: 'Evet, değişiklikleri geri alabilir ve yineleyebilirsiniz. Ayrıca istediğiniz zaman orijinal sıralamaya dönebilirsiniz.' },
      { question: 'Birden fazla PDF\'yi birlikte düzenleyebilir miyim?', answer: 'Bu araç tek seferde bir PDF ile çalışır. Birden fazla PDF\'yi birleştirip düzenlemek için önce PDF Birleştir aracını kullanın.' },
    ],
  },

  'delete-pages': {
    title: 'Sayfaları Sil',
    metaDescription: 'PDF dosyalarından istenmeyen sayfaları kaldırın. Belirli sayfaları kolayca seçin ve silin.',
    keywords: ['pdf sayfası sil', 'pdf sayfası kaldır', 'pdf sayfa çıkarıcı', 'pdf\'den sayfa silme'],
    description: `
      <p>Sayfaları Sil, PDF belgelerinizdeki istenmeyen sayfaları hızlı ve kolay bir şekilde kaldırmanıza olanak tanır. İster boş sayfaları, ister güncelliğini yitirmiş içerikleri veya hassas bilgileri kaldırmanız gereksin, bu araç işinizi basitleştirir.</p>
      <p>Görsel sayfa küçük resimleri, tam olarak hangi sayfaları kaldıracağınızı belirlemenize yardımcı olur. Tek tek sayfaları veya birden fazlasını aynı anda silebilirsiniz.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Sayfa silmek istediğiniz PDF belgesini sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Silinecek Sayfaları Seçin', description: 'Silmek üzere işaretlemek için sayfa küçük resimlerine tıklayın veya giriş alanına sayfa numaralarını girin.' },
      { step: 3, title: 'Sil ve İndir', description: 'Seçilen sayfaları kaldırmak ve güncellenmiş PDF\'inizi indirmek için Sil düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Boş Sayfaları Kaldırın', description: 'Yanlışlıkla dahil edilen boş sayfaları kaldırarak belgeleri temizleyin.', icon: 'file-x' },
      { title: 'Hassas İçeriği Kaldırın', description: 'Belgeleri paylaşmadan önce gizli bilgiler içeren sayfaları silin.', icon: 'shield' },
      { title: 'Belgeleri Sadeleştirin', description: 'Daha odaklanmış belgeler oluşturmak için güncel olmayan veya alakasız sayfaları çıkarın.', icon: 'filter' },
    ],
    faq: [
      { question: 'Silinen sayfaları geri getirebilir miyim?', answer: 'Silme işlemi çıktı dosyasında kalıcıdır. Sayfalara daha sonra ihtiyacınız olabilecekse orijinal belgenizin bir yedeğini saklayın.' },
      { question: 'Aynı anda birden fazla sayfayı silebilir miyim?', answer: 'Evet, birden fazla sayfayı aynı anda seçip silebilirsiniz.' },
      { question: 'Sayfaları silmek yer işaretlerini etkiler mi?', answer: 'Silinen sayfalara işaret eden yer işaretleri kaldırılır. Kalan sayfalara ait yer işaretleri korunur.' },
    ],
  },


  // ==================== EDIT & ANNOTATE ====================
  'bookmark': {
    title: 'Yer İşaretlerini Düzenle',
    metaDescription: 'PDF yer işaretlerini ekleyin, düzenleyin ve yönetin. Belgeleriniz için bir gezinti yapısı oluşturun.',
    keywords: ['pdf yer işaretleri', 'yer işareti düzenle', 'yer işareti ekle', 'pdf gezinti', 'içindekiler tablosu'],
    description: `
      <p>Yer İşaretlerini Düzenle, PDF belgelerinizde yer işaretleri oluşturmanıza, değiştirmenize ve düzenlemenize olanak tanır. Yer işaretleri belirli bölümlere hızlı erişim sağlayarak uzun belgelerin kullanımını kolaylaştırır.</p>
      <p>Yeni yer işaretleri ekleyebilir, mevcut olanları düzenleyebilir, hiyerarşiyi yeniden yapılandırabilir veya harici kaynaklardan yer işaretlerini içe aktarabilirsiniz. Bu araç; profesyonel ve kolay gezilebilir belgeler oluşturmak için temel bir araçtır.</p>
      <p>Tüm düzenleme işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Düzenlemek istediğiniz PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Yer İşaretlerini Yönetin', description: 'Yeni yer işaretleri ekleyin, mevcut olanları düzenleyin veya hiyerarşiyi yeniden düzenlemek için sürükleyin.' },
      { step: 3, title: 'Kaydet ve İndir', description: 'Değişikliklerinizi uygulamak ve yer işaretleri güncellenmiş PDF\'i indirmek için Kaydet düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Gezinti Akışı Oluşturun', description: 'Okuyucuların belirli bölümlere hızlıca ulaşmasına yardımcı olmak için uzun belgelere yer işaretleri ekleyin.', icon: 'navigation' },
      { title: 'Bölümleri Düzenleyin', description: 'Belgenizin bölüm yapısını yansıtan hiyerarşik bir yer işareti yapısı oluşturun.', icon: 'book-open' },
      { title: 'Erişilebilirliği Artırın', description: 'Belgeleri daha erişilebilir ve kullanıcı dostu hale getirmek için yer işaretleri ekleyin.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'İç içe geçmiş yer işaretleri oluşturabilir miyim?', answer: 'Evet, ana ve alt yer işaretlerinden oluşan hiyerarşik bir yapı oluşturabilirsiniz.' },
      { question: 'Bir dosyadan yer işaretlerini içe aktarabilir miyim?', answer: 'Evet, JSON veya metin dosyalarından yer işareti yapılarını içe aktarabilirsiniz.' },
      { question: 'Yer işaretleri tüm PDF okuyucularda çalışır mı?', answer: 'Evet, yer işaretleri tüm büyük PDF okuyucular tarafından desteklenen standart bir PDF özelliğidir.' },
    ],
  },

  'table-of-contents': {
    title: 'İçindekiler Tablosu',
    metaDescription: 'PDF\'iniz için bir içindekiler tablosu oluşturun. Yer işaretlerinden tıklanabilir gezinti öğeleri oluşturun.',
    keywords: ['pdf içindekiler tablosu', 'içindekiler oluşturucu', 'pdf dizini', 'belge gezintisi'],
    description: `
      <p>İçindekiler Tablosu, PDF belgeleriniz için kolayca gezilebilen bir dizin sayfası oluşturur. Mevcut yer işaretlerinden veya özel girişlerden oluşturulabilen bu tablo, okuyuculara genel bir bakış ve hızlı gezinti imkanı sunar.</p>
      <p>Görünümü farklı stiller, yazı tipleri ve düzenlerle özelleştirin. Oluşturulan içindekiler tablosu, doğrudan referans verilen sayfalara giden tıklanabilir bağlantılar içerir.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'İçindekileri Yapılandırın', description: 'Yer işaretlerinden oluşturmayı veya özel girişler eklemeyi seçin. Stil ve konum seçeneklerini belirleyin.' },
      { step: 3, title: 'Oluştur ve İndir', description: 'İçindekiler tablosunu oluşturmak için Oluştur düğmesine tıklayın ve güncellenmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Akademik Makaleler', description: 'Tezlere ve araştırma makalelerine profesyonel bir içindekiler sayfası ekleyin.', icon: 'graduation-cap' },
      { title: 'İş Raporları', description: 'Paydaşlar için net bölüm listeleri içeren, gezilmesi kolay raporlar oluşturun.', icon: 'bar-chart' },
      { title: 'Kullanım Kılavuzları', description: 'Teknik belgeler ve kullanım kılavuzları için kapsamlı dizinler oluşturun.', icon: 'book' },
    ],
    faq: [
      { question: 'İçindekiler tablosunun görünümünü özelleştirebilir miyim?', answer: 'Evet, içindekiler tablosu için farklı stiller, yazı tipleri ve düzenler arasından seçim yapabilirsiniz.' },
      { question: 'İçindekiler nereye eklenir?', answer: 'Varsayılan olarak belgenin başına eklenir ancak farklı bir konum da seçebilirsiniz.' },
      { question: 'İçindekiler girişleri tıklanabilir mi?', answer: 'Evet, her giriş ilgili sayfaya yönlendiren tıklanabilir bir bağlantıdır.' },
    ],
  },

  'page-numbers': {
    title: 'Sayfa Numaraları',
    metaDescription: 'PDF belgelerine sayfa numaraları ekleyin. Konumu, biçimi ve başlangıç numarasını özelleştirin.',
    keywords: ['sayfa numarası ekle', 'pdf sayfa numarası', 'belgeyi numaralandır', 'pdf sayfalama'],
    description: `
      <p>Sayfa Numaraları, PDF belgelerinize özelleştirilebilir sayfa numaralandırması ekler. Belgenizin tasarımına uygun çeşitli biçimler, konumlar ve stiller arasından seçim yapın.</p>
      <p>Başlangıç numarasını belirleyebilir, belirli sayfaları atlayabilir ve farklı numaralandırma biçimleri (1, 2, 3 veya i, ii, iii) kullanabilirsiniz. Uygun sayfalama ile profesyonel belgeler oluşturmak için mükemmeldir.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Numaralandırmayı Yapılandırın', description: 'Konumu, biçimi, başlangıç numarasını ve hangi sayfaların numaralandırılacağını seçin.' },
      { step: 3, title: 'Uygula ve İndir', description: 'Sayfa numaralarını eklemek için Uygula düğmesine tıklayın ve güncellenmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Profesyonel Belgeler', description: 'Raporlara, tekliflere ve iş belgelerine sayfa numarası ekleyin.', icon: 'file-text' },
      { title: 'Akademik Makaleler', description: 'Sayfaları akademik biçimlendirme gereksinimlerine göre numaralandırın.', icon: 'graduation-cap' },
      { title: 'Yasal Belgeler', description: 'Sözleşmelere ve yasal kayıtlara uygun sayfalama ekleyin.', icon: 'scale' },
    ],
    faq: [
      { question: 'İlk sayfayı atlayabilir miyim?', answer: 'Evet, başlık sayfaları veya kapak sayfaları gibi hangi sayfaların numaralandırılacağını veya atlanacağını belirleyebilirsiniz.' },
      { question: 'Hangi sayı biçimleri mevcut?', answer: 'Arap rakamları (1, 2, 3), Roma rakamları (i, ii, iii veya I, II, III) veya harfler (a, b, c) kullanabilirsiniz.' },
      { question: '"Sayfa X / Y" biçimini ekleyebilir miyim?', answer: 'Evet, numaralandırma biçiminize toplam sayfa sayısını dahil edebilirsiniz.' },
    ],
  },

  'add-watermark': {
    title: 'Filigran Ekle',
    metaDescription: 'PDF dosyalarına metin veya resim filigranları ekleyin. Belgelerinizi koruyun ve markalayın.',
    keywords: ['filigran ekle', 'pdf filigran', 'pdf damgala', 'pdf markalama', 'pdf koruma'],
    description: `
      <p>Filigran Ekle, PDF belgelerinize metin veya resim filigranları yerleştirmenize olanak tanır. Filigranlar belge durumunu (Taslak, Gizli) belirtebilir, marka ekleyebilir veya yetkisiz kopyalamayı engelleyebilir.</p>
      <p>Filigranın konumunu, boyutunu, opaklığını, döndürmesini ve rengini özelleştirin. Tüm sayfalara uygulayın veya belirli sayfaları seçin. Araç hem metin hem de resim filigranlarını destekler.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Belgenizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Filigranı Oluşturun', description: 'Filigranınız için metin girin veya bir resim yükleyin. Konumu, boyutu, opaklığı ve döndürmeyi ayarlayın.' },
      { step: 3, title: 'Uygula ve İndir', description: 'Filigranı eklemek için Uygula düğmesine tıklayın ve güncellenmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Belge Koruma', description: 'Belge durumunu belirtmek için "Gizli" veya "Taslak" filigranları ekleyin.', icon: 'shield' },
      { title: 'Belge Markalama', description: 'Resmi belgelere şirket logoları veya isimleri ekleyin.', icon: 'award' },
      { title: 'Telif Hakkı Bildirimi', description: 'Fikri mülkiyeti korumak için telif hakkı bilgileri ekleyin.', icon: 'copyright' },
    ],
    faq: [
      { question: 'Filigran olarak resim kullanabilir miyim?', answer: 'Evet, filigran olarak kullanmak üzere PNG, JPG veya SVG resimlerini yükleyebilirsiniz.' },
      { question: 'Filigranı yarı saydam yapabilir miyim?', answer: 'Evet, opaklığı tam saydamdan tam mata kadar dilediğiniz gibi ayarlayabilirsiniz.' },
      { question: 'Farklı sayfalara farklı filigranlar uygulayabilir miyim?', answer: 'Araç, seçilen sayfalara aynı filigranı uygular. Farklı filigranlar için belgeyi birden fazla kez işleyin.' },
    ],
  },

  'header-footer': {
    title: 'Üstbilgi ve Altbilgi',
    metaDescription: 'PDF belgelerine üstbilgi ve altbilgi ekleyin. Sayfa numaraları, tarihler ve özel metinler ekleyin.',
    keywords: ['pdf üstbilgi', 'pdf altbilgi', 'üstbilgi altbilgi ekle', 'pdf antetli kağıt'],
    description: `
      <p>Üstbilgi ve Altbilgi aracı, PDF belgelerinize özelleştirilebilir üstbilgiler ve altbilgiler ekler. Üst veya alt bilgi alanlarına sayfa numaraları, tarihler, belge başlıkları veya herhangi bir özel metin ekleyebilirsiniz.</p>
      <p>İçeriği üstbilgi/altbilgi alanının soluna, ortasına veya sağına konumlandırın. Gerekirse tek ve çift sayfalar için farklı içerikler kullanın. Tutarlı biçimlendirmeye sahip profesyonel belgeler oluşturmak için mükemmeldir.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Belgenizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Üst/Alt Bilgileri Yapılandırın', description: 'Üstbilgi ve altbilgi alanları için metin girin. Sayfa numaraları, tarihler veya özel metinler ekleyin.' },
      { step: 3, title: 'Uygula ve İndir', description: 'Üstbilgi/altbilgi eklemek için Uygula düğmesine tıklayın ve güncellenmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'İş Belgeleri', description: 'Profesyonel belgelere şirket adı ve sayfa numaraları ekleyin.', icon: 'briefcase' },
      { title: 'Yasal Belgeler', description: 'Yasal kayıtlara dosya numaralarını, tarihleri ve sayfa referanslarını dahil edin.', icon: 'scale' },
      { title: 'Akademik Makaleler', description: 'Makale başlığı ve yazar adını içeren üstbilgiler ekleyin.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'Tek ve çift sayfalarda farklı üstbilgiler olabilir mi?', answer: 'Evet, tek ve çift sayfalar için farklı içerikler yapılandırabilirsiniz.' },
      { question: 'Güncel tarihi ekleyebilir miyim?', answer: 'Evet, o anki tarihi gösteren dinamik tarih alanları ekleyebilirsiniz.' },
      { question: 'Belirli sayfalarda üstbilgi/altbilgiyi atlayabilir miyim?', answer: 'Evet, hangi sayfaların üst/alt bilgilere sahip olacağını ve hangilerinin atlanacağını belirleyebilirsiniz.' },
    ],
  },

  'invert-colors': {
    title: 'Renkleri Tersine Çevir',
    metaDescription: 'Karanlık modda okumak için PDF renklerini tersine çevirin. Belgeleri negatif renklere dönüştürün.',
    keywords: ['pdf renklerini çevir', 'pdf karanlık mod', 'negatif pdf', 'renkleri ters çevir'],
    description: `
      <p>Renkleri Tersine Çevir, PDF belgelerinizdeki renkleri tersine çevirerek negatif bir görüntü efekti oluşturur. Bu, özellikle düşük ışıklı ortamlarda daha kolay okumak için belgelerin karanlık mod sürümlerini oluşturmak için kullanışlıdır.</p>
      <p>Araç tüm renkleri tersine çevirebilir veya resimler gibi belirli öğeleri seçici olarak koruyabilir. Gece belge okurken göz yorgunluğunu azaltmak için mükemmeldir.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Tüm içeriği mi tersine çevireceğinizi yoksa resimleri mi koruyacağınızı seçin.' },
      { step: 3, title: 'Çevir ve İndir', description: 'Belgeyi işlemek için Tersine Çevir düğmesine tıklayın ve sonucu indirin.' },
    ],
    useCases: [
      { title: 'Gece Okuması', description: 'Geceleri rahat okumak için belgelerin karanlık mod sürümlerini oluşturun.', icon: 'moon' },
      { title: 'Göz Yorgunluğunu Azaltın', description: 'Uzun süreli okuma sırasında göz yorgunluğunu azaltmak için parlak belgeleri tersine çevirin.', icon: 'eye' },
      { title: 'Baskı Tasarrufu', description: 'Taslak yazdırırken mürekkep kullanımını azaltmak için belgeleri tersine çevirin.', icon: 'printer' },
    ],
    faq: [
      { question: 'Resimler de tersine çevrilecek mi?', answer: 'Varsayılan olarak evet. Metin ve arka planları çevirirken orijinal resimleri korumayı seçebilirsiniz.' },
      { question: 'Sadece belirli sayfaları mı çevirebilirim?', answer: 'Evet, hangi sayfaların tersine çevrileceğini seçebilirsiniz.' },
      { question: 'Bu işlem geri alınabilir mi?', answer: 'Orijinal renklere yaklaşık olarak dönmek için belgeyi tekrar tersine çevirebilirsiniz.' },
    ],
  },

  'background-color': {
    title: 'Arka Plan Rengi',
    metaDescription: 'PDF arka plan rengini değiştirin. Belge sayfalarına renkli arka planlar ekleyin.',
    keywords: ['pdf arka plan rengi', 'pdf arka plan değiştir', 'renkli pdf', 'pdf sayfa rengi'],
    description: `
      <p>Arka Plan Rengi, PDF sayfalarınızın arka plan renklerini değiştirmenize veya yenilerini eklemenize olanak tanır. Bu; okunabilirliği artırabilir, görsel ilgi çekebilir veya markalama gereksinimlerinize uyum sağlayabilir.</p>
      <p>Arka plan için herhangi bir renk seçin ve bunu tüm sayfalara veya seçilen sayfalara uygulayın. Araç, tüm mevcut içeriği korurken arka plan katmanını ekler.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Renk Seçin', description: 'Renk seçiciyi kullanarak bir arka plan rengi seçin veya bir onaltılık (hex) kod girin.' },
      { step: 3, title: 'Uygula ve İndir', description: 'Arka planı eklemek için Uygula düğmesine tıklayın ve güncellenmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Okunabilirliği Artırın', description: 'Göz yorgunluğunu azaltmak için açık krem veya sepya bir arka plan ekleyin.', icon: 'eye' },
      { title: 'Belge Markalama', description: 'Pazarlama materyalleri için marka renklerini arka plan olarak kullanın.', icon: 'palette' },
      { title: 'Bölümleri Vurgulayın', description: 'Belge bölümlerini ayırt etmek için farklı arka plan renkleri kullanın.', icon: 'layers' },
    ],
    faq: [
      { question: 'Arka plan mevcut içeriği kapatır mı?', answer: 'Hayır, arka plan mevcut içeriğin arkasına eklenir; tüm metin ve resimler korunur.' },
      { question: 'Farklı sayfalar için farklı renkler kullanabilir miyim?', answer: 'Farklı sayfalarda farklı renkler için belgeyi birden fazla kez işlemeniz gerekir.' },
      { question: 'Mevcut bir arka planı kaldırabilir miyim?', answer: 'Bu araç arka plan ekler. Arka planları kaldırmak için PDF Düzenle aracını kullanmanız gerekebilir.' },
    ],
  },

  'text-color': {
    title: 'Metin Rengini Değiştir',
    metaDescription: 'PDF belgelerindeki metin rengini değiştirin. Tüm metin içeriğinin rengini düzenleyin.',
    keywords: ['pdf metin rengi değiştir', 'pdf metin rengi', 'metin rengini düzenle', 'pdf metni yeniden renklendir'],
    description: `
      <p>Metin Rengini Değiştir, PDF belgelerinizdeki metinlerin rengini değiştirmenize olanak tanır. Bu; kontrastı artırmak, markaya uyum sağlamak veya belgelerin görsel varyasyonlarını oluşturmak için kullanışlıdır.</p>
      <p>Yeni bir renk seçin ve bunu belgedeki tüm metinlere uygulayın. Araç; resimleri ve diğer içerikleri korurken metin öğelerini işler.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Renk Seçin', description: 'Renk seçiciyi kullanarak yeni bir metin rengi seçin veya bir onaltılık (hex) kod girin.' },
      { step: 3, title: 'Uygula ve İndir', description: 'Metin rengini değiştirmek için Uygula düğmesine tıklayın ve güncellenmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Kontrastı Artırın', description: 'Arka plana karşı okunabilirliği artırmak için metin rengini değiştirin.', icon: 'contrast' },
      { title: 'Marka Uyumu', description: 'Metin renklerini marka yönergelerine uygun şekilde güncelleyin.', icon: 'palette' },
      { title: 'Erişilebilirlik', description: 'Erişilebilirlik kontrast gereksinimlerini karşılamak için metin renklerini ayarlayın.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Tüm metinler değişecek mi?', answer: 'Evet, araç belgedeki tüm metin öğelerinin rengini değiştirir.' },
      { question: 'Sadece belirli metni mi değiştirebilirim?', answer: 'Bu araç tüm metni değiştirir. Seçici değişiklikler için PDF Düzenle aracını kullanın.' },
      { question: 'Biçimlendirilmiş metinler (kalın, italik) korunacak mı?', answer: 'Evet, metin biçimlendirmesi korunur; sadece rengi değiştirilir.' },
    ],
  },

  'add-stamps': {
    title: 'Damga Ekle',
    metaDescription: 'PDF belgelerine damgalar ekleyin. Onay, inceleme ve daha fazlası için hazır veya özel damgalar kullanın.',
    keywords: ['pdf damgaları', 'damga ekle', 'onay damgası', 'pdf kaşe'],
    description: `
      <p>Damga Ekle, PDF belgelerinize damga resimleri yerleştirmenize olanak tanır. "Onaylandı", "Reddedildi", "Taslak" gibi hazır damgaları kullanın veya özel damga resimleri yükleyin.</p>
      <p>Damgaları sayfanın istediğiniz yerine yerleştirin, yeniden boyutlandırın ve tek veya birden fazla sayfaya uygulayın. Belge iş akışları, onaylar ve durum göstergeleri için mükemmeldir.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Damga Seçin', description: 'Hazır bir damga seçin veya özel bir damga resmi yükleyin.' },
      { step: 3, title: 'Konumlandır ve Uygula', description: 'Damgayı yerleştirmek için tıklayın, konumunu ve boyutunu ayarlayın, ardından indirin.' },
    ],
    useCases: [
      { title: 'Belge Onayı', description: 'İnceleme iş akışlarındaki belgelere "Onaylandı" veya "Reddedildi" damgaları ekleyin.', icon: 'check-circle' },
      { title: 'Durum Göstergesi', description: 'Belgeleri "Taslak", "Final" veya "Gizli" olarak işaretleyin.', icon: 'tag' },
      { title: 'Kalite Kontrol', description: 'Muayene veya inceleme tamamlandığını belirtmek için KK damgaları ekleyin.', icon: 'clipboard-check' },
    ],
    faq: [
      { question: 'Hangi hazır damgalar mevcut?', answer: 'Hazır damgalar arasında Onaylandı, Reddedildi, Taslak, Final, Gizli, Kopya ve daha fazlası bulunur.' },
      { question: 'Özel damga yükleyebilir miyim?', answer: 'Evet, özel damga olarak kullanmak üzere PNG veya JPG resimleri yükleyebilirsiniz.' },
      { question: 'Bir belgeye birden fazla damga ekleyebilir miyim?', answer: 'Evet, birden fazla damga ekleyebilir ve her birini bağımsız olarak konumlandırabilirsiniz.' },
    ],
  },

  'remove-annotations': {
    title: 'Notları Kaldır',
    metaDescription: 'PDF dosyalarındaki notları kaldırın. Yorumları, vurguları ve işaretlemeleri silin.',
    keywords: ['pdf notları kaldır', 'yorumları sil', 'vurguları kaldır', 'pdf temizle'],
    description: `
      <p>Notları Kaldır; PDF belgelerinizdeki yorumları, vurguları, yapışkan notları ve diğer işaretlemeleri çıkarır. Bu, belgenin işaretleme içermeyen temiz bir sürümünü oluşturur.</p>
      <p>Tüm notları kaldırabilir veya belirli türleri seçerek silebilirsiniz. İncelenmiş belgelerin son sürümlerini oluşturmak veya hassas yorumları kaldırmak için mükemmeldir.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Not Türlerini Seçin', description: 'Hangi tür notların kaldırılacağını seçin: yorumlar, vurgular, bağlantılar vb.' },
      { step: 3, title: 'Kaldır ve İndir', description: 'Notları temizlemek için Kaldır düğmesine tıklayın ve temizlenmiş PDF\'i indirin.' },
    ],
    useCases: [
      { title: 'Belgeleri Sonlandırın', description: 'Final belgelerini yayınlamadan önce inceleme yorumlarını ve işaretlemeleri kaldırın.', icon: 'file-check' },
      { title: 'Gizliliği Koruyun', description: 'Paylaşmadan önce hassas bilgiler içerebilecek yorumları kaldırın.', icon: 'shield' },
      { title: 'Temiz Dağıtım', description: 'Dağıtım için notlandırılmış belgelerin temiz kopyalarını oluşturun.', icon: 'copy' },
    ],
    faq: [
      { question: 'Hangi tür notlar kaldırılabilir?', answer: 'Yorumlar, vurgular, altı çizili metinler, üstü çizili metinler, yapışkan notlar, damgalar ve bağlantıların tümü kaldırılabilir.' },
      { question: 'Bazı notları tutabilir miyim?', answer: 'Evet, hangi tür notların kaldırılacağını ve hangilerinin tutulacağını seçebilirsiniz.' },
      { question: 'Bu işlem geri alınabilir mi?', answer: 'Hayır, notların kaldırılması kalıcıdır. Gerekiyorsa orijinalin bir yedeğini saklayın.' },
    ],
  },

  'form-filler': {
    title: 'Form Doldurucu',
    metaDescription: 'PDF formlarını çevrimiçi doldurun. İnteraktif PDF formlarını yazdırmadan tamamlayın.',
    keywords: ['pdf form doldur', 'pdf form doldurucu', 'pdf form tamamlama', 'interaktif pdf'],
    description: `
      <p>Form Doldurucu, interaktif PDF formlarını doğrudan tarayıcınızda tamamlamanıza olanak tanır. Belgeyi yazdırmadan metin alanlarını doldurun, onay kutularını işaretleyin, seçenekleri belirleyin ve imza ekleyin.</p>
      <p>Araç, standart PDF formlarını ve XFA formlarını destekler. Doldurduğunuz veriler kaydedilebilir ve daha sonra düzenlenmesini önlemek için form düzleştirilebilir.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece form verileriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF Formunuzu Yükleyin', description: 'PDF formunuzu sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Formu Doldurun', description: 'Metin girmek, onay kutularını işaretlemek veya seçenekleri belirlemek için form alanlarına tıklayın.' },
      { step: 3, title: 'Kaydet ve İndir', description: 'Girişlerinizi korumak için Kaydet düğmesine tıklayın ve doldurulmuş formu indirin.' },
    ],
    useCases: [
      { title: 'Başvuru Formları', description: 'İş başvurularını, izin başvurularını ve kayıt formlarını tamamlayın.', icon: 'clipboard' },
      { title: 'Vergi Formları', description: 'Vergi belgelerini ve finansal formları elektronik olarak doldurun.', icon: 'file-text' },
      { title: 'Sözleşmeler', description: 'İmzalamadan önce sözleşme formlarını bilgilerinizle doldurun.', icon: 'file-signature' },
    ],
    faq: [
      { question: 'İlerlememi kaydedebilir miyim?', answer: 'Evet, kısmen doldurulmuş formları kaydedebilir ve daha sonra devam edebilirsiniz.' },
      { question: 'Form düzleştirme nedir?', answer: 'Düzleştirme, form alanlarını statik içeriğe dönüştürerek daha fazla düzenlemeyi engeller.' },
      { question: 'XFA formları destekleniyor mu?', answer: 'Evet, araç hem standart AcroForms hem de XFA formlarını destekler.' },
    ],
  },

  'form-creator': {
    title: 'Form Oluşturucu',
    metaDescription: 'Doldurulabilir PDF formları oluşturun. Belgelere metin alanları, onay kutuları ve açılır menüler ekleyin.',
    keywords: ['pdf form oluştur', 'pdf form oluşturucu', 'doldurulabilir pdf', 'form alanı ekle'],
    description: `
      <p>Form Oluşturucu; statik PDF belgelerini interaktif, doldurulabilir formlara dönüştürür. Profesyonel formlar oluşturmak için metin alanları, onay kutuları, radyo düğmeleri, açılır menüler ve daha fazlasını ekleyin.</p>
      <p>Form öğelerini belgenize sürükleyip bırakın, alan özelliklerini yapılandırın ve elektronik olarak doldurulabilen formlar oluşturun. Başvurular, anketler ve veri toplama formları oluşturmak için mükemmeldir.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Forma dönüştürmek istediğiniz PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Form Alanları Ekleyin', description: 'Araç çubuğundan alan türlerini seçin ve belgeye yerleştirmek için tıklayın.' },
      { step: 3, title: 'Yapılandır ve Kaydet', description: 'Alan özelliklerini ayarlayın, ardından doldurulabilir PDF formunuzu kaydedin ve indirin.' },
    ],
    useCases: [
      { title: 'Başvuru Formları', description: 'Doldurulabilir iş başvuruları, üyelik formları ve kayıtlar oluşturun.', icon: 'user-plus' },
      { title: 'Anketler', description: 'Veri toplama için interaktif anketler ve soru formları oluşturun.', icon: 'clipboard-list' },
      { title: 'Sipariş Formları', description: 'Miktar alanları ve onay kutuları içeren ürün sipariş formları oluşturun.', icon: 'shopping-cart' },
    ],
    faq: [
      { question: 'Hangi alan türlerini ekleyebilirim?', answer: 'Metin alanları, onay kutuları, radyo düğmeleri, açılır menüler, tarih seçiciler ve imza alanları.' },
      { question: 'Alanları zorunlu yapabilir miyim?', answer: 'Evet, alanları zorunlu olarak işaretleyebilir ve doğrulama kuralları ekleyebilirsiniz.' },
      { question: 'Hesaplamalar ekleyebilir miyim?', answer: 'Sayısal alanlara toplam ve ortalama gibi temel hesaplamalar eklenebilir.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Boş Sayfaları Kaldır',
    metaDescription: 'PDF belgelerindeki boş sayfaları otomatik olarak algılayın ve kaldırın.',
    keywords: ['boş sayfaları kaldır', 'boş sayfaları sil', 'pdf temizle', 'pdf boş sayfa temizleyici'],
    description: `
      <p>Boş Sayfaları Kaldır, PDF belgelerinizdeki boş sayfaları otomatik olarak algılar ve temizler. Bu; taranmış belgeleri temizlemek, ayırıcı sayfaları kaldırmak veya yanlışlıkla dahil edilen boş sayfaları elemek için kullanışlıdır.</p>
      <p>Araç, minimum düzeyde içeriğe sahip sayfaları korurken gerçekten boş olan sayfaları belirlemek için akıllı algılama kullanır. Neyin "boş" sayılacağını kontrol etmek için hassasiyet eşiğini ayarlayabilirsiniz.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Belgenizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Eşiği Ayarlayın', description: 'Gerekirse boş sayfa algılama eşiğini ayarlayın (varsayılan değer çoğu belge için uygundur).' },
      { step: 3, title: 'Kaldır ve İndir', description: 'Boş sayfaları silmek için Kaldır düğmesine tıklayın ve temizlenmiş PDF\'i indirin.' },
    ],
    useCases: [
      { title: 'Taranmış Belgeleri Temizle', description: 'Toplu taranmış belgelerdeki boş sayfaları kaldırın.', icon: 'scan' },
      { title: 'Ayırıcıları Kaldır', description: 'Birleştirilmiş belgelerdeki boş ayırıcı sayfaları silin.', icon: 'minus' },
      { title: 'Dosya Boyutunu Küçült', description: 'Belge boyutunu azaltmak için gereksiz boş sayfaları çıkarın.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'Boş sayfa algılama nasıl çalışır?', answer: 'Araç sayfa içeriğini analiz eder ve görünür içeriği çok az olan veya hiç olmayan sayfaları boş olarak kabul eder.' },
      { question: 'Hangi sayfaların kaldırılacağını önizleyebilir miyim?', answer: 'Evet, algılanan boş sayfalar kaldırılmadan önce incelemeniz için vurgulanır.' },
      { question: 'Bir sayfada sadece üstbilgi/altbilgi varsa ne olur?', answer: 'Çok az içeriği olan sayfaların boş sayılıp sayılmayacağını belirlemek için eşiği ayarlayabilirsiniz.' },
    ],
  },
  // ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: 'Görselden PDF\'e',
    metaDescription: 'Herhangi bir görseli PDF\'e dönüştürün. JPG, PNG, WebP, BMP, TIFF, SVG ve HEIC formatlarını destekler.',
    keywords: ['görselden pdf\'e', 'görsel dönüştür', 'fotoğraftan pdf\'e', 'resimden pdf\'e'],
    description: `
      <p>Görselden PDF\'e, her formattaki görseli PDF belgelerine dönüştürür. JPG, PNG, WebP, BMP, TIFF, SVG ve HEIC formatlarını desteklemesi, bu aracı evrensel bir görsel dönüştürücü yapar.</p>
      <p>Birden fazla görseli tek bir PDF\'de birleştirin, dilediğiniz sıraya dizin ve sayfa boyutu ile yönlendirmeyi özelleştirin. Fotoğraf albümleri, belge arşivleri veya portfolyolar oluşturmak için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece görselleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Görselleri Yükleyin', description: 'Desteklenen herhangi bir formattaki görselleri sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Düzenleyin ve Yapılandırın', description: 'Görselleri yeniden sıralayın; sayfa boyutu ve yönlendirme seçeneklerini belirleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın ve sonucu indirin.' },
    ],
    useCases: [
      { title: 'Fotoğraf Koleksiyonları', description: 'Çeşitli kaynaklardan gelen fotoğrafları tek bir PDF albümünde toplayın.', icon: 'images' },
      { title: 'Karışık Formatlı Belgeler', description: 'Farklı formatlardaki görselleri birleşik bir PDF\'e dönüştürün.', icon: 'file-stack' },
      { title: 'Arşiv Oluşturma', description: 'Uzun süreli saklama için görsel koleksiyonlarından PDF arşivleri oluşturun.', icon: 'archive' },
    ],
    faq: [
      { question: 'Hangi görsel formatları destekleniyor?', answer: 'JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC ve HEIF formatlarının tümü desteklenmektedir.' },
      { question: 'Farklı görsel formatlarını karıştırabilir miyim?', answer: 'Evet, farklı formatlardaki görselleri tek bir PDF belgesinde birleştirebilirsiniz.' },
      { question: 'Görsel kalitesi korunacak mı?', answer: 'Evet, siz sıkıştırmayı tercih etmedikçe görseller orijinal kalitelerinde gömülür.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG\'den PDF\'e',
    metaDescription: 'PNG görsellerini PDF\'e dönüştürün. Şeffaflığı koruyun ve birden fazla PNG dosyasını birleştirin.',
    keywords: ['png\'den pdf\'e', 'png dönüştür', 'png dönüştürücü', 'şeffaf görselden pdf\'e'],
    description: `
      <p>PNG\'den PDF\'e, şeffaflığı koruyarak PNG görsellerinizi PDF belgelerine dönüştürür. Grafikler, logolar, ekran görüntüleri ve şeffaf arka planlı görseller için mükemmeldir.</p>
      <p>Birden fazla PNG dosyasını tek bir PDF\'de birleştirin, dilediğiniz sıraya dizin ve sayfa ayarlarını özelleştirin. Dönüştürme işlemi, orijinal görsellerinizin yüksek kalitesini korur.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece görselleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PNG Dosyalarını Yükleyin', description: 'PNG görsellerinizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Düzenleyin ve Yapılandırın', description: 'Görselleri yeniden sıralayın ve sayfa boyutu seçeneklerini belirleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'inizi oluşturmak ve indirmek için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Grafik Portfolyosu', description: 'PNG grafiklerini ve tasarımlarını profesyonel bir portfolyoda toplayın.', icon: 'palette' },
      { title: 'Ekran Görüntüsü Dokümantasyonu', description: 'Ekran görüntülerini PDF dokümanlarına dönüştürün.', icon: 'monitor' },
      { title: 'Logo Koleksiyonları', description: 'Logolardan ve marka varlıklarından oluşan PDF katalogları oluşturun.', icon: 'award' },
    ],
    faq: [
      { question: 'Şeffaflık korunur mu?', answer: 'PNG şeffaflığı PDF çıktısında korunur.' },
      { question: 'Peki ya hareketli PNG\'ler (APNG)?', answer: 'Hareketli PNG\'ler, ilk kare kullanılarak statik görsel olarak dönüştürülür.' },
      { question: 'Arka plan rengi ayarlayabilir miyim?', answer: 'Evet, şeffaf alanlar için bir arka plan rengi seçebilirsiniz.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP\'den PDF\'e',
    metaDescription: 'WebP görsellerini PDF\'e dönüştürün. Kalite kaybı olmadan modern görsel formatı dönüşümü.',
    keywords: ['webp\'den pdf\'e', 'webp dönüştür', 'webp dönüştürücü', 'web görselinden pdf\'e'],
    description: `
      <p>WebP\'den PDF\'e, modern WebP görsellerini PDF belgelerine dönüştürür. WebP popüler bir web görsel formatıdır ve bu araç, bu görselleri yazdırmak veya arşivlemek için dönüştürmeyi kolaylaştırır.</p>
      <p>Birden fazla WebP dosyasını özelleştirilebilir sayfa ayarlarıyla tek bir PDF\'de birleştirin. Dönüştürme işlemi, kompakt PDF dosyaları oluştururken görsel kalitesini korur.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece görselleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'WebP Dosyalarını Yükleyin', description: 'WebP görsellerinizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Görselleri düzenleyin ve sayfa boyutu ile yönlendirmeyi seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Web İçeriği Arşivleme', description: 'Çevrimdışı arşivleme için web görsellerini PDF\'e dönüştürün.', icon: 'globe' },
      { title: 'Baskı Hazırlığı', description: 'Yazdırma amacıyla WebP görsellerini PDF\'e dönüştürün.', icon: 'printer' },
      { title: 'Format Standardizasyonu', description: 'Modern WebP formatını evrensel olarak uyumlu PDF\'e dönüştürün.', icon: 'file-check' },
    ],
    faq: [
      { question: 'WebP formatı nedir?', answer: 'WebP, Google tarafından geliştirilen ve web görselleri için üstün sıkıştırma sağlayan modern bir görsel formatıdır.' },
      { question: 'Kalite korunuyor mu?', answer: 'Evet, dönüştürme işlemi orijinal görsel kalitesini korur.' },
      { question: 'Hareketli WebP\'leri dönüştürebilir miyim?', answer: 'Hareketli WebP dosyaları statik görseller olarak dönüştürülür.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG\'den PDF\'e',
    metaDescription: 'SVG vektör grafiklerini PDF\'e dönüştürün. Ölçeklenebilirliği ve kaliteyi koruyun.',
    keywords: ['svg\'den pdf\'e', 'svg dönüştür', 'vektörden pdf\'e', 'ölçeklenebilir grafikten pdf\'e'],
    description: `
      <p>SVG\'den PDF\'e, ölçeklenebilir vektör grafiklerini vektör kalitelerini koruyarak PDF belgelerine dönüştürür. SVG dosyaları her boyutta keskin kalır ve bu kalite PDF çıktısında da korunur.</p>
      <p>Logolar, ikonlar, illüstrasyonlar ve teknik çizimleri dönüştürmek için mükemmeldir. Elde edilen PDF, orijinal vektör grafiklerinin ölçeklenebilirliğini korur.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece dosyalarınız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'SVG Dosyalarını Yükleyin', description: 'SVG dosyalarınızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Sayfa boyutu ve düzenleme seçeneklerini belirleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Vektör PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Logo Dönüşümü', description: 'SVG logolarını baskı materyalleri için PDF\'e dönüştürün.', icon: 'award' },
      { title: 'Teknik Çizimler', description: 'CAD çıktılarını ve teknik illüstrasyonları PDF\'e dönüştürün.', icon: 'ruler' },
      { title: 'İkon Koleksiyonları', description: 'İkon setleri ve grafiklerden oluşan PDF katalogları oluşturun.', icon: 'grid' },
    ],
    faq: [
      { question: 'Vektör kalitesi korunur mu?', answer: 'Evet, SVG vektör kalitesi PDF çıktısında tamamen korunur.' },
      { question: 'Karmaşık SVG\'leri dönüştürebilir miyim?', answer: 'Evet; gradyanlar, filtreler ve efektler içeren karmaşık SVG\'ler desteklenmektedir.' },
      { question: 'Peki ya gömülü yazı tipleri?', answer: 'SVG dosyalarındaki gömülü yazı tipleri PDF\'de korunur.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP\'den PDF\'e',
    metaDescription: 'BMP bitmap görsellerini PDF\'e dönüştürün. Kaliteyi koruyarak eski formatlar için destek.',
    keywords: ['bmp\'den pdf\'e', 'bmp dönüştür', 'bitmap\'den pdf\'e', 'bmp dönüştürücü'],
    description: `
      <p>BMP\'den PDF\'e, bitmap görsellerini PDF belgelerine dönüştürür. BMP, Windows ortamlarında yaygın olarak kullanılan eski bir görsel formatıdır ve bu araç, bu dosyaları modern PDF formatına dönüştürmeyi kolaylaştırır.</p>
      <p>Birden fazla BMP dosyasını özelleştirilebilir ayarlarla tek bir PDF\'de birleştirin. Dönüştürme işlemi, görsel kalitesini korurken genellikle büyük olan BMP dosyalarını sıkıştırır.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece görselleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'BMP Dosyalarını Yükleyin', description: 'BMP görsellerinizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Görselleri düzenleyin ve sayfa ayarlarını seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Eski Dosya Dönüşümü', description: 'Eski BMP dosyalarını modern PDF formatına dönüştürün.', icon: 'history' },
      { title: 'Windows Ekran Görüntüleri', description: 'Windows bitmap ekran görüntülerini PDF\'e dönüştürün.', icon: 'monitor' },
      { title: 'Arşiv Modernizasyonu', description: 'Eski görsel arşivlerini PDF formatına güncelleyin.', icon: 'archive' },
    ],
    faq: [
      { question: 'Dosya boyutu azalacak mı?', answer: 'Evet, BMP dosyaları PDF\'e dönüştürüldüğünde genellikle önemli ölçüde sıkıştırılır.' },
      { question: 'Kalite korunuyor mu?', answer: 'Evet, dönüştürme sırasında görsel kalitesi korunur.' },
      { question: 'Hangi BMP renk derinlikleri destekleniyor?', answer: '24-bit ve 32-bit dahil tüm standart BMP renk derinlikleri desteklenmektedir.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD\'den PDF\'e',
    metaDescription: 'Adobe Photoshop (PSD) dosyalarını PDF formatına dönüştürün. Birden fazla dosyayı destekler ve görsel kalitesini korur.',
    keywords: ['psd\'den pdf\'e', 'psd dönüştür', 'photoshop\'tan pdf\'e', 'psd dönüştürücü', 'adobe psd-pdf'],
    description: `
      <p>PSD\'den PDF\'e, Adobe Photoshop (PSD) dosyalarını PDF belgelerine dönüştürür. Bu araç, Photoshop yüklü olmasına gerek duymadan PSD tasarımlarını görüntülemenizi ve paylaşmanızı sağlar.</p>
      <p>Aynı anda birden fazla PSD dosyasını dönüştürebilir ve bunları tek bir PDF belgesinde birleştirebilirsiniz. Araç, her PSD dosyasını işleyerek görünür katmanları yüksek kaliteli PDF sayfalarına aktarır.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda yapılır, böylece tasarımlarınız gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PSD Dosyalarını Yükleyin', description: 'PSD veya PSB dosyalarınızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'Sırayı Düzenleyin', description: 'Dosya küçük resimlerini dilediğiniz sıraya dizmek için sürükleyip bırakın.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PSD\'leri işlemek ve PDF belgenizi indirmek için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Tasarımları Paylaşın', description: 'Photoshop tasarımlarını, Photoshop yüklü olmayan müşterilerle veya iş arkadaşlarınızla paylaşın.', icon: 'share-2' },
      { title: 'Portfolyo Oluşturma', description: 'Tasarım çalışmalarınızı profesyonel bir PDF portfolyosunda toplayın.', icon: 'layout' },
      { title: 'Baskı Hazırlığı', description: 'Tasarımları yazdırma amacıyla PDF\'e dönüştürün.', icon: 'printer' },
    ],
    faq: [
      { question: 'Photoshop yüklü olması gerekiyor mu?', answer: 'Hayır, bu araç Adobe Photoshop gerektirmeden tamamen tarayıcınızda çalışır.' },
      { question: 'Katmanlar korunur mu?', answer: 'Araç, PSD\'nin görünür durumunu (bileşik görüntü) işler. Bağımsız katmanlar PDF\'de tek bir katmanda birleştirilir.' },
      { question: 'Maksimum dosya boyutu nedir?', answer: 'Her biri 100 MB\'a kadar olan dosyalar yükleyebilirsiniz. Büyük PSD dosyalarının işlenmesi biraz zaman alabilir.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC\'ten PDF\'e',
    metaDescription: 'iPhone HEIC fotoğraflarını PDF\'e dönüştürün. Apple görsel formatı dönüşümü artık çok kolay.',
    keywords: ['heic\'ten pdf\'e', 'heic dönüştür', 'iphone fotoğrafını pdf\'e dönüştür', 'apple görselini pdf\'e dönüştür'],
    description: `
      <p>HEIC\'ten PDF\'e, Apple\'ın Yüksek Verimli Görsel Formatı (HEIC) ile çekilen fotoğrafları PDF belgelerine dönüştürür. HEIC, iPhone ve iPad\'lerdeki varsayılan fotoğraf formatıdır ve bu araç bu fotoğrafları paylaşmayı kolaylaştırır.</p>
      <p>Birden fazla HEIC fotoğrafını tek bir PDF\'de birleştirin; iPhone fotoğraflarınızdan fotoğraf albümleri veya belge arşivleri oluşturmak için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece fotoğraflarınız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'HEIC Dosyalarını Yükleyin', description: 'HEIC fotoğraflarınızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Fotoğrafları Düzenleyin', description: 'Fotoğrafları yeniden sıralayın ve sayfa ayarlarını seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'iPhone Fotoğraf Albümleri', description: 'Paylaşmak için iPhone fotoğraflarından PDF albümleri oluşturun.', icon: 'smartphone' },
      { title: 'Belge Tarama', description: 'iPhone belge taramalarını PDF formatına dönüştürün.', icon: 'scan' },
      { title: 'Platformlar Arası Paylaşım', description: 'Evrensel uyumluluk için HEIC\'i PDF\'e dönüştürün.', icon: 'share-2' },
    ],
    faq: [
      { question: 'HEIC formatı nedir?', answer: 'HEIC (High Efficiency Image Container), Apple tarafından kullanılan ve JPEG\'den daha iyi sıkıştırma sağlayan bir görsel formatıdır.' },
      { question: 'Canlı Fotoğraflar (Live Photos) destekleniyor mu?', answer: 'Canlı Fotoğraflar, ana kare kullanılarak statik görseller olarak dönüştürülür.' },
      { question: 'EXIF verileri korunur mu?', answer: 'Fotoğraf meta verileri dönüştürme sırasında isteğe bağlı olarak korunabilir veya kaldırılabilir.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF\'den PDF\'e',
    metaDescription: 'TIFF görsellerini PDF\'e dönüştürün. Çok sayfalı TIFF dosyaları için destek ve yüksek kaliteli dönüşüm.',
    keywords: ['tiff\'ten pdf\'e', 'tiff dönüştür', 'tif\'ten pdf\'e', 'çok sayfalı tiff'],
    description: `
      <p>TIFF\'den PDF\'e, çok sayfalı TIFF dosyaları dahil olmak üzere TIFF görsellerini PDF belgelerine dönüştürür. TIFF, yüksek kaliteli taramalar ve profesyonel grafikler için yaygın olarak kullanılır.</p>
      <p>Çok sayfalı TIFF dosyaları otomatik olarak çok sayfalı PDF\'lere dönüştürülür. Dönüştürme işlemi, orijinal görsellerinizin yüksek kalitesini korur.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece dosyalarınız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'TIFF Dosyalarını Yükleyin', description: 'TIFF dosyalarınızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Sayfa ayarlarını ve sıkıştırma seçeneklerini belirleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Taranmış Belgeler', description: 'Yüksek kaliteli taramaları TIFF\'den PDF\'e dönüştürün.', icon: 'scan' },
      { title: 'Profesyonel Grafikler', description: 'Profesyonel TIFF grafiklerini dağıtım için dönüştürün.', icon: 'image' },
      { title: 'Arşiv Dönüşümü', description: 'TIFF arşivlerini daha erişilebilir PDF formatına dönüştürün.', icon: 'archive' },
    ],
    faq: [
      { question: 'Çok sayfalı TIFF\'ler destekleniyor mu?', answer: 'Evet, çok sayfalı TIFF dosyaları otomatik olarak çok sayfalı PDF\'lere dönüştürülür.' },
      { question: 'Kalite korunuyor mu?', answer: 'Evet, TIFF kalitesi PDF çıktısında tamamen korunur.' },
      { question: 'Hangi sıkıştırma kullanılıyor?', answer: 'Kayıpsız ve kayıplı sıkıştırma seçenekleri arasından seçim yapabilirsiniz.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Metinden PDF\'e',
    metaDescription: 'Düz metin dosyalarını PDF\'e dönüştürün.Yazı tiplerini, kenar boşluklarını ve sayfa düzenini özelleştirin.',
    keywords: ['txt\'den pdf\'e', 'metinden pdf\'e', 'metin dosyasını dönüştür', 'düz metinden pdf\'e'],
    description: `
      <p>Metinden PDF\'e, düz metin dosyalarını biçimlendirilmiş PDF belgelerine dönüştürür. Basit metinlerden profesyonel görünümlü belgeler oluşturmak için yazı tiplerini, boyutları, kenar boşluklarını ve sayfa düzenini özelleştirin.</p>
      <p>Kod dosyalarını, günlükleri (log), notları veya herhangi bir düz metin içeriğini paylaşılabilir PDF formatına dönüştürmek için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece dosyalarınız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Metin Dosyasını Yükleyin', description: '.txt dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Biçimlendirmeyi Özelleştirin', description: 'Yazı tipi, boyut, kenar boşlukları ve sayfa ayarlarını seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Biçimlendirilmiş PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Kod Dokümantasyonu', description: 'Kaynak kod dosyalarını dokümantasyon amacıyla PDF\'e dönüştürün.', icon: 'code' },
      { title: 'Günlük (Log) Arşivleri', description: 'Log dosyalarını arşivleme amacıyla PDF\'e dönüştürün.', icon: 'file-text' },
      { title: 'Not Dönüşümü', description: 'Düz metin notlarını biçimlendirilmiş PDF belgelerine dönüştürün.', icon: 'sticky-note' },
    ],
    faq: [
      { question: 'Hangi yazı tipleri mevcut?', answer: 'Kodlar için sabit genişlikli (monospace) yazı tipleri dahil olmak üzere birden fazla yazı tipi mevcuttur.' },
      { question: 'Satır kaydırma otomatik mi?', answer: 'Evet, uzun satırlar sayfaya sığacak şekilde otomatik olarak alt satıra kaydırılır.' },
      { question: 'Biçimlendirmeyi koruyabilir miyim?', answer: 'Orijinal metindeki boşluklar ve girintiler korunur.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON\'dan PDF\'e',
    metaDescription: 'JSON dosyalarını biçimlendirilmiş PDF\'e dönüştürün. Sözdizimi vurgulama ve yapılandırılmış çıktı.',
    keywords: ['json\'dan pdf\'e', 'json dönüştür', 'json görüntüleyici', 'json biçimlendirici'],
    description: `
      <p>JSON\'dan PDF\'e, JSON veri dosyalarını biçimlendirilmiş, okunabilir PDF belgelerine dönüştürür. Çıktı, kolay okuma için sözdizimi vurgulama (syntax highlighting) ve uygun girintileri içerir.</p>
      <p>API yanıtlarını, yapılandırma dosyalarını veya okunabilir bir formatta paylaşılması veya arşivlenmesi gereken herhangi bir JSON verisini belgelemek için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yapılır, böylece verileriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'JSON Dosyasını Yükleyin', description: '.json dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Görünümü Yapılandırın', description: 'Biçimlendirme seçeneklerini ve sözdizimi vurgulamasını seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Biçimlendirilmiş PDF\'inizi oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'API Dokümantasyonu', description: 'API yanıtlarını dokümantasyon amacıyla PDF\'e dönüştürün.', icon: 'code' },
      { title: 'Yapılandırma Arşivleri', description: 'Yapılandırma dosyalarını okunabilir PDF formatında arşivleyin.', icon: 'settings' },
      { title: 'Veri Raporları', description: 'JSON veri çıktılarından PDF raporları oluşturun.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'Sözdizimi vurgulama dahil mi?', answer: 'Evet, JSON sözdizimi; anahtarlar, değerler ve türler için renklerle vurgulanır.' },
      { question: 'İç içe geçmiş veriler nasıl işlenir?', answer: 'İç içe geçmiş nesneler ve diziler, okunabilirlik için uygun şekilde girintilenir.' },
      { question: 'Peki ya büyük JSON dosyaları?', answer: 'Büyük dosyalar otomatik olarak birden fazla sayfaya bölünür.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word\'den PDF\'e',
    metaDescription: 'Word belgelerini (DOCX) PDF\'e dönüştürün. Dönüştürülen belgelerinizde biçimlendirmeyi ve düzeni koruyun.',
    keywords: ['word\'den pdf\'e', 'docx\'ten pdf\'e', 'word dönüştür', 'word dönüştürücü', 'microsoft word-pdf'],
    description: `
      <p>Word\'den PDF\'e, orijinal biçimlendirmeyi, düzeni ve içerik yapısını koruyarak Microsoft Word belgelerini PDF formatına dönüştürür.</p>
      <p>DOCX dosyalarınızı yükleyin ve paylaşım, baskı veya arşivleme için uygun yüksek kaliteli PDF çıktıları alın. Dönüştürme işlemi metin biçimlendirmesini, paragraf stillerini ve temel belge yapısını korur.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Word Belgesini Yükleyin', description: '.docx dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'İşlenmesini Bekleyin', description: 'Araç belgeyi yükleyecek ve dönüştürme için hazırlayacaktır.' },
      { step: 3, title: 'PDF\'i İndir', description: 'Dönüştürülmüş PDF belgenizi kaydetmek için İndir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Belge Paylaşımı', description: 'Evrensel paylaşım ve görüntüleme için Word belgelerini PDF\'e dönüştürün.', icon: 'share-2' },
      { title: 'Baskı Hazırlığı', description: 'Word belgelerinden baskıya hazır PDF\'ler oluşturun.', icon: 'printer' },
      { title: 'Belge Arşivi', description: 'Word belgelerini uzun süreli saklama için kararlı PDF formatında arşivleyin.', icon: 'archive' },
    ],
    faq: [
      { question: '.doc formatı destekleniyor mu?', answer: 'Şu anda sadece .docx formatı desteklenmektedir. Lütfen .doc dosyalarını önce Microsoft Word veya LibreOffice kullanarak .docx\'e dönüştürün.' },
      { question: 'Resimler korunuyor mu?', answer: 'Metin içeriği ve temel biçimlendirme korunur. Çok fazla resim içeren karmaşık düzenlerde basitleştirilmiş bir işleme yapılabilir.' },
      { question: 'Dönüştürme güvenli mi?', answer: 'Evet, tüm işlemler tarayıcınızda gerçekleşir. Belgeleriniz asla cihazınızdan ayrılmaz.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel\'den PDF\'e',
    metaDescription: 'Excel tablolarını (XLSX) PDF\'e dönüştürün. Tabloları ve verileri koruyun.',
    keywords: ['excel\'den pdf\'e', 'xlsx\'ten pdf\'e', 'excel dönüştür', 'tablodan pdf\'e', 'microsoft excel-pdf'],
    description: `
      <p>Excel\'den PDF\'e, tablo yapısını ve veri düzenini koruyarak Microsoft Excel çalışma sayfalarını PDF formatına dönüştürür.</p>
      <p>XLSX dosyalarınızı yükleyin ve uygun şekilde biçimlendirilmiş tablolar içeren temiz PDF çıktıları alın. Çalışma kitabınızdaki her sayfa, PDF\'de ayrı bir bölüm haline gelir.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda yapılır, böylece verileriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Excel Dosyasını Yükleyin', description: '.xlsx dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'İşlenmesini Bekleyin', description: 'Araç çalışma sayfasını yükleyecek ve tüm sayfaları dönüştürecektir.' },
      { step: 3, title: 'PDF\'i İndir', description: 'Dönüştürülmüş PDF belgenizi kaydetmek için İndir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Rapor Paylaşımı', description: 'Excel raporlarını paydaşlara dağıtmak için PDF formatına dönüştürün.', icon: 'file-text' },
      { title: 'Veri Arşivleme', description: 'Tablo verilerini kararlı PDF formatında arşivleyin.', icon: 'archive' },
      { title: 'Baskı Hazırlığı', description: 'Excel çalışma sayfalarından baskıya hazır PDF\'ler oluşturun.', icon: 'printer' },
    ],
    faq: [
      { question: 'Birden fazla sayfa destekleniyor mu?', answer: 'Evet, çalışma kitabındaki tüm sayfalar dönüştürülür ve PDF\'e dahil edilir.' },
      { question: '.xls formatı destekleniyor mu?', answer: 'Şu anda sadece .xlsx formatı desteklenmektedir. Lütfen .xls dosyalarını önce .xlsx olarak kaydedin.' },
      { question: 'Formüller korunuyor mu?', answer: 'PDF hesaplanan değerleri gösterir. Formüller PDF formatında çalıştırılabilir değildir.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint\'ten PDF\'e',
    metaDescription: 'PowerPoint sunumlarını (PPTX) PDF\'e dönüştürün. Slaytları ve içeriği koruyun.',
    keywords: ['powerpoint\'ten pdf\'e', 'pptx\'ten pdf\'e', 'pptx dönüştür', 'sunumdan pdf\'e', 'slayttan pdf\'e'],
    description: `
      <p>PowerPoint\'ten PDF\'e, Microsoft PowerPoint sunumlarını kolay paylaşım ve görüntüleme için orijinal slayt içeriğini ve metinlerini koruyarak PDF formatına dönüştürür.</p>
      <p>Her slayt PDF\'de bir sayfa haline gelir ve sunum akışı korunur. Bilgisayarında PowerPoint yüklü olmayan kişilerle sunum paylaşmak için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda yapılır, böylece sunumlarınız gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PowerPoint Dosyasını Yükleyin', description: '.pptx dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'İşlenmesini Bekleyin', description: 'Araç slayt içeriğini çıkaracak ve PDF\'i oluşturacaktır.' },
      { step: 3, title: 'PDF\'i İndir', description: 'Dönüştürülmüş PDF belgenizi kaydetmek için İndir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Sunum Paylaşımı', description: 'PowerPoint gerektirmeden sunumları herkesle paylaşın.', icon: 'share-2' },
      { title: 'Not Kağıdı Oluşturma', description: 'Sunum slaytlarınızdan PDF notları oluşturun.', icon: 'file-text' },
      { title: 'Sunumları Arşivleyin', description: 'Sunumları kararlı PDF formatında arşivleyin.', icon: 'archive' },
    ],
    faq: [
      { question: 'Animasyonlar korunuyor mu?', answer: 'PDF statik bir formattır, bu nedenle animasyonlar ve geçişler korunmaz. Her slayt statik bir sayfa haline gelir.' },
      { question: '.ppt formatı destekleniyor mu?', answer: 'Şu anda sadece .pptx formatı desteklenmektedir. Lütfen .ppt dosyalarını önce .pptx\'e dönüştürün.' },
      { question: 'Konuşmacı notları dahil mi?', answer: 'Şu anda konuşmacı notları PDF çıktısına dahil edilmemektedir.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS\'ten PDF\'e',
    metaDescription: 'XPS belgelerini PDF formatına dönüştürün. Düzeni ve grafikleri koruyan yüksek doğrulukta dönüşüm.',
    keywords: ['xps\'ten pdf\'e', 'xps dönüştür', 'xps dönüştürücü', 'microsoft xps-pdf', 'oxps\'ten pdf\'e'],
    description: `
      <p>XPS\'ten PDF\'e, Microsoft XPS (XML Paper Specification) belgelerini orijinal düzeni, metni ve vektör grafiklerini koruyarak PDF formatına dönüştürür.</p>
      <p>XPS, PDF\'e benzer sabit bir belge formatıdır. Bu araç, belgelerinizin doğru bir şekilde yeniden üretilmesini sağlamak için yerel XPS ayrıştırma kullanarak yüksek doğrulukta dönüştürme sağlar.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'XPS Dosyasını Yükleyin', description: '.xps dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'İşlenmesini Bekleyin', description: 'Araç XPS belgesini ayrıştıracak ve dönüştürecektir.' },
      { step: 3, title: 'PDF\'i İndir', description: 'Dönüştürülmüş PDF belgenizi kaydetmek için İndir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Format Dönüşümü', description: 'XPS belgelerini daha yaygın olarak desteklenen PDF formatına dönüştürün.', icon: 'file' },
      { title: 'Belge Paylaşımı', description: 'XPS belgelerini XPS görüntüleyicisi olmayan kullanıcılarla paylaşın.', icon: 'share-2' },
      { title: 'Arşiv Taşıma', description: 'Daha iyi uyumluluk için XPS arşivlerini PDF formatına taşıyın.', icon: 'archive' },
    ],
    faq: [
      { question: 'XPS formatı nedir?', answer: 'XPS (XML Paper Specification), Microsoft\'un PDF\'e benzer sabit belge formatıdır. Genellikle Windows yazdırma işlemleri için kullanılır.' },
      { question: 'Dönüştürme kayıpsız mı?', answer: 'Evet, dönüştürme işlemi metinleri, grafikleri ve düzeni yüksek bir sadakatle korur.' },
      { question: 'Çok sayfalı XPS dosyaları destekleniyor mu?', answer: 'Evet, XPS belgesindeki tüm sayfalar PDF\'e dönüştürülür.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF\'den PDF\'e',
    metaDescription: 'RTF (Zengin Metin Biçimi) dosyalarını PDF\'e dönüştürün. Belgelerinizdeki metin biçimlendirmesini koruyun.',
    keywords: ['rtf\'den pdf\'e', 'rtf dönüştür', 'zengin metinden pdf\'e', 'rtf dönüştürücü'],
    description: `
      <p>RTF\'den PDF\'e, Zengin Metin Biçimi dosyalarını PDF belgelerine dönüştürür. RTF; yazı tipleri, renkler ve stiller gibi temel biçimlendirmeleri içeren, yaygın olarak desteklenen bir metin formatıdır.</p>
      <p>RTF dosyalarınızı yükleyin ve metin içeriği ile temel biçimlendirmeyi koruyarak temiz PDF çıktıları alın. Eski belgeleri modern PDF formatına dönüştürmek için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'RTF Dosyasını Yükleyin', description: '.rtf dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'İşlenmesini Bekleyin', description: 'Araç RTF içeriğini ayrıştıracak ve dönüştürecektir.' },
      { step: 3, title: 'PDF\'i İndir', description: 'Dönüştürülmüş PDF belgenizi kaydetmek için İndir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Eski Dosya Dönüşümü', description: 'Eski RTF belgelerini modern PDF formatına dönüştürün.', icon: 'history' },
      { title: 'Belge Paylaşımı', description: 'RTF belgelerini evrensel olarak görüntülenebilir PDF formatında paylaşın.', icon: 'share-2' },
      { title: 'Belge Arşivleme', description: 'RTF dosyalarını uzun süreli saklama için kararlı PDF formatında arşivleyin.', icon: 'archive' },
    ],
    faq: [
      { question: 'Hangi biçimlendirmeler korunur?', answer: 'Yazı tipleri, paragraflar ve stiller dahil olmak üzere temel metin biçimlendirmeleri dönüştürülür. Karmaşık RTF özellikleri basitleştirilebilir.' },
      { question: 'Birden fazla RTF dosyasını dönüştürebilir miyim?', answer: 'Şu anda her seferinde bir dosya dönüştürülmektedir. Birden fazla dosyayı birleştirmek için PDF Birleştir aracını kullanın.' },
      { question: 'Gömülü resimler destekleniyor mu?', answer: 'Öncelik metin içeriğindedir. Gömülü nesneler işlenmeyebilir.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB\'dan PDF\'e',
    metaDescription: 'EPUB e-kitaplarını PDF\'e dönüştürün. Biçimlendirmeyi, resimleri ve bölüm yapısını koruyun.',
    keywords: ['epub\'dan pdf\'e', 'epub dönüştür', 'e-kitaptan pdf\'e', 'epub dönüştürücü'],
    description: `
      <p>EPUB\'dan PDF\'e, elektronik kitap dosyalarını yüksek kaliteli PDF belgelerine dönüştürür. EPUB, çoğu e-okuyucu ve dijital kütüphane tarafından kullanılan en popüler e-kitap formatıdır.</p>
      <p>Bu araç e-kitaplarınızdaki metin biçimlendirmesini, resimleri ve bölüm yapısını korur. E-kitapları yazdırmak, arşivlemek veya evrensel bir formatta paylaşmak için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri gelişmiş işleme teknolojisi kullanılarak cihazınızdan ayrılmadan tarayıcınızda yapılır; böylece kitaplarınız gizli kalır ve işlem hızlı gerçekleşir.</p>
    `,
    howToUse: [
      { step: 1, title: 'EPUB Dosyasını Yükleyin', description: '.epub dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'Dönüştürmeyi Bekleyin', description: 'Araç e-kitabınızın tüm sayfalarını işleyecek ve dönüştürecektir.' },
      { step: 3, title: 'PDF\'i İndir', description: 'Dönüştürülmüş PDF belgenizi kaydetmek için İndir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'E-kitap Yazdır', description: 'Fiziksel baskı için e-kitapları PDF\'e dönüştürün.', icon: 'printer' },
      { title: 'Kitap Arşivleme', description: 'E-kitapları uzun süreli kararlı PDF formatında saklayın.', icon: 'archive' },
      { title: 'Belge Paylaşımı', description: 'E-kitapları, e-okuyucusu olmayan kişilerle bile paylaşın.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Biçimlendirme korunuyor mu?', answer: 'Evet! Bu araç metin biçimlendirmesini, resimleri ve düzeni yüksek doğrulukla koruyan yerel EPUB işleme teknolojisini kullanır.' },
      { question: 'DRM korumalı EPUB\'lar destekleniyor mu?', answer: 'Hayır, DRM korumalı e-kitaplar dönüştürülemez. Sadece DRM içermeyen EPUB dosyaları desteklenir.' },
      { question: 'Sayfa boyutu nasıl belirlenir?', answer: 'EPUB içeriği, en iyi okunabilirlik için standart A4 sayfa boyutunda işlenir.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI\'den PDF\'e',
    metaDescription: 'MOBI e-kitaplarını PDF\'e dönüştürün. Yüksek kaliteli işleme ile Kindle formatı desteği.',
    keywords: ['mobi\'nin pdf\'e', 'mobi dönüştür', 'kindle\'ı pdf\'e dönüştür', 'azw\'yi pdf\'e dönüştür', 'mobi dönüştürücü'],
    description: `
      <p>MOBI\'den PDF\'e, Amazon Kindle e-kitap dosyalarını yüksek kaliteli PDF belgelerine dönüştürür. MOBI formatı (AZW ve AZW3 dahil), Kindle cihazlarında kullanılan Amazon\'un tescilli e-kitap formatıdır.</p>
      <p>Bu araç Kindle kitaplarınızdaki metin biçimlendirmesini, resimleri ve yapıyı korur. Yazdırmak, arşivlemek veya MOBI formatını desteklemeyen cihazlarda okumak için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri gelişmiş işleme teknolojisi kullanılarak tarayıcınızda yapılır; böylece kitaplarınız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'MOBI Dosyasını Yükleyin', description: '.mobi, .azw veya .azw3 dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'Dönüştürmeyi Bekleyin', description: 'Araç e-kitabınızın tüm sayfalarını işleyecek ve dönüştürecektir.' },
      { step: 3, title: 'PDF\'i İndir', description: 'Dönüştürülmüş PDF belgenizi kaydetmek için İndir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Kindle Kitaplarını Yazdır', description: 'Kindle e-kitaplarını fiziksel baskı için PDF\'e dönüştürün.', icon: 'printer' },
      { title: 'Kitap Arşivleme', description: 'Kindle kitaplarını evrensel PDF formatında saklayın.', icon: 'archive' },
      { title: 'Farklı Cihazlarda Okuma', description: 'Kindle kitaplarını sadece PDF destekleyen cihazlarda okuyun.', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: 'Hangi MOBI formatları destekleniyor?', answer: 'Bu araç .mobi, .azw ve .azw3 dosyalarını (DRM içermeyen sürümler) destekler.' },
      { question: 'DRM korumalı Kindle kitapları destekleniyor mu?', answer: 'Hayır, DRM korumalı e-kitaplar dönüştürülemez. Sadece DRM içermeyen dosyalar desteklenir.' },
      { question: 'Biçimlendirmem korunacak mı?', answer: 'Evet! Araç; metinleri, resimleri ve düzeni korumak için yerel MOBI işleme teknolojisini kullanır.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU\'dan PDF\'e',
    metaDescription: 'DJVU belge dosyalarını PDF\'e dönüştürün. Taranmış belgeler ve kitaplar için yüksek kaliteli işleme.',
    keywords: ['djvu\'dan pdf\'e', 'djvu dönüştür', 'djvu dönüştürücü', 'djvu pdf', 'djv\'den pdf\'e'],
    description: `
      <p>DJVU\'dan PDF\'e, DjVu belge dosyalarını yüksek kaliteli PDF belgelerine dönüştürür. DjVu, öncelikle taranmış belgeleri, özellikle de metin, çizim ve fotoğrafların birleşimini içerenleri saklamak için tasarlanmış bir bilgisayar dosyası formatıdır.</p>
      <p>Bu araç DJVU dosyanızın her sayfasını seçtiğiniz DPI değerinde işler ve bunları aranabilir bir PDF belgesinde birleştirir. Taranmış kitapları, teknik kılavuzları ve arşiv belgelerini dönüştürmek için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda yapılır, böylece belgeleriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'DJVU Dosyasını Yükleyin', description: '.djvu veya .djv dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Çıktı DPI değerini (72, 150 veya 300) ve PDF için görüntü kalitesini seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'e Dönüştür düğmesine tıklayın ve dönüştürülmüş belgenizi indirin.' },
    ],
    useCases: [
      { title: 'Belgeleri Arşivle', description: 'DJVU arşivlerini evrensel PDF formatına dönüştürün.', icon: 'archive' },
      { title: 'Taranmış Kitapları Paylaş', description: 'Taranmış kitapları daha geniş uyumluluk için PDF formatında paylaşın.', icon: 'share-2' },
      { title: 'Belgeleri Yazdır', description: 'Yazdırmak için DJVU dosyalarını yüksek kaliteli PDF\'e dönüştürün.', icon: 'printer' },
    ],
    faq: [
      { question: 'DJVU formatı nedir?', answer: 'DjVu; metin, çizim ve resim içeren taranmış belgeleri saklamak için tasarlanmış bir dosya formatıdır. Taranmış içerik için PDF\'den daha iyi sıkıştırma sunar.' },
      { question: 'Hangi DPI değerini seçmeliyim?', answer: 'Web görüntüsü için 72 DPI, standart belgeler için 150 DPI ve yüksek kaliteli baskı için 300 DPI uygundur.' },
      { question: 'Metin aranabilir olacak mı?', answer: 'Metin, resim olarak işlenecektir. Aranabilir metne ihtiyacınız varsa, dönüştürme işleminden sonra OCR PDF aracımızı kullanmayı düşünün.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2\'den PDF\'e',
    metaDescription: 'FictionBook (FB2) e-kitaplarını PDF\'e dönüştürün. Yüksek kaliteli işleme ile birden fazla dosyayı destekler.',
    keywords: ['fb2\'den pdf\'e', 'fb2 dönüştür', 'fictionbook\'tan pdf\'e', 'fb2 dönüştürücü', 'fb2.zip\'ten pdf\'e'],
    description: `
      <p>FB2\'den PDF\'e, FictionBook (FB2) e-kitap dosyalarını yüksek kaliteli PDF belgelerine dönüştürür. FB2, Rusya ve Doğu Avrupa\'da yaygın olarak kullanılan XML tabanlı popüler bir e-kitap formatıdır.</p>
      <p>Bu araç hem .fb2 hem de .fb2.zip dosyalarını destekler ve aynı anda birden fazla dosyayı işleyebilir. E-kitaplarınızın metin biçimlendirmesini, resimlerini ve bölüm yapısını korur.</p>
      <p>Tüm dönüştürme işlemleri gelişmiş işleme teknolojisi kullanılarak tarayıcınızda yapılır; böylece kitaplarınız gizli kalır ve işlem hızlı gerçekleşir.</p>
    `,
    howToUse: [
      { step: 1, title: 'FB2 Dosyalarını Yükleyin', description: 'Bir veya daha fazla .fb2 veya .fb2.zip dosyasını sürükleyip bırakın ya da cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'Kaliteyi Seçin', description: 'Çıktı kalitesini seçin: Düşük (72 DPI), Orta (150 DPI) veya Yüksek (300 DPI).' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'e Dönüştür düğmesine tıklayın ve dönüştürülmüş belgelerinizi indirin.' },
    ],
    useCases: [
      { title: 'E-kitap Yazdır', description: 'FB2 e-kitaplarını fiziksel baskı için PDF\'e dönüştürün.', icon: 'printer' },
      { title: 'Toplu Dönüştürme', description: 'Birden fazla FB2 dosyasını aynı anda PDF\'e dönüştürün.', icon: 'layers' },
      { title: 'Evrensel Format', description: 'E-kitapları her cihazda çalışan PDF formatında paylaşın.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Aynı anda birden fazla FB2 dosyasını dönüştürebilir miyim?', answer: 'Evet! Bu araç aynı anda 20 adede kadar FB2 dosyasının toplu dönüştürülmesini destekler.' },
      { question: '.fb2.zip dosyaları destekleniyor mu?', answer: 'Evet, araç .fb2.zip arşivlerindeki FB2 dosyalarını otomatik olarak çıkarır ve dönüştürür.' },
      { question: 'Biçimlendirme korunuyor mu?', answer: 'Evet! Araç; metin biçimlendirmesini, resimleri ve bölüm yapısını yüksek doğrulukla koruyan yerel FB2 işleme teknolojisini kullanır.' },
    ],
  },

  // ==================== CONVERT FROM PDF ====================

  'pdf-to-jpg': {
    title: 'PDF\'den JPG\'ye',
    metaDescription: 'PDF sayfalarını JPG resimlerine dönüştürün. Özelleştirilebilir çözünürlük ile yüksek kaliteli dışa aktarma.',
    keywords: ['pdf\'den jpg\'ye', 'pdf\'den jpeg\'e', 'pdf\'i resme dönüştür', 'pdf resimlerini çıkar'],
    description: `
      <p>PDF\'den JPG\'ye, PDF belgesi sayfalarını yüksek kaliteli JPG resimlerine dönüştürür. Özelleştirilebilir çözünürlük ve kalite ayarlarıyla tüm sayfaları dışa aktarın veya dönüştürülecek belirli sayfaları seçin.</p>
      <p>PDF\'lerden resim çıkarmak, küçük resimler oluşturmak veya belgeleri web kullanımı için dönüştürmek için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Sayfaları ve Kaliteyi Seçin', description: 'Hangi sayfaların dönüştürüleceğini seçin ve kalite/DPI seçeneklerini ayarlayın.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Resimleri çıkarmak için Dönüştür düğmesine tıklayın ve ZIP olarak indirin.' },
    ],
    useCases: [
      { title: 'Web Yayıncılığı', description: 'Web sitesi kullanımı için PDF sayfalarını resimlere dönüştürün.', icon: 'globe' },
      { title: 'Sosyal Medya', description: 'Sosyal medyada paylaşmak için sayfaları resim olarak dışa aktarın.', icon: 'share-2' },
      { title: 'Sunumlar', description: 'Sunumlar için PDF slaytlarını resimlere dönüştürün.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Hangi kalite ayarları mevcut?', answer: 'DPI değerini 72\'den 300\'e kadar ve JPEG kalitesini 1-100 arasında ayarlayabilirsiniz.' },
      { question: 'Sadece belirli sayfaları dönüştürebilir miyim?', answer: 'Evet, dönüştürmek için bağımsız sayfaları veya sayfa aralıklarını seçebilirsiniz.' },
      { question: 'Birden fazla sayfa nasıl işlenir?', answer: 'Her sayfa ayrı bir JPG dosyası haline gelir ve bir ZIP arşivi olarak indirilir.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF\'den PNG\'ye',
    metaDescription: 'PDF sayfalarını PNG resimlerine dönüştürün. Saydamlık desteği ile kayıpsız kalite.',
    keywords: ['pdf\'den png\'ye', 'pdf\'i png\'ye dönüştür', 'pdf resim çıkarma', 'kayıpsız pdf dönüştürme'],
    description: `
      <p>PDF\'den PNG\'ye, PDF belgesi sayfalarını kayıpsız sıkıştırma ile yüksek kaliteli PNG resimlerine dönüştürür. PNG formatı, görüntü kalitesini mükemmel şekilde korur ve saydamlığı destekler.</p>
      <p>Kaliteyi korumanın kritik olduğu grafiklerin, diyagramların veya herhangi bir içeriğin dışa aktarılması için idealdir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Sayfaları seçin ve çözünürlük (DPI) ayarlarını belirleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PNG resimlerini çıkarmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Grafik Çıkarma', description: 'Diyagramları ve grafikleri mükemmel kalitede dışa aktarın.', icon: 'image' },
      { title: 'Tasarım Varlıkları', description: 'Düzenleme yazılımları için PDF tasarımlarını PNG\'ye dönüştürün.', icon: 'palette' },
      { title: 'Belgelendirme', description: 'Teknik belgeler için yüksek kaliteli resimler oluşturun.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Neden JPG yerine PNG seçilmeli?', answer: 'PNG, grafikler ve metinler için ideal olan kayıpsız sıkıştırma ve saydamlık desteği sunar.' },
      { question: 'Saydam arka planlar destekleniyor mu?', answer: 'Evet, PDF sayfalarındaki saydamlık PNG çıktısında korunur.' },
      { question: 'Hangi DPI değerini kullanmalıyım?', answer: 'Ekran görüntüleme için 150 DPI, baskı için 300 DPI kullanın.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF\'den WebP\'ye',
    metaDescription: 'PDF sayfalarını WebP resimlerine dönüştürün. Mükemmel sıkıştırma özellikli modern format.',
    keywords: ['pdf\'den webp\'ye', 'pdf\'i webp\'ye dönüştür', 'modern resim formatı', 'web uyumlu resimler'],
    description: `
      <p>PDF\'den WebP\'ye, PDF belgesi sayfalarını Google\'ın yüksek kaliteyle mükemmel sıkıştırma sunan modern resim formatı olan WebP\'ye dönüştürür.</p>
      <p>WebP resimleri, benzer kaliteyi korurken JPG veya PNG\'den daha küçüktür; bu da onları web kullanımı için ideal hale getirir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Kalite Seçeneklerini Ayarlayın', description: 'Sayfaları seçin ve kalite/sıkıştırma ayarlarını belirleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'WebP resimleri oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Web Optimizasyonu', description: 'PDF içeriğinden web uyumlu resimler oluşturun.', icon: 'globe' },
      { title: 'Bant Genişliği Tasarrufu', description: 'Daha hızlı yükleme için resim dosyası boyutlarını küçültün.', icon: 'zap' },
      { title: 'Modern Web Siteleri', description: 'Güncel web projeleri için modern resim formatlarını kullanın.', icon: 'layout' },
    ],
    faq: [
      { question: 'WebP formatı nedir?', answer: 'WebP, Google tarafından geliştirilen ve üstün sıkıştırma sunan modern bir resim formatıdır.' },
      { question: 'WebP yaygın olarak destekleniyor mu?', answer: 'Evet, tüm modern tarayıcılar WebP formatını destekler.' },
      { question: 'WebP dosyaları ne kadar küçüktür?', answer: 'WebP dosyaları genellikle eşdeğer JPG dosyalarından %25-35 daha küçüktür.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF\'den BMP\'ye',
    metaDescription: 'PDF sayfalarını BMP bitmap resimlerine dönüştürün. Maksimum uyumluluk için sıkıştırılmamış format.',
    keywords: ['pdf\'ten bmp\'ye', 'pdf\'i bitapa dönüştür', 'sıkıştırılmamış resimler', 'eski format'],
    description: `
      <p>PDF\'den BMP\'ye, PDF belgesi sayfalarını BMP bitmap resimlerine dönüştürür. BMP, eski sistemler ve uygulamalarla maksimum uyumluluk sağlayan sıkıştırılmamış bir formattır.</p>
      <p>BMP dosyaları sıkıştırılmış formatlardan daha büyük olsa da mükemmel kalite ve evrensel uyumluluk sunarlar.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Sayfaları Seçin', description: 'Hangi sayfaların dönüştürüleceğini seçin ve DPI değerini ayarlayın.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'BMP resimleri oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Eski Sistemler', description: 'Eski yazılımlarla uyumlu resimler oluşturun.', icon: 'history' },
      { title: 'Windows Uygulamaları', description: 'Windows\'a özel uygulamalar için BMP dosyaları oluşturun.', icon: 'monitor' },
      { title: 'Sıkıştırılmamış Arşivler', description: 'PDF\'lerden sıkıştırılmamış resim arşivleri oluşturun.', icon: 'archive' },
    ],
    faq: [
      { question: 'Neden BMP formatı kullanılmalı?', answer: 'BMP, sıkıştırılmamış kalite ve eski sistemlerle maksimum uyumluluk sunar.' },
      { question: 'BMP dosyaları daha mı büyük?', answer: 'Evet, BMP dosyaları sıkıştırılmamıştır ve JPG veya PNG\'den önemli ölçüde daha büyüktür.' },
      { question: 'Hangi renk derinlikleri destekleniyor?', answer: '24-bit ve 32-bit renk derinlikleri desteklenmektedir.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF\'den TIFF\'e',
    metaDescription: 'PDF\'i TIFF resimlerine dönüştürün. Çok sayfalı desteği ile profesyonel kalite.',
    keywords: ['pdf\'ten tiff\'e', 'pdf\'i tiff\'e dönüştür', 'profesyonel resimler', 'çok sayfalı tiff'],
    description: `
      <p>PDF\'den TIFF\'e, PDF belgelerini yüksek kaliteli TIFF resimlerine dönüştürür. TIFF, kayıpsız sıkıştırması nedeniyle profesyonel baskı ve arşivleme için tercih edilen formattır.</p>
      <p>Tek sayfalı TIFF\'ler oluşturun veya tüm sayfaları tek bir çok sayfalı TIFF dosyasında birleştirin. Profesyonel ve arşivleme amaçları için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Çıktıyı Yapılandırın', description: 'Tek veya çok sayfalı TIFF seçin ve DPI değerini ayarlayın.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'TIFF resimleri oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Profesyonel Baskı', description: 'PDF belgelerinden baskıya hazır TIFF dosyaları oluşturun.', icon: 'printer' },
      { title: 'Belge Arşivleme', description: 'Belgeleri yüksek kaliteli TIFF formatında arşivleyin.', icon: 'archive' },
      { title: 'Yayıncılık', description: 'Yayıncılık iş akışları için PDF\'leri TIFF\'e dönüştürün.', icon: 'book' },
    ],
    faq: [
      { question: 'Çok sayfalı TIFF\'ler oluşturabilir miyim?', answer: 'Evet, tüm PDF sayfalarını tek bir çok sayfalı TIFF dosyasında birleştirebilirsiniz.' },
      { question: 'Hangi sıkıştırma seçenekleri mevcut?', answer: 'LZW, ZIP ve sıkıştırmasız seçenekler mevcuttur.' },
      { question: 'Baskı için hangi DPI değerini kullanmalıyım?', answer: 'Profesyonel baskı için 300 DPI veya daha yükseğini kullanın.' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF\'den SVG\'ye',
    metaDescription: 'PDF sayfalarını SVG vektör grafiklerine dönüştürün. Bağımsız sayfa dışa aktarma ile her boyutta mükemmel ölçeklenebilirlik.',
    keywords: ['pdf\'ten svg\'ye', 'pdf\'i svg\'ye dönüştür', 'vektör grafikleri', 'ölçeklenebilir pdf', 'svg dönüştürücü'],
    description: `
      <p>PDF\'den SVG\'ye, PDF belgenizin her sayfasını ölçeklenebilir bir vektör grafiğine (SVG) dönüştürür. SVG, her yakınlaştırma seviyesinde veya baskı boyutunda mükemmel kaliteyi koruyan bir vektör formatıdır.</p>
      <p>Raster formatların (JPG, PNG) aksine, SVG grafikleri ölçeklendiğinde asla piksellenmez. Bu, onları logolar, diyagramlar, teknik çizimler ve farklı boyutlarda görüntülenmesi gereken her türlü içerik için ideal hale getirir.</p>
      <p>Dönüştürülen her sayfayı önizleyin ve bunları tek tek veya ZIP dosyası olarak indirin. Tüm işlemler tarayıcınızda yerel olarak gerçekleşir ve belgeleriniz için tam gizlilik sağlanır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya göz atıp seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Çözünürlük kalitesini ayarlayın ve isteğe bağlı olarak sayfa aralıklarını belirtin.' },
      { step: 3, title: 'Önizle ve Dönüştür', description: 'İşlemi başlatmak için Dönüştür\'e tıklayın. Küçük resimlere tıklayarak her sayfayı önizleyin.' },
      { step: 4, title: 'İndir', description: 'Bağımsız SVG dosyalarını veya tüm sayfaları bir ZIP arşivi olarak indirin.' },
    ],
    useCases: [
      { title: 'Logolar ve Grafikler', description: 'Tasarım yazılımlarında kullanmak üzere PDF\'lerden logoları ve vektör grafiklerini çıkarın.', icon: 'pen-tool' },
      { title: 'Teknik Diyagramlar', description: 'Teknik çizimleri ve diyagramları ölçeklenebilir SVG formatına dönüştürün.', icon: 'ruler' },
      { title: 'Web Geliştirme', description: 'Duyarlı web siteleri için PDF içeriğinden web uyumlu SVG dosyaları oluşturun.', icon: 'globe' },
      { title: 'Her Boyutta Baskı', description: 'Her boyutta mükemmel şekilde basılan vektör grafikleri oluşturun.', icon: 'printer' },
    ],
    faq: [
      { question: 'SVG formatı nedir?', answer: 'SVG (Ölçeklenebilir Vektör Grafikleri), kalite kaybı olmadan her boyuta ölçeklenebilen bir vektör resim formatıdır. Logolar, simgeler ve web grafikleri için yaygın olarak kullanılır.' },
      { question: 'SVG gerçekten vektör mü olacak?', answer: 'SVG, PDF sayfasının yüksek çözünürlüklü bir temsilini içerir. Vektör içeriğe sahip PDF\'lerde her ölçekte net çıktı alırsınız.' },
      { question: 'İndirmeden önce önizleme yapabilir miyim?', answer: 'Evet! SVG\'nin tam boyutlu önizlemesini görmek için herhangi bir küçük resme tıklayın. Sayfaları tek tek veya topluca indirebilirsiniz.' },
      { question: 'Hangi çözünürlüğü seçmeliyim?', answer: 'Daha yüksek çözünürlük (216 veya 288 DPI) daha büyük ve daha detaylı SVG\'ler oluşturur. Daha hızlı işlem ve daha küçük dosyalar için daha düşük ayarlar kullanın.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF\'i Gri Tonlamaya Dönüştür',
    metaDescription: 'Renkli PDF\'i gri tonlamaya (siyah-beyaz) dönüştürün. Dosya boyutunu küçültün ve siyah-beyaz baskıya hazırlayın.',
    keywords: ['pdf gri tonlama', 'gri ölçekli pdf', 'siyah beyaz pdf', 'renkleri kaldır'],
    description: `
      <p>PDF\'i Gri Tonlamaya Dönüştür, renkli PDF belgelerini gri tonlamalı (siyah-beyaz) hale getirir. Bu, dosya boyutunu küçültür ve belgeleri siyah-beyaz baskı için hazırlar.</p>
      <p>Dönüştürme işlemi renk bilgisini kaldırırken metin netliğini ve görüntü ayrıntılarını korur. Taslak baskı veya yazıcı dostu sürümler oluşturmak için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Renkli PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Dönüşümü Önizleyin', description: 'Gri tonlamalı sürümün nasıl görüneceğini önizleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Gri tonlamalı PDF oluşturmak için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Baskı Tasarrufu', description: 'Renkli baskı maliyetlerinden tasarruf etmek için gri tonlamaya dönüştürün.', icon: 'printer' },
      { title: 'Taslak Belgeler', description: 'İnceleme için siyah-beyaz taslaklar oluşturun.', icon: 'file-text' },
      { title: 'Dosya Boyutu Küçültme', description: 'Renk bilgilerini kaldırarak PDF boyutunu küçültün.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'Metinler okunabilir kalacak mı?', answer: 'Evet, gri tonlama dönüşümü sırasında metin netliği korunur.' },
      { question: 'Dosya ne kadar küçülecek?', answer: 'Dosya boyutu küçülmesi değişebilir ancak renk ağırlıklı belgelerde %20-50 arasında olabilir.' },
      { question: 'Sadece belirli sayfaları dönüştürebilir miyim?', answer: 'Evet, hangi sayfaların gri tonlamaya dönüştürüleceğini seçebilirsiniz.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF\'den JSON\'a',
    metaDescription: 'PDF içeriğini JSON formatına aktarın. PDF belgelerinden yapılandırılmış veriler alın.',
    keywords: ['pdf\'ten json\'a', 'pdf verisi çıkar', 'pdf ayrıştırıcı', 'yapılandırılmış pdf verisi'],
    description: `
      <p>PDF\'den JSON\'a, PDF belgelerindeki içeriği yapılandırılmış JSON formatına aktarır. Programatik kullanım için metin, meta veriler, sayfa bilgileri ve belge yapısını dışa aktarın.</p>
      <p>Veri çıkarma, belge analizi veya PDF içeriğini uygulama ve iş akışlarına entegre etmek için mükemmeldir.</p>
      <p>Tüm çıkarma işlemleri tarayıcınızda gerçekleşir ve belgeleriniz gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Aktarılacak Verileri Seçin', description: 'Hangi içeriği çıkarmak istediğinizi seçin: metin, meta veriler, yapı.' },
      { step: 3, title: 'Dışa Aktar ve İndir', description: 'JSON oluşturmak ve indirmek için Ayıkla düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Veri Çıkarma', description: 'PDF belgelerinden yapılandırılmış veriler çıkarın.', icon: 'database' },
      { title: 'Belge Analizi', description: 'PDF yapısını ve içeriğini programlı olarak analiz edin.', icon: 'search' },
      { title: 'Entegrasyon', description: 'PDF içeriğini JSON aracılığıyla uygulamalara aktarın.', icon: 'plug' },
    ],
    faq: [
      { question: 'Hangi veriler çıkarılıyor?', answer: 'Metin içeriği, meta veriler, sayfa boyutları, yazı tipleri ve belge yapısı.' },
      { question: 'JSON formatı belgeli mi?', answer: 'Evet, JSON şeması tutarlı ve iyi belgelenmiştir.' },
      { question: 'Taranmış PDF\'lerden veri çıkarabilir miyim?', answer: 'Taranmış PDF\'ler için önce OCR gereklidir. Çıkarma işleminden önce OCR PDF aracımızı kullanın.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF\'den PowerPoint\'e',
    metaDescription: 'PDF\'i PowerPoint sunumuna dönüştürün. Her sayfa yüksek kaliteli bir slayt haline gelir.',
    keywords: ['pdf\'ten pptx\'e', 'pdf\'ten powerpoint\'e', 'pdf slayt dönüştür', 'pdf sunumu'],
    description: `
      <p>PDF\'den PowerPoint\'ye, PDF belgelerinizi düzenlenebilir PowerPoint sunumlarına (PPTX) dönüştürür. Her PDF sayfası, görsel düzeni mükemmel şekilde koruyarak yüksek kaliteli bir slayta dönüştürülür.</p>
      <p>Bu araç raporları, dinleyici notlarını veya herhangi bir PDF içeriğini sunum formatına dönüştürmek için idealdir. Dosya boyutu ve görsel netlik arasında denge kurmak için görüntü kalitesini (DPI) seçebilirsiniz.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda gerçekleşir ve belgelerinizin gizli ve güvende kalması sağlanır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'Kalite Ayarlarını Seçin', description: 'Slaytlar için görüntü kalitesini (DPI) seçin. Daha yüksek DPI, daha iyi kalite ancak daha büyük dosya boyutu demektir.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PowerPoint sunumunuzu oluşturmak ve PPTX dosyasını indirmek için Dönüştür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Sunum Oluşturma', description: 'PDF raporlarını veya belgelerini toplantılar için sunum slaytlarına dönüştürün.', icon: 'presentation' },
      { title: 'Eğitim Materyalleri', description: 'PDF eğitim belgelerini etkileşimli PowerPoint sunumlarına dönüştürün.', icon: 'book-open' },
      { title: 'İçeriği Yeniden Amaçlandırma', description: 'Mevcut PDF içeriğini daha fazla özelleştirme için düzenlenebilir slayt formatına dönüştürün.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Slaytlar düzenlenebilir mi?', answer: 'Her slayt, PDF sayfasının yüksek kaliteli bir görüntüsünü içerir. PowerPoint\'te üzerine metin, şekil ve notlar ekleyebilirsiniz.' },
      { question: 'Hangi DPI değerini seçmeliyim?', answer: 'Ekranlarda görüntülenen sunumlar için 150 DPI kullanın. Baskı için veya en yüksek kaliteye ihtiyaç duyduğunuzda 300 DPI kullanın.' },
      { question: 'Çok sayfalı PDF\'leri dönüştürebilir miyim?', answer: 'Evet, PDF\'inizin her sayfası PowerPoint sunumunda ayrı bir slayt haline gelir.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF\'den Excel\'e',
    metaDescription: 'PDF\'i Excel tablosuna dönüştürün. Tabloları XLSX formatına aktarın.',
    keywords: ['pdf\'ten excel\'e', 'pdf\'ten xlsx\'e', 'pdf tablolarını dönüştür', 'tablo çıkarma'],
    description: `
      <p>PDF\'den Excel\'e, PDF belgelerinizi düzenlenebilir Microsoft Excel çalışma sayfalarına (XLSX) dönüştürür. Araç, PDF\'inizdeki tabloları otomatik olarak algılar ve bunları ayrı sayfalara aktarır.</p>
      <p>Bu araç finansal raporları, faturaları veya tablo halinde sunulan her türlü veriyi analiz etmek için idealdir. Her sayfanın tabloları kolay veri manipülasyonu için sayfalara ayrılır.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda gerçekleşir ve verilerinizin gizli ve güvende kalması sağlanır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'İşlenmesi', description: 'Araç tabloları otomatik olarak tanımlayacak ve çıkaracaktır.' },
      { step: 3, title: 'Excel\'i İndir', description: 'Çıkarılan tablolarla Excel dosyanızı indirin.' },
    ],
    useCases: [
      { title: 'Finansal Analiz', description: 'Banka dökümlerini veya faturaları analiz için Excel\'e dönüştürün.', icon: 'trending-up' },
      { title: 'Veri Çıkarma', description: 'Araştırma makalelerinden veya raporlardan veri tablolarını çekin.', icon: 'database' },
      { title: 'Envanter Yönetimi', description: 'Envanter listelerini PDF\'den tabloya dönüştürün.', icon: 'clipboard' },
    ],
    faq: [
      { question: 'Tablolar nasıl işleniyor?', answer: 'Her sayfada algılanan tablolar, Excel dosyasındaki ilgili sayfalara aktarılır.' },
      { question: 'Hiç tablo yoksa ne olur?', answer: 'Tablo bulunamadığını belirten bir bilgi sayfası oluşturulacaktır.' },
      { question: 'Biçimlendirme korunuyor mu?', answer: 'Veriler korunur ancak karmaşık görsel biçimlendirmeler, hesap tablosu kullanımı için basitleştirilebilir.' },
    ],
  },

  // ==================== ORGANIZE & MANAGE ====================
  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: 'Taranmış PDF\'leri OCR ile aranabilir hale getirin. Görüntülerden ve taranmış belgelerden metin çıkarın.',
    keywords: ['ocr pdf', 'aranabilir pdf', 'metin tanıma', 'tara metne dönüştür'],
    description: `
      <p>OCR PDF, taranmış belgelerdeki ve PDF içindeki görüntülerdeki metinleri ayıklamak için Optik Karakter Tanıma teknolojisini kullanır. Görüntü tabanlı PDF\'leri aranabilir, seçilebilir metin belgelerine dönüştürün.</p>
      <p>Birden fazla dil desteği, belgenin dilinden bağımsız olarak doğru metin tanıma sağlar. Aranabilir bir metin katmanı eklenirken orijinal düzen korunur.</p>
      <p>Tüm OCR işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Taranmış PDF\'i Yükleyin', description: 'Taranmış PDF\'inizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Dil Seçin', description: 'Doğru tanıma için belgenin dilini seçin.' },
      { step: 3, title: 'İşleyin ve İndirin', description: 'OCR\'ı çalıştırmak için İşle düğmesine tıklayın ve aranabilir PDF\'i indirin.' },
    ],
    useCases: [
      { title: 'Arşivleri Dijitalleştirin', description: 'Taranmış belge arşivlerini aranabilir hale getirin.', icon: 'archive' },
      { title: 'Belge Arama', description: 'Taranmış belgelerde metin aramayı etkinleştirin.', icon: 'search' },
      { title: 'Metin Çıkarma', description: 'Düzenleme yapmak için taranmış belgelerden metinleri ayıklayın.', icon: 'type' },
    ],
    faq: [
      { question: 'Hangi diller destekleniyor?', answer: 'Türkçe, İngilizce, Çince, Japonca, Korece ve daha fazlası dahil olmak üzere 100\'den fazla dil desteklenmektedir.' },
      { question: 'Orijinal düzen korunacak mı?', answer: 'Evet, aranabilir bir metin katmanı eklenirken orijinal görsel düzen korunur.' },
      { question: 'OCR ne kadar doğru?', answer: 'Doğruluk tarama kalitesine bağlıdır ancak net belgeler için genellikle %95\'i aşar.' },
    ],
  },

  'alternate-merge': {
    title: 'Alternatifli Birleştirme',
    metaDescription: 'PDF\'leri sayfaları değiştirerek birleştirin. Ön ve arka taramaları tek bir belgede birleştirin.',
    keywords: ['alternatifli birleştirme', 'pdf harmanlama', 'taramaları birleştir', 'ön arka birleştirme'],
    description: `
      <p>Alternatifli Birleştirme, iki PDF\'yi sayfalarını sırayla birbirine geçirerek birleştirir. Bu, ayrı ayrı taranmış ön ve arka sayfaları tek bir belgede birleştirmek için mükemmeldir.</p>
      <p>İki PDF yükleyin; araç, her birinden sırayla birer sayfa alarak bunları birleştirecektir. Arkadan öne taramalar için belgelerden birinin sırasını tersine de çevirebilirsiniz.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'İki PDF Yükleyin', description: 'Ön sayfalar PDF\'ini ve arka sayfalar PDF\'ini yükleyin.' },
      { step: 2, title: 'Sırayı Yapılandırın', description: 'Arkadan öne taramalar için ikinci belgenin ters çevrilip çevrilmeyeceğini seçin.' },
      { step: 3, title: 'Birleştir ve İndir', description: 'Sayfaları harmanlamak ve indirmek için Birleştir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Çift Taraflı Tarama', description: 'Ayrı ayrı taranmış ön ve arka sayfaları birleştirin.', icon: 'copy' },
      { title: 'Belge Montajı', description: 'İlişkili iki belgeden sayfaları birbirine geçirin.', icon: 'layers' },
      { title: 'Kitap Tarama', description: 'Tek ve çift sayfa taramalarını eksiksiz kitaplar haline getirin.', icon: 'book' },
    ],
    faq: [
      { question: 'Belgelerin sayfa sayıları farklıysa ne olur?', answer: 'Daha uzun olan belgedeki fazla sayfalar sona eklenir.' },
      { question: 'Sayfa sırasını tersine çevirebilir miyim?', answer: 'Evet, birleştirmeden önce her iki belgeyi de ters çevirebilirsiniz.' },
      { question: 'Bu normal birleştirmeden farklı mı?', answer: 'Evet, normal birleştirme belgeleri art arda ekler; alternatifli birleştirme ise sayfaları birbirine geçirir (harmanlar).' },
    ],
  },

  'add-attachments': {
    title: 'Ek Ekle',
    metaDescription: 'PDF belgelerine dosya gömün. PDF\'lerinize her türden dosyayı ekleyin.',
    keywords: ['pdf ekleri', 'dosya gömme', 'pdf\'e ekle', 'pdf portfolyosu'],
    description: `
      <p>Ek Ekle, her türden dosyayı PDF belgelerinizin içine gömer. Kapsamlı PDF paketleri oluşturmak için hesap tabloları, resimler, kaynak dosyalar veya diğer belgeleri ekleyin.</p>
      <p>Ekler PDF\'in içine gömülür ve herhangi bir PDF okuyucu kullanılarak alıcılar tarafından çıkarılabilir. İlişkili dosyaları bir arada dağıtmak için mükemmeldir.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir ve dosyalarınız gizli tutulur.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Ekleri Ekleyin', description: 'PDF\'e eklenecek dosyaları seçin.' },
      { step: 3, title: 'Kaydet ve İndir', description: 'Ekleri gömmek ve indirmek için Kaydet düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Proje Paketleri', description: 'Proje dosyalarını belgelendirme PDF\'leri ile paketleyin.', icon: 'package' },
      { title: 'Rapor Dağıtımı', description: 'Kaynak veri dosyalarını rapor PDF\'lerine ekleyin.', icon: 'paperclip' },
      { title: 'Sözleşme Paketleri', description: 'Destekleyici belgeleri sözleşmelere dahil edin.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Hangi dosya türleri eklenebilir?', answer: 'Her türlü dosya türü bir PDF\'e eklenebilir.' },
      { question: 'Boyut sınırı var mı?', answer: 'Ekler dahil toplam PDF boyutu 500 MB\'ı geçmemelidir.' },
      { question: 'Alıcılar ekleri çıkarabilir mi?', answer: 'Evet, herhangi bir PDF okuyucu gömülü ekleri çıkarabilir.' },
    ],
  },

  'extract-attachments': {
    title: 'Ekleri Çıkar',
    metaDescription: 'PDF\'lerden gömülü dosyaları ayıklayın. PDF belgelerindeki tüm ekleri indirin.',
    keywords: ['ekleri çıkar', 'pdf ekleri', 'gömülü dosyaları indir', 'pdf ayıklama'],
    description: `
      <p>Ekleri Çıkar, PDF belgelerindeki tüm gömülü dosyaları geri getirir. Ekleri tek tek veya tüm dosyaları içeren bir ZIP arşivi olarak indirin.</p>
      <p>PDF paketlerine gömülmüş kaynak dosyalara, verilere veya ek materyallere erişmek için mükemmeldir.</p>
      <p>Tüm ayıklama işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Ekleri Görüntüleyin', description: 'PDF içindeki tüm gömülü dosyaların listesini görün.' },
      { step: 3, title: 'Ayıkla ve İndir', description: 'Dosyaları tek tek veya tümünü ZIP olarak indirin.' },
    ],
    useCases: [
      { title: 'Kaynak Dosyalara Erişin', description: 'PDF raporlarından orijinal veri dosyalarını çıkarın.', icon: 'download' },
      { title: 'Ekleri Kurtarın', description: 'PDF paketlerinden gömülü dosyaları geri alın.', icon: 'folder-open' },
      { title: 'Toplu Ayıklama', description: 'Aynı anda birden fazla PDF\'den ekleri ayıklayın.', icon: 'layers' },
    ],
    faq: [
      { question: 'Hiç ek yoksa ne olur?', answer: 'Herhangi bir gömülü dosya bulunamazsa araç bunu belirtecektir.' },
      { question: 'Tüm ek türleri destekleniyor mu?', answer: 'Evet, tüm gömülü dosya türleri ayıklanabilir.' },
      { question: 'Birden fazla PDF\'den ayıklama yapabilir miyim?', answer: 'Evet, birden fazla PDF\'i işleyebilir ve tüm ekleri indirebilirsiniz.' },
    ],
  },

  'extract-images': {
    title: 'PDF\'den Resim Çıkar',
    metaDescription: 'PDF dosyalarındaki tüm gömülü resimleri ayıklayın. Tek tek veya ZIP arşivi olarak indirin. Küçük resimleri otomatik olarak filtreleyin.',
    keywords: ['pdf resimlerini çıkar', 'pdf resim ayıklama', 'pdf\'ten resim al', 'pdf resimlerini indir', 'pdf\'den resme'],
    description: `
      <p>PDF\'den Resim Çıkar, PDF belgelerinizdeki tüm gömülü resimleri geri getirir. Yüksek kaliteli resimleri tek tek veya kullanışlı bir ZIP arşivi olarak indirin.</p>
      <p>Araç, özelleştirilebilir boyut eşiklerine göre simgeler ve süslemeler gibi küçük resimleri otomatik olarak filtreler. Verimli toplu ayıklama için aynı anda birden fazla PDF\'i işleyin.</p>
      <p>Tüm ayıklama işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'lerinizi Yükleyin', description: 'Bir veya daha fazla PDF dosyasını sürükleyip bırakın veya cihazınızdan seçmek için tıklayın.' },
      { step: 2, title: 'Filtre Seçeneklerini Ayarlayın', description: 'İstenmeyen küçük resimleri filtrelemek için minimum genişlik, yükseklik ve dosya boyutunu ayarlayın.' },
      { step: 3, title: 'Resimleri Ayıklayın', description: 'PDF\'lerinizdeki tüm gömülü resimleri bulmak için Ayıkla düğmesine tıklayın.' },
      { step: 4, title: 'İndirin', description: 'Resimleri tek tek veya tümünü bir ZIP arşivi olarak indirin.' },
    ],
    useCases: [
      { title: 'Fotoğraf Kurtarma', description: 'Yeniden kullanmak veya arşivlemek için PDF belgelerine gömülü fotoğrafları ve resimleri ayıklayın.', icon: 'image' },
      { title: 'Varlık Koleksiyonu', description: 'PDF raporlarındaki, sunumlardaki veya broşürlerdeki tüm grafik ve resimleri toplayın.', icon: 'folder' },
      { title: 'İçeriği Yeniden Amaçlandırma', description: 'PDF\'lerdeki resimleri diğer belgelerde, web sitelerinde veya sunumlarda kullanmak üzere ayıklayın.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Hangi resim formatları çıkarılıyor?', answer: 'Resimler mümkün olduğunda orijinal formatlarında (JPEG, PNG vb.) çıkarılır veya ham resim verileri için PNG\'ye dönüştürülür.' },
      { question: 'Neden bazı resimler eksik?', answer: 'Boyut eşiğinin altındaki küçük resimler filtrelenir. Daha küçük resimleri yakalamak için filtre ayarlarını düşürün.' },
      { question: 'Taranmış PDF\'lerden resim çıkarabilir miyim?', answer: 'Taranmış PDF\'ler genellikle her sayfa için tek bir büyük resim içerir. Sayfa bazlı dönüştürme için PDF\'den Resme aracını kullanın.' },
    ],
  },

  'edit-attachments': {
    title: 'Ekleri Düzenle',
    metaDescription: 'PDF eklerini yönetin. Gömülü dosyaları görüntüleyin, yeniden adlandırın ve kaldırın.',
    keywords: ['ekleri düzenle', 'pdf dosyalarını yönet', 'ekleri kaldır', 'ekleri yeniden adlandır'],
    description: `
      <p>Ekleri Düzenle, PDF belgelerindeki gömülü dosyaları yönetmenize olanak tanır. Tüm ekleri görüntüleyin, yeniden adlandırın veya istenmeyen dosyaları PDF\'den kaldırın.</p>
      <p>Dağıtımdan önce PDF paketlerini temizlemek veya ek bilgilerini güncellemek için mükemmeldir.</p>
      <p>Tüm düzenleme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Ekleri Yönetin', description: 'Gömülü dosyaları görüntüleyin, yeniden adlandırın veya silin.' },
      { step: 3, title: 'Kaydet ve İndir', description: 'Değişiklikleri uygulamak ve indirmek için Kaydet\'e tıklayın.' },
    ],
    useCases: [
      { title: 'PDF\'leri Temizleyin', description: 'PDF paketlerinden gereksiz ekleri kaldırın.', icon: 'trash-2' },
      { title: 'Dosyaları Yeniden Adlandırın', description: 'Netlik için ek adlarını güncelleyin.', icon: 'edit' },
      { title: 'İçeriği İnceleyin', description: 'Dağıtımdan önce gömülü dosyaları denetleyin.', icon: 'eye' },
    ],
    faq: [
      { question: 'Buraya yeni ek ekleyebilir miyim?', answer: 'Yeni dosyalar gömmek için Ek Ekle aracını kullanın.' },
      { question: 'Kaldırma işlemi kalıcı mı?', answer: 'Evet, kaldırılan ekler çıktı dosyasından geri yüklenemez.' },
      { question: 'Ekleri önizleyebilir miyim?', answer: 'Dosya adlarını ve boyutlarını görebilirsiniz; içerikleri görüntülemek için Ekleri Çıkar aracını kullanın.' },
    ],
  },

  'divide-pages': {
    title: 'Sayfaları Böl',
    metaDescription: 'PDF sayfalarını birden fazla bölüme ayırın. Sayfaları yatay veya dikey olarak bölün.',
    keywords: ['pdf sayfalarını böl', 'sayfayı ayır', 'pdf sayfasını kes', 'sayfa bölümleri'],
    description: `
      <p>Sayfaları Böl, bağımsız PDF sayfalarını birden fazla bölüme ayırır. Bir sayfadan birden fazla sayfa oluşturmak için sayfaları yatay, dikey veya bir ızgara şeklinde kesin.</p>
      <p>Sayfa başına birden fazla öğe içeren taranmış belgeleri ayırmak veya büyük formatlı sayfaları standart boyutlara bölmek için mükemmeldir.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Bölmeyi Ayarlayın', description: 'Yatay, dikey veya ızgara bölmeyi seçin ve bölüm sayısını belirleyin.' },
      { step: 3, title: 'Böl ve İndir', description: 'Sayfaları bölmek ve indirmek için Böl düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Taramaları Ayır', description: 'Birden fazla belge içeren taranmış sayfaları bölün.', icon: 'scissors' },
      { title: 'Sayfaları Yeniden Boyutlandır', description: 'Büyük sayfaları standart kağıt boyutlarına bölün.', icon: 'maximize-2' },
      { title: 'Kartlar Oluştur', description: 'Baskı için sayfaları kart boyutunda bölümlere ayırın.', icon: 'grid' },
    ],
    faq: [
      { question: 'Eşit olmayan bölümlere ayırabilir miyim?', answer: 'Şu anda bölmeler eşittir. Özel bölümler için PDF Kırp aracını kullanın.' },
      { question: 'Bölme çizgilerindeki içeriğe ne olur?', answer: 'İçerik bölme çizgisinden kesilir; önemli içeriğin sınırlarda kalmadığından emin olun.' },
      { question: 'Sadece belirli sayfaları bölebilir miyim?', answer: 'Evet, hangi sayfaların bölüneceğini seçebilirsiniz.' },
    ],
  },

  'add-blank-page': {
    title: 'Boş Sayfa Ekle',
    metaDescription: 'PDF belgelerine boş sayfalar yerleştirin. İstediğiniz pozisyona boş sayfalar ekleyin.',
    keywords: ['boş sayfa ekle', 'sayfa yerleştir', 'boş sayfa', 'pdf sayfa ekleme'],
    description: `
      <p>Boş Sayfa Ekle, PDF belgelerinize herhangi bir konuma boş sayfalar yerleştirir. Özelleştirilebilir sayfa boyutuyla mevcut sayfaların önüne, arkasına veya arasına sayfalar ekleyin.</p>
      <p>Notlar için alan eklemek, bölüm ayırıcılar oluşturmak veya belgeleri yazdırmaya hazırlamak için mükemmeldir.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Pozisyon Seçin', description: 'Boş sayfaların nereye ve kaç adet ekleneceğini seçin.' },
      { step: 3, title: 'Ekle ve İndir', description: 'Sayfaları yerleştirmek ve indirmek için Ekle düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Not Alanı', description: 'Elyazısı notlar için boş sayfalar ekleyin.', icon: 'edit-3' },
      { title: 'Bölüm Ayırıcılar', description: 'Belge bölümleri arasına boş sayfalar yerleştirin.', icon: 'minus' },
      { title: 'Baskı Hazırlığı', description: 'Önlü arkalı baskı hizalaması için sayfalar ekleyin.', icon: 'printer' },
    ],
    faq: [
      { question: 'Sayfa boyutunu seçebilir miyim?', answer: 'Evet, boş sayfalar mevcut sayfalara uyabilir veya özel boyutlar kullanılabilir.' },
      { question: 'Birden fazla boş sayfa ekleyebilir miyim?', answer: 'Evet, tek seferde istediğiniz sayıda boş sayfa ekleyebilirsiniz.' },
      { question: 'Renkli sayfalar ekleyebilir miyim?', answer: 'Renk eklemek için boş sayfaları ekledikten sonra Arka Plan Rengi aracını kullanın.' },
    ],
  },

  'reverse-pages': {
    title: 'Sayfaları Ters Çevir',
    metaDescription: 'PDF sayfa sırasını tersine çevirin. Belge sayfalarını sondan başa doğru sıralayın.',
    keywords: ['pdf ters çevir', 'sayfa sırasını değiştir', 'sayfaları tersine çevir', 'belgeyi ters çevir'],
    description: `
      <p>Sayfaları Ters Çevir, PDF belgenizdeki sayfa sırasını değiştirerek son sayfayı başa, ilk sayfayı sona getirir. Ters sırada taranmış belgeler veya özel baskı ihtiyaçları için kullanışlıdır.</p>
      <p>Araç, tüm içeriği ve biçimlendirmeyi koruyarak belgenin tamamını veya seçilen sayfa aralıklarını işler.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Sayfaları Seçin', description: 'Tüm sayfaları mı yoksa belirli bir aralığı mı tersine çevireceğinizi seçin.' },
      { step: 3, title: 'Ters Çevir ve İndir', description: 'Sayfa sırasını değiştirmek ve indirmek için Ters Çevir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Tarama Sırasını Düzelt', description: 'Ters sırada taranmış belgeleri düzeltin.', icon: 'refresh-cw' },
      { title: 'Baskı Hazırlığı', description: 'Belirli baskı gereksinimleri için sayfaları tersine çevirin.', icon: 'printer' },
      { title: 'Belgeyi Yeniden Sıralama', description: 'İnceleme için belge sırasını hızlıca tersine çevirin.', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: 'Yer imleri güncelleniyor mu?', answer: 'Evet, yer imleri doğru ters çevrilmiş sayfaları gösterecek şekilde güncellenir.' },
      { question: 'Sadece bazı sayfaları tersine çevirebilir miyim?', answer: 'Evet, tersine çevirmek için bir sayfa aralığı seçebilirsiniz.' },
      { question: 'Bu döndürme ile aynı mı?', answer: 'Hayır, ters çevirme sayfa sırasını değiştirir; döndürme ise sayfa yönünü değiştirir.' },
    ],
  },

  'rotate-pdf': {
    title: 'PDF Döndür',
    metaDescription: 'PDF sayfalarını döndürün. Sayfaları 90, 180 veya 270 derece çevirin.',
    keywords: ['pdf döndür', 'pdf sayfalarını çevir', 'pdf döndürme', 'yönü düzelt'],
    description: `
      <p>PDF Döndür, belgenizdeki sayfaları 90, 180 veya 270 derece döndürür. Yanlış yönlendirilmiş taramaları düzeltin, yatay sayfaları döndürün veya görüntüleme için sayfa yönünü ayarlayın.</p>
      <p>Tüm sayfaları tek tip döndürün veya belirli sayfaları tek tek döndürmek için seçin. Araç tüm içeriği ve biçimlendirmeyi korur.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Döndürmeyi Seçin', description: 'Döndürme açısını ve hangi sayfaların döndürüleceğini seçin.' },
      { step: 3, title: 'Döndür ve İndir', description: 'Değişiklikleri uygulamak ve indirmek için Döndür düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Taramaları Düzelt', description: 'Taranmış belgelerin yönünü düzeltin.', icon: 'rotate-cw' },
      { title: 'Yatay Sayfalar', description: 'Doğru görüntüleme için yatay sayfaları döndürün.', icon: 'monitor' },
      { title: 'Karma Yönlendirme', description: 'Karma belgelerde sayfa yönünü standartlaştırın.', icon: 'layout' },
    ],
    faq: [
      { question: 'Farklı sayfaları farklı şekillerde döndürebilir miyim?', answer: 'Evet, farklı sayfalara farklı döndürme işlemleri uygulayabilirsiniz.' },
      { question: 'Döndürme baskı kalitesini etkiler mi?', answer: 'Hayır, döndürme işlemi tüm içerik kalitesini korur.' },
      { question: 'Özel açılarla döndürebilir miyim?', answer: 'Döndürme 90 derecelik artışlarla sınırlıdır (90, 180, 270).' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up PDF (Çoklu Sayfa)',
    metaDescription: 'Bir kağıda birden fazla PDF sayfası yazdırın. 2-up, 4-up veya özel düzenler oluşturun.',
    keywords: ['n-up pdf', 'bir kağıda çok sayfa', '2-up baskı', 'sayfa montajı'],
    description: `
      <p>N-Up PDF, birden fazla sayfayı tek bir kağıt üzerine yerleştirerek 2-up, 4-up, 6-up, 9-up veya özel düzenler oluşturur. Baskı sırasında kağıttan tasarruf etmek veya dinleyici notları oluşturmak için mükemmeldir.</p>
      <p>Hazır düzenlerden birini seçin veya özel yerleşimler oluşturun. Araç, en iyi sonuçlar için sayfaları otomatik olarak ölçeklendirir ve konumlandırır.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Düzen Seçin', description: '2-up, 4-up, 6-up, 9-up veya özel bir ızgara seçin.' },
      { step: 3, title: 'Oluştur ve İndir', description: 'N-up PDF\'i oluşturmak ve indirmek için Oluştur düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Kağıt Tasarrufu', description: 'Kağıt kullanımını azaltmak için bir sayfaya birden fazla sayfa yazdırın.', icon: 'leaf' },
      { title: 'Dinleyici Notları Oluştur', description: 'Sunum slaytlarından kompakt dinleyici notları yapın.', icon: 'file-text' },
      { title: 'Belgeleri İncele', description: 'İnceleme için belgeleri ufaltılmış boyutta yazdırın.', icon: 'eye' },
    ],
    faq: [
      { question: 'Hangi düzenler mevcut?', answer: '2-up, 4-up, 6-up, 9-up ve özel ızgara düzenleri mevcuttur.' },
      { question: 'Sayfalar arasına kenarlık ekleyebilir miyim?', answer: 'Evet, sayfalar arasına kenarlık ve boşluk (gutter) ekleyebilirsiniz.' },
      { question: 'Sayfa sırası korunuyor mu?', answer: 'Evet, sayfalar okuma sırasına göre (soldan sağa, yukarıdan aşağıya) yerleştirilir.' },
    ],
  },

  'combine-single-page': {
    title: 'Tek Sayfada Birleştir',
    metaDescription: 'PDF sayfalarını tek bir kesintisiz sayfa olarak birleştirin. Kaydırılabilir tek sayfalı belgeler oluşturun.',
    keywords: ['sayfaları birleştir', 'tek sayfa pdf', 'sayfaları dik', 'kesintisiz kaydırma'],
    description: `
      <p>Tek Sayfada Birleştir, tüm PDF sayfalarını tek bir kesintisiz sayfa olacak şekilde uç uca ekler. Web görünümü veya kesintisiz okuma için mükemmel kaydırılabilir belgeler oluşturun.</p>
      <p>Sayfalar özelleştirilebilir boşluklarla dikey olarak birleştirilir. Sonuç, tüm içeriği barındıran tek bir uzun sayfadır.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Boşluğu Ayarlayın', description: 'Birleştirilen sayfalar arasındaki boşluğu seçin.' },
      { step: 3, title: 'Birleştir ve İndir', description: 'Tek sayfalı PDF\'yi oluşturmak için Birleştir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Web Belgeleri', description: 'Web sitelerine gömmek için kaydırılabilir PDF\'ler oluşturun.', icon: 'globe' },
      { title: 'Kesintisiz Okuma', description: 'Sayfalandırılmış belgeleri kesintisiz kaydırmaya dönüştürün.', icon: 'scroll' },
      { title: 'Uzun Form İçerik', description: 'Kesintisiz uzun form okuma için sayfaları birleştirin.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Sayfa sınırı var mı?', answer: 'Çok uzun belgeler tarayıcı bellek kapasitesiyle sınırlı olabilir.' },
      { question: 'Sayfalar arasına ayırıcı ekleyebilir miyim?', answer: 'Evet, orijinal sayfalar arasına boşluk veya çizgiler ekleyebilirsiniz.' },
      { question: 'Bu baskı için uygun mu?', answer: 'Sonuç en iyi ekran görüntüleme içindir; baskı düzenleri için N-Up aracını kullanın.' },
    ],
  },

  'view-metadata': {
    title: 'Meta Verileri Görüntüle',
    metaDescription: 'PDF belge özelliklerini görüntüleyin. Yazar, başlık, tarihler ve diğer meta verileri görün.',
    keywords: ['pdf meta verileri', 'belge özellikleri', 'pdf bilgisi', 'pdf ayrıntılarını gör'],
    description: `
      <p>Meta Verileri Görüntüle, PDF dosyalarınızdaki tüm belge özelliklerini ve meta verileri görüntüler. Yazar, başlık, konu, anahtar kelimeler, oluşturma tarihi, değiştirme tarihi ve daha fazlasını görün.</p>
      <p>Belgeleri denetlemek, dosya bilgilerini kontrol etmek veya belge orijinalliğini doğrulamak için kullanışlıdır.</p>
      <p>Tüm görüntüleme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Özellikleri Görüntüleyin', description: 'Tüm meta verileri düzenli bir formatta görün.' },
      { step: 3, title: 'Gerekirse Dışa Aktarın', description: 'İsteğe bağlı olarak meta verileri JSON olarak dışa aktarın.' },
    ],
    useCases: [
      { title: 'Belge Denetimi', description: 'Uyumluluk için belge özelliklerini inceleyin.', icon: 'clipboard-check' },
      { title: 'Orijinalliği Doğrula', description: 'Oluşturma tarihlerini ve yazar bilgilerini kontrol edin.', icon: 'shield' },
      { title: 'Dosya Bilgisi', description: 'PDF dosyaları hakkında detaylı bilgi alın.', icon: 'info' },
    ],
    faq: [
      { question: 'Hangi meta veriler gösteriliyor?', answer: 'Başlık, yazar, konu, anahtar kelimeler, oluşturucu, üretici, tarihler ve PDF sürümü.' },
      { question: 'Burada meta verileri düzenleyebilir miyim?', answer: 'Belge özelliklerini değiştirmek için Meta Verileri Düzenle aracını kullanın.' },
      { question: 'XMP meta verileri dahil mi?', answer: 'Evet, hem standart hem de XMP meta verileri görüntülenir.' },
    ],
  },

  'edit-metadata': {
    title: 'Meta Verileri Düzenle',
    metaDescription: 'PDF belge özelliklerini düzenleyin. Başlık, yazar, konu ve anahtar kelimeleri değiştirin.',
    keywords: ['pdf meta verilerini düzenle', 'pdf özelliklerini değiştir', 'pdf yazarı', 'belge bilgisi'],
    description: `
      <p>Meta Verileri Düzenle, PDF dosyalarınızdaki belge özelliklerini değiştirmenize olanak tanır. Başlık, yazar, konu, anahtar kelimeler ve diğer meta veri alanlarını güncelleyin.</p>
      <p>Belge bilgilerini düzeltmek, uygun atıf eklemek veya dosyaları dağıtıma hazırlamak için mükemmeldir.</p>
      <p>Tüm düzenleme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Özellikleri Düzenleyin', description: 'Başlık, yazar, konu, anahtar kelimeler ve diğer alanları değiştirin.' },
      { step: 3, title: 'Kaydet ve İndir', description: 'Değişiklikleri uygulamak ve indirmek için Kaydet düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Atıf Ekle', description: 'Uygun yazar ve oluşturucu bilgilerini ayarlayın.', icon: 'user' },
      { title: 'SEO Optimizasyonu', description: 'Aranabilirlik için anahtar kelimeler ve açıklamalar ekleyin.', icon: 'search' },
      { title: 'Belge Hazırlığı', description: 'Paylaşmadan önce belgeleri uygun meta verilerle hazırlayın.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Hangi alanları düzenleyebilirim?', answer: 'Başlık, yazar, konu, anahtar kelimeler, oluşturucu ve üretici alanları.' },
      { question: 'Tüm meta verileri temizleyebilir miyim?', answer: 'Tüm belge özelliklerini kaldırmak için Meta Verileri Kaldır aracını kullanın.' },
      { question: 'Tarihler düzenlenebilir mi?', answer: 'Oluşturma ve değiştirme tarihleri otomatik olarak güncellenir.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDF\'leri ZIP\'le',
    metaDescription: 'Birden fazla PDF\'i bir ZIP arşivinde paketleyin. PDF dosyalarını sıkıştırın ve demetleyin.',
    keywords: ['pdf to zip', 'pdfleri sıkıştır', 'pdf demetle', 'pdf arşivle'],
    description: `
      <p>PDF\'leri ZIP\'le, birden fazla PDF dosyasını tek bir ZIP arşivi içinde paketler. Daha kolay paylaşım, depolama veya yedekleme için PDF\'lerinizi sıkıştırın ve demetleyin.</p>
      <p>Araç, tüm PDF dosyalarınızı içeren sıkıştırılmış bir arşiv oluşturarak toplam boyutu azaltır ve dosya yönetimini basitleştirir.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece dosyalarınız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'leri Yükleyin', description: 'Birden fazla PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Arşivi Yapılandırın', description: 'İsteğe bağlı olarak arşiv adını ve sıkıştırma seviyesini ayarlayın.' },
      { step: 3, title: 'Oluştur ve İndir', description: 'ZIP arşivini oluşturmak için Oluştur düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Dosya Paylaşımı', description: 'Daha kolay paylaşım için birden fazla PDF\'i demetleyin.', icon: 'share-2' },
      { title: 'Yedek Oluşturma', description: 'PDF koleksiyonlarının sıkıştırılmış yedeklerini oluşturun.', icon: 'archive' },
      { title: 'E-posta Ekleri', description: 'E-posta için PDF\'leri tek bir ekte birleştirin.', icon: 'mail' },
    ],
    faq: [
      { question: 'Ne kadar sıkıştırma uygulanıyor?', answer: 'ZIP sıkıştırması genellikle toplam boyutu %10-30 oranında azaltır.' },
      { question: 'Dosya sınırı var mı?', answer: 'Tek bir arşive 100 adede kadar PDF dahil edebilirsiniz.' },
      { question: 'Parola koyabilir miyim?', answer: 'Parola korumalı ZIP oluşturma şu anda desteklenmemektedir.' },
    ],
  },

  'compare-pdfs': {
    title: 'PDF\'leri Karşılaştır',
    metaDescription: 'İki PDF belgesini karşılaştırın. Sürümler arasındaki farkları vurgulayın.',
    keywords: ['pdfleri karşılaştır', 'pdf farkı', 'belge karşılaştırma', 'sürüm karşılaştırma'],
    description: `
      <p>PDF\'leri Karşılaştır, iki PDF belgesini analiz eder ve aralarındaki farkları vurgular. Belge revizyonlarını incelemek, sözleşme değişikliklerini kontrol etmek veya düzenlemeleri doğrulamak için mükemmeldir.</p>
      <p>Belgeleri yan yana veya farkların vurgulandığı üst üste bindirme (overlay) modunda görüntüleyin. Araç; metin değişikliklerini, eklemeleri ve silmeleri tanımlar.</p>
      <p>Tüm karşılaştırma işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'İki PDF Yükleyin', description: 'Orijinal ve değiştirilmiş PDF belgelerini yükleyin.' },
      { step: 2, title: 'Belgeleri Karşılaştırın', description: 'Yan yana veya üst üste bindirme modunda vurgulanan farkları görün.' },
      { step: 3, title: 'Sonuçları Dışa Aktarın', description: 'İsteğe bağlı olarak bir karşılaştırma raporu veya notlandırılmış PDF indirin.' },
    ],
    useCases: [
      { title: 'Sözleşme İnceleme', description: 'Değişiklikleri tanımlamak için sözleşme sürümlerini karşılaştırın.', icon: 'file-text' },
      { title: 'Belge Revizyonu', description: 'Belge sürümleri arasındaki düzenlemeleri inceleyin.', icon: 'git-compare' },
      { title: 'Kalite Güvencesi', description: 'Sadece istenen değişikliklerin yapıldığını doğrulayın.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Ne tür farklar algılanıyor?', answer: 'Metin eklemeleri, silmeleri, modifikasyonları ve biçimlendirme değişiklikleri.' },
      { question: 'Taranmış belgeleri karşılaştırabilir miyim?', answer: 'Taranmış belgeler metin karşılaştırması için önce OCR işleminden geçirilmelidir.' },
      { question: 'Görsel karşılaştırma mevcut mu?', answer: 'Evet, üst üste bindirme modu sayfalar arasındaki görsel farkları gösterir.' },
    ],
  },

  'posterize-pdf': {
    title: 'Poster Hazırla (PDF Posterize)',
    metaDescription: 'Büyük PDF sayfalarını basılabilir parçalara bölün. PDF sayfalarından posterler oluşturun.',
    keywords: ['pdf poster yap', 'pdf döşeme', 'büyük format baskı', 'pdf poster'],
    description: `
      <p>Poster Hazırla, büyük PDF sayfalarını standart kağıda basılabilecek ve poster olarak birleştirilebilecek daha küçük parçalara (tile) böler. Büyük diyagramlar, haritalar veya sanat eserlerini basmak için mükemmeldir.</p>
      <p>Kolay montaj için ızgara boyutunu ve üst üste binme (overlap) miktarını yapılandırın. Araç, hedef çıktı boyutunuz için parça boyutlarını otomatik olarak hesaplar.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Büyük boyutlu PDF\'inizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Parçaları Yapılandırın', description: 'Izgara boyutunu, üst üste binme miktarını ve çıktı kağıt boyutunu ayarlayın.' },
      { step: 3, title: 'Oluştur ve İndir', description: 'Basılabilir parçaları oluşturmak için Oluştur düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Poster Basımı', description: 'Standart kağıda büyük posterler basın.', icon: 'maximize-2' },
      { title: 'Harita Basımı', description: 'Büyük haritaları montaj için bölümler halinde basın.', icon: 'map' },
      { title: 'Sanat Eseri Reprodüksiyonu', description: 'PDF sanat eserlerinden büyük baskılar oluşturun.', icon: 'image' },
    ],
    faq: [
      { question: 'Hangi üst üste binme miktarını kullanmalıyım?', answer: 'Montaj sırasında kolay hizalama için 10-20 mm üst üste binme önerilir.' },
      { question: 'Kesim işaretleri ekleyebilir miyim?', answer: 'Evet, kesme ve hizalamaya yardımcı olması için kesim işaretleri (crop marks) eklenebilir.' },
      { question: 'Hangi kağıt boyutları destekleniyor?', answer: 'A4, Letter, A3 ve özel boyutlar desteklenmektedir.' },
    ],
  },

  // ==================== OPTIMIZE & REPAIR ====================
  'fix-page-size': {
    title: 'Sayfa Boyutunu Sabitle',
    metaDescription: 'PDF sayfa boyutlarını standartlaştırın. Tüm sayfaları tek tip boyutlara dönüştürün.',
    keywords: ['sayfa boyutunu sabitle', 'pdf standartlaştır', 'tek tip sayfalar', 'pdf sayfası yeniden boyutlandır'],
    description: `
      <p>Sayfa Boyutunu Sabitle, PDF\'inizdeki tüm sayfaları standart bir boyuta getirir. Karmaşık boyutlara sahip belgeleri profesyonel sunum veya baskı için tutarlı sayfa boyutlarına dönüştürün.</p>
      <p>Standart boyutlar (A4, Letter vb.) arasından seçim yapın veya özel boyutlar belirleyin. İçerik, yeni sayfa boyutuna sığacak şekilde ölçeklendirilir veya konumlandırılır.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Hedef Boyutu Seçin', description: 'Standart bir boyut seçin veya özel boyutlar girin.' },
      { step: 3, title: 'Uygula ve İndir', description: 'Sayfaları standartlaştırmak ve indirmek için Uygula düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Baskı Hazırlığı', description: 'Tutarlı baskı için sayfaları standartlaştırın.', icon: 'printer' },
      { title: 'Belge Temizleme', description: 'Uyumsuz sayfa boyutlarına sahip belgeleri düzeltin.', icon: 'file-check' },
      { title: 'Profesyonel Belgeler', description: 'Dağıtım için tek tip belgeler oluşturun.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'İçerik nasıl işleniyor?', answer: 'İçerik, yeni sayfa boyutuna sığacak şekilde ölçeklendirilir veya ortalanır.' },
      { question: 'En-boy oranını koruyabilir miyim?', answer: 'Evet, içerik orantılı olarak ölçeklendirilebilir.' },
      { question: 'Hangi standart boyutlar mevcut?', answer: 'A4, A3, Letter, Legal ve diğer yaygın boyutlar.' },
    ],
  },

  'linearize-pdf': {
    title: 'PDF Linearize (Web İçin Optimize Et)',
    metaDescription: 'PDF\'i hızlı web görünümü için optimize edin. Kademeli yüklemeyi etkinleştirin.',
    keywords: ['linearize pdf', 'hızlı web görünümü', 'pdf optimize et', 'progresif pdf'],
    description: `
      <p>Linearize PDF, belgelerinizi hızlı web görünümü için optimize eder. Linearize edilmiş PDF\'ler, dosyanın tamamı indirilmeden görüntülenmeye başlayarak kullanıcı deneyimini iyileştirir.</p>
      <p>"Hızlı Web Görünümü" olarak da bilinen bu optimizasyon, web tarayıcılarında kademeli yükleme için PDF yapısını yeniden düzenler.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Linearize Et', description: 'Web görünümü için optimize etmek için Linearize Et düğmesine tıklayın.' },
      { step: 3, title: 'İndir', description: 'Optimize edilmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Web Yayıncılığı', description: 'Web sitesi indirmeleri için PDF\'leri optimize edin.', icon: 'globe' },
      { title: 'E-posta Ekleri', description: 'Alıcılar için daha hızlı açılan PDF\'ler oluşturun.', icon: 'mail' },
      { title: 'Çevrimiçi Belgeler', description: 'Çevrimiçi belgeler için görüntüleme deneyimini iyileştirin.', icon: 'cloud' },
    ],
    faq: [
      { question: 'Linearizasyon nedir?', answer: 'Linearizasyon, kademeli yükleme için PDF verilerini yeniden düzenler.' },
      { question: 'Dosya boyutunu küçültür mü?', answer: 'Linearizasyon, eklenen yapı nedeniyle dosya boyutunu biraz artırabilir.' },
      { question: 'Tüm görüntüleyicilerle uyumlu mu?', answer: 'Evet, linearize edilmiş PDF\'ler tüm PDF okuyucularda çalışır.' },
    ],
  },

  'page-dimensions': {
    title: 'Sayfa Boyutları',
    metaDescription: 'PDF sayfa boyutlarını analiz edin. Belgenizdeki tüm sayfaların boyutlarını görüntüleyin.',
    keywords: ['pdf sayfa boyutu', 'sayfa boyutları', 'pdf ölçümleri', 'belge boyutu'],
    description: `
      <p>Sayfa Boyutları, PDF belgenizdeki her sayfanın boyutunu analiz eder ve görüntüler. Çeşitli birimlerde (inç, mm, punto) boyutları görün ve standart dışı boyutlardaki sayfaları tanımlayın.</p>
      <p>Baskı hazırlığı, belge analizi veya tutarsız sayfa boyutlarını tanımlamak için kullanışlıdır.</p>
      <p>Tüm analizler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Boyutları Görüntüleyin', description: 'Tüm sayfalar için sayfa boyutlarının görüntülendiğini görün.' },
      { step: 3, title: 'Raporu Dışa Aktarın', description: 'İsteğe bağlı olarak boyutları JSON olarak dışa aktarın.' },
    ],
    useCases: [
      { title: 'Baskı Planlaması', description: 'Baskıdan önce sayfa boyutlarını kontrol edin.', icon: 'printer' },
      { title: 'Belge Analizi', description: 'Olağandışı boyutlardaki sayfaları tanımlayın.', icon: 'search' },
      { title: 'Kalite Kontrol', description: 'Sayfa boyutlarının özelliklere uygunluğunu doğrulayın.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Hangi birimler mevcut?', answer: 'İnç, milimetre, santimetre ve punto.' },
      { question: 'Yönlendirmeyi gösteriyor mu?', answer: 'Evet, portre veya peyzaj yönlendirmesi belirtilir.' },
      { question: 'Tutarsız boyutları düzeltebilir miyim?', answer: 'Boyutları standartlaştırmak için Sayfa Boyutunu Sabitle aracını kullanın.' },
    ],
  },

  'remove-restrictions': {
    title: 'Kısıtlamaları Kaldır',
    metaDescription: 'PDF kısıtlamalarını kaldırın. Yazdırma, kopyalama ve düzenleme izinlerinin kilidini açın.',
    keywords: ['pdf kısıtlamalarını kaldır', 'pdf kilit aç', 'pdf izinleri', 'kısıtlamasız pdf'],
    description: `
      <p>Kısıtlamaları Kaldır, yazdırmayı, kopyalamayı veya düzenlemeyi engelleyen izin kısıtlamalarına sahip PDF\'lerin kilidini açar. Bu araç, belge içeriğini korurken sahip parolası kısıtlamalarını kaldırır.</p>
      <p>Not: Bu araç, belgenin açılmasını engelleyen kullanıcı parolalarını kaldıramaz. Parola korumalı dosyalar için PDF Şifresini Çöz aracını kullanın.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Kısıtlanmış PDF\'i Yükleyin', description: 'Kısıtlanmış PDF\'inizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Kısıtlamaları Kaldır', description: 'Belgenin kilidini açmak için Kaldır düğmesine tıklayın.' },
      { step: 3, title: 'İndir', description: 'Kısıtlamasız PDF\'i indirin.' },
    ],
    useCases: [
      { title: 'Yazdırmayı Etkinleştir', description: 'Yazdırmayı engelleyen PDF\'lerin kilidini açın.', icon: 'printer' },
      { title: 'Kopyalamayı Etkinleştir', description: 'Metin seçimine ve kopyalamaya izin verin.', icon: 'copy' },
      { title: 'Düzenlemeyi Etkinleştir', description: 'Belge düzenleme üzerindeki kısıtlamaları kaldırın.', icon: 'edit' },
    ],
    faq: [
      { question: 'Bu yasal mı?', answer: 'Sahibi olduğunuz veya haklarına sahip olduğunuz belgelerden kısıtlamaları kaldırmak genellikle yasaldır.' },
      { question: 'Açılış parolalarını kaldırabilir mi mi?', answer: 'Hayır, parola korumalı belgeler için PDF Şifresini Çöz aracını kullanın.' },
      { question: 'İçerik etkilenecek mi?', answer: 'Hayır, sadece kısıtlamalar kaldırılır; içerik değişmeden kalır.' },
    ],
  },

  'repair-pdf': {
    title: 'PDF Onar',
    metaDescription: 'Bozuk PDF dosyalarını düzeltin. Hasarlı belgeleri kurtarın ve onarın.',
    keywords: ['pdf onar', 'pdf düzelt', 'pdf kurtar', 'bozuk pdf'],
    description: `
      <p>PDF Onar, bozuk veya hasarlı PDF dosyalarını düzeltmeye çalışır. Araç, belge yapısını analiz eder ve mümkün olduğunca fazla içeriği kurtarmak için yapıyı yeniden oluşturur.</p>
      <p>Açılmayan, hata veren veya bozulma nedeniyle içeriği eksik olan dosyaları kurtarmak için kullanışlıdır.</p>
      <p>Tüm onarım işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Hasarlı PDF\'i Yükleyin', description: 'Bozuk PDF\'inizi sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Belgeyi Onar', description: 'Kurtarmayı denemek için Onar düğmesine tıklayın.' },
      { step: 3, title: 'İndir', description: 'Başarılı olursa onarılan PDF\'i indirin.' },
    ],
    useCases: [
      { title: 'Dosyaları Kurtar', description: 'Düzgün açılmayan PDF\'leri kurtarın.', icon: 'refresh-cw' },
      { title: 'Hataları Düzelt', description: 'Hata mesajları gösteren dosyaları onarın.', icon: 'wrench' },
      { title: 'İçeriği Geri Yükle', description: 'Kısmen bozulmuş dosyalardan içerikleri kurtarın.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Tüm PDF\'ler onarılabilir mi?', answer: 'Başarı, bozulmanın türüne ve derecesine bağlıdır.' },
      { question: 'Tüm içerik kurtarılacak mı?', answer: 'Araç mümkün olduğunca fazlasını kurtarır; ağır hasarlı dosyalarda kayıplar olabilir.' },
      { question: 'Orijinalini saklamalı mıyım?', answer: 'Evet, orijinal dosyayı her zaman yedek olarak saklayın.' },
    ],
  },

  // ==================== SECURE PDF ====================
  'encrypt-pdf': {
    title: 'PDF Şifrele',
    metaDescription: 'PDF dosyalarını parolayla koruyun. Şifreleme ekleyin ve izinleri ayarlayın.',
    keywords: ['pdf şifrele', 'parola korumalı pdf', 'güvenli pdf', 'pdf şifreleme'],
    description: `
      <p>PDF Şifrele, PDF belgelerinize parola koruması ve şifreleme ekler. Açılmayı önlemek için kullanıcı parolaları, yazdırma ve kopyalama gibi izinleri kontrol etmek için sahip parolaları ayarlayın.</p>
      <p>Farklı güvenlik ihtiyaçları için çeşitli şifreleme seviyeleri (128-bit veya 256-bit AES) arasından seçim yapın.</p>
      <p>Tüm şifreleme işlemleri tarayıcınızda gerçekleşir, böylece parolalarınız ve belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Parolaları Ayarlayın', description: 'Kullanıcı parolası ve/veya sahip parolası girin. İzinleri yapılandırın.' },
      { step: 3, title: 'Şifrele ve İndir', description: 'PDF\'inizi güvence altına almak için Şifrele düğmesine tıklayın ve indirin.' },
    ],
    useCases: [
      { title: 'Gizli Belgeler', description: 'Hassas iş belgelerini koruyun.', icon: 'lock' },
      { title: 'Kişisel Dosyalar', description: 'Vergi beyannameleri gibi kişisel belgeleri güvenceye alın.', icon: 'shield' },
      { title: 'Kontrollü Dağıtım', description: 'Alıcıların belgelerle neler yapabileceğini sınırlayın.', icon: 'key' },
    ],
    faq: [
      { question: 'Kullanıcı ve sahip parolası arasındaki fark nedir?', answer: 'Kullanıcı parolası açmayı engeller; sahip parolası izinleri kontrol eder.' },
      { question: 'Hangi şifreleme kullanılıyor?', answer: '128-bit veya 256-bit AES şifreleme seçenekleri mevcuttur.' },
      { question: 'Kullanıcı parolası olmadan izinleri ayarlayabilir miyim?', answer: 'Evet, izinleri kontrol etmek için sadece bir sahip parolası ayarlayabilirsiniz.' },
    ],
  },

  'sanitize-pdf': {
    title: 'PDF Temizle (Sanitize)',
    metaDescription: 'PDF\'lerden gizli verileri kaldırın. Meta verileri, betikleri ve hassas bilgileri temizleyin.',
    keywords: ['sanitize pdf', 'pdf temizle', 'gizli verileri kaldır', 'pdf gizliliği'],
    description: `
      <p>PDF Temizle, belgelerinizden gizli verileri ve potansiyel olarak hassas bilgileri kaldırır. Meta verileri, gömülü betikleri, ekleri, yorumları ve diğer gizli içerikleri ayıklayın.</p>
      <p>Belgeleri kamuya açık dağıtıma hazırlarken veya gizlilik endişesi olduğunda temel bir araçtır.</p>
      <p>Tüm temizleme işlemleri tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Nelerin Kaldırılacağını Seçin', description: 'Hangi tür gizli verilerin ayıklanacağını seçin.' },
      { step: 3, title: 'Temizle ve İndir', description: 'PDF\'i temizlemek ve indirmek için Temizle düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Kamuya Açık Yayın', description: 'Belgeleri kamuya açık dağıtıma hazırlayın.', icon: 'globe' },
      { title: 'Gizlilik Koruması', description: 'Paylaşmadan önce kişisel bilgileri kaldırın.', icon: 'shield' },
      { title: 'Güvenlik Uyumluluğu', description: 'Belge işleme için güvenlik gereksinimlerini karşılayın.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Hangi gizli veriler kaldırılıyor?', answer: 'Meta veriler, betikler, ekler, yorumlar, form verileri ve gizli katmanlar.' },
      { question: 'Görünür içerik etkilenecek mi?', answer: 'Hayır, sadece gizli veriler kaldırılır; görünür içerik kalır.' },
      { question: 'Bu işlem geri alınabilir mi?', answer: 'Hayır, kaldırılan veriler geri yüklenemez. Orijinalin bir yedeğini saklayın.' },
    ],
  },

  'find-and-redact': {
    title: 'Bul ve Karart (Redact)',
    metaDescription: 'PDF\'in tüm sayfalarında metin arayın ve karartın. Hesap numaraları, isimler ve daha fazlası gibi hassas bilgileri topluca karartın.',
    keywords: ['pdf karart', 'bul ve karart', 'toplu karartma', 'metin kaldır', 'pdf sansür', 'hassas veriyi gizle'],
    description: `
      <p>Bul ve Karart, PDF\'inizin tüm sayfalarında belirli metinleri, sayıları veya kalıpları aramanıza ve eşleşen tüm durumları tek seferde karartmanıza olanak tanır. Hesap numaraları, isimler, adresler veya herhangi bir gizli veri gibi hassas bilgileri kaldırmak için mükemmeldir.</p>
      <p>Karartmaları uygulamadan önce tüm eşleşmeleri önizleyin ve hangi durumların karartılacağını seçin. Gelişmiş kalıp eşleştirme için büyük/küçük harf duyarlı arama, tam kelime eşleştirme ve düzenli ifadeleri (regex) destekler.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli ve güvenli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Metin Arayın', description: 'Bulmak ve karartmak istediğiniz metni, sayıyı veya regex kalıbını girin.' },
      { step: 3, title: 'İnceleyin ve Seçin', description: 'Tüm eşleşmeleri önizleyin ve hangilerinin karartılacağını seçin.' },
      { step: 4, title: 'Karartmayı Uygula', description: 'Karartma görünümünü özelleştirin ve seçilen eşleşmelere uygulayın.' },
    ],
    useCases: [
      { title: 'Gizlilik Uyumluluğu', description: 'KVKK, GDPR, HIPAA veya diğer düzenlemelere uymak için kişisel bilgileri karartın.', icon: 'shield' },
      { title: 'Hukuki Belgeler', description: 'Paylaşmadan önce hukuki belgelerden gizli verileri kaldırın.', icon: 'scale' },
      { title: 'Finansal Kayıtlar', description: 'Ekstrelerden hesap numaralarını, kimlik numaralarını veya finansal verileri karartın.', icon: 'credit-card' },
    ],
    faq: [
      { question: 'Karartma kalıcı mıdır?', answer: 'Evet, karartma alttaki metni kalıcı olarak kaldırır. Orijinal içerik geri yüklenemez. Her zaman orijinal dosyanın bir yedeğini saklayın.' },
      { question: 'Görselleri veya taranmış metinleri karartabilir miyim?', answer: 'Bu araç metin tabanlı PDF\'lerle çalışır. Taranmış belgeler için manuel alan tabanlı karartma kullanmanız gerekir.' },
      { question: 'Karartma görünümünü özelleştirebilir miyim?', answer: 'Evet, karartma rengini ayarlayabilir, kenarlık ekleyebilir ve isteğe bağlı olarak "[KARARTILDI]" gibi bir yer değiştirme metni ekleyebilirsiniz.' },
      { question: 'Regex araması nasıl çalışır?', answer: '"Düzenli İfade Kullan" seçeneğini etkinleştirerek regex kalıplarıyla arama yapın. Örneğin, kredi kartı numaralarını bulmak için \\d{4}-\\d{4}-\\d{4}-\\d{4} kullanabilirsiniz.' },
    ],
  },


  'decrypt-pdf': {
    title: 'PDF Şifresini Çöz',
    metaDescription: 'PDF dosyalarından parolayı kaldırın. Parola korumalı belgelerin kilidini açın.',
    keywords: ['pdf şifre çöz', 'pdf parolası kaldır', 'pdf kilit aç', 'pdf parola çıkarıcı'],
    description: `
      <p>PDF Şifresini Çöz, PDF belgelerinden parola korumasını kaldırır. Dosyanın kilidini açmak ve korumasız bir kopya oluşturmak için geçerli parolayı girin.</p>
      <p>Bu araç, mevcut parolayı bilmenizi gerektirir. Bilinmeyen parolaları kıramaz veya atlayamaz.</p>
      <p>Tüm şifre çözme işlemleri tarayıcınızda gerçekleşir, böylece parolalarınız ve belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Korumalı PDF\'i Yükleyin', description: 'Parola korumalı PDF\'inizi sürükleyip bırakın.' },
      { step: 2, title: 'Parolayı Girin', description: 'Mevcut belge parolasını girin.' },
      { step: 3, title: 'Şifreyi Çöz ve İndir', description: 'Korumayı kaldırmak ve indirmek için Şifreyi Çöz düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Eski Parolaları Kaldır', description: 'Parolaya artık ihtiyaç duyulmadığında belgelerin kilidini açın.', icon: 'unlock' },
      { title: 'Erişimi Kolaylaştır', description: 'Daha kolay paylaşım için korumasız kopyalar oluşturun.', icon: 'share-2' },
      { title: 'Belgeleri Arşivle', description: 'Uzun süreli arşivlemeden önce parolaları kaldırın.', icon: 'archive' },
    ],
    faq: [
      { question: 'Bilinmeyen parolaları kırabilir mi?', answer: 'Hayır, şifreyi çözmek için mevcut parolayı bilmeniz gerekir.' },
      { question: 'Orijinal dosya değiştirilir mi?', answer: 'Hayır, yeni bir korumasız kopya oluşturulur.' },
      { question: 'Parolayı unuttuysam ne olur?', answer: 'Maalesef unutulan parolaları kurtaramıyoruz.' },
    ],
  },

  'flatten-pdf': {
    title: 'PDF Düzleştir (Flatten)',
    metaDescription: 'PDF formlarını ve ek açıklamalarını düzleştirin. İçeriği düzenlenemez hale getirin.',
    keywords: ['pdf düzleştir', 'formları düzleştir', 'açıklamaları düzleştir', 'düzenlenemez pdf'],
    description: `
      <p>PDF Düzleştir, form alanları ve ek açıklamalar gibi etkileşimli öğeleri statik içeriğe dönüştürür. Düzleştirilmiş PDF aynı görünür ancak artık düzenlenemez.</p>
      <p>Doldurulmuş formları kesinleştirmek, ek açıklamaları korumak veya düzenlenemez belge sürümleri oluşturmak için mükemmeldir.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Formlar veya ek açıklamalar içeren PDF\'inizi sürükleyip bırakın.' },
      { step: 2, title: 'Nelerin Düzleştirileceğini Seçin', description: 'Formları, ek açıklamaları veya her ikisini birden düzleştirmeyi seçin.' },
      { step: 3, title: 'Düzleştir ve İndir', description: 'Statik PDF\'yi oluşturmak için Düzleştir düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Formları Kesinleştir', description: 'Değişiklikleri önlemek için doldurulmuş form verilerini kilitleyin.', icon: 'lock' },
      { title: 'Açıklamaları Koru', description: 'Ek açıklamaları belgede kalıcı hale getirin.', icon: 'check-circle' },
      { title: 'Belgeleri Arşivle', description: 'Arşivleme için düzenlenemez sürümler oluşturun.', icon: 'archive' },
    ],
    faq: [
      { question: 'Düzleştirme geri alınabilir mi?', answer: 'Hayır, düzleştirme kalıcıdır. Orijinalin bir yedeğini saklayın.' },
      { question: 'Görünüm değişecek mi?', answer: 'Hayır, belge aynı görünür ancak artık etkileşimli değildir.' },
      { question: 'Dosya boyutunu küçültür mü?', answer: 'Etkileşimli öğeler daha basit içeriğe dönüştürüldüğü için bazen küçültebilir.' },
    ],
  },

  'remove-metadata': {
    title: 'Meta Verileri Kaldır',
    metaDescription: 'PDF dosyalarından meta verileri ayıklayın. Yazar, tarihler ve belge özelliklerini kaldırın.',
    keywords: ['pdf meta verilerini kaldır', 'meta verileri temizle', 'pdf gizliliği', 'anonim pdf'],
    description: `
      <p>Meta Verileri Kaldır, PDF dosyalarınızdaki tüm belge özelliklerini ve meta verileri ayıklar. Yazar adlarını, oluşturma tarihlerini, yazılım bilgilerini ve diğer tanımlayıcı verileri kaldırın.</p>
      <p>Belgeleri paylaşırken veya meta verilerin hassas bilgileri ortaya çıkarabileceği durumlarda gizlilik için gereklidir.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Meta Verileri Kaldır', description: 'Tüm meta verileri ayıklamak için Kaldır düğmesine tıklayın.' },
      { step: 3, title: 'İndir', description: 'Meta verisiz PDF\'i indirin.' },
    ],
    useCases: [
      { title: 'Gizlilik Koruması', description: 'Paylaşmadan önce kişisel bilgileri kaldırın.', icon: 'shield' },
      { title: 'Anonim Belgeler', description: 'Yazar atfı olmadan belgeler oluşturun.', icon: 'user-x' },
      { title: 'Temiz Dağıtım', description: 'Belgeleri dahili meta veriler olmadan dağıtın.', icon: 'send' },
    ],
    faq: [
      { question: 'Hangi meta veriler kaldırılıyor?', answer: 'Başlık, yazar, konu, anahtar kelimeler, tarihler, oluşturucu ve üretici bilgileri.' },
      { question: 'XMP meta verileri kaldırılıyor mu?', answer: 'Evet, hem standart hem de XMP meta verileri ayıklanır.' },
      { question: 'İçerik etkilenecek mi?', answer: 'Hayır, sadece meta veriler kaldırılır; belge içeriği değişmeden kalır.' },
    ],
  },

  'change-permissions': {
    title: 'İzinleri Değiştir',
    metaDescription: 'PDF izinlerini değiştirin. Yazdırma, kopyalama ve düzenleme erişimini kontrol edin.',
    keywords: ['pdf izinleri', 'pdf erişimini değiştir', 'pdf kısıtla', 'pdf güvenliği'],
    description: `
      <p>İzinleri Değiştir, PDF belgelerinizdeki erişim kontrollerini değiştirir. Yazdırma, kopyalama, düzenleme ve ek açıklama ekleme izinlerini etkinleştirin veya devre dışı bırakın.</p>
      <p>Bu kısıtlamaları uygulamak için bir sahip parolası ayarlayın. Alıcılar belgeyi görüntüleyebilir ancak hangi işlemleri yapabilecekleri sınırlanır.</p>
      <p>Tüm işlemler tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'İzinleri Ayarlayın', description: 'Yazdırma, kopyalama, düzenleme ve açıklamaları etkinleştirin veya devre dışı bırakın.' },
      { step: 3, title: 'Uygula ve İndir', description: 'Sahip parolasını ayarlayın ve kısıtlanmış PDF\'i indirin.' },
    ],
    useCases: [
      { title: 'Kopyalamayı Önle', description: 'İçeriği korumak için metin kopyalamayı devre dışı bırakın.', icon: 'copy' },
      { title: 'Yazdırmayı Kontrol Et', description: 'Belge yazdırmayı kısıtlayın veya izin verin.', icon: 'printer' },
      { title: 'Düzenlemeyi Sınırla', description: 'Belge üzerinde değişiklik yapılmasını engelleyin.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'Parolaya ihtiyacım var mı?', answer: 'İzinleri zorunlu kılmak için bir sahip parolası gereklidir.' },
      { question: 'İzinler kaldırılabilir mi?', answer: 'Evet, sahip parolasıyla veya Kısıtlamaları Kaldır aracını kullanarak kaldırılabilir.' },
      { question: 'Tüm PDF okuyucular uyumlu mu?', answer: 'Çoğu PDF okuyucu izinlere saygı duyar ancak bazıları bunları uygulamayabilir.' },
    ],
  },

  'pdf-to-docx': {
    title: 'PDF\'den Word\'e',
    metaDescription: 'PDF\'i düzenlenebilir Word (DOCX) belgelerine dönüştürün. Biçimlendirmeyi ve düzeni koruyun.',
    keywords: ['pdf to word', 'pdfi worde çevir', 'pdf to doc', 'düzenlenebilir pdf'],
    description: `
      <p>PDF\'den Word\'e, PDF belgelerinizi düzenlenebilir Microsoft Word (DOCX) dosyalarına dönüştürür. Araç; orijinal düzeni, biçimlendirmeyi, görselleri ve metin akışını korur.</p>
      <p>Yeniden yazmadan PDF içeriğinizi Word\'de kolayca düzenleyin. Sözleşmeler, raporlar ve özgeçmişler için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri WebAssembly teknolojisi kullanılarak yerel olarak tarayıcınızda gerçekleşir, böylece belgeleriniz asla cihazınızdan ayrılmaz.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Dönüştür', description: 'Dönüştürme işleminin tamamlanmasını bekleyin.' },
      { step: 3, title: 'Word Belgelerini İndir', description: 'Tamamen düzenlenebilir DOCX dosyanızı indirin.' },
    ],
    useCases: [
      { title: 'Sözleşmeleri Düzenle', description: 'Düzenleme ve revizyon için PDF sözleşmelerini Word\'e dönüştürün.', icon: 'file-text' },
      { title: 'Özgeçmiş Güncellemeleri', description: 'Eski PDF özgeçmişlerinizi Word\'e dönüştürerek güncelleyin.', icon: 'user' },
      { title: 'İçerik Yeniden Kullanımı', description: 'PDF raporlarından içerikleri diğer belgeler için ayıklayın.', icon: 'copy' },
    ],
    faq: [
      { question: 'Biçimlendirme korunuyor mu?', answer: 'Evet, araç düzeni, yazı tiplerini ve görselleri mümkün olduğunca korumayı amaçlar.' },
      { question: 'Taranmış PDF\'leri dönüştürebilir miyim?', answer: 'Taranmış PDF\'ler, önce OCR kullanmadığınız sürece Word\'de görsel olarak dönüştürülecektir.' },
      { question: 'Word ile uyumlu mu?', answer: 'Evet, çıktı Microsoft Word ve Google Docs ile uyumlu standart bir .docx dosyasıdır.' },
    ],
  },

  'pdf-to-markdown': {
    title: 'PDF\'den Markdown\'a',
    metaDescription: 'PDF\'i Markdown formatına dönüştürün. Metni ayıklayın ve başlıklar, listeler gibi biçimlendirmeleri koruyun.',
    keywords: ['pdf to markdown', 'pdfi mdye çevir', 'pdf metin ayıklama', 'markdown dönüştürücü', 'pdf to text'],
    description: `
      <p>PDF\'den Markdown\'a, PDF belgelerinizi temiz ve iyi yapılandırılmış Markdown dosyalarına dönüştürür. Araç, metin içeriğini akıllıca ayıklar ve başlıklar, listeler ve paragraflar gibi biçimlendirmeleri korumaya çalışır.</p>
      <p>Belgeleri dokümantasyon, not alma veya Markdown destekleyen içerik yönetim sistemleri için düzenlenebilir formatlara dönüştürmek için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri tarayıcınızda yerel olarak gerçekleşir, böylece belgeleriniz gizli ve güvenli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Sayfa aralığını ayarlayın, sayfa numaralarını dahil etmeyi seçin ve satır sonu ayarlarını düzenleyin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Markdown dosyanızı oluşturmak için Dönüştür düğmesine tıklayın ve indirin.' },
    ],
    useCases: [
      { title: 'Dokümantasyon', description: 'PDF kılavuzları ve rehberlerini versiyon kontrollü dokümantasyon için Markdown\'a dönüştürün.', icon: 'file-text' },
      { title: 'Not Alma', description: 'Not alma sisteminiz için PDF makale ve kitaplarından içerik ayıklayın.', icon: 'edit-3' },
      { title: 'İçerik Taşıma', description: 'PDF içeriğini Markdown destekleyen CMS platformlarına taşıyın.', icon: 'copy' },
    ],
    faq: [
      { question: 'Biçimlendirme korunuyor mu?', answer: 'Araç, yazı boyutu ve madde işaretleri/numaralı listelere göre başlıkları algılamaya çalışır. Karmaşık düzenler manuel düzeltme gerektirebilir.' },
      { question: 'Belirli sayfaları dönüştürebilir miyim?', answer: 'Evet, sadece o sayfaları dönüştürmek için "1-3, 5, 7" gibi bir sayfa aralığı belirtebilirsiniz.' },
      { question: 'Taranmış PDF\'lerle çalışır mı?', answer: 'Taranmış PDF\'ler metin değil, görsel içerir. Markdown\'a dönüştürmeden önce metni ayıklamak için OCR aracımızı kullanın.' },
    ],
  },

  // ==================== NEW TOOLS ====================
  'deskew-pdf': {
    title: 'PDF Eğriliğini Düzelt (Deskew)',
    metaDescription: 'Taranmış veya eğri PDF sayfalarını otomatik olarak düzeltin. Hassas açı algılama ile eğri belgeleri düzeltin.',
    keywords: ['deskew pdf', 'pdf düzelt', 'taranmış belge düzeltme', 'pdf otomatik döndür', 'pdf açısı düzelt'],
    description: `
      <p>PDF Eğriliğini Düzelt, gelişmiş bir analiz yöntemi kullanarak PDF belgelerinizdeki eğri veya yamuk sayfaları otomatik olarak algılar ve düzeltir. Bu, tarayıcıya açıyla yerleştirilen belgeler için vazgeçilmez bir araçtır.</p>
      <p>Araç, en uygun döndürme açısını bulmak için metin ve içerik hizalamasını farklı açılarda analiz eder ve ardından düzeltmeyi uygular. En iyi sonuçlar için hassasiyet eşiğini (1-30) ve DPI ayarlarını (72-300) ayarlayabilirsiniz.</p>
      <p>Tüm işlemler WebAssembly teknolojisi kullanılarak yerel olarak tarayıcınızda gerçekleşir, böylece belgeleriniz gizli ve güvenli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Taranmış PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Ayarları Yapılandırın', description: 'Daha iyi algılama için gerekirse hassasiyet eşiğini ve DPI değerini ayarlayın.' },
      { step: 3, title: 'İşleyin ve İndir', description: 'Sayfaları düzeltmek ve düzeltilmiş PDF\'i indirmek için Deskew düğmesine tıklayın.' },
    ],
    useCases: [
      { title: 'Taranmış Belgeler', description: 'Otomatik belge besleyicilerden açıyla taranan sayfaları düzeltin.', icon: 'scan' },
      { title: 'Mobil Taramalar', description: 'Akıllı telefonlarla çekilen belgelerin eğri fotoğraflarını düzeltin.', icon: 'smartphone' },
      { title: 'Arşiv Restorasyonu', description: 'Daha iyi okunabilirlik için eski taranmış arşivleri düzleştirin.', icon: 'archive' },
    ],
    faq: [
      { question: 'Açı algılama ne kadar doğru?', answer: 'Araç, ±10 dereceye kadar olan eğrilik açılarını yüksek doğrulukla algılar. 0.3 dereceden küçük açılara sahip sayfaları otomatik olarak atlar.' },
      { question: 'Metin kalitesi etkilenecek mi?', answer: '90 derecenin katlarındaki döndürmelerde kalite kaybı olmaz. Diğer açılar için araç en yakın dereceye yuvarlar ve iyi kaliteyi korur.' },
      { question: 'Sadece belirli sayfaları düzeltebilir miyim?', answer: 'Araç tüm sayfaları analiz eder ancak sadece hassasiyet eşiğinin üzerinde eğrilik algılanan sayfaları düzeltir. Minimum eğriliğe sahip sayfalar değişmeden bırakılır.' },
      { question: 'Hassasiyet eşiği nedir?', answer: '1-10 değerleri sadece bariz eğrilikleri düzeltir, 11-20 orta derece eğrilikleri algılar ve 21-30 hafif açılı sayfaları yakalar. Dengeli algılama için varsayılan değer 10\'dur.' },
      { question: 'İşlem ne kadar sürer?', answer: 'İşlem süresi dosya boyutuna ve DPI değerine bağlıdır. 150 DPI (varsayılan) hız ve doğruluk arasında iyi bir denge sağlar. Daha yüksek DPI daha doğrudur ancak daha yavaştır.' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF Kitapçık Oluşturucu',
    metaDescription: 'PDF\'den baskı için kitapçık düzenleri oluşturun. Çoklu ızgara seçenekleriyle sayfaları tel dikiş ciltleme için düzenleyin.',
    keywords: ['pdf kitapçık', 'kitapçık oluşturucu', 'kitapçık bas', 'tel dikiş', 'montaj'],
    description: `
      <p>PDF Kitapçık Oluşturucu, PDF sayfalarınızı baskı ve katlama üretimine hazır kitapçık düzenleri halinde ayarlar. Broşürler, fanzinler, kitapçıklar ve tel dikişli yayınlar oluşturmak için mükemmeldir.</p>
      <p>Çeşitli ızgara modları (1x2, 2x2, 2x4, 4x4), kağıt boyutları ve yönlendirme seçenekleri arasından seçim yapın. Araç, uygun katlama sırası için sayfa montajını otomatik olarak halleder.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Kitapçığa dönüştürmek istediğiniz PDF belgesini yükleyin.' },
      { step: 2, title: 'Düzeni Seçin', description: 'Izgara modunu, kağıt boyutunu, yönlendirmeyi ve döndürme seçeneklerini belirleyin.' },
      { step: 3, title: 'Oluştur ve İndir', description: 'Kitapçık düzenini oluşturun ve baskı için indirin.' },
    ],
    useCases: [
      { title: 'Broşürler', description: 'Standart PDF belgelerinden katlamaya hazır broşürler oluşturun.', icon: 'book-open' },
      { title: 'Fanzinler', description: 'Doğru sayfa montajıyla kendi yayınınız olan fanzinler üretin.', icon: 'book' },
      { title: 'Etkinlik Programları', description: 'Etkinlikler için profesyonel program kitapçıkları oluşturun.', icon: 'calendar' },
    ],
    faq: [
      { question: 'Tel dikiş (saddle-stitch) ciltleme nedir?', answer: 'Tel dikiş, katlanmış kağıtların iç içe geçirilip kat yerinden zımbalandığı bir ciltleme yöntemidir.' },
      { question: 'Hangi ızgara modunu kullanmalıyım?', answer: 'Kitapçıklar için 1x2 standarttır. Kağıt tasarrufu sağlamak için çoklu baskılarda 2x2 veya daha büyüğünü kullanın.' },
      { question: 'Düzeni önizleyebilir miyim?', answer: 'Evet, araç nihai kitapçığı oluşturmadan önce görsel bir önizleme sunar.' },
    ],
  },

  'rasterize-pdf': {
    title: 'PDF Rasterize (Görsele Dönüştür)',
    metaDescription: 'PDF sayfalarını yüksek kaliteli görsellere dönüştürün. Özel DPI ayarlarıyla PNG, JPEG veya WebP olarak dışa aktarın.',
    keywords: ['rasterize pdf', 'pdfi görsele çevir', 'pdf to png', 'pdf to jpeg', 'pdf sayfalarını dönüştür'],
    description: `
      <p>PDF Rasterize, PDF sayfalarınızı yüksek kaliteli piksel tabanlı (raster) görsellere dönüştürür. DPI ve kalite ayarları üzerinde tam kontrol ile PNG, JPEG veya WebP çıktı formatları arasından seçim yapın.</p>
      <p>Küçük resimler (thumbnail), sosyal medya grafikleri oluşturmak veya PDF içeriğini görsel olarak arşivlemek için mükemmeldir. Sayfa aralığı seçimi ve toplu işlemeyi destekler.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF dosyanızı sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Çıktıyı Yapılandırın', description: 'DPI, çıktı formatı (PNG/JPEG/WebP), kalite ve sayfa aralığını seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Sayfaları işleyin ve görselleri tek tek veya ZIP arşivi olarak indirin.' },
    ],
    useCases: [
      { title: 'Sosyal Medya', description: 'Sosyal medya paylaşımları için PDF slaytlarını görsellere dönüştürün.', icon: 'share-2' },
      { title: 'Küçük Resimler', description: 'PDF belgeleri için önizleme görselleri oluşturun.', icon: 'image' },
      { title: 'Web Yayıncılığı', description: 'PDF içeriğini web dostu görsel formatlarına dönüştürün.', icon: 'globe' },
    ],
    faq: [
      { question: 'Hangi DPI değerini kullanmalıyım?', answer: 'Ekran için 72 DPI, genel kullanım için 150 DPI, baskı kalitesi için 300 DPI.' },
      { question: 'En iyi format hangisidir?', answer: 'Kalite ve şeffaflık için PNG, küçük boyut için JPEG, modern web kullanımı için WebP.' },
      { question: 'Belirli sayfaları dönüştürebilir miyim?', answer: 'Evet, sadece o sayfaları dönüştürmek için "1-5, 8, 10-15" gibi sayfa aralıkları belirtebilirsiniz.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown\'dan PDF\'e',
    metaDescription: 'Markdown dosyalarını güzelce biçimlendirilmiş PDF belgelerine dönüştürün. GitHub Flavored Markdown ve sözdizimi vurgulama desteği.',
    keywords: ['markdown to pdf', 'm dyi pdf e çevir', 'markdown dönüştür', 'gfm to pdf', 'markdown dönüştürücü'],
    description: `
      <p>Markdown\'dan PDF\'e, Markdown dosyalarınızı profesyonelce tasarlanmış PDF belgelerine dönüştürür. Tablolar, görev listeleri ve kod blokları dahil CommonMark ve GitHub Flavored Markdown (GFM) desteği.</p>
      <p>Birden fazla tema (açık, koyu, GitHub) arasından seçim yapın; sayfa boyutunu ve kenar boşluklarını özelleştirin. Kod blokları, daha iyi okunabilirlik için sözdizimi vurgulama ile sunulur.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda gerçekleşir, böylece içeriğiniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'Markdown Dosyasını Yükleyin', description: '.md veya .markdown dosyanızı yükleyin.' },
      { step: 2, title: 'Tema Seçin', description: 'Görsel bir tema seçin ve sayfa ayarlarını yapılandırın.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Stilli PDF\'i oluşturun ve indirin.' },
    ],
    useCases: [
      { title: 'Dokümantasyon', description: 'Benioku (README) dosyalarını ve belgeleri paylaşılabilir PDF\'lere dönüştürün.', icon: 'file-text' },
      { title: 'Not Dışa Aktarma', description: 'Markdown notlarınızı yazdırmak veya paylaşmak için PDF olarak dışa aktarın.', icon: 'edit-3' },
      { title: 'Raporlar', description: 'Markdown kullanarak profesyonel stillere sahip raporlar oluşturun.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'GitHub Flavored Markdown destekleniyor mu?', answer: 'Evet; tablolar, görev listeleri, üstü çizili metinler ve diğer GFM özellikleri desteklenir.' },
      { question: 'Stilleri özelleştirebilir miyim?', answer: 'Önceden ayarlanmış temalar arasından seçim yapabilir veya tam kontrol için özel CSS ekleyebilirsiniz.' },
      { question: 'Kod blokları vurgulanıyor mu?', answer: 'Evet, kod blokları yaygın programlama dilleri için sözdizimi vurgulaması içerir.' },
    ],
  },

  'email-to-pdf': {
    title: 'E-postadan PDF\'e',
    metaDescription: 'E-posta dosyalarını (.eml, .msg) PDF belgelerine dönüştürün. Biçimlendirmeyi, görselleri, bağlantıları koruyun ve ekleri gömün.',
    keywords: ['email to pdf', 'emlyi pdf e çevir', 'msg to pdf', 'e-posta dönüştür', 'e-posta kaydedici', 'e-postayı pdf yap', 'outlook to pdf'],
    description: `
      <p>E-postadan PDF\'e, e-posta dosyalarınızı (.eml ve .msg formatları) iyi biçimlendirilmiş PDF belgelerine dönüştürür. Araç; e-posta başlık bilgilerini, gövde içeriğini, görselleri, tıklanabilir bağlantıları korur ve ekleri doğrudan PDF içine gömer.</p>
      <p>Sayfa boyutu (A4, Letter, Legal), zaman dilimi destekli tarih biçimlendirmesi ve CC/BCC alanları ile ek bilgilerinin dahil edilip edilmeyeceği gibi seçenekleri özelleştirin.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda gerçekleşir, böylece e-postalarınız gizli ve güvenli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'E-posta Dosyasını Yükleyin', description: '.eml veya .msg e-posta dosyanızı yükleyin.' },
      { step: 2, title: 'Seçenekleri Yapılandırın', description: 'Sayfa boyutunu, tarih biçimini, zaman dilimini ayarlayın ve hangi alanların dahil edileceğini seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Ekleri gömülü PDF\'e dönüştürün ve sonucu indirin.' },
    ],
    useCases: [
      { title: 'Hukuki Kayıtlar', description: 'Önemli e-postaları, hukuki dokümantasyon için ekleri gömülü PDF olarak arşivleyin.', icon: 'scale' },
      { title: 'İş Arşivleri', description: 'İş yazışmalarını uzun süreli kayıt tutma amacıyla PDF\'e dönüştürün.', icon: 'briefcase' },
      { title: 'Kanıt Koruma', description: 'E-posta kanıtlarını görselleri ve ekleriyle birlikte düzenlenemez PDF formatında saklayın.', icon: 'shield' },
    ],
    faq: [
      { question: 'Hangi e-posta formatları destekleniyor?', answer: 'Hem .eml (RFC 822) hem de .msg (Microsoft Outlook) dosyaları tam olarak desteklenir.' },
      { question: 'Ekler dahil ediliyor mu?', answer: 'Evet! Ekler doğrudan PDF dosyasının içine gömülür. Uyumlu bir PDF okuyucu kullanarak bunları PDF içinden ayıklayabilirsiniz.' },
      { question: 'E-posta içindeki görseller görünüyor mu?', answer: 'Evet, CID (Content-ID) üzerinden referans verilen görseller otomatik olarak dönüştürülür ve PDF\'de görüntülenir.' },
      { question: 'Bağlantılar tıklanabilir mi?', answer: 'Evet, tüm HTML bağlantıları ve düz metin e-postalardaki URL\'ler PDF\'de tıklanabilir bağlantılara dönüştürülür.' },
      { question: 'E-posta biçimlendirmesi korunuyor mu?', answer: 'Evet, HTML e-postalar stiller, görseller ve bağlantılar dahil olmak üzere biçimlendirmelerini mümkün olduğunca korur.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ\'den PDF\'e',
    metaDescription: 'Çizgi roman arşivlerini (CBZ) PDF\'e dönüştürün. Dijital çizgi romanlar için görsel sırasını ve kalitesini koruyun.',
    keywords: ['cbz to pdf', 'çizgi romanı pdf yap', 'cbz dönüştür', 'comic book converter', 'cbz dönüştürücü'],
    description: `
      <p>CBZ\'den PDF\'e, Çizgi Roman Arşivi dosyalarını PDF belgelerine dönüştürür. Araç, CBZ arşivindeki tüm görselleri ayıklar ve doğru okuma sırasını koruyarak bir PDF haline getirir.</p>
      <p>Orijinal görsel boyutları veya standart çizgi roman boyutları dahil çeşitli sayfa boyutu seçenekleri arasından seçim yapın. PDF destekleyen ancak CBZ desteklemeyen cihazlarda çizgi roman okumak için mükemmeldir.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda gerçekleşir, böylece çizgi romanlarınız gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'CBZ Dosyasını Yükleyin', description: '.cbz uzantılı çizgi roman arşiv dosyanızı yükleyin.' },
      { step: 2, title: 'Seçenekleri Belirleyin', description: 'Sayfa boyutu ve görsel kalitesi ayarlarını seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF\'e dönüştürün ve çizgi romanınızı indirin.' },
    ],
    useCases: [
      { title: 'E-Okuyucu Uyumluluğu', description: 'Sadece PDF destekleyen e-okuyucular için CBZ\'yi PDF\'e dönüştürün.', icon: 'book' },
      { title: 'Çizgi Roman Arşivleri', description: 'Dijital çizgi roman koleksiyonunuzun PDF arşivlerini oluşturun.', icon: 'archive' },
      { title: 'Baskı Hazırlığı', description: 'Dijital çizgi romanları baskı için PDF formatına getirin.', icon: 'printer' },
    ],
    faq: [
      { question: 'CBZ formatı nedir?', answer: 'CBZ, çizgi roman sayfalarını görsel dosyalar olarak içeren ve .cbz uzantısıyla yeniden adlandırılmış bir ZIP arşividir.' },
      { question: 'Görsel kalitesi korunuyor mu?', answer: 'Evet, görseller PDF içine orijinal kalitelerinde gömülür.' },
      { question: 'İç içe geçmiş klasörler destekleniyor mu?', answer: 'Evet, arşiv içindeki tüm klasörlerdeki görseller ayıklanır ve sıralanır.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF\'den PDF/A\'ya',
    metaDescription: 'PDF\'i PDF/A arşiv formatına dönüştürün. ISO standartlarıyla belgelerin uzun süreli korunmasını sağlayın.',
    keywords: ['pdf to pdfa', 'pdfa dönüştürücü', 'pdf arşivle', 'pdf arşivleme', 'uzun süreli saklama'],
    description: `
      <p>PDF\'den PDF/A\'ya, belgelerinizi uzun süreli arşivleme için ISO standardı olan PDF/A formatına dönüştürür. PDF/A, belgelerin onlarca yıl boyunca görüntülenebilir ve aslına uygun kalmasını sağlar.</p>
      <p>PDF/A-1b (temel uyumluluk), PDF/A-2b (önerilen, şeffaflığı destekler) veya PDF/A-3b (gömülü dosyalara izin verir) seviyeleri arasından seçim yapın. Araç, yazı tiplerini gömer ve gerektiğinde şeffaflıkları düzleştirir.</p>
      <p>Tüm dönüştürme işlemleri yerel olarak tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'PDF/A\'ya dönüştürmek istediğiniz PDF\'i yükleyin.' },
      { step: 2, title: 'PDF/A Seviyesini Seçin', description: 'PDF/A-1b, PDF/A-2b veya PDF/A-3b uyumluluk seviyelerinden birini seçin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'PDF/A formatına dönüştürün ve arşivlik belgeyi indirin.' },
    ],
    useCases: [
      { title: 'Hukuki Arşivler', description: 'Hukuki belgeleri mahkemede kabul edilebilir uzun süreli saklama için PDF/A\'ya dönüştürün.', icon: 'scale' },
      { title: 'Resmi Kayıtlar', description: 'PDF/A kullanarak resmi arşivleme gereksinimlerine uyum sağlayın.', icon: 'building' },
      { title: 'İş Arşivleri', description: 'Önemli iş belgelerini gelecekte erişilebilir kalacak şekilde koruyun.', icon: 'archive' },
    ],
    faq: [
      { question: 'Hangi PDF/A seviyesini kullanmalıyım?', answer: 'Çoğu kullanım için PDF/A-2b önerilir. Maksimum uyumluluk için 1b veya gömülü dosyalara ihtiyacınız varsa 3b kullanın.' },
      { question: 'PDF/A\'yı farklı kılan nedir?', answer: 'PDF/A yazı tiplerini gömer, şifrelemeyi devre dışı bırakır ve belgedeki tüm öğelerin gelecekte görüntülenmesi için bağımsız olmasını sağlar.' },
      { question: 'PDF/A\'dan geri dönüş mümkün mü?', answer: 'PDF/A dosyaları standart PDF\'lerdir ve normal şekilde açılabilirler. Arşivleme özellikleri kısıtlama değil, ek güvence getirir.' },
    ],
  },

  'font-to-outline': {
    title: 'Yazı Tipini Vektöze Et (Outline)',
    metaDescription: 'PDF sayfalarını yüksek kaliteli görsellere dönüştürerek yazı tipi bağımlılıklarını kaldırın. Tüm sistemlerde tam uyumluluk sağlar.',
    keywords: ['yazı tipini outline yap', 'fontları vektörize et', 'fontları kaldır', 'font uyumluluğu', 'pdf fontlarını düzleştir', 'pdf font temizleme'],
    description: `
      <p>Yazı Tipini Vektörize Et, her sayfayı yüksek kaliteli görsellere dönüştürerek PDF\'inizdeki tüm yazı tipi bağımlılıklarını kaldırır. Bu, orijinal yazı tipleri yüklü olmasa bile belgenizin her sistemde tıpatıp aynı görünmesini sağlar.</p>
      <p>Araç, her sayfayı seçtiğiniz DPI değerinde (150-600) işler ve görsel görünümü korurken gömülü yazı tiplerini kaldırır. İsteğe bağlı olarak, aranabilirliği korumak için görünmez bir metin katmanı ekleyebilirsiniz.</p>
      <p>Bu özellik; baskı hazırlığı, platformlar arası uyumluluk ve belge paylaşırken yazı tipi lisans sorunlarından kaçınmak için temeldir. Tüm işlemler yerel olarak tarayıcınızda gerçekleşir.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Kaldırmak istediğiniz yazı tiplerini içeren PDF\'i yükleyin.' },
      { step: 2, title: 'Kaliteyi Yapılandırın', description: 'DPI seçin (Baskı için 300, ekran için 150 önerilir). Gerekirse aranabilir metni etkinleştirin.' },
      { step: 3, title: 'Dönüştür ve İndir', description: 'Dosyayı işleyin ve yazı tipinden bağımsız PDF\'i indirin.' },
    ],
    useCases: [
      { title: 'Baskı Hazırlığı', description: 'Tüm yazı tipi bağımlılıklarını kaldırarak profesyonel matbaalarda oluşabilecek yazı tipi sorunlarını giderin.', icon: 'printer' },
      { title: 'Platformlar Arası Paylaşım', description: 'Yüklü yazı tiplerinden bağımsız olarak her cihazda aynı görünen belgeler paylaşın.', icon: 'share-2' },
      { title: 'Yazı Tipi Lisanslama', description: 'Belgeleri dağıtırken lisans endişelerini önlemek için gömülü yazı tiplerini kaldırın.', icon: 'shield' },
    ],
    faq: [
      { question: 'Bu nasıl çalışıyor?', answer: 'Araç, her sayfayı yüksek çözünürlükte (seçilen DPI) işler ve görsel görünümü korurken tüm yazı tipi bağımlılıklarını kaldırarak PDF\'i bu görsellerden yeniden oluşturur.' },
      { question: 'Dönüştürmeden sonra metinleri seçebilir miyim?', answer: 'Varsayılan olarak hayır, çünkü metin görselin bir parçası olur. Ancak, arama ve kopyalama işlevini korumak için "Aranabilir metni koru" seçeneğini etkinleştirebilirsiniz.' },
      { question: 'Hangi DPI değerini kullanmalıyım?', answer: 'Baskı kalitesi için 300 DPI önerilir. Ekran görüntüleme için 150 DPI yeterlidir ve daha küçük dosyalar üretir. 600 DPI en yüksek kalite içindir ancak çok büyük dosyalar oluşturur.' },
      { question: 'Dosya boyutu artacak mı?', answer: 'Dosya boyutu DPI ve içeriğe bağlıdır. 150 DPI genellikle daha küçük dosyalar üretirken, 300 DPI boyutu artırabilir. Sıkıştırma otomatik olarak uygulanır.' },
      { question: 'Bu işlem geri alınabilir mi?', answer: 'Hayır, yazı tipi verileri kalıcı olarak kaldırılır. Orijinal fontlarla düzenlenebilir metne ihtiyacınız varsa yedeğini saklayın.' },
      { question: 'Vektör grafiklere ne olur?', answer: 'Orijinal PDF\'deki vektör grafikler (şekiller, çizgiler) metinle birlikte raster (pixel) formatına dönüştürülür. Görsel kalite seçtiğiniz DPI değerinde korunur.' },
    ],
  },

  'extract-tables': {
    title: 'PDF\'den Tabloları Ayıkla',
    metaDescription: 'PDF belgelerindeki tabloları algılayın ve ayıklayın. JSON, Markdown veya CSV formatlarında dışa aktarın.',
    keywords: ['tablo ayıkla', 'pdf tablo ayıklama', 'pdf to csv', 'pdf to excel', 'tablo algılama'],
    description: `
      <p>PDF\'den Tabloları Ayıkla, PDF belgelerinizdeki tablo verilerini algılar ve yapılandırılmış formatlarda dışa aktarır. Veri entegrasyonu için JSON, dokümantasyon için Markdown veya hesap tabloları için CSV formatını seçin.</p>
      <p>Araç, karmaşık belgelerde bile tablo yapılarını tanımlamak için akıllı algılama algoritmaları kullanır. En iyi sonuçlar için sayfa aralıklarını belirleyin ve algılama parametrelerini ayarlayın.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda gerçekleşir, böylece belgeleriniz gizli kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Tabloları ayıklamak istediğiniz PDF\'i yükleyin.' },
      { step: 2, title: 'Algılamayı Yapılandırın', description: 'Sayfa aralığını ve minimum sütun/satır eşiklerini ayarlayın.' },
      { step: 3, title: 'Dışa Aktar ve İndir', description: 'Çıktı formatını (JSON/Markdown/CSV) seçin ve indirin.' },
    ],
    useCases: [
      { title: 'Veri Analizi', description: 'Hesap tablolarında veya veritabanlarında analiz etmek üzere tablo verilerini ayıklayın.', icon: 'bar-chart' },
      { title: 'Rapor İşleme', description: 'Daha fazla işlem yapmak için PDF raporlarından tabloları çekin.', icon: 'file-text' },
      { title: 'Dokümantasyon', description: 'Teknik dokümantasyon için PDF tablolarını Markdown formatına dönüştürün.', icon: 'book' },
    ],
    faq: [
      { question: 'Karmaşık tabloları algılayabilir mi?', answer: 'Araç en iyi basit ızgara tablolarla çalışır. Karmaşık birleşmiş hücreler manuel düzeltme gerektirebilir.' },
      { question: 'Ya hiç tablo bulunamazsa?', answer: 'Minimum sütun/satır eşiğini ayarlamayı deneyin veya PDF\'in gerçek tablo yapıları içerip içermediğini kontrol edin.' },
      { question: 'Belirli sayfalardan ayıklama yapabilir miyim?', answer: 'Evet, ayıklamayı belirli sayfalarla sınırlamak için bir sayfa aralığı belirtebilirsiniz.' },
    ],
  },

  'ocg-manager': {
    title: 'PDF Katman Yöneticisi (OCG)',
    metaDescription: 'PDF katmanlarını (İsteğe Bağlı İçerik Grupları - OCG) yönetin. PDF belgelerinizdeki katmanları görüntüleyin, açıp kapatın, ekleyin, silin ve yeniden adlandırın.',
    keywords: ['pdf katmanları', 'ocg yöneticisi', 'isteğe bağlı içerik grupları', 'pdf katman görünürlüğü', 'pdf katmanlarını yönet'],
    description: `
      <p>PDF Katman Yöneticisi, PDF belgelerinizdeki İsteğe Bağlı İçerik Gruplarını (OCG) görüntülemenize ve yönetmenize olanak tanır. OCG katmanları teknik çizimlerde, haritalarda ve karmaşık belgelerde içeriği açılıp kapatılabilir katmanlar halinde düzenlemek için kullanılır.</p>
      <p>PDF'inizdeki tüm katmanları görüntüleyin, görünürlüklerini değiştirin, yeni katmanlar ekleyin, istenmeyenleri silin veya mevcut katmanları yeniden adlandırın. Bu araç; mimari planlar, CAD çıktıları ve baskıya hazır belgeler gibi katmanlı PDF'lerle çalışmak için temel bir araçtır.</p>
      <p>Tüm işlemler yerel olarak tarayıcınızda gerçekleşir, böylece belgeleriniz gizli ve güvende kalır.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Yükleyin', description: 'Katman (OCG) içeren veya katman eklemek istediğiniz bir PDF dosyasını sürükleyip bırakın veya seçmek için tıklayın.' },
      { step: 2, title: 'Katmanları Görüntüleyin', description: 'Araç, belgede bulunan tüm katmanları görünürlük durumlarıyla birlikte otomatik olarak listeler.' },
      { step: 3, title: 'Katmanları Yönetin', description: 'Katman görünürlüğünü açın/kapatın, katmanları yeniden adlandırın, yenilerini ekleyin veya istenmeyen katmanları silin.' },
      { step: 4, title: 'Kaydet ve İndir', description: 'Katman değişiklikleri uygulanmış olarak düzenlenmiş PDF\'inizi indirin.' },
    ],
    useCases: [
      { title: 'Teknik Çizimler', description: 'Boyutları, açıklamaları veya farklı görünümleri göstermek/gizlemek için CAD çıktılarındaki katmanları yönetin.', icon: 'ruler' },
      { title: 'Harita Düzenleme', description: 'Özel harita baskıları için topoğrafya, yollar ve etiketler gibi farklı harita katmanlarını açıp kapatın.', icon: 'map' },
      { title: 'Baskı Hazırlığı', description: 'Farklı versiyonlar için uygun katmanları ayarlayarak katmanlı PDF\'leri baskıya hazırlayın.', icon: 'printer' },
    ],
    faq: [
      { question: 'PDF katmanları (OCG) nedir?', answer: 'İsteğe Bağlı İçerik Grupları (OCG), bir PDF\'de gösterilebilen veya gizlenebilen katmanlardır. Genellikle CAD çizimlerinde, haritalarda ve karmaşık belgelerde kullanılırlar.' },
      { question: 'PDF\'imde neden katman görünmüyor?', answer: 'Her PDF katman içermez. Katmanlar genellikle tasarım yazılımları veya CAD uygulamalarından PDF oluşturulurken eklenir.' },
      { question: 'Katman değişiklikleri içeriği etkiler mi?', answer: 'Katman görünürlüğü değişiklikleri yalnızca neyin görüntüleneceğini veya yazdırılacağını etkiler. Asıl içerik belgede kalmaya devam eder.' },
    ],
  },

  'pdf-reader': {
    title: 'PDF Okuyucu',
    metaDescription: 'Ücretsiz çevrimiçi PDF okuyucu. PDF belgelerini doğrudan tarayıcınızda görüntüleyin, gezinin, yakınlaştırın, döndürün ve yazdırın.',
    keywords: ['pdf okuyucu', 'pdf görüntüleyici', 'çevrimiçi pdf bak', 'pdf oku', 'pdf tarayıcı okuyucu'],
    description: `
      <p>PDF Okuyucu, PDF belgelerini doğrudan tarayıcınızda okumanıza ve gezinmenize olanak tanıyan tam özellikli bir PDF görüntüleyicidir. Yazılım kurulumu gerektirmez; sadece PDF'inizi yükleyin ve okumaya başlayın.</p>
      <p>Sayfalar arasında gezinin, yakınlaştırıp uzaklaştırın, görünümü döndürün ve dikkatiniz dağılmadan okumak için tam ekran modunu kullanın. Ayrıca belgeleri yazdırabilir veya çevrimdışı erişim için indirebilirsiniz.</p>
      <p>Tüm görüntüleme işlemleri yerel olarak tarayıcınızda gerçekleşir. Belgeleriniz hiçbir sunucuya yüklenmez, bu da tam gizlilik sağlar.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF\'inizi Açın', description: 'PDF dosyasını okuyucuda açmak için yüklemek üzere tıklayın veya sürükleyip bırakın.' },
      { step: 2, title: 'Sayfalar Arasında Gezinin', description: 'Önceki veya sonraki sayfaya gitmek veya belirli bir sayfa numarasına atlamak için sayfa kontrollerini kullanın.' },
      { step: 3, title: 'Görünümü Ayarlayın', description: 'Konforlu bir okuma için yakınlaştırın/uzaklaştırın, görünümü döndürün veya tam ekran moduna geçin.' },
      { step: 4, title: 'Yazdır veya İndir', description: 'Belgeyi yazdırın veya gerektiğinde çevrimdışı erişim için indirin.' },
    ],
    useCases: [
      { title: 'Belge İnceleme', description: 'Herhangi bir yazılım kurmadan PDF belgelerini hızlıca inceleyin.', icon: 'book-open' },
      { title: 'Mobil Okuma', description: 'Web tarayıcısı olan her cihazda PDF belgelerini okuyun.', icon: 'smartphone' },
      { title: 'Hızlı Önizleme', description: 'İndirmeye veya yazdırmaya karar vermeden önce PDF\'leri önizleyin.', icon: 'eye' },
    ],
    faq: [
      { question: 'Belgem güvende mi?', answer: 'Evet, belgeniz tamamen tarayıcınızda işlenir ve asla hiçbir sunucuya yüklenmez.' },
      { question: 'PDF\'e not ekleyebilir veya düzenleyebilir miyim?', answer: 'Bu araç sadece görüntüleme içindir. Düzenleme için PDF İmzala veya Not Ekle araçlarımızı kullanın.' },
      { question: 'Mobil cihazlarda çalışır mı?', answer: 'Evet, PDF Okuyucu modern bir web tarayıcısı olan tüm cihazlarda çalışır.' },
    ],
  },

  'digital-sign-pdf': {
    title: 'Dijital İmza',
    metaDescription: 'PDF belgelerine X.509 dijital imzaları ekleyin. PDF\'leri yasal geçerlilik için PFX, P12 veya PEM sertifikalarıyla imzalayın.',
    keywords: ['dijital imza pdf', 'x509 sertifikası', 'pfx pdf imzala', 'p12 pdf imzala', 'pem pdf imzala', 'yasal pdf imzalama'],
    description: `
      <p>Dijital İmza, PDF belgelerine kriptografik X.509 dijital imzaları eklemenize olanak tanır. Basit çizilmiş imzaların aksine, dijital imzalar yasal geçerlilik ve belge bütünlüğü doğrulaması sağlar.</p>
      <p>Sertifika dosyanızı (PFX, P12 veya PEM formatında) yükleyin, parolayı girin ve PDF'inizi imzalayın. Özel metin, görseller ve konumlandırma ile görünür imzalar ekleyebilir veya sadece belge bütünlüğü için görünmez imzalar kullanabilirsiniz.</p>
      <p>Tüm imzalama işlemleri yerel olarak tarayıcınızda gerçekleşir. Sertifikanız ve belgeleriniz asla hiçbir sunucuya yüklenmez.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF Yükleyin', description: 'Dijital olarak imzalamak istediğiniz PDF belgesini yükleyin.' },
      { step: 2, title: 'Sertifikayı Yükleyin', description: 'X.509 sertifika dosyanızı (.pfx, .p12 veya .pem) yükleyin ve parolasını girin.' },
      { step: 3, title: 'İmzayı Yapılandırın', description: 'İsteğe bağlı olarak neden, konum ve özel metin veya görselle görünür imza ekleyin.' },
      { step: 4, title: 'İmzala ve İndir', description: 'Dijital imzayı uygulamak için PDF\'i İmzala düğmesine tıklayın ve imzalanmış belgeyi indirin.' },
    ],
    useCases: [
      { title: 'Hukuki Belgeler', description: 'Sözleşmeleri, anlaşmaları ve hukuki belgeleri yasal olarak bağlayıcı dijital imzalarla imzalayın.', icon: 'scale' },
      { title: 'İş Onayları', description: 'Denetim izleri için faturaları, satın alma siparişlerini ve onay belgelerini dijital olarak imzalayın.', icon: 'briefcase' },
      { title: 'Belge Bütünlüğü', description: 'Belgelerin imzalandıktan sonra kurcalanmadığından emin olun.', icon: 'shield-check' },
    ],
    faq: [
      { question: 'Hangi sertifika formatları destekleniyor?', answer: 'PFX (.pfx), PKCS#12 (.p12) ve PEM (.pem) sertifika formatları desteklenir.' },
      { question: 'İmza yasal olarak geçerli mi?', answer: 'Evet, X.509 dijital imzaları geçerli bir sertifika kullanıldığında çoğu yargı alanında yasal olarak tanınır.' },
      { question: 'Görünür imza ekleyebilir miyim?', answer: 'Evet, özel metin, görsel, konum ve stil içeren görünür bir imza ekleyebilirsiniz.' },
    ],
  },

  'validate-signature': {
    title: 'İmzayı Doğrula',
    metaDescription: 'PDF belgelerindeki dijital imzaları doğrulayın. Sertifika geçerliliğini, imzalayan bilgilerini ve belge bütünlüğünü kontrol edin.',
    keywords: ['pdf imza doğrula', 'dijital imzayı verify et', 'pdf sertifika kontrolü', 'imza doğrulama'],
    description: `
      <p>İmzayı Doğrula, PDF belgelerindeki dijital imzaları doğrulamanıza olanak tanır. İmzaların geçerli olup olmadığını kontrol edin, sertifika bilgilerini görüntüleyin ve belge bütünlüğünü onaylayın.</p>
      <p>Tüm imzaları, geçerlilik durumlarını, imzalayan bilgilerini ve belgenin imzalandıktan sonra değiştirilip değiştirilmediğini görmek için imzalı bir PDF yükleyin.</p>
      <p>Tüm doğrulama işlemleri yerel olarak tarayıcınızda gerçekleşir. Belgeleriniz asla hiçbir sunucuya yüklenmez.</p>
    `,
    howToUse: [
      { step: 1, title: 'İmzalalı PDF Yükleyin', description: 'Dijital imza içeren bir PDF belgesi yükleyin.' },
      { step: 2, title: 'Sonuçları Görüntüleyin', description: 'Belgede bulunan tüm imzaları geçerlilik durumlarıyla birlikte görün.' },
      { step: 3, title: 'Detayları Kontrol Edin', description: 'Sertifika bilgilerini, imzalayan detaylarını ve imzalama zaman damgasını inceleyin.' },
      { step: 4, title: 'Raporu Dışa Aktar', description: 'İsteğe bağlı olarak doğrulama sonuçlarının bir JSON raporunu indirin.' },
    ],
    useCases: [
      { title: 'Belge Doğrulama', description: 'İmzalı belgelerin orijinal olduğunu ve kurcalanmadığını doğrulayın.', icon: 'shield-check' },
      { title: 'Uyumluluk Denetimi', description: 'Uyumluluk ve denetim amaçlı imza geçerliliğini kontrol edin.', icon: 'clipboard-check' },
      { title: 'Sertifika İnceleme', description: 'İmzalı belgeler için sertifika detaylarını ve son kullanma tarihlerini görüntüleyin.', icon: 'award' },
    ],
    faq: [
      { question: '"Geçerli" ne anlama gelir?', answer: 'Geçerli bir imza, belgenin imzalandığından beri değiştirilmediği ve sertifika zincirinin bozulmadığı anlamına gelir.' },
      { question: 'Birden fazla PDF doğrulayabilir miyim?', answer: 'Evet, birden fazla PDF yükleyebilir ve tüm imzaları topluca doğrulayabilirsiniz.' },
      { question: 'Bir imza neden geçersiz olabilir?', answer: 'İmzalar; belge değiştirildiyse, sertifikanın süresi dolduysa veya sertifikaya güvenilmiyorsa geçersiz olabilir.' },
    ],
  },
};


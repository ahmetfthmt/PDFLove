# Proje Yapay Zeka Ajanı Kuralları (AI Agent Directives)

## 1. Veri Formatı Standardı: TOON
Bu projede yapılandırılmış veri (structured data) işlemleri, API yanıt simülasyonları ve uygun olan konfigürasyon dosyaları için standart JSON yerine **TOON (Token-Oriented Object Notation)** formatı kullanılacaktır. 

Ajan olarak, TOON formatını üretirken, ayrıştırırken (parsing) ve bu formatla ilgili kod yazarken **DAİMA** aşağıdaki resmi spesifikasyonu referans almalısın:
- **Spesifikasyon Kaynağı:** https://raw.githubusercontent.com/toon-format/spec/main/SPEC.md

## 2. Ajanın Uygulama Sorumlulukları (Implementation Details)
- **Strict Mode:** Yazacağın TOON ayrıştırıcı (parser) ve kodlayıcı (encoder) fonksiyonlarında spesifikasyonun 14. Bölümünde (Section 14) belirtilen `Strict Mode` kurallarını eksiksiz uygula.
- **Tip Güvenliği:** Projedeki TOON utility (yardımcı) sınıflarını yazarken projenin ana dilinin tip sistemini (örneğin TypeScript kullanılıyorsa Interface/Type tanımlamalarını) kesinlikle kullan.
- **Normalizasyon:** Spesifikasyonun "Data Model" ve "Canonical Number Form" kurallarına dikkat et. Sayıları encode ederken bilimsel gösterim (örn. `1e6`) kullanma, sıfırları spesifikasyona göre normalize et.
- **Delimiter (Ayırıcı):** Varsayılan ayırıcı olarak virgül (`,`) kullan, ancak yazacağın parser esnek olmalı ve gerektiğinde tab veya pipe (`|`) ayırıcılarını da desteklemelidir.

## 3. Kodlama Davranışı
- Bana TOON tabanlı bir çözüm üretirken "Neden JSON kullanmıyoruz?" diye sorma; bu, bu proje için kesinleşmiş bir mimari karardır.
- Projeye yeni bir veri modeli eklerken, eğer bu model uniform (tek tip) objelerden oluşan bir dizi (array) ise, doğrudan TOON formatını entegre edecek şekilde parser fonksiyonlarını çağır.
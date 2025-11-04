---
title: "Switch İfadeleri"
description: "Birden fazla koşulu ele almanın alternatif yolu"
type: "reading"
duration: "15 dk"
day: 2
order: 4
nextLesson: "day-2-calculator-project"
---

# Switch İfadeleri

`if/else if` zincirleri birkaç koşul için işe yarar, ancak aynı değere bağlı çok sayıda spesifik durumu yönetmeniz gerektiğinde `switch` ifadeleri kodunuzu daha temiz ve okunabilir kılar. Bugün `switch` yapısını nasıl kullanacağınızı, nerede parladığını ve ne zaman `if` tercih etmeniz gerektiğini öğreneceksiniz.

## Adım 1: Temel Yapı

```javascript
const seviye = "gold";

switch (seviye) {
  case "bronze":
    console.log("Bronz üye ayrıcalıkları açıldı.");
    break;
  case "silver":
    console.log("Gümüş ayrıcalıklar açıldı. Böyle devam!");
    break;
  case "gold":
    console.log("Altın ayrıcalıklar açıldı. Harikasın! ✨");
    break;
  default:
    console.log("Ayrıcalıkları görmek için üyelik seviyeni ayarla.");
}
```

- `switch`, ifadeyi bir kez değerlendirir (`seviye`).
- Sonucu her `case` değeriyle sıkı eşitlik (`===`) kullanarak karşılaştırır.
- Eşleşen ilk case'den `break` ifadesine kadar olan kodu çalıştırır.
- Hiçbir case eşleşmezse `default` bloğu çalışır.

## Adım 2: `break` Kullanmayı Unutmamak

`break` yazmazsanız kod bir sonraki case'e düşer (fall-through):

```javascript
const gun = "Pazartesi";

switch (gun) {
  case "Pazartesi":
    console.log("Haftanın başlangıcı!");
  case "Salı":
    console.log("Hızını koru.");
  default:
    console.log("Öğrenmek için yeni fırsat!");
}
```

Çıktı:
```
Haftanın başlangıcı!
Hızını koru.
Öğrenmek için yeni fırsat!
```

İstemeden fall-through yaşamak istemiyorsanız her case'in sonunda `break;` kullanın.

## Adım 3: Bilinçli Fall-Through

Bazen birden fazla case için aynı sonucu isteyebilirsiniz:

```javascript
const ruhHali = "heyecanlı";

switch (ruhHali) {
  case "mutlu":
  case "heyecanlı":
  case "motivasyonlu":
    console.log("Bu enerjiyi koduna yansıt! 💥");
    break;
  case "yorgun":
    console.log("Kısa bir mola ver ve su iç.");
    break;
  default:
    console.log("Kendini nasıl hissettiğine bak ve öğrenmeye devam et!");
}
```

- Arada kod olmadan case'leri ardı ardına yazarak aynı bloğa yönlendirebilirsiniz.

## Adım 4: Case İçinde Mantık Kullanmak

Case ifadeleri derleme zamanında bir kez değerlendirilir. Dinamik kontroller için `if` daha uygundur.

Yine de case içinde mantık yazabilirsiniz:

```javascript
const puan = 87;

switch (true) {
  case puan >= 100:
    console.log("Elit seviye açıldı!");
    break;
  case puan >= 80:
    console.log("Harika ilerleme—neredeyse elit!");
    break;
  default:
    console.log("Puan biriktirmeye devam et!");
}
```

- `switch(true)` kullanarak her case'in boolean ifade döndürmesini sağlıyoruz. Bu yaklaşımı dikkatli kullanın; bazen klasik `if/else if` daha anlaşılır olur.

## Adım 5: `if` ve `switch` Karşılaştırması

`switch` kullanın:
- Aynı değeri birçok olası seçenekle karşılaştırıyorsanız.
- Case değerleri açık ve sınırlıysa (string, sayı, enum).
- Tekrarlayan `if (...) { ... } else if (...) { ... }` bloklarından kaçınmak istiyorsanız.

`if/else` kullanın:
- Koşullar farklı ifadeler veya aralıklara bağlıysa.
- Koşul içinde karmaşık mantık varsa.
- Karşılaştırmalar `<` / `>` gibi büyüklük ilişkilerini içeriyorsa.

Kısa bir `switch` örneği:

```javascript
const komut = "paylas";

switch (komut) {
  case "baslat":
    console.log("Ders başlatıldı.");
    break;
  case "duraklat":
    console.log("Ders duraklatıldı.");
    break;
  case "paylas":
    console.log("İlerleme arkadaşlarınla paylaşıldı!");
    break;
  default:
    console.log("Bilinmeyen komut.");
}
```

## Adım 6: Pratik Önerileri

1. `const dil = "tr";` için İngilizce, Türkçe ve İspanyolca selamlamaları yazan bir `switch` oluşturun. Desteklenmeyen diller için `default` kullanın.
2. Çoklu case gruplama: `"cumartesi"` ve `"pazar"` için aynı sonucu döndürecek bir `switch` yazın (örneğin `const gunTipi = "hafta sonu";`).
3. `switch(true)` kullanarak `const dakika = 52;` değerini `"Kısa oturum"`, `"Fokus blok"`, `"Maraton kodlayıcı"` gibi aralıklara ayırın.
4. Aynı senaryoyu `if/else if` ile yazın ve hangisinin daha okunabilir olduğunu karşılaştırın.

## Önemli Noktalar

- ✅ `switch`, aynı değere bağlı çok sayıda sabit durum arasında seçim yapmak için idealdir.
- ✅ `break` kullanmayı unutmayın; yalnızca bilinçli fall-through durumlarında atlayın.
- ✅ Case grupları, tekrar eden kodu azaltır.
- ✅ Aralıklar ve karmaşık koşullar için `if/else` tercih edilmeye devam eder.

---

## 🎯 Hızlı Kontrol

1. Bir `switch` case'inde `break` yazmayı unutursanız ne olur?
2. Aynı sonucu döndürecek birden fazla case'i nasıl yönetirsiniz?
3. `switch(true)` yaklaşımı hangi durumlarda işinize yarar?
4. `switch` yerine `if/else` kullanmanın daha uygun olduğu bir senaryo söyleyin.

Harika! Şimdi sıra uygulamalı bir meydan okumada—2. gün hesap makinesi projesine geçiyoruz. 🧮

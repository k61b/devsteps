---
title: "Mantıksal Operatörler"
description: "AND, OR ve NOT operatörlerini anlama"
type: "reading"
duration: "20 dk"
day: 2
order: 2
nextLesson: "if-statements-conditionals"
---

# Mantıksal Operatörler

Artık değerleri karşılaştırabildiğinize göre bu karşılaştırmaları mantıksal operatörlerle birleştirelim. Bu operatörler “eğer kullanıcı dersi bitirdi VE ilerlemesini paylaştı YA DA 7. güne ulaştıysa” gibi kuralları ifade etmenizi sağlar. Mantıksal operatörleri öğrenmek güçlü koşullu ifadelerin kapısını açar.

`day2-operators.js` dosyanızda çalışmaya devam edecek veya aritmetik örnekleriyle birlikte bu kodu çalıştıracaksınız.

## Adım 1: Operatörlerle Tanışın

JavaScript'te üç temel mantıksal operatör vardır:

| Operatör | Sembol | Örnek | Anlamı |
| -------- | ------ | ------ | ------ |
| AND | `&&` | `girisYapildi && abonelikVar` | Her iki ifade de true ise true |
| OR | `\|\|` | `yöneticiMi || moderatorMu` | İfadelerden en az biri true ise true |
| NOT | `!` | `!yasakliMi` | true ↔ false değerlerini ters çevrir |

Bu operatörler boolean değerlerle çalışır, ancak JavaScript diğer tipleri de truthy veya falsy olarak yorumlayabilir (buna birazdan değineceğiz).

## Adım 2: AND (`&&`)

```javascript
const dersTamamlandi = true;
const ilerlemePaylasildi = false;

console.log(dersTamamlandi && ilerlemePaylasildi); // false
console.log(dersTamamlandi && !ilerlemePaylasildi); // true
```

- AND, sol taraf false olduğunda erken durur (short-circuit) çünkü tüm ifadenin true olma şansı kalmaz.
- Bir kodu çalıştırmadan önce birden fazla şartın sağlandığını kontrol etmek için idealdir.

### Rozet kilidini açma örneği

```javascript
const bugunTamamlananDers = 3;
const seriGun = 7;

const seriRozetiAcik = bugunTamamlananDers >= 3 && seriGun >= 7;
console.log(`Seri rozeti açıldı: ${seriRozetiAcik}`); // true
```

## Adım 3: OR (`||`)

```javascript
const proUyelik = false;
const promosyonKodu = "BETA25";

const erisimIzni = proUyelik || promosyonKodu === "BETA25";
console.log(erisimIzni); // true
```

- OR, sol taraf true olduğunda erken durur.
- “Varsayılan değeri kullan, daha iyi bir seçenek varsa onu tercih et” gibi fallback mantıkları için harikadır.

### OR ile varsayılan değer

```javascript
const kullaniciTema = "";
const tema = kullaniciTema || "acik";

console.log(`Seçilen tema: ${tema}`); // "acik"
```

## Adım 4: NOT (`!`)

```javascript
const bildirimlerAcik = false;
console.log(!bildirimlerAcik); // true
```

- Boolean değeri tersine çevirir.
- Çift NOT (`!!deger`) truthy/falsy değerleri gerçek booleana dönüştürür.

```javascript
console.log(!!"merhaba"); // true
console.log(!!0);         // false
```

## Adım 5: Operatörleri Birleştirmek

Mantıksal operatörleri zincirleyerek karmaşık senaryolar tanımlayabilirsiniz. Öncelik sırasını netleştirmek ve okunabilirliği artırmak için parantez kullanın.

```javascript
const gun2Tamamlandi = true;
const sosyalPaylasimVar = false;
const referansKoduVar = true;

const bonusHak =
  (gun2Tamamlandi && sosyalPaylasimVar) || referansKoduVar;

console.log(`Bonus açıldı: ${bonusHak}`); // true
```

### Operatör önceliği

1. Parantez
2. NOT (`!`)
3. AND (`&&`)
4. OR (`||`)

Varsayılan sırayı vurgulamak veya değiştirmek istediğinizde parantez ekleyin.

## Adım 6: Short-Circuit Davranışı

Mantıksal operatörler soldan sağa doğru çalışır ve değerlendirdikleri son değeri döndürür— her zaman `true` veya `false` olmayabilir.

```javascript
console.log("Merhaba" && "Dünya"); // "Dünya"
console.log(0 || 42);              // 42
```

- `&&` ilk falsy değeri veya tüm değerler truthy ise son değeri döndürür.
- `||` ilk truthy değeri veya tüm değerler falsy ise son değeri döndürür.

Bu davranış güçlü kalıplar oluşturmanızı sağlar:

```javascript
const ayarlar = { dil: "tr" };
const dil = ayarlar.dil || "tr"; // fallback

const kullanici = null;
const gorunenIsim = kullanici && kullanici.isim; // güvenli erişim, null döner
```

## Adım 7: Truthy ve Falsy Değerler

JavaScript bazı boolean olmayan değerleri mantıksal ifadelerde `true` veya `false` olarak değerlendirir.

**Falsy değerler:** `false`, `0`, `-0`, `0n`, `""` (boş string), `null`, `undefined`, `NaN`.

Bunların dışındaki her şey truthy'dir; dolu string'ler, diziler, objeler ve fonksiyonlar dahil.

```javascript
console.log(Boolean("DevSteps")); // true
console.log(Boolean(""));         // false
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
```

Truthy/falsy kavramı fallback ve doğrulama işlemlerini kısa tutmanızı sağlar— ama hangi değerlerin falsy olduğunu bilmek önemlidir.

## Pratik Önerileri

1. `const biletiVar = true; const vipMi = false; const kapiAcik = true;` değişkenlerini kullanarak bileti olup kapı açık olan **ya da** VIP olan kişiye giriş hakkı tanıyan bir ifade yazın.
2. `const geribildirim = "";` değerini `"Henüz geri bildirim yok"` varsayılan mesajı ile `||` kullanarak doldurun.
3. `const kalanGorev = 0;` için eğer görev kalmadıysa `"Her şey tamam!"`, aksi halde `"Devam et!"` yazdıran bir koşul hazırlayın.
4. `const profil = { isim: "Mina", sosyal: { twitter: "@mina.codes" } };` nesnesindeki Twitter hesabını yalnızca varsa yazdırmak için `&&` ile güvenli erişim kullanın.

## Önemli Noktalar

- ✅ `&&`, `||` ve `!` boolean ifadeleri zenginleştirmenizi sağlar.
- ✅ Short-circuit davranışı verimli kontroller ve güvenli property erişimi sunar.
- ✅ Truthy/falsy değerler fallback ifadelerini kısaltır—falsy listeyi ezberleyin.
- ✅ Parantez karmaşık mantığı açıklığa kavuşturur ve hataları önler.

---

## 🎯 Hızlı Kontrol

1. `false || "merhaba"` ifadesi ne döner ve neden?
2. İç içe geçmiş obje özelliklerine erişirken `&&` nasıl hata önler?
3. `!!deger` ifadesini ne zaman kullanırsınız?
4. `puan = 0` iken `puan || 100` neden `100` döndürür?

Hazırsanız karşılaştırmaları ve mantığı tam güç kullanacağınız `if` ifadelerine geçiyoruz! 🚦

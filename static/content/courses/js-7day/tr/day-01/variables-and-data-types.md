---
title: "Değişkenler ve Veri Tipleri"
description: "let, const, var ve farklı veri tiplerini öğrenme"
type: "reading"
duration: "30 dakika"
day: 1
order: 4
nextLesson: "day-1-exercises"
---

# Değişkenler ve Veri Tipleri

Değişkenler bilgiyi saklamanızı, adlandırmanızı ve programınızın farklı yerlerinde tekrar kullanmanızı sağlar. JavaScript ayrıca üzerinde çalıştığınız bilginin türünü tanımlayan farklı veri tipleri sunar. Bu iki kavramı anlamadan `console.log` satırlarından daha fazlasını yazmak zordur.

## Adım 1: Değişkenler Neden Önemli?

Bir uygulamanın kullanıcıyı selamladığını düşünün. Eğer `"Merhaba, Ayşe!"` şeklinde sabit bir metin yazarsanız yalnızca bir kişi için işe yarar. Değişkenler kodunuzu dinamik hale getirir:

```javascript
const kullaniciAdi = "Ayşe";
console.log(`Merhaba, ${kullaniciAdi}!`);
```

`kullaniciAdi` değerini değiştirdiğinizde mesaj otomatik güncellenir. Değişkenler skorları takip etmek, yapılandırma değerlerini saklamak ve programınızın hatırlaması gereken her şey için kullanılır.

## Adım 2: Değişken Tanımlama (`let`, `const`, `var`)

JavaScript, değişken oluşturmak için üç anahtar kelime sunar.

### `const`: Varsayılan tercihiniz olsun
```javascript
const pi = 3.14159;
```
- Yeniden atanamaz.
- Sayılar, metinler, diziler, objeler dahil her şeyle çalışır; sabitlik bağ için geçerlidir, objenin içeriği değişebilir.
- Kaza sonucu değişiklikleri engeller ve niyetinizi açıkça belirtir.

### `let`: Değeri değişecekse kullanın
```javascript
let skor = 0;
skor = skor + 10;
```
- Blok kapsamlıdır (en yakın `{ }` içinde geçerlidir).
- Yeniden atamaya izin verir.
- Sayaçlar, toplama işlemleri veya zamanla değişen değerler için idealdir.

### `var`: Eski anahtar kelime
```javascript
var eskiDeger = 42;
```
- Fonksiyon kapsamlıdır (blokları yok sayar).
- Hoisting gibi beklenmedik davranışları vardır ve hatalara yol açabilir.
- Modern kodda `var` kullanmaktan kaçının; sadece eski betiklerle çalışırken gerekebilir.

> Kural: Değerin değişmeyeceğini biliyorsanız `const`, değişecekse `let` kullanın.

## Adım 3: İlkel (Primitive) Veri Tipleri

JavaScript yedi temel (primitive) veri tipine sahiptir. Bu tipler değiştirilemez ve değer olarak saklanır.

| Tip | Örnek | Açıklama |
| --- | ----- | -------- |
| `string` | `"Merhaba"` veya `'Dünya'` | Tırnak içindeki metinler. Ara değer eklemek için backtick kullanın. |
| `number` | `42`, `3.14`, `-10` | Tam sayılar ve ondalıklar için tek tip. Ayrı `int` veya `float` yoktur. |
| `boolean` | `true`, `false` | Doğru/yanlış durumlarını temsil eder. |
| `null` | `null` | Bilinçli olarak “değer yok” anlamına gelir. Geliştirici tarafından atanır. |
| `undefined` | `undefined` | Başlatılmamış değişkenlerin varsayılan değeri. |
| `symbol` | `Symbol('id')` | Benzersiz tanımlayıcılar; ileri seviye senaryolarda obje anahtarı olarak kullanılır. |
| `bigint` | `123n` | `number` tipinin güvenli sınırını aşan büyük tam sayılar. |

### `typeof` ile tipi kontrol etmek

```javascript
typeof "Merhaba";        // "string"
typeof 99;               // "number"
typeof true;             // "boolean"
typeof undefined;        // "undefined"
typeof null;             // "object"  (dilden kalan bir hata)
typeof 123n;             // "bigint"
typeof Symbol("id");     // "symbol"
```

> Uzun süredir bilinen bir hata: `typeof null` sonucunun `"object"` çıkmasıdır. Buna rağmen `null` hâlâ bir primitivdir.

## Adım 4: Referans Tipleri (Objeler ve Diziler)

Primitive'lerin yanında referans tipleri vardır. Bunlar referansla saklanır ve birden fazla değeri tutabilir.

### Objeler
```javascript
const ogrenci = {
  ad: "Nora",
  ilerleme: 40,
  aktifMi: true
};
```

- Anahtar-değer çiftlerinden oluşur.
- Özelliklere nokta (`ogrenci.ad`) veya köşeli parantez (`ogrenci["ad"]`) ile erişilir.
- JavaScript'teki çoğu veri yapısının temelini objeler oluşturur.

### Diziler
```javascript
const konular = ["Değişkenler", "Veri Tipleri", "Fonksiyonlar"];
```

- 0'dan başlayan sıralı listelerdir.
- İkinci elemana `konular[1]` ile erişilir.
- Diziler teknik olarak objedir, bu yüzden `typeof konular` sonucu `"object"` döner. Gerçekten dizi olup olmadığını `Array.isArray(konular)` ile kontrol edin.

## Adım 5: Dinamik Tipler

JavaScript dinamik tiplidir: Bir değişkenin türü çalışma sırasında değişebilir.

```javascript
let deger = 10;   // number
deger = "on";     // artık string
deger = true;     // artık boolean
```

Bu esneklik güçlüdür ancak beklediğiniz tiplerin farkında olun. Yanlışlıkla tip karıştırmak yaygın hatalardandır.

## Adım 6: Tip Dönüşümleri

Özellikle kullanıcı girdilerini okurken (string) ve hesaplama yaparken (number) değerleri dönüştürmeniz gerekir.

- `Number("42")` → String'i sayıya çevirir (başarısız olursa `NaN` döner).
- `String(10)` → Sayıyı string'e çevirir.
- `Boolean("")` → `false`, `Boolean("metin")` → `true`.
- `parseInt("101", 10)` → Base 10 kullanarak tam sayıya çevirir.
- Şablon dizileri otomatik olarak string'e çevirir: `` `Skor: ${skor}` ``.

### Örtük (implicit) dönüştürmelere dikkat

```javascript
"5" + 1;    // "51" (string birleştirme)
"5" - 1;    // 4   (string sayıya dönüştürülür)
```

JavaScript sizin için tip dönüştürmeye çalışır. Bazı durumlarda pratik, bazı durumlarda beklenmedik sonuçlara yol açabilir. Emin olmadığınızda dönüşümü siz yapın.

## Adım 7: Konsolda Pratik Yapın

DevTools veya Node.js'i açın ve deneyin:

```javascript
const ad = "Taylor";
let yas = 21;
const hobiler = ["okuma", "oyun"];

console.log(typeof ad);          // "string"
console.log(typeof yas);         // "number"
console.log(Array.isArray(hobiler)); // true

yas = yas + 1;
console.log(`İyi ki doğdun ${ad}! Artık ${yas} yaşındasın.`);
```

Her çıktıyı kodu çalıştırmadan önce tahmin edin, sonra kontrol edin. Değerleri değiştirin ve tiplerin nasıl davrandığını gözlemleyin.

## Adım 8: Yaygın Hatalar ve İpuçları

- **`const` değişkeni yeniden atamak**: `TypeError` alırsınız. Yeniden atama gerekiyorsa `let` kullanın.
- **`const`/`let` yazmayı unutmak**: `skor = 0;` yazarsanız istemeden global değişken oluşturursunuz (strict mod bunu engeller).
- **`null` ile `undefined` karışıklığı**: Bir değeri bilerek temizlemek için `null` atayın; hiç set edilmemiş değerlerin `undefined` olmasını bekleyin.
- **Farklı tipleri karşılaştırmak**: `==` dönüştürme yapar, `===` hem tipi hem değeri kontrol eder. Sürprizleri önlemek için `===` kullanın.

```javascript
0 == false;   // true  (çünkü tip dönüştürülüyor)
0 === false;  // false (tipler farklı)
```

## Önemli Noktalar

- ✅ Varsayılan olarak `const` kullanın; yeniden atama gerekiyorsa `let` tercih edin.
- ✅ JavaScript'in temel tiplerini ve tuhaflıklarını bilin (`typeof null` gibi).
- ✅ Objeler ve diziler karmaşık verileri modellemek için kullanılır.
- ✅ Dinamik tipler ve tip dönüşümleri güçlüdür ama dikkat ister.

---

## 🎯 Hızlı Kontrol

1. Hangi durumda `const` yerine `let` tercih etmelisiniz?
2. `typeof null` hangi değeri döndürür ve neden şaşırtıcıdır?
3. Bir değerin dizi olup olmadığını nasıl kontrol edersiniz?
4. Koşullarda neden `==` yerine `===` kullanmalısınız?
5. `"99"` string'ini sayıya dönüştürün ve dönüşüm başarısız olursa ne olacağını açıklayın.

Bu sorulara güvenle cevap verebiliyorsanız Day 1 alıştırmalarına hazırsınız!

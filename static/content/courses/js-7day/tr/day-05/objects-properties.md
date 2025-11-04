---
title: "Nesneler ve Özellikler"
description: "Nesne oluşturma ve nesnelerle çalışma"
type: "reading"
duration: "25 dk"
day: 5
order: 3
nextLesson: "iteration-methods"
---

# Nesneler ve Özellikler

Nesneler, verileri anahtar–değer çiftleri halinde saklayarak bilgileri etiketlemenizi sağlar. Kullanıcı profilleri, kurs ayarları, API yanıtları—JavaScript’te her yerde nesneler görürsünüz. Bugün nesne oluşturmayı, özellik okumayı/güncellemeyi ve iç içe (nested) yapılarda gezinmeyi öğreneceksiniz.

## Adım 1: Neden Nesneler?

- Verileri anlamlı etiketlerle gruplayın (`isim`, `seviye`, `beceriler`).
- Tek yapıda farklı veri türlerini karıştırın.
- Öğrenenler, kurslar veya ayarlar gibi gerçek varlıkları modelleyin.

Diziler sıralı listeler için idealdir; nesneler ise her bilginin neyi temsil ettiğini vurgular.

## Adım 2: Nesne Oluşturma

Küme parantezi `{}` içinde anahtar-değer çiftleri yazın.

```javascript
const ogrenci = {
  isim: "Kayra",
  seviye: 3,
  aktif: true
};
```

- Özellikler `anahtar: değer` şeklindedir.
- Anahtarlar küçüktür, açıklayıcı isimler kullanılır.
- String, sayı, boolean, dizi, fonksiyon—tümü değer olabilir.

## Adım 3: Özellik Okuma

Veriye nokta veya köşeli parantezle erişin.

```javascript
console.log(ogrenci.isim); // "Kayra"
console.log(ogrenci["seviye"]); // 3
```

- Nokta gösterimi, özelliğin adını bildiğinizde kısadır.
- Köşeli parantez string veya değişken alır; boşluk içeren isimler veya dinamik anahtarlar için idealdir.

## Adım 4: Güncelleme ve Ekleme

Yeni değer atayın veya anında yeni özellik ekleyin.

```javascript
ogrenci.seviye = 4; // güncelle
ogrenci.pist = "JavaScript"; // yeni özellik

console.log(ogrenci.pist); // "JavaScript"
```

- Nesneler değiştirilebilir; `const`, yalnızca tüm `ogrenci` referansını yeniden atamayı engeller.

## Adım 5: İç İçe Nesneler ve Diziler

Nesneleri dizilerle karıştırarak daha zengin veri oluşturun.

```javascript
const kurs = {
  baslik: "JavaScript 7 Gün Sprint",
  ilerleme: {
    gun: 5,
    yuzde: 62
  },
  kilometretaslari: ["Kurulum", "Fonksiyonlar", "Diziler"]
};

console.log(kurs.ilerleme.yuzde); // 62
console.log(kurs.kilometretaslari[1]); // "Fonksiyonlar"
```

- Daha derin seviyelere erişmek için nokta ve köşeli parantezleri zincirleyin.
- Eksik yollara erişmek `undefined` döndürür.

## Adım 6: Dinamik Özellik İsimleri

Köşeli parantez değişkenlerle çalışır.

```javascript
const istatistik = "seviye";
console.log(ogrenci[istatistik]); // 4
```

- Özellik adı kullanıcı girdisinden veya döngüden geliyorsa kullanışlıdır.

## Adım 7: Özellik Silme

Gerekirse `delete` anahtarını kullanın.

```javascript
delete ogrenci.aktif;
console.log(ogrenci.aktif); // undefined
```

- Silme, eski verileri temizler; ancak başka kodun bu özelliği bekleyip beklemediğini kontrol edin.

## Adım 8: Anahtar ve Değerleri İnceleme

Yerleşik yardımcılar nesnenin içeriğini görmenizi sağlar.

```javascript
const anahtarlar = Object.keys(ogrenci); // ["isim", "seviye", "pist"]
const degerler = Object.values(ogrenci); // ["Kayra", 4, "JavaScript"]
const ciftler = Object.entries(ogrenci);
// [["isim", "Kayra"], ["seviye", 4], ["pist", "JavaScript"]]
```

- `entries` ile döngüye girip hem anahtarı hem değeri kullanabilirsiniz.

## Adım 9: Pratik Önerileri

1. `const proje = { baslik: "Yapılacaklar", durum: "taslak" };` oluşturun ve `durum` değerini yazdırın.
2. `proje` nesnesine bir `katkicilar` dizisi ekleyin ve iki isim `push` edin.
3. `proje.durum` değerini `"yayınlandı"` yapın ve `tamamlandi: true` ekleyin.
4. `const detay = "baslik";` ile başlık değerini köşeli parantez kullanarak okuyun.
5. `Object.entries(proje)` ile döngü kurup her anahtar/değer çiftini yazdırın.

## Önemli Noktalar

- ✅ Nesneler, etiket–değer eşleşmeleriyle veriyi anlamlı hale getirir.
- ✅ Nokta gösterimi hızlıdır; köşeli parantez dinamik erişimi mümkün kılar.
- ✅ Nesneleri dizilerle birleştirerek gerçek veri yapıları oluşturursunuz.
- ✅ `Object.keys`, `Object.values`, `Object.entries` ile yapıyı çalışma anında keşfedebilirsiniz.

---

## 🎯 Hızlı Kontrol

1. Hangi durumda nokta yerine köşeli parantez kullanırsınız?
2. Var olmayan bir özelliğe erişirseniz ne döner?
3. Nesneler ve diziler veriyi nasıl farklı şekilde saklar?
4. Neden bazı durumlarda `delete` kullanmaktan kaçınmalısınız?

Sıradaki ders: Diziler ve nesneler üzerinde gezinmek için yerleşik iterasyon metodlarını keşfediyoruz. 🔁

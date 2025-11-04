---
title: "Dizi ve Nesne İterasyonu"
description: "forEach, map, filter ve reduce kullanımı"
type: "reading"
duration: "20 dk"
day: 5
order: 4
nextLesson: "day-5-todo-project"
---

# Dizi ve Nesne İterasyonu

İterasyon metodları, manuel döngü yazmadan her elemanı işlemenizi sağlar. Dönüşüm, filtreleme ve özetleme işlemlerini daha okunaklı hale getirir ve temiz veri akışlarının temelini oluşturur. Bugün dört temel oyuncuyla tanışıyoruz: `forEach`, `map`, `filter` ve `reduce`.

## Adım 1: Metodlara Genel Bakış

- `forEach` her eleman için callback çalıştırır; loglama gibi yan etkiler için idealdir.
- `map` her elemanı dönüştürüp yeni bir dizi döndürür.
- `filter`, belirli koşulu sağlayan elemanları seçer.
- `reduce`, diziyi tek bir değere indirger (sayı, nesne, string fark etmez).

Her metod, `(deger, indeks, dizi)` parametrelerini alan bir callback kullanır; ek olarak bağlam (this) argümanı verilebilir.

## Adım 2: Yan Etkiler için `forEach`

```javascript
const ogrenciler = ["Ada", "Grace", "Kayra"];

ogrenciler.forEach((isim, indeks) => {
  console.log(`${indeks + 1}. ${isim}`);
});
```

- Her eleman için callback çalışır.
- `undefined` döndürür; yeni bir dizi üretmek istemediğinizde kullanın.
- Erken çıkmanız gerekirse klasik `for` döngüsüne dönün.

## Adım 3: Dönüşüm için `map`

```javascript
const skorlar = [10, 12, 15];

const ikiKat = skorlar.map((skor) => skor * 2);
console.log(ikiKat); // [20, 24, 30]
```

- Aynı uzunlukta yeni bir dizi yaratır.
- Orijinal diziye dokunmaz.

## Adım 4: Eleme için `filter`

```javascript
const dersler = [
  { baslik: "Diziler", sure: 20 },
  { baslik: "Nesneler", sure: 25 },
  { baslik: "Iterasyon", sure: 20 }
];

const uzunDersler = dersler.filter((ders) => ders.sure > 20);
console.log(uzunDersler);
// [{ baslik: "Nesneler", sure: 25 }]
```

- Koşulu sağlayan elemanlarla yeni bir dizi döndürür.
- Çıkış uzunluğu kısa olabilir (hatta sıfır).

## Adım 5: Özetleme için `reduce`

```javascript
const sureler = [20, 25, 20];

const toplam = sureler.reduce((toplam, dakika) => toplam + dakika, 0);
console.log(toplam); // 65
```

- Biriktirici (`toplam`) ve mevcut değer (`dakika`) alır; başlangıç değeri (`0`) önemlidir.
- Toplam alma, gruplaya, yeni nesneler oluşturma gibi işlerde kullanılır.

## Adım 6: Metod Zincirleme

Metodları sırayla bağlayın.

```javascript
const ogrenciler = [
  { isim: "Ada", ilerleme: 0.9 },
  { isim: "Grace", ilerleme: 0.6 },
  { isim: "Kayra", ilerleme: 0.8 }
];

const onculer = ogrenciler
  .filter((ogrenci) => ogrenci.ilerleme >= 0.8)
  .map((ogrenci) => ogrenci.isim.toUpperCase());

console.log(onculer); // ["ADA", "KAYRA"]
```

- Her metod yeni bir dizi döndürür; sonraki adım aynı dizi üzerinde devam eder.

## Adım 7: Nesneler Üzerinde İterasyon

Nesnelerde bu metodlar yoktur, ancak önce diziye dönüştürebilirsiniz.

```javascript
const istatistikler = { gun: 5, tamamlanan: 12, kalan: 3 };

Object.entries(istatistikler).forEach(([anahtar, deger]) => {
  console.log(`${anahtar}: ${deger}`);
});
```

- `Object.keys`, `Object.values` ve `Object.entries`, nesneyi önce dizi haline getirir.

## Adım 8: Doğru Aracı Seçmek

- Her elemanı dönüştürmek için `map`.
- Eleman elemek için `filter`.
- Tek değere indirmek için `reduce`.
- Yan etkiler ve çıktı üretmeyeceğiniz durumlar için `forEach`.

## Adım 9: Pratik Önerileri

1. `const dersler = ["Giriş", "Diziler", "Nesneler"];` üzerinde `forEach` ile `"Ders: <baslik>"` yazdırın.
2. `const oturumlar = [15, 20, 30];` için her değere 5 dakika ekleyen yeni bir dizi `map` ile oluşturun.
3. `const puanlar = [45, 72, 88, 95];` içinden `>= 70` olanları `filter` ile seçin.
4. `const ilerleme = [0.1, 0.3, 0.6];` değerlerini `reduce` ile toplayın.
5. `const kurs = { baslik: "Diziler", seviye: "başlangıç" };` nesnesini `Object.entries` ve `map` kullanarak `"anahtar: değer"` stringlerine çevirin.

## Önemli Noktalar

- ✅ İterasyon metodları, kodu kısaltır ve niyeti netleştirir.
- ✅ `map`, `filter` ve `reduce`, orijinali değiştirmeden yeni yapılar üretir.
- ✅ `forEach`, her eleman üzerinde yan etki oluşturmak için en uygunudur.
- ✅ Nesneleri diziye dönüştürüp aynı metodlardan faydalanabilirsiniz.

---

## 🎯 Hızlı Kontrol

1. Hangi durumda `forEach` yerine `map` seçersiniz?
2. Sayıları toplarken `reduce` başlangıç değeri ne olmalıdır?
3. Nesnedeki anahtar/değer çiftlerini nasıl iterasyona sokarsınız?
4. Metod zincirlemek neden veri akışlarını güçlendirir?

Sıradaki ders: Diziler ve nesneleri bir mini projede birleştirip yapılacaklar listesini yöneteceğiz. ✅

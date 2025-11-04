---
title: "Dizilere Giriş"
description: "Veri listeleriyle çalışma"
type: "reading"
duration: "20 dk"
day: 5
order: 1
nextLesson: "array-methods"
---

# Dizilere Giriş

Diziler (arrays), birbiriyle ilişkili değerleri tek bir değişken altında tutmanıza izin verir. Öğrenci listeleri, skorlar, görevler, API yanıtları gibi sıralı verilerle çalışırken vazgeçilmezdir. Bugün dizi oluşturmayı, elemanları okumayı ve güncellemeyi öğrenecek; tek değerlerden esnek veri yapısına geçeceksiniz.

## Adım 1: Neden Dizi Kullanırız?

- İlgili değerleri tek yerde saklarsınız.
- Sıra korunur: ilk eklenen eleman siz değiştirene kadar ilk kalır.
- Ekleme, silme ve arama için yerleşik yardımcılar sunar.

Bir liderlik tablonuz olduğunu düşünün. Diziler olmadan `const ogrenci1 = ...`, `const ogrenci2 = ...` şeklinde devam etmeniz gerekir. Diziyle `const ogrenciler = ["Ada", "Grace", "Kayra"];` yazar ve tüm listeyi yönetirsiniz.

## Adım 2: Dizi Oluşturma

Köşeli parantez `[]` kullanın.

```javascript
const ogrenciler = ["Ada", "Grace", "Kayra"];
const seviyeler = [1, 3, 5, 7];
const karisik = ["Trailblazer", 42, true];
```

- Elemanlar string, sayı, boolean, nesne hatta başka diziler olabilir.
- Boş dizi: `const gorevler = [];`.

## Adım 3: Elemanlara Erişim

Dizilerde indeksler 0’dan başlar.

```javascript
const yolHaritasi = ["Kurulum", "Temeller", "Kontrol Akışı", "Fonksiyonlar"];

console.log(yolHaritasi[0]); // "Kurulum"
console.log(yolHaritasi[3]); // "Fonksiyonlar"
```

- İstediğiniz indeksi köşeli parantezle okuyun.
- Olmayan indekse erişirseniz `undefined` alırsınız.

## Adım 4: Eleman Güncelleme

Belirli indekse yeni değer atayın.

```javascript
const durumlar = ["Yapılacak", "Devam", "Kontrol"];
durumlar[1] = "Bloklandı";

console.log(durumlar); // ["Yapılacak", "Bloklandı", "Kontrol"]
```

- Dizi `const` ile tanımlansa bile içindeki elemanları değiştirebilirsiniz; `const` yalnızca tüm değişkeni yeniden atamayı engeller.

## Adım 5: Eleman Ekleme ve Silme

En sık kullanılan metodlar dizinin sonunu yönetir.

```javascript
const todos = ["Doküman oku", "Not yaz"];

todos.push("Tekrar et");    // sona ekle
const son = todos.pop();    // sondan çıkar

console.log(todos); // ["Doküman oku", "Not yaz"]
console.log(son);   // "Tekrar et"
```

- `push` yeni uzunluğu döndürür.
- `pop` çıkarılan elemanı döndürür.
- Dizinin başı veya ortası için diğer metodları bir sonraki derste göreceksiniz.

## Adım 6: Uzunluk ve Son Eleman

`.length` özelliği eleman sayısını verir.

```javascript
const moduller = ["Temel", "DOM", "Async"];

console.log(moduller.length);           // 3
console.log(moduller[moduller.length - 1]); // "Async"
```

- Eleman ekleyip çıkardıkça uzunluk otomatik güncellenir.
- Son eleman her zaman `dizi[dizi.length - 1]`.

## Adım 7: Dizilerde Döngü

Döngüler tüm elemanları işlemenizi sağlar.

```javascript
const skorlar = [10, 15, 18];

for (let i = 0; i < skorlar.length; i++) {
  console.log(`Skor ${i + 1}: ${skorlar[i]}`);
}

for (const skor of skorlar) {
  console.log(`Skor: ${skor}`);
}
```

- Klasik `for` döngüsü indeks kontrolünü size verir.
- `for...of` doğrudan değerlere erişir.

## Adım 8: Dizileri Birleştirme

Dizileri `concat` veya yayma (spread) operatörüyle birleştirin.

```javascript
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Veritabanları"];

const fullStack = frontend.concat(backend);
// ["HTML", "CSS", "Node.js", "Veritabanları"]

const genisletilmis = [...frontend, "JavaScript"];
// ["HTML", "CSS", "JavaScript"]
```

- `concat` orijinal dizileri değiştirmeden yeni bir dizi döndürür.
- `...dizi` ifadesi elemanları yeni diziye kopyalar.

## Adım 9: Pratik Önerileri

1. `const mentorler = ["Ada", "Grace", "Kayra"];` oluşturun ve ikinci mentoru okuyun.
2. `const gorevler = [];` ile başlayın, `push` ile iki eleman ekleyin, `pop` ile son ekleneni çıkarın.
3. `const rozetler = ["Bronz", "Gümüş", "Altın"];` dizisindeki tüm elemanları `for...of` ile yazdırın.
4. `const sabah = ["Esneme", "Plan"];` ve `const aksam = ["Değerlendir", "Oku"];` dizilerini tek rutinde birleştirin.

## Önemli Noktalar

- ✅ Diziler sıralı koleksiyonları tek değişkende toplar.
- ✅ İndeksler 0’dan başlar; `.length` toplam eleman sayısını verir.
- ✅ `push` ve `pop` sona eleman ekleyip çıkarma için idealdir.
- ✅ Döngüler ve yayma operatörü dizileri işleyip birleştirmeyi kolaylaştırır.

---

## 🎯 Hızlı Kontrol

1. Dizi indekslerinin 0’dan başlamasının nedeni nedir?
2. Olmayan bir indekse eriştiğinizde hangi değeri alırsınız?
3. `push` ile eleman eklemek, diziyi yeniden atamaktan nasıl farklıdır?
4. Hangi durumda klasik `for` yerine `for...of` tercih edersiniz?

Sıradaki ders: Dizi metodlarıyla eleman ekleme, çıkarma ve dönüştürme tekniklerine dalıyoruz. 🧭

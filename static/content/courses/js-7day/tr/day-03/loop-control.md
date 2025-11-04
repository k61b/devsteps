---
title: "Döngü Kontrolü: Break ve Continue"
description: "Döngü yürütme akışını kontrol etme"
type: "reading"
duration: "15 dk"
day: 3
order: 3
nextLesson: "nested-loops"
---

# Döngü Kontrolü: Break ve Continue

Döngüler güçlüdür, ancak gerçek dünyada belirli yinelemeleri atlamanız veya erken durdurmanız gerekebilir. JavaScript, döngü akışını hassas biçimde yönetmeniz için iki anahtar kelime sunar: `break` ve `continue`. Bu araçları ustaca kullanmak, koşullara esnek tepki veren döngüler yazmanızı sağlar.

## Adım 1: `break` İfadesi

`break`, koşul hâlâ true olsa bile döngüden hemen çıkar.

```javascript
const hedefler = [100, 200, 300, 400];
let toplam = 0;

for (let i = 0; i < hedefler.length; i++) {
  toplam += hedefler[i];
  if (toplam >= 350) {
    console.log("Kilometre taşı yakalandı! 🎉");
    break;
  }
}

console.log(`Toplanan toplam: ${toplam}`);
```

- Aradığınız değeri bulduğunuzda ideal.
- Koşul sağlandığında gereksiz işlemleri önler.

## Adım 2: `continue` İfadesi

`continue`, döngünün o yinelemesinin kalanını atlayıp bir sonraki turuna geçer.

```javascript
const seriler = [1, 2, 0, 3, 4];

for (let i = 0; i < seriler.length; i++) {
  if (seriler[i] === 0) {
    continue; // kırılan serileri atla
  }
  console.log(`Aktif seri: ${seriler[i]} gün`);
}
```

- İstenmeyen öğeleri görmezden gelirken döngüyü çalıştırmaya devam etmek için kullanılır.
- Derin iç içe `if` bloklarının yerini alarak kodu sadeleştirir.

## Adım 3: `break` ve `continue` Kombinasyonu

```javascript
const dersler = ["Değişkenler", "Operatörler", "Koşullar", "", "Döngüler"];

for (let i = 0; i < dersler.length; i++) {
  const ders = dersler[i];

  if (!ders) {
    continue; // boş girişleri atla
  }

  console.log(`Çalışılan: ${ders}`);

  if (ders === "Koşullar") {
    console.log("Kısa bir mola zamanı 🧘‍♂️");
    break; // bu dersten sonra dur
  }
}
```

- `continue` veriyi filtrelerken, `break` hedefe ulaştığınız noktada döngüyü sonlandırır.

## Adım 4: `while` Döngülerinde Kontrol

`break` ve `continue`, `while` döngülerinde de kullanılabilir.

```javascript
let sayi = 0;

while (sayi < 10) {
  sayi++;

  if (sayi % 2 === 0) {
    continue; // çift sayıları atla
  }

  console.log(`Tek sayı: ${sayi}`);

  if (sayi >= 7) {
    break; // 7 veya üzeri olduğunda dur
  }
}
```

- `continue` kullandığınızda döngü değişkenini güncellemeyi unutmayın; aksi hâlde sonsuz döngü oluşabilir.

## Adım 5: Gerçekçi Senaryo — Girdi Doğrulama

```javascript
const girisler = ["Kayra", "", "Berk", null, "Tuncer"];
const gecerliIsimler = [];

for (let i = 0; i < girisler.length; i++) {
  const isim = girisler[i];

  if (!isim) {
    continue; // boş veya null değerleri atla
  }

  gecerliIsimler.push(isim);

  if (gecerliIsimler.length === 3) {
    console.log("Yeterli sayıda isim toplandı.");
    break;
  }
}

console.log(gecerliIsimler);
```

- `continue`, geçersiz girdileri filtreler.
- `break`, yeterli veri toplanır toplanmaz döngüyü bitirir.

## Adım 6: Fazla Kullanımdan Kaçının

- Çok sayıda `break` / `continue` döngüyü takip etmeyi zorlaştırabilir.
- Mümkün olduğunda net koşullar tercih edin.
- Derin iç içe döngülerde `break` kullanırken dikkatli olun (bir sonraki derste alternatifleri göreceğiz).

## Pratik Önerileri

1. `const skorlar = [95, 82, 74, 88, 91];` dizisinde 80'in altındaki ilk skorda durarak indeksini yazdırın.
2. `const gorevler = ["kod", "", "incele", " ", "yayınla"];` dizisinde boş veya yalnızca boşluk olan string'leri `continue` ile atlayıp yeni bir diziye ekleyin.
3. 1'den başlayıp 10'a kadar giden bir `while` döngüsü yazın; 3'ün katlarını atlayın, 10'a ulaşınca durun.
4. `const harcamalar = [120, -10, 80, 0, 200];` dizisini inceleyin: 0 veya negatif değerleri atlayın, toplam 250'ye ulaştığında döngüyü sonlandırın (hem `break` hem `continue` kullanarak).

## Önemli Noktalar

- ✅ `break`, koşul oluşur oluşmaz döngüyü bitirir.
- ✅ `continue`, mevcut yinelemeyi atlayıp döngüye devam eder.
- ✅ Döngüleri optimize etmek ve mantığı odaklamak için bu araçları kullanın.
- ✅ Okunabilirliği korumak için aşırı kullanımdan kaçının.

---

## 🎯 Hızlı Kontrol

1. Döngüyü doğal akışına bırakmak yerine ne zaman `break` tercih edersiniz?
2. `continue` çalıştıktan sonra ne olur?
3. `continue` kullanırken döngü değişkenini güncellemek neden önemlidir?
4. `break`, gereksiz hesaplamaları nasıl engeller?

Sıradaki derste döngüleri iç içe kullanarak pozisyon tabloları ve desenler oluşturacağız! 🧩

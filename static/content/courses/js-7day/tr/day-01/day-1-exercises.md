---
title: "1. Gün Pratik Alıştırmaları"
description: "Öğrendiklerinizi pekiştirmek için eğlenceli alıştırmalar"
type: "exercise"
duration: "30 dakika"
day: 1
order: 5
nextLesson: "arithmetic-comparison-operators"
---

# 1. Gün Pratiği: Moral Takımını Kur

Öğrendiklerinizi kutlamak için sizi motive edecek kodlar yazalım! Her mini görev değişkenleri, string'leri ve veri tiplerini pekiştirirken çıktıların yüzünüzde gülümseme yaratmasını hedefliyor.

> Kurs klasörünüzde `day1-practice.js` adında yeni bir dosya açın. Her bölümü Node.js veya tarayıcı konsolunda çalıştırarak neşeli çıktılarınızın tadını çıkarın.

## Görev 1: Kişisel Motivasyon Mesajı

Değişkenlerle kişiye özel bir tezahürat oluşturun:

```javascript
const ad = "Jordan";
const favoriAtistirmalik = "çikolatalı kurabiye";
const enerjiSeviyesi = 9; // 1-10 arası

console.log(
  `Hey ${ad}! Enerji seviyen ${enerjiSeviyesi}/10 ve elinde ${favoriAtistirmalik} varsa bugün kimse seni durduramaz!`
);
```

**Bunları dene:**
- Değerleri değiştirip tekrar çalıştır.
- `enerjiSeviyesi` değerini `` `Enerji: ${String(enerjiSeviyesi)}` `` ile string'e çevir.
- Her değişkenin tipini `typeof` ile doğrula.

## Görev 2: İlham Perisi Üretici

Bir iltifat listesi saklayıp rastgele bir tanesini paylaşın:

```javascript
const iltifatlar = [
  "Kodun kristal kadar berrak ✨",
  "Hataları Sherlock gibi çözüyor gibisin 🕵️‍♀️",
  "Yazdığın her satır bir mutluluk kaynağı 🎉"
];

const rastgeleIndex = Math.floor(Math.random() * iltifatlar.length);
const rastgeleIltifat = iltifatlar[rastgeleIndex];

console.log(`Günün iltifatı: ${rastgeleIltifat}`);
```

**Bunları dene:**
- Diziye daha fazla iltifat ekle.
- `Array.isArray(iltifatlar)` kullanarak gerçekten dizi olup olmadığını test et.
- `rastgeleIndex` değerini `0` veya `2` yapıp belirli bir iltifatı seç ve sonucu doğrula.

## Görev 3: İlerleme Karnesi

Boolean, sayı ve string değerlerini harmanlayarak pozitif bir durum mesajı oluşturun:

```javascript
const tamamlananDers = 4;
const bugunPratikYapildi = true;
const harcananDakika = 95;

const mesaj = bugunPratikYapildi
  ? `Bugün ${tamamlananDers} dersi başarıyla tamamladın! Toplam odak süren: ${harcananDakika} dakika. 🎉`
  : "Şimdi dinlenme zamanı! Hazır olduğunda geri gel, biz buradayız. 💪";

console.log(mesaj);
```

**Bunları dene:**
- `bugunPratikYapildi` değerini `false` yapıp moral verici hatırlatmayı gör.
- `harcananDakika` değerini `(harcananDakika / 60).toFixed(1)` ile saate çevir.
- `typeof` kullanarak her değişkenin tipini yazdır.

## Görev 4: Emoji Ruh Hali Karıştırıcısı

Dinamik tipleri kullanarak ruh halinizi hem metin hem emoji ile ifade edin:

```javascript
let ruhHali = "meraklı";
let emojiler = "🧠";

console.log(`Ruh hali kontrolü: ${ruhHali} hissediliyor ${emojiler}`);

// Değiştir
ruhHali = 10; // 10 üzerinden puan
emojiler = ["🚀", "🎯", "🌟"];

console.log(`Ruh hali seviyesi: ${ruhHali}/10`);
console.log(`Emoji seç: ${emojiler.join(" ")}`);
console.log(`Emojiler dizi mi? ${Array.isArray(emojiler)}`);
```

**Bunları dene:**
- `emojiler` değerini tek bir string yap ve `.join()` davranışını gözlemle.
- `ruhHali` sayısını `String(ruhHali)` ile string'e çevir.
- `Boolean("")` veya `Boolean("DevSteps")` kullanarak truthy/falsy değerleri test et.

## Ek Görev: Şükran Duvarı

Bugün için minnettar olduğunuz şeyleri bir obje ile takip edin:

```javascript
const sukranDuvari = {
  kazanclar: ["1. Gün derslerini bitirdim", "Değişkenleri anladım"],
  destekciler: ["DevSteps topluluğu", "Gelecekteki ben"],
  motto: "Devam et, geleceğin geliştiricisisin!"
};

console.log("Şükran Duvarı 🧱");
console.log(`Kazanımlar: ${sukranDuvari.kazanclar.join(", ")}`);
console.log(`Destekçiler: ${sukranDuvari.destekciler.join(" & ")}`);
console.log(`Motto: ${sukranDuvari.motto}`);
```

Kendinize göre öğeler ekleyin veya `favoriDinlenmeSarkisi` gibi yeni alanlar tanımlayın. Bu duvar tamamen size ait!

---

## 🎯 Mini Özet

- ✅ Değişkenler string, sayı, dizi, obje gibi her tür veriyi tutabilir.
- ✅ Rastgelelik ve şablon string'leri çıktıları keyifli hale getirir.
- ✅ Veri tipleriyle pratik yapmak teoriyi ezberlemekten çok daha hızlı ilerletir.

Dosyanızı kaydedin—morale ihtiyacınız olduğunda bu kodlara geri dönebilirsiniz. Hazır mısınız? 2. günde operatörler ve karşılaştırmalar sizi bekliyor! 🚀

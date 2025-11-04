---
title: "3. Gün Pratik Projesi - Döngü Macerası"
description: "For, while ve iç içe döngülerle dashboard ve desenler oluşturun"
type: "project"
duration: "40 dk"
day: 3
order: 5
nextLesson: "function-declarations"
---

# 3. Gün Pratik Projesi: Döngü Macerası

`for`, `while` ve iç içe döngüleri tanıdınız—şimdi hepsini küçük ama keyifli bir projede birleştirme zamanı. Bu sayfada yalnızca döngüler kullanarak ilerleme panosu, motivasyon göstergesi ve desen üreticisi oluşturacaksınız.

> Proje klasörünüzde `dongu-macerasi.js` adında yeni bir dosya oluşturun. Her adımı tamamladıkça Node.js ile çalıştırın (`node dongu-macerasi.js`).

## 🎯 Proje Genel Bakışı

Programınız üç bölümden oluşacak:

1. **İlerleme Takibi** – `for` döngüsüyle günlük başarıları gösterin.
2. **Motivasyon Ölçeri** – `while` ve `do...while` döngüleriyle motivasyonu simüle edin.
3. **Desen Atölyesi** – İç içe döngülerle desenler çizin.

Çıktınızı emoji, çizgi veya renklerle süslemek isterseniz (örneğin `chalk` kütüphanesiyle) özgürsünüz.

---

## 1) İlerleme Takibi (`for` Döngüsü)

- 7 günlük bir kodlama serisini `for` döngüsüyle loglayın.
- Gün numarası 3’ün katı olduğunda kutlama mesajı ekleyin.
- Mesajları bir dizide saklayın; isterseniz sonradan tekrar kullanın.

```javascript
console.log("=== İlerleme Takibi ===");

const seriMesajlari = [];

for (let gun = 1; gun <= 7; gun++) {
  let mesaj = `Gün ${gun}: Kod tamam!`;
  if (gun % 3 === 0) {
    mesaj += " 🎉 Kilometre taşı!";
  }
  console.log(mesaj);
  seriMesajlari.push(mesaj);
}
```

**Ek Görev**: Diziyi bir döngüyle ters çevirip mesajları son günden ilk güne doğru yazdırın.

---

## 2) Motivasyon Ölçeri (`while` + `do...while`)

- `let motivasyon = 100;` ile başlayın.
- Her seferinde motivasyonu 17 azaltan bir `while` döngüsü kurun; motivasyon 0 veya altına düşünce durdurun.
- Döngüde her adımdan sonra motivasyon seviyesini loglayın.
- Döngü bitince “enerji yükseltmeleri”ni simüle etmek için `do...while` kullanın. Motivasyon 80’e ulaşana kadar her seferinde 25 ekleyin.

```javascript
console.log("\n=== Motivasyon Ölçeri ===");

let motivasyon = 100;

while (motivasyon > 0) {
  console.log(`Motivasyon ${motivasyon}. Devam!`);
  motivasyon -= 17;
}

console.log("Motivasyon tükendi. Yenilenme zamanı! ☕");

do {
  motivasyon += 25;
  console.log(`Yenilenme: motivasyon ${motivasyon}`);
} while (motivasyon < 80);

console.log(`Tekrar hazırız! Motivasyon: ${motivasyon}`);
```

**Ek Görev**: Kaç tane destek aldığınızı sayıp sonuçta özetleyin.

---

## 3) Desen Atölyesi (İç İçe Döngüler)

İki desen oluşturun:

### A) Yıldız Merdiveni

İç içe döngüyle şu çıktıyı üretin:
```
★
★★
★★★
★★★★
★★★★★
```

### B) İlerleme Haritası

3 × 4’lük bir koordinat grid’i yazdırın:
```
(1,1) (1,2) (1,3) (1,4)
(2,1) (2,2) (2,3) (2,4)
(3,1) (3,2) (3,3) (3,4)
```

```javascript
console.log("\n=== Desen Atölyesi ===");

// Yıldız Merdiveni
for (let satir = 1; satir <= 5; satir++) {
  let yildiz = "";
  for (let sutun = 1; sutun <= satir; sutun++) {
    yildiz += "★";
  }
  console.log(yildiz);
}

console.log("\nMacera Haritası:");

const satirSayisi = 3;
const sutunSayisi = 4;

for (let s = 1; s <= satirSayisi; s++) {
  let satirMetni = "";
  for (let c = 1; c <= sutunSayisi; c++) {
    satirMetni += `(${s},${c}) `;
  }
  console.log(satirMetni);
}
```

**Ek Görev**: Koordinatlar yerine özel etiketler yazın veya içteki döngüde `if` kullanarak bir “hazine” hücresini vurgulayın.

---

## 🌈 Bonus Fikirler

1. **Döngülü İltifatlar**: Pozitif ifadeleri bir dizide saklayın; her bölüm sonrası rastgele birini yazdırın.
2. **İstatistik Özeti**: Toplam kaç yıldız basıldığını, kaç gün loglandığını veya kaç destek kullanıldığını hesaplayın.
3. **Etkileşimli Mod**: Komut satırından (`process.argv`) gelen argümanlarla seri uzunluğunu veya grid boyutunu değiştirin.
4. **Renkli Çıktı** (opsiyonel): `chalk` gibi bir kütüphane ile bölümleri renklendirin.

---

## ✅ Kontrol Listesi

- `for` döngüleri günlük seriyi ve ters sıralamayı yönetiyor.
- `while` ve `do...while`, motivasyon seviyesini güvenli şekilde artırıp azaltıyor.
- İç içe döngüler yıldız merdiveni ve koordinat grid’ini üretiyor.
- En az bir bonus fikri denendi (isteğe bağlı ama tavsiye edilir!).

Çıktınızı toplulukla paylaşın veya bir arkadaşınıza gönderin—pozitif enerji bulaşıcıdır. Yarın, fonksiyonlar ile mantığınızı profesyonelce düzenlemeye başlıyoruz! 💪✨

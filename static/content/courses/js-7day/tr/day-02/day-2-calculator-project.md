---
title: "2. Gün Meydan Okuması - Basit Hesap Makinesi"
description: "Operatörler ve koşullar hakkında öğrendiklerinizi kullanarak basit bir hesap makinesi oluşturun"
type: "project"
duration: "30 dk"
day: 2
order: 5
nextLesson: "for-loops"
---

# 2. Gün Meydan Okuması: Mutlu Sayılar Hesaplayıcısı

Operatör becerilerinizi kutlama zamanı! Bu mini projede neşeli mesajlar üreten bir hesap makinesi geliştireceksiniz. Aritmetik operatörler, karşılaştırmalar, mantıksal düşünme ve `if/else` yapılarını pekiştireceksiniz.

## 🎯 Proje Hedefi

İki sayı ve bir işlem (`+`, `-`, `*`, `/`, `%`, `**`) kabul eden; hem sonucu hem de pozitif, kullanıcı dostu bir mesaj döndüren bir fonksiyon yazın.

Örnek çıktı:

```
➕ Toplama partisi!
Sonuç: 12
Mesaj: "Matematik büyüsü! 7 artı 5, 12 eder. Seriyi canlı tut!"
```

## 📋 Gereksinim Listesi

1. İki sayı ve bir işlem sembolü alın.
2. Toplama, çıkarma, çarpma, bölme, kalan ve üs alma işlemlerini destekleyin.
3. Sıfıra bölmeyi engelleyin ve nazik bir uyarı gösterin.
4. Sayısal sonucu döndürün.
5. Her işlem için özel, neşeli bir mesaj yazdırın.

## 🛠️ Adım Adım Plan

### 1. Dosyanızı Hazırlayın

`mutlu-hesaplayici.js` dosyasını oluşturun ve giriş değerlerini ayarlayın:

```javascript
const sayi1 = 7;
const sayi2 = 5;
const islem = "+";
```

### 2. Temel Mantığı Kurun

Hesap makinesini fonksiyon içinde toplayın ki tekrar kullanabilesiniz:

```javascript
function mutluHesaplayici(a, b, op) {
  let sonuc;
  let mesaj;

  if (op === "+") {
    sonuc = a + b;
    mesaj = `Matematik büyüsü! ${a} artı ${b} eşittir ${sonuc}. Seriyi canlı tut!`;
  }
  // -, *, /, %, ** için bloklar ekleyin

  return { sonuc, mesaj };
}
```

### 3. Özel Durumları Yönetin

- İşlem bölmeyse ve `b` değeri `0` ise çökmeden nazikçe uyarı döndürün.
- Sembol tanınmıyorsa hangi sembollerin desteklendiğini bildirin.

### 4. Sonucu Yazdırın

```javascript
const cikti = mutluHesaplayici(sayi1, sayi2, islem);

if (cikti.hata) {
  console.log(cikti.hata);
} else {
  console.log(`İşlem: ${islem}`);
  console.log(`Sonuç: ${cikti.sonuc}`);
  console.log(`Mesaj: "${cikti.mesaj}"`);
}
```

## 🌈 Bonus Meydan Okumalar

1. **Emoji Modu**: Her işlem için ayrı emoji ekleyin (`+` → `➕`, `*` → `✖️` vb.).
2. **Geçmiş Kaydı**: Her işlemi bir dizide saklayın ve sonunda özet yazdırın.
3. **Rastgele Övgü**: `Math.random()` ile rastgele seçilen iltifatlar ekleyin.
4. **Girdi Doğrulama**: `a` ve `b` sayısal değilse kullanıcıyı uyarın.

## 💡 İpuçları

- Daha düzenli bir yapı için `switch` kullanabilirsiniz.
- `Math.pow(a, b)`, `a ** b` ile aynı sonucu verir.
- Şablon string'ler kişiselleştirilmiş mesaj yazmayı kolaylaştırır.
- Önce basit hali çalışsın, sonra süslemeler ekleyin.

## ✅ Örnek Çözüm

Önce kendiniz deneyin. Hazır olduğunuzda aşağıdaki olası çözümle karşılaştırın:

<details>
<summary>Bir yaklaşımı görmek için tıklayın</summary>

```javascript
function mutluHesaplayici(a, b, op) {
  if (typeof a !== "number" || typeof b !== "number") {
    return { hata: "Lütfen sadece sayılar kullanın. Hesap makineleri sayıları sever!" };
  }

  const iltifatlar = [
    "Sayılar sana hayran.",
    "Kendinden emin kod yazıyorsun!",
    "Bu hesaplama saf mutluluk yaratıyor!"
  ];
  const iltifat = iltifatlar[Math.floor(Math.random() * iltifatlar.length)];

  let sonuc;
  let mesaj;
  let emoji;

  switch (op) {
    case "+":
      sonuc = a + b;
      emoji = "➕";
      mesaj = `${iltifat} ${a} artı ${b}, ${sonuc} eder.`;
      break;
    case "-":
      sonuc = a - b;
      emoji = "➖";
      mesaj = `${iltifat} ${a} eksi ${b}, geriye ${sonuc} bırakır.`;
      break;
    case "*":
      sonuc = a * b;
      emoji = "✖️";
      mesaj = `${iltifat} ${a} çarpı ${b}, ${sonuc} eder. Hızı katla!`;
      break;
    case "/":
      if (b === 0) {
        return { hata: "Sıfıra bölme? Buna izin yok—başka bir sayı dene! 🚫" };
      }
      sonuc = a / b;
      emoji = "➗";
      mesaj = `${iltifat} ${a} bölü ${b}, ${sonuc} eder.`;
      break;
    case "%":
      sonuc = a % b;
      emoji = "🧮";
      mesaj = `${iltifat} ${a} % ${b} işleminin kalanı ${sonuc}.`;
      break;
    case "**":
      sonuc = a ** b;
      emoji = "⚡";
      mesaj = `${iltifat} ${a} üzeri ${b}, ${sonuc}. Enerji patlaması!`;
      break;
    default:
      return {
        hata: "Desteklenmeyen işlem. +, -, *, /, % veya ** kullanın."
      };
  }

  return { emoji, sonuc, mesaj };
}

const islemler = [
  mutluHesaplayici(7, 5, "+"),
  mutluHesaplayici(10, 3, "-"),
  mutluHesaplayici(4, 4, "*"),
  mutluHesaplayici(9, 3, "/")
];

islemler.forEach((islem) => {
  if (islem.hata) {
    console.log(islem.hata);
  } else {
    console.log(`${islem.emoji} Sonuç: ${islem.sonuc} — ${islem.mesaj}`);
  }
});
```

</details>

## 🚀 Başarılarını Paylaş

- En mutlu çıktınızın ekran görüntüsünü DevSteps topluluğunda paylaşın.
- Kendinize meydan okuyun: Kullanıcı girdisi alan komut satırı aracına dönüştürebilir misiniz?
- Kutlayın—aritmetik, karşılaştırmalar ve koşulları gerçek bir programda birleştirdiniz!

Sırada 3. gün ve döngüler dünyası var. 🔁

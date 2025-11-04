---
title: "While ve Do-While Döngüleri"
description: "Farklı döngü tipleri ve ne zaman kullanılacakları"
type: "reading"
duration: "20 dk"
day: 3
order: 2
nextLesson: "loop-control"
---

# While ve Do-While Döngüleri

`for` döngüleri kaç kez döneceğinizi bildiğiniz durumlarda harikadır. Peki ya belirli bir olay gerçekleşene kadar devam etmek isterseniz? İşte o zaman `while` ve `do...while` döngüleri devreye girer. Koşul doğru olduğu sürece tekrar ederler—kullanıcı girdisi beklemek, işlemleri tekrar denemek veya veri bitene kadar işlemek için idealdir.

## Adım 1: `while` Döngüsünün Temeli

```javascript
let seri = 0;

while (seri < 5) {
  seri++;
  console.log(`Seri günü ${seri}!`);
}
```

- Koşul (`seri < 5`) her yinelemeden önce kontrol edilir.
- Koşul başlangıçta yanlışsa döngü hiç çalışmaz.
- Koşulu değiştirecek bir şey ekleyin; yoksa sonsuz döngü oluşur.

### Kullanım senaryoları
- Veri bitene kadar okumak.
- Bir bayrağın (örneğin `yuklendiMi`) true olmasını beklemek.
- Kuyruktaki elemanlar işlenene kadar dönmek.

## Adım 2: `for` → `while` Dönüşümü

Çoğu `for` döngüsü `while` olarak yazılabilir:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

Bu esneklik, yineleme sayısı önceden belli olmadığında işinize yarar.

## Adım 3: `do...while` Döngüsü

`do...while`, koşul yanlış olsa bile döngü gövdesini en az bir kez çalıştırır.

```javascript
let deneme = 0;

do {
  deneme++;
  console.log(`Deneme ${deneme} kaydedildi.`);
} while (deneme < 3);
```

- Koşul döngü gövdesinden sonra kontrol edilir.
- Önce kodu çalıştırmak, sonra devam edip etmeye karar vermek istediğiniz senaryolar için uygundur (örneğin kullanıcıdan giriş istemek, zar atmak, isteği yeniden denemek).

## Adım 4: `while` ve `do...while` Arasında Seçim

| Senaryo | Kullan |
| ------- | ------ |
| Koşulu önce kontrol etmek | `while` |
| Kodun en az bir kez çalışması gerekiyorsa | `do...while` |
| Yineleme sayısı biliniyorsa | `for` (ya da `while`) |

Örnek: kullanıcı geribildirim girene kadar sormak

```javascript
let geribildirim = "";

do {
  geribildirim = "Ders harikaydı!"; // bu değeri kullanıcı girdisi olarak düşünün
  console.log("Geribildirimin için teşekkürler!");
} while (!geribildirim);
```

## Adım 5: Sonsuz Döngülerden Kaçınma

Koşulun sonunda false olmasını sağlamak için döngü içinde değişkenleri güncelleyin.

```javascript
let enerji = 3;

while (enerji > 0) {
  console.log("Kod pratiği yapılıyor...");
  enerji--;
}

console.log("Mola zamanı! ☕");
```

- `enerji--` unutulursa döngü bitmez.
- Dış verilerle çalışırken güvenlik önlemleri (ör. `if (enerji < 0) break;`) ekleyin.

## Adım 6: `while` + Diziler

`while` döngüsü, kuyruk mantığıyla dizi işlerken kullanışlıdır:

```javascript
const hatirlatmalar = ["Esneme", "Su iç", "Notları gözden geçir"];
let index = 0;

while (index < hatirlatmalar.length) {
  console.log(`Hatırlatma: ${hatirlatmalar[index]}`);
  index++;
}
```

Veya dizi boşalana kadar elemanları tüketmek:

```javascript
const gorevler = ["Kod refaktörü", "Test yaz", "Özelliği gönder"];

while (gorevler.length > 0) {
  const gorev = gorevler.shift(); // ilk elemanı çıkarır
  console.log(`Tamamlandı: ${gorev}`);
}
```

## Adım 7: `do...while` ile Gerçekçi Bir Örnek — Geri Sayım

```javascript
let geriSayim = 5;

do {
  console.log(`Geri sayım: ${geriSayim}`);
  geriSayim--;
} while (geriSayim > 0);

console.log("Kalkış!");
```

`geriSayim` 0 bile olsa en az bir log görürsünüz—bazen tam da ihtiyacınız olan budur.

## Adım 8: Pratik Önerileri

1. `let birikim = 0;` ile başlayarak 25'er artırıp 200'e ulaşana kadar süren bir `while` döngüsü yazın.
2. `do...while` kullanarak zar atmayı (`Math.ceil(Math.random() * 6)`) 6 gelene kadar tekrar edin. Kaç deneme sürdüğünü sayın.
3. `const mesajlar = ["Devam et", "Az kaldı", "Başarını kutla"];` dizisini `shift()` ile boşalana kadar loglayın.
4. Bir sayıyı 1000'i geçene kadar ikiye katlayan bir `while` döngüsü yazın, her adımı loglayın.

## Önemli Noktalar

- ✅ `while` döngüleri koşul true olduğu sürece (önceden kontrol ederek) tekrarlar.
- ✅ `do...while` döngüleri koşul ne olursa olsun en az bir kez çalışır.
- ✅ Sonsuz döngüden kaçınmak için değişkenleri güncelleyin.
- ✅ Senaryonuza göre döngü seçin: bilinen sayıda adım (`for`), koşullu tekrar (`while`), garantili ilk çalıştırma (`do...while`).

---

## 🎯 Hızlı Kontrol

1. `do...while` döngüsü koşulu ne zaman kontrol eder?
2. Bir `for` döngüsünü `while` döngüsüne nasıl dönüştürürsünüz?
3. `while (true)` neden tehlikelidir ve sonsuz döngüyü nasıl engellersiniz?
4. `do...while` döngüsünün `while`'a göre daha uygun olduğu bir senaryo anlatın.

Sıradaki derste `break` ve `continue` ile döngülerinizi daha hassas şekilde kontrol edeceksiniz. 🛑➡️

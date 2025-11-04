---
title: "Aritmetik ve Karşılaştırma Operatörleri"
description: "Matematiksel ve karşılaştırma işlemleriyle çalışma"
type: "reading"
duration: "25 dk"
day: 2
order: 1
nextLesson: "logical-operators"
---

# Aritmetik ve Karşılaştırma Operatörleri

2. güne hoş geldiniz! Bugün JavaScript'in nasıl hesaplama yaptığını ve değerleri nasıl karşılaştırdığını öğreneceksiniz. Bu iki konu, her etkileşimli uygulamanın kalbinde yer alır. Farklı örneklerle matematik ve mantığın birlikte nasıl çalıştığını göreceğiz.

## Adım 1: Pratik Dosyası Oluşturun

Proje klasörünüzde `day2-operators.js` dosyasını oluşturun ve denemelerinizi Node.js veya tarayıcı konsolunda çalıştırın:

```bash
node day2-operators.js
```

Her bölümden sonra kodu güncelleyin ve tekrar çalıştırarak bilgileri pekiştirin.

## Adım 2: Aritmetik Operatörler

Aritmetik operatörler temel matematik işlemlerini yapar. Başlangıç için iki sayı tanımlayın:

```javascript
const seviye = 3;
const bonusPuan = 120;
```

### Toplama (`+`)

```javascript
const toplamPuan = seviye + bonusPuan;
console.log(`Toplam puan: ${toplamPuan}`); // 123
```

- Sayıları toplar.
- String üzerinde kullanıldığında metinleri birleştirir: `"Merhaba " + "dünya"`.

### Çıkarma (`-`)

```javascript
const sonrakiSeviyeIcınPuan = 200 - toplamPuan;
console.log(sonrakiSeviyeIcınPuan); // 77
```

### Çarpma (`*`) ve Bölme (`/`)

```javascript
const carpan = 2 * seviye; // 6
const ortalamaPuan = bonusPuan / seviye; // 40
```

- Bölme her zaman ondalık sonuç döndürür. Tam sayı istiyorsanız `Math.floor` veya `Math.round` kullanın.

### Kalan (`%`)

```javascript
const kalanJeton = 37 % 5; // 2
```

- Bölme işleminden kalan kısmı döndürür.
- Sayının çift/tek olduğunu kontrol etmek (`sayi % 2 === 0`) veya sırayla ögeler seçmek için kullanılır.

### Üs Alma (`**`)

```javascript
const guclenme = 2 ** seviye; // 8
```

- Tabanı (2) `seviye` kadar kuvvetle çarpar.
- `Math.pow(2, seviye)` ile aynı sonucu verir.

### Arttırma/Azaltma (`++`, `--`)

```javascript
let seri = 1;
seri++; // seri artık 2
seri--; // tekrar 1
```

- Sonek form (`seri++`) önce mevcut değeri döndürür, sonra artırır.
- Ön ek form (`++seri`) önce artırır, sonra yeni değeri döndürür.
- Çoğu durumda `seri += 1` daha okunaklıdır.

### Bileşik Atama

Kısa gösterimle hem aritmetik hem atama yapılır:

```javascript
let saglik = 100;
saglik += 20; // 120
saglik -= 15; // 105
saglik *= 2;  // 210
saglik /= 3;  // 70
```

## Adım 3: Operatör Önceliği ve Parantez

JavaScript matematiksel sırayı izler:

1. Parantez
2. Üs alma
3. Çarpma/Bölme/Kalan
4. Toplama/Çıkarma

Şüpheye düştüğünüzde niyetinizi göstermek için parantez ekleyin:

```javascript
const sonuc = (5 + 3) * 2; // 16, 11 değil
```

## Adım 4: Karşılaştırma Operatörleri

Karşılaştırmalar boolean (`true` veya `false`) değer döndürür. Bunları koşullarda veya kontrol akışında kullanırız.

```javascript
const gerekenPuan = 100;
const mevcutPuan = 123;
```

### Büyük/Küçük Karşılaştırmaları

```javascript
console.log(mevcutPuan > gerekenPuan);  // true
console.log(mevcutPuan < gerekenPuan);  // false
console.log(mevcutPuan >= gerekenPuan); // true
console.log(mevcutPuan <= gerekenPuan); // false
```

### Eşitlik ve Sıkı Eşitlik

```javascript
const girilenSeviye = "3";

console.log(girilenSeviye == seviye);  // true (gevşek eşitlik, tipleri dönüştürür)
console.log(girilenSeviye === seviye); // false (sıkı eşitlik)
```

- `==` (çift eşittir) karşılaştırmadan önce tipleri dönüştürür. Bu durum gizli hatalara yol açabilir.
- `===` (üç eşittir) hem değeri hem tipi karşılaştırır. Modern kodda tercih edilmesi önerilir.
- Aynı fark `!=` ve `!==` için de geçerlidir.

### String Karşılaştırmaları

String'ler Unicode sırasına göre alfabetik karşılaştırılır:

```javascript
console.log("elma" < "muz");  // true
console.log("JavaScript" > "Java"); // true
```

Kullanıcıya gösterilecek karşılaştırmalarda harf büyüklüğünü normalize etmeyi veya yerelleştirmeyi unutmayın.

## Adım 5: Aritmetik ve Karşılaştırmayı Birleştirmek

Gerçek projelerde matematik ve mantık birlikte çalışır. İşte rozet kazandıran mini bir örnek:

```javascript
const tamamlananDers = 5;
const hedefDers = 4;
const ilerlemePaylasildiMi = false;

const kazanilanRozet =
  (tamamlananDers >= hedefDers && !ilerlemePaylasildiMi)
    ? "Seri Ustası"
    : "Bonus rozet için ilerlemeni paylaş!";

console.log(kazanilanRozet);
```

- `&&` (VE) her iki koşulun da doğru olmasını ister.
- `!` boolean değerin tersini alır.
- Üçlü operatör (`koşul ? doğruysa : yanlışsa`) iki seçenek arasında karar verir.

Mantıksal operatörlere bir sonraki derste derinlemesine bakacağız, ama bu örnek aritmetiğin karar mekanizmalarına nasıl güç verdiğini gösteriyor.

## Adım 6: Hata Ayıklama İpuçları

- Karşılaştırmadan önce ara değerleri görmek için `console.log` kullanın.
- Beklenmedik sonuçlar için `typeof` ile veri tipini kontrol edin.
- Ondalık hassasiyetine dikkat edin: `0.1 + 0.2 === 0.3` sonucu `false` döner. `Number.toFixed()` veya küçük toleranslarla karşılaştırma yapın.

## Pratik Önerileri

Bu görevleri pratik dosyanızda deneyin:

1. Üç sınavın ortalama puanını hesaplayın. Sırayı kontrol etmek için parantez kullanın.
2. Belirli bir dakikanın 15'e bölünüp bölünmediğini bulun. Bölünüyorsa kutlama mesajı yazdırın.
3. `const xp = 980; const sonrakiSeviyeXp = 1000;` değerleriyle yüzde ilerlemeyi (`(xp / sonrakiSeviyeXp) * 100`) hesaplayın ve en az %90'a ulaşıp ulaşmadığınızı yazdırın.
4. `const girilenYas = "18"` ve sayı `18` değerlerini `==` ve `===` ile karşılaştırın. Farkı yorum satırında açıklayın.

## Önemli Noktalar

- ✅ Aritmetik operatörleri toplam, çıkarma, kalan ve üs alma gibi işlemleri yapar.
- ✅ Karşılaştırma operatörleri boolean döndürür ve karar mekanizmalarını tetikler.
- ✅ Parantez kullanımı işlem önceliğini açıklığa kavuşturur.
- ✅ Tutarlılık için sıkı eşitliği (`===`) tercih edin.

---

## 🎯 Hızlı Kontrol

1. `==` ile `===` arasındaki fark nedir?
2. 58 sayısının 7'ye bölümünden kalan nasıl hesaplanır?
3. Bir `skor` değişkenini 5 artırmak için hangi operatörü kullanırsınız?
4. Bir ifadede aritmetiğin karşılaştırmadan önce çalışmasını nasıl garantilersiniz?

Hazırsanız sırada mantıksal operatörler var—koşul yeteneklerinizi bir üst seviyeye taşıyalım!

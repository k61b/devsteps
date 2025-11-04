---
title: "İç İçe Döngüler"
description: "Döngüleri birbirinin içinde kullanma"
type: "reading"
duration: "20 dk"
day: 3
order: 4
nextLesson: "day-3-practice-project"
---

# İç İçe Döngüler

İç içe döngüler, bir döngünün içinde başka bir döngü çalıştırdığınız anlardır. Çift değerlerle çalışmak, gridler oluşturmak ve desen üretmek için idealdir—çoğu algoritma probleminin temel taşlarındandır. Ancak karmaşıklıkları hızlıca artabileceği için düzenli ve verimli tutmak önemlidir.

## Adım 1: Temel Yapı

```javascript
for (let dis = 1; dis <= 3; dis++) {
  for (let ic = 1; ic <= 2; ic++) {
    console.log(`Dış: ${dis}, İç: ${ic}`);
  }
}
```

- Dış döngü (1'den 3'e) önce çalışır.
- Her dış döngü adımında iç döngü tamamen çalışır.
- Toplamda 3 × 2 = 6 kez yürütülür.

## Adım 2: Grid Oluşturmak

```javascript
const satir = 3;
const sutun = 4;

for (let s = 1; s <= satir; s++) {
  let cikti = "";
  for (let c = 1; c <= sutun; c++) {
    cikti += `(${s},${c}) `;
  }
  console.log(cikti);
}
```

Çıktı:
```
(1,1) (1,2) (1,3) (1,4)
(2,1) (2,2) (2,3) (2,4)
(3,1) (3,2) (3,3) (3,4)
```

Satır-sütun mantığı gereken her durumda (çarpım tablosu, satranç tahtası, tablo render etme) iç içe döngüler kullanabilirsiniz.

## Adım 3: Çarpım Tablosu Örneği

```javascript
for (let i = 1; i <= 5; i++) {
  let satirMetni = "";
  for (let j = 1; j <= 5; j++) {
    satirMetni += `${i * j}\t`;
  }
  console.log(satirMetni);
}
```

- İç döngü satır numarasını sütun numarasıyla çarpar.
- `\t` tab boşluğu ekleyerek çıktıyı hizalar.

## Adım 4: Dizilerle İç İçe Döngüler

### Öğrencileri mentorlarla eşleştirmek

```javascript
const ogrenciler = ["Ada", "Grace"];
const mentorlar = ["Kayra", "Berk", "Tuncer"];

for (let i = 0; i < ogrenciler.length; i++) {
  for (let j = 0; j < mentorlar.length; j++) {
    console.log(`${ogrenciler[i]}, ${mentorlar[j]} ile eşleşti`);
  }
}
```

Bu kod tüm kombinasyonları (kartesyen çarpım) üretir.

### Dizileri öğe öğe karşılaştırmak

```javascript
const cevaplar = ["A", "C", "B", "D"];
const kullaniciCevaplari = ["A", "B", "B", "D"];

let skor = 0;

for (let i = 0; i < cevaplar.length; i++) {
  if (cevaplar[i] === kullaniciCevaplari[i]) {
    skor++;
  }
}

console.log(`Skor: ${skor}/${cevaplar.length}`);
```

Her zaman iç içe döngü gerekmez—tek döngü yeterliyse onu tercih edin. İşinize en uygun ve basit yapıyı seçin.

## Adım 5: İç İçe Döngüleri Kontrol Etmek

`break` ve `continue` yalnızca bulundukları döngüyü etkiler. Her iki döngüden aynı anda çıkmak için alternatifler:

### Seçenek 1: Bayrak kullanmak
```javascript
let bulundu = false;

for (let satir = 0; satir < 3 && !bulundu; satir++) {
  for (let sutun = 0; sutun < 3; sutun++) {
    if (satir === 1 && sutun === 2) {
      console.log("Hedef bulundu!");
      bulundu = true;
      break;
    }
  }
}
```

### Seçenek 2: Fonksiyon ve `return`

Döngüleri fonksiyon içine alıp, hedefi bulunca `return` edebilirsiniz:

```javascript
function hedefBul(matriks, hedef) {
  for (let satir = 0; satir < matriks.length; satir++) {
    for (let sutun = 0; sutun < matriks[satir].length; sutun++) {
      if (matriks[satir][sutun] === hedef) {
        return { satir, sutun };
      }
    }
  }
  return null;
}
```

### Seçenek 3: Etiketli döngüler (İleri Seviye)

JavaScript etiketi destekler, fakat okunabilirliği düşürebilir:

```javascript
disDongu:
for (let satir = 0; satir < 3; satir++) {
  for (let sutun = 0; sutun < 3; sutun++) {
    if (satir === 1 && sutun === 2) {
      break disDongu;
    }
  }
}
```

Etiketleri yalnızca gerçekten gerekiyorsa kullanın.

## Adım 6: Performans Dikkatleri

- İç içe döngüler işi katlar: Her iki döngü de 100 kez çalışıyorsa toplam 10.000 iterasyon olur.
- İç döngüde ağır işlemlerden kaçının.
- Mümkün olduğunda erken çıkış (`break`) veya alternatif veri yapıları (`Set`, `Map`) ile optimizasyon yapın.

## Pratik Önerileri

1. Şu desen çıktılarını üretin:
   ```
   *
   **
   ***
   ****
   ```
2. `const matris = [[1, 2], [3, 4], [5, 6]];` için her satırı ve satır toplamını loglayın.
3. Öğrenciler ile proje konularını iki diziyi kullanarak eşleştirin.
4. Bir dizideki herhangi iki sayının toplamı 10 yapıyor mu diye kontrol eden fonksiyon yazın; bulur bulmaz `true` döndürün.

## Önemli Noktalar

- ✅ İç içe döngüler kombinasyonlar, gridler ve matris benzeri verilerde kullanılır.
- ✅ Her iç döngü, dış döngünün her yinelemesinde çalışır, bu da çalışma süresini katlar.
- ✅ Akışı yönetmek için `break`, `continue`, `return` gibi kontrollerden yararlanın.
- ✅ Okunabilirliği korumak için bayraklar, fonksiyonlar ve erken çıkışlar gibi alternatifler tercih edin.

---

## 🎯 Hızlı Kontrol

1. Her iki döngü de 10 kez çalışıyorsa toplam kaç iterasyon olur?
2. Etiketli `break` yerine neden fonksiyonla `return` kullanmayı tercih edebilirsiniz?
3. İç içe döngülerde gereksiz işi nasıl azaltabilirsiniz?
4. Şu çıktıyı üretin:
   ```
   1 2 3
   1 2 3
   ```

Tebrikler—döngüler modülünü tamamladınız! Şimdi Day 3 pratik projesiyle tüm bilgileri birleştirme zamanı. 🎉

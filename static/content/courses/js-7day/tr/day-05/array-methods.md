---
title: "Dizi Metodları"
description: "Push, pop, shift, unshift, slice, splice ve daha fazlası"
type: "reading"
duration: "35 dk"
day: 5
order: 2
nextLesson: "objects-properties"
---

# Dizi Metodları

JavaScript dizileri, veri ekleme, çıkarma ve şekillendirme için zengin yardımcı araçlarla gelir. Bugün en sık kullanacağınız metodları öğreneceksiniz: dizinin başına/sonuna ekleme, kopya almak için dilimleme, yerinde düzenlemek için `splice` ve değer arama.

## Adım 1: Değiştiren ve Değiştirmeyen Metodlar

- **Değiştiren (mutating) metodlar** orijinal diziyi günceller (`push`, `pop`, `splice` gibi).
- **Değiştirmeyen** metodlar yeni bir değer döndürür ve orijinali olduğu gibi bırakır (`slice`, `concat` gibi).

Hangi davranışa ihtiyacınız olduğunu bilmek önemlidir: hızlı düzenlemeler için değiştirici metodlar, geçmişi korumak için değiştirmeyen metodlar.

## Adım 2: `push` ve `pop`

Son elemanlarla çalışın.

```javascript
const backlog = ["Kurulum", "Değişkenler"];

backlog.push("Kontrol Akışı"); // yeni uzunluk (3)
const cikan = backlog.pop(); // "Kontrol Akışı"

console.log(backlog); // ["Kurulum", "Değişkenler"]
```

- `push` sona bir veya daha fazla değer ekler.
- `pop` sondaki tek elemanı çıkarıp döndürür.

## Adım 3: `unshift` ve `shift`

Dizinin başını yönetin.

```javascript
const yolHaritasi = ["Fonksiyonlar", "Nesneler"];

yolHaritasi.unshift("Diziler"); // ["Diziler", "Fonksiyonlar", "Nesneler"]
const ilk = yolHaritasi.shift(); // "Diziler"

console.log(yolHaritasi); // ["Fonksiyonlar", "Nesneler"]
```

- `unshift` başa eleman ekler.
- `shift` ilk elemanı çıkarıp döndürür.

## Adım 4: `slice`

`slice`, dizinin bir kısmını kopyalar ve orijinali değiştirmez.

```javascript
const dersler = ["Giriş", "Döngüler", "Fonksiyonlar", "Diziler"];

const temel = dersler.slice(0, 3); // ["Giriş", "Döngüler", "Fonksiyonlar"]
const sonIki = dersler.slice(-2); // ["Fonksiyonlar", "Diziler"]

console.log(dersler); // orijinal aynı kalır
```

- İlk parametre: başlangıç indeksi (dahil).
- İkinci parametre: bitiş indeksi (hariç). Yazmazsanız sona kadar alır.
- Negatif indeksler sondan sayar.

## Adım 5: `splice`

`splice`, orijinal diziyi düzenler; eleman silebilir, yer değiştirebilir veya yeni eleman ekleyebilir.

```javascript
const agenda = ["Karşılama", "Temeller", "Mola", "Proje"];

agenda.splice(2, 1, "Soru-Cevap"); // 2. indeksten 1 eleman sil, yerine "Soru-Cevap"
console.log(agenda); // ["Karşılama", "Temeller", "Soru-Cevap", "Proje"]

agenda.splice(3, 0, "Kapanış");
console.log(agenda); // ["Karşılama", "Temeller", "Soru-Cevap", "Kapanış", "Proje"]
```

- İlk parametre: başlangıç indeksi.
- İkinci parametre: kaç eleman silinecek.
- Sonraki parametreler: eklenecek değerler.

## Adım 6: Metodları Birleştirme

Birden fazla adımı küçük parçalara ayırın.

```javascript
const gorevler = ["Planla", "Kodla", "Gözden Geçir", "Yayınla"];

gorevler.pop(); // "Yayınla" gider
gorevler.push("Test Et", "Yayınla"); // iki eleman ekle

const aktif = gorevler.slice(0, 3); // ["Planla", "Kodla", "Gözden Geçir"]
```

Küçük adımlar hata ayıklamayı kolaylaştırır.

## Adım 7: `includes` ve `indexOf` ile Arama

Bir değerin varlığını ve konumunu kontrol edin.

```javascript
const rozetler = ["Bronz", "Gümüş", "Altın", "Altın"];

console.log(rozetler.includes("Gümüş")); // true
console.log(rozetler.indexOf("Altın")); // 2
console.log(rozetler.lastIndexOf("Altın")); // 3
```

- `includes` boolean döndürür.
- `indexOf` / `lastIndexOf`, eşleşen ilk/son indeks ya da `-1` döndürür.

## Adım 8: `join` ile Gösterim

Diziyi stringe çevirin; çıktı veya saklama için idealdir.

```javascript
const odak = ["Diziler", "Nesneler", "DOM"];

const ozet = odak.join(", ");
console.log(ozet); // "Diziler, Nesneler, DOM"
```

- Varsayılan ayraç virgüldür.
- İstediğiniz format için özel bir string verebilirsiniz.

## Adım 9: Pratik Önerileri

1. `const kuyruk = ["Kayıt"];` ile başlayın, `push` ile iki eleman ekleyin, ardından `shift` ile ilkini çıkarın.
2. `const asamalar = ["Araştır", "Planla", "Inşa Et", "Test Et"];` dizisinin son iki elemanını orijinali bozmadan kopyalayın.
3. `const program = ["Giriş", "Mola", "Atölye"];` içinde `"Mola"`yı `splice` ile `"Demo"` yapın.
4. `const kontrolListesi = ["Planla", "Kodla", "Test Et"];` içinde `"Gözden Geçir"` var mı bakın; yoksa ekleyin.
5. `const mentorler = ["Ada", "Grace", "Kayra"];` dizisini `"Ada | Grace | Kayra"` stringine çevirin.

## Önemli Noktalar

- ✅ Değiştiren metodlar (`push`, `pop`, `shift`, `unshift`, `splice`) orijinal diziyi günceller.
- ✅ `slice` ve `concat` gibi değiştirmeyen metodlar güvenli kopyalar üretir.
- ✅ `includes` ve `indexOf` hızlı değer araması sağlar.
- ✅ Adımları zincirleyerek okunaklı ve bakımı kolay diziler oluşturursunuz.

---

## 🎯 Hızlı Kontrol

1. `slice` ile `splice` arasındaki temel fark nedir?
2. Dizinin başına nasıl eleman eklersiniz?
3. `indexOf` hangi durumda `-1` döndürür?
4. Hangi durumlarda değiştirmeyen bir metod kullanmayı tercih edersiniz?

Sıradaki ders: Etiketli verilerle çalışmak için nesneler dünyasına adım atıyoruz. 🗂️

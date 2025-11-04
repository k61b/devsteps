---
title: "For Döngüleri"
description: "For döngülerini anlama ve kullanma"
type: "reading"
duration: "25 dk"
day: 3
order: 1
nextLesson: "while-loops"
---

# For Döngüleri

3. güne hoş geldiniz—döngü günü! Döngüler kodunuzun aynı işi defalarca yapmasını sağlayarak tekrar eden görevleri otomatikleştirir. Liste işlemekten desen oluşturmaya kadar pek çok senaryoda karşımıza çıkarlar. Bugün, döngülerin İsviçre çakısı sayılan `for` yapısını keşfedeceğiz.

## Adım 1: Döngüler Neden Önemli?

Şu tekrarlı kodu düşünün:

```javascript
console.log("1. gün tamamlandı!");
console.log("2. gün tamamlandı!");
console.log("3. gün tamamlandı!");
console.log("4. gün tamamlandı!");
console.log("5. gün tamamlandı!");
```

Beş kez yazmak mümkün, peki ya 100? Döngüler bu tarz tekrarları kısa ve esnek hale getirir.

## Adım 2: Bir `for` Döngüsünün Anatomisi

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Döngü ${i}`);
}
```

- **Başlatma (`let i = 0`)**: Döngü başlamadan önce bir kez çalışır.
- **Koşul (`i < 5`)**: Her yinelemeden önce kontrol edilir. Yanlış olduğunda döngü biter.
- **Son ifade (`i++`)**: Her yinelemenin sonunda çalışır.
- **Gövde**: Koşul doğru olduğu sürece çalışır.

`i` genellikle index anlamında tercih edilir, ancak açıklayıcı herhangi bir isim kullanabilirsiniz.

## Adım 3: İleri ve Geri Saymak

### İleri saymak

```javascript
for (let gun = 1; gun <= 7; gun++) {
  console.log(`Gün ${gun}: Kod serisi!`);
}
```

### Geri saymak

```javascript
for (let geriSayim = 5; geriSayim >= 1; geriSayim--) {
  console.log(`Kalkışa ${geriSayim}...`);
}
console.log("Kalkış! 🚀");
```

Başlatma, koşul ve artışı değiştirerek yönü ve adım boyutunu kontrol edebilirsiniz.

## Adım 4: Dizilerle `for` Kullanmak

Döngüler, diziler üzerinde gezinirken parlıyor:

```javascript
const dersler = ["Değişkenler", "Operatörler", "Koşullar", "Döngüler"];

for (let index = 0; index < dersler.length; index++) {
  const dersAdi = dersler[index];
  console.log(`Ders ${index + 1}: ${dersAdi}`);
}
```

- `dersler.length` sayesinde dizi boyutuna otomatik uyum sağlanır.
- Her elemana `dersler[index]` ile erişilir.

## Adım 5: Özel Adımlar ve Atlama

İkişer saymak:

```javascript
for (let sayi = 0; sayi <= 10; sayi += 2) {
  console.log(sayi);
}
```

Ögeleri atlayarak seçmek:

```javascript
for (let index = 0; index < dersler.length; index += 2) {
  console.log(`Her iki dersten biri: ${dersler[index]}`);
}
```

## Adım 6: Break ve Continue (Önizleme)

Detayına yarın bakacağız, şimdilik kısa bir örnek:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // 3'ü atla
  }
  if (i === 5) {
    break; // döngüyü bitir
  }
  console.log(i);
}
```

- `continue` o yinelemeyi atlayıp bir sonrakine geçer.
- `break` döngüyü tamamen durdurur.

## Adım 7: İç İçe Döngüler (Önizleme)

Döngü içinde döngü kullanarak tablo veya grid oluşturabilirsiniz:

```javascript
for (let satir = 1; satir <= 3; satir++) {
  let satirCikti = "";
  for (let sutun = 1; sutun <= 3; sutun++) {
    satirCikti += `(${satir},${sutun}) `;
  }
  console.log(satirCikti);
}
```

Bu konuyu 3. günün ilerleyen derslerinde detaylı inceleyeceğiz.

## Adım 8: Yaygın Hatalar

- **Sonsuz döngüler**: Döngü değişkenini güncellemeyi unutursanız döngü durmaz. `i++` gibi artışları kontrol edin.
- **Bir fazlalık/eksiklik hataları**: `<` mı `<=` mi kullanacağınıza dikkat edin.
- **Değişken tekrar kullanımı**: Döngü değişkenlerini `let` ile blok içinde tanımlayıp yeniden kullanılmasını önleyin.

## Pratik Önerileri

1. 1'den 20'ye kadar sayıları yazdırın; sayı 5'in katıysa mesaj ekleyin.
2. `const playlist = ["Intro", "Temeller", "Döngüler", "Fonksiyonlar"];` ile her parçayı `Parça 1: Intro` formatında loglayın.
3. 4 sayısının çarpım tablosunu oluşturun (`4 x 1`'den `4 x 10`'a kadar).
4. `const puanlar = [5, 8, 12, 4, 6];` dizisindeki sayıları toplayın ve toplamı yazdırın.

## Önemli Noktalar

- ✅ `for` döngüleri tekrar eden işleri tek bir kalıpta yapar.
- ✅ Başlatma, koşul ve son ifade döngünün başlangıcını, bitişini ve adımını kontrol eder.
- ✅ Dizilerle döngü kullanmak, veri koleksiyonlarını verimli biçimde işler.
- ✅ Koşulları dikkatli kurarak sonsuz döngü ve off-by-one hatalarından kaçınabilirsiniz.

---

## 🎯 Hızlı Kontrol

1. Bir `for` başlığındaki üç bölüm nedir ve ne zaman çalışırlar?
2. 10'dan 1'e nasıl geri sayarsınız?
3. Neden `dersler.length` kullanmak sabit bir sayı yazmaktan daha iyidir?
4. Döngü değişkenini artırmayı unutursanız ne olur?

Harika gidiyorsunuz! Sırada diğer döngü türleri (`while` ve `do...while`) ile iterasyon aracılığınızı genişletmek var. ♻️

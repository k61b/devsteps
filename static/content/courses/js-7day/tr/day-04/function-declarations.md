---
title: "Fonksiyon Tanımları"
description: "Fonksiyonlarla yeniden kullanılabilir kod oluşturma"
type: "reading"
duration: "20 dk"
day: 4
order: 1
nextLesson: "function-parameters"
---

# Fonksiyon Tanımları

4. güne hoş geldiniz! Şimdiye kadar kodunuz yukarıdan aşağıya çalıştı. Fonksiyonlar, belirli bir görevi üstlenen kod bloklarını adlandırıp tekrar tekrar kullanmanızı sağlar. Onları daha büyük iş akışlarına takabileceğiniz mini programlar olarak düşünün.

## Adım 1: Fonksiyon Nedir?

Fonksiyon, belirli bir görevi yerine getiren yeniden kullanılabilir kod bloğudur. Bir kez tanımladıktan sonra istediğiniz kadar çağırabilirsiniz.

```javascript
function greet() {
  console.log("Merhaba, DevSteps topluluğu!");
}

greet(); // fonksiyonu çağırmak ("invoke")
greet(); // yeniden çalışır
```

- `function` anahtar kelimesi tanımı başlatır.
- `greet` fonksiyon adıdır.
- `{ ... }` fonksiyon çağrıldığında çalışacak kodu içerir.

## Adım 2: Neden Fonksiyon Kullanırız?

- **Yeniden kullanım**: Bir kodu bir kez yazar, ihtiyaç oldukça çağırırsınız.
- **Organizasyon**: Karmaşık işleri küçük, isimlendirilmiş adımlara bölersiniz.
- **Bakım kolaylığı**: Fonksiyon üzerinde yapılan bir geliştirme ya da düzeltme, çağrıldığı her yeri otomatik etkiler.
- **İletişim**: İyi seçilmiş fonksiyon adları ekip arkadaşlarınıza (ve gelecekteki size) kodun amacını anlatır.

## Adım 3: Fonksiyon İsimlendirme

Fonksiyonun ne yaptığını anlatan fiilleri tercih edin.

```javascript
function sendMotivationMessage() { ... }
function calculateScore() { ... }
function displayProgressChart() { ... }
```

- camelCase kullanın (`calculateScore` gibi).
- `doStuff` veya `thing` gibi genel isimlerden kaçının.
- İyi bir kural: Fonksiyon adı bir komut gibi okunmalı.

## Adım 4: Fonksiyon Akışı

Bir fonksiyon çağrıldığında:

1. JavaScript fonksiyon gövdesine gider.
2. İçerideki satırları sırayla çalıştırır.
3. Çağrının hemen sonrasındaki satıra geri döner.

```javascript
console.log("Başlangıç");
greet();          // fonksiyon gövdesi çalışır
console.log("Bitiş");
```

Çıktı:
```
Başlangıç
Merhaba, DevSteps topluluğu!
Bitiş
```

## Adım 5: 4. Gün Seviyesinde Fonksiyonlar

Değişken, koşul ve döngüleri zaten biliyorsunuz. Fonksiyonlar bunların hepsini barındırabilir.

```javascript
function celebrateMilestones(streak) {
  if (streak >= 7) {
    console.log("Tam bir hafta! 🎉");
  } else if (streak >= 3) {
    console.log("Üç günlük seri—devam!");
  } else {
    console.log("Her gün değerli. Harika gidiyorsun!");
  }
}

celebrateMilestones(2);
celebrateMilestones(4);
celebrateMilestones(7);
```

Tek bir fonksiyon, seri kontrol mantığınızı tek bir yerde toplar.

## Adım 6: Değer Döndüren Fonksiyonlar (Önizleme)

Fonksiyonlar `return` ile bir değer döndürebilir. Detayını birazdan öğreneceğiz, burada kısa bir örnek:

```javascript
function generateBadgeName(day) {
  return `Gün ${day} Yolcusu`;
}

const badge = generateBadgeName(4);
console.log(badge); // "Gün 4 Yolcusu"
```

- `return` olmadığında fonksiyon `undefined` döndürür.
- JavaScript `return` satırına geldiğinde fonksiyondan çıkar.

## Adım 7: Fonksiyon Hoisting

Fonksiyon tanımları **hoist** edilir; yani dosyada aşağıda olsalar bile önce çağrılabilir.

```javascript
announce(); // çalışır!

function announce() {
  console.log("Fonksiyonlar hoist edilir.");
}
```

JavaScript, derleme sırasında fonksiyon tanımlarını bulundukları kapsamın başına taşır. Bu yüzden tanımdan önce çağrı yapılabilir. (Fonksiyon ifadeleriyle farkını ileride göreceğiz.)

## Adım 8: Fonksiyon İfadeleri vs Tanımları (Önizleme)

Fonksiyonları farklı şekillerde yazabilirsiniz:

```javascript
// Tanım
function logProgress() {
  console.log("İlerleme kaydediliyor...");
}

// İfade (aynı şekilde hoist edilmez)
const logProgressExpression = function () {
  console.log("İlerleme kaydediliyor...");
};
```

Şimdilik tanımlara odaklanıyoruz; basittir ve otomatik hoist edilir. Fonksiyon ifadeleri ve ok fonksiyonlarını bu hafta ilerledikçe tanıyacağız.

## Adım 9: Kapsam Temelleri (Önizleme)

Fonksiyon içinde tanımlanan değişkenler yerel kapsamda kalır:

```javascript
function assignGoal() {
  const hedef = "4. gün içeriğini bitir";
  console.log(hedef);
}

assignGoal();
// console.log(hedef); // ReferenceError: hedef tanımlı değil
```

Yerel değişkenler fonksiyon dışına sızmaz. Bu izolasyon isim çakışmalarını önler ve kodu modüler tutar.

## Pratik Önerileri

1. `printWelcome()` fonksiyonunu tanımlayıp Day 4 için çok satırlı hoş geldin mesajı loglayın. Fonksiyonu iki kez çağırın.
2. `function logDailyProgress(day, completed)` yazarak `completed` boolean değerine göre `"Gün X: Tamamlandı"` veya `"Gün X: Beklemede"` mesajı loglayın.
3. `function countDown(start)` fonksiyonu yazıp döngüyle `start` değerinden 1’e kadar saydırın.
4. (Önizleme) `function createCheer(name)` fonksiyonundan `"Haydi name! Harikasın!"` biçiminde string döndürüp loggedin.

## Önemli Noktalar

- ✅ Fonksiyon tanımları `function` anahtar kelimesiyle yeniden kullanılabilir kod blokları oluşturur.
- ✅ Hoisting sayesinde fonksiyonları dosyada tanımdan önce çağırabilirsiniz.
- ✅ Fonksiyonlar mantığı izole eder, düzeni ve okunabilirliği artırır.
- ✅ `return` değer döndürür ve fonksiyonu anında sonlandırır.

---

## 🎯 Hızlı Kontrol

1. Bir fonksiyon tanımının üç temel bileşeni nelerdir?
2. Fonksiyon adlarının çoğunlukla fiil olmasının sebebi nedir?
3. `return` yoksa fonksiyon hangi değeri döndürür?
4. Hoisting, fonksiyon tanımlarını nasıl etkiler?

Şahane! Bir sonraki derste fonksiyonlara parametre ekleyerek onları dinamik hale getireceğiz. 🧠➡️

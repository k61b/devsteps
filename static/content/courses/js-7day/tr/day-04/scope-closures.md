---
title: "Fonksiyon Kapsamı ve Closure'lar"
description: "Fonksiyonlarda değişken kapsamını anlama"
type: "reading"
duration: "30 dk"
day: 4
order: 5
nextLesson: "intro-to-arrays"
---

# Fonksiyon Kapsamı ve Closure'lar

Kapsam (scope), değişkenlerin nerede yaşadığını ve kimler tarafından erişilebileceğini belirler. Closure'lar ise bir fonksiyonun, dış kapsamındaki değerlere o kapsam sona erdikten sonra bile erişebilmesini sağlar. Bu iki kavram, modüler ve hatasız kod yazmanın temelini oluşturur.

## Adım 1: Kapsam Türleri

- **Global kapsam**: Her yerden erişilebilen değişkenler.
- **Fonksiyon kapsamı**: Fonksiyon içinde tanımlanan değişkenler sadece o fonksiyon içinde kullanılabilir.
- **Blok kapsamı**: `{ }` içinde `let` veya `const` ile tanımlanan değişkenler sadece o blokta geçerlidir.

```javascript
const globalMessage = "Merhaba, dünya!";

function shoutMessage() {
  const localMessage = "İçeriden selam!";
  console.log(globalMessage); // erişilebilir
  console.log(localMessage);  // erişilebilir
}

shoutMessage();
// console.log(localMessage); // ReferenceError
```

## Adım 2: `let` ve `const` ile Blok Kapsamı

`let` ve `const` blok kapsamına bağlıdır; `var` bağlı değildir.

```javascript
if (true) {
  const blockScoped = "Blok içinden";
}

// console.log(blockScoped); // ReferenceError
```

Değişkenleri mümkün olan en dar kapsamda tutmak için `let`/`const` kullanın.

## Adım 3: Gölgeleme (Shadowing)

İç kapsamda tanımlanan aynı isimli değişkenler, dış kapsamdaki değişkeni “gölgeleyebilir.”

```javascript
const level = "global";

function showLevel() {
  const level = "fonksiyon";
  console.log(level); // "fonksiyon"
}

showLevel();
console.log(level); // "global"
```

Gölgeleme kafa karıştırıcı olabilir; gerekmedikçe kaçınmak iyidir.

## Adım 4: Closure Nedir?

Closure, iç fonksiyonun dış fonksiyondaki değişkenleri “hatırlaması”dır—dış fonksiyon çalışmasını tamamlamış olsa bile.

```javascript
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Sayaç: ${count}`);
  }

  return increment;
}

const counter = createCounter();
counter(); // Sayaç: 1
counter(); // Sayaç: 2
```

- `increment`, `count` değişkenini dış kapsamdan hatırlar.
- `createCounter` her çağrıldığında yeni bir closure oluşur.

## Adım 5: Parametreli Closure'lar

```javascript
function createGoalTracker(goal) {
  let progress = 0;

  return function(points) {
    progress += points;
    if (progress >= goal) {
      console.log(`${goal} hedefine ulaşıldı! 🎉`);
    } else {
      console.log(`İlerleme: ${progress}/${goal}`);
    }
  };
}

const tracker = createGoalTracker(100);
tracker(30); // İlerleme: 30/100
tracker(80); // Hedefe ulaşıldı!
```

- İç fonksiyon hem `progress` hem `goal` değerlerini saklar.
- Konfigüre edilebilir yardımcılar oluşturmak için kullanışlıdır.

## Adım 6: Closure'ların Pratik Kullanımları

- **Kapsülleme**: Değişkenleri global yerine closure içinde saklayın.
- **Fabrika fonksiyonlar**: Belirli değerlerle önceden ayarlı fonksiyonlar üretin.
- **Önbellekleme (memoization)**: Hesap sonuçlarını closure içinde saklayarak tekrar kullanın.
- **Event handler'lar**: Olaylara yanıt verirken bağlamı hatırlayın.

## Adım 7: IIFE (Immediately Invoked Function Expression)

IIFE, tanımlanır tanımlanmaz çalışan fonksiyondur ve izole bir kapsam yaratır.

```javascript
(function () {
  const secret = "gizli";
  console.log("IIFE çalıştı");
})();

// console.log(secret); // ReferenceError
```

Blok kapsamından önce daha yaygındı ama legacy kodlarda hâlâ görebilirsiniz.

## Adım 8: Sık Yapılan Hatalar

- **Yanlışlıkla global değişken oluşturmak**: `const`/`let` yazmayı unutursanız global değişken oluşabilir.
- **Döngü içi callback’ler**: `var` kullanıldığında döngü değişkeni tüm callback’lerle paylaşılıp sorun yaratabilir.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Üç kez 3 yazar (var fonksiyon kapsamlı)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// 0, 1, 2 yazar (let blok kapsamlı)
```

## Adım 9: Pratik Önerileri

1. `function createMultiplier(multiplier)` fonksiyonu yazıp dönen fonksiyonun girdiyi `multiplier` ile çarpmasını sağlayın. 2 ve 5 ile test edin.
2. `function makeLogger(prefix)` fonksiyonu, mesajları verilen ön ekle loglayan bir fonksiyon döndürsün.
3. Bir IIFE içinde gizli sayaç oluşturun; dönen fonksiyon her çağrıldığında `"Sayaç: 1"`, `"Sayaç: 2"` gibi çıktılar versin.
4. `createGoalTracker` örneğinde closure’ın neyi mümkün kıldığını ve hedef parametresinin davranışı nasıl değiştirdiğini açıklayın.

## Önemli Noktalar

- ✅ Kapsam, değişkenlerin yaşam alanını ve görünürlüğünü belirler.
- ✅ Closure'lar, iç fonksiyonların dış kapsamdan veri hatırlamasını sağlar.
- ✅ Kapsülleme, fabrika fonksiyonlar, cache ve asenkron callback’lerde closure kullanımı yaygındır.
- ✅ Accidental (kazara) global değişkenlerden kaçınmak için `let`/`const` kullanın.

---

## 🎯 Hızlı Kontrol

1. Fonksiyon kapsamı ile blok kapsamı arasındaki fark nedir?
2. Closure'lar fabrika fonksiyonlarını nasıl mümkün kılar?
3. Neden `var` ile döngü içinde asenkron callback kullanmak sorun çıkarır?
4. IIFE'ler global kapsamı kirletmeyi nasıl önler?

Harika! Yarın, veri koleksiyonlarını yönetmenin temel aracı olan dizilere giriş yaparak yolculuğa devam edeceğiz. 📚

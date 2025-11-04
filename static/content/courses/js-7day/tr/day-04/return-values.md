---
title: "Dönüş Değerleri"
description: "Fonksiyonlardan sonuç alma"
type: "reading"
duration: "20 dk"
day: 4
order: 3
nextLesson: "arrow-functions"
---

# Dönüş Değerleri

Fonksiyonlar yalnızca aksiyon almakla kalmaz, sonuç da üretebilir. Dönüş değerleri, fonksiyonların hesapladıkları bilgiyi programın geri kalanına iletmesini sağlar. Bu kavram, hesaplamaları zincirlemek ve fonksiyonları birleşik yapılar hâline getirmek için kritik önemdedir.

## Adım 1: Temel `return`

```javascript
function double(number) {
  return number * 2;
}

const result = double(5);
console.log(result); // 10
```

- `return`, değeri fonksiyonu çağıran yere geri gönderir.
- Dönen değeri saklayabilir, loglayabilir veya başka fonksiyona aktarabilirsiniz.

## Adım 2: Erken Çıkış

Fonksiyon `return` ifadesine ulaşınca çalışmayı bırakır.

```javascript
function describeStreak(days) {
  if (days >= 7) {
    return "Efsanevi seri!";
  }

  return "Devam et!";
}

console.log(describeStreak(10)); // "Efsanevi seri!"
console.log(describeStreak(3));  // "Devam et!"
```

`return` sonrası kod çalışmaz. Bu davranışı koşulları sadeleştirmek için kullanabilirsiniz.

## Adım 3: Birden Fazla Dönüş

Farklı koşullarda farklı değerler döndürebilirsiniz. İlk `return` çıktığında fonksiyon biter.

```javascript
function getBadgeColor(level) {
  if (level >= 5) {
    return "altın";
  } else if (level >= 3) {
    return "gümüş";
  }
  return "bronz";
}
```

- Her dal anlamlı bir string döner.
- Her yolun tatmin edici bir değer döndürdüğünden emin olun.

## Adım 4: Karmaşık Tipler Döndürmek

Birden fazla bilgiyi paketlemek için obje veya dizi döndürün.

```javascript
function buildLessonSummary(day, topic) {
  return {
    day,
    topic,
    completed: false,
    createdAt: new Date().toISOString()
  };
}

const summary = buildLessonSummary(4, "Dönüş Değerleri");
console.log(summary.topic); // "Dönüş Değerleri"
```

- Objelerle veriler etiketli şekilde geri döner.
- Eğer sıraya göre anlamlıysa diziler de kullanılabilir.

## Adım 5: Fonksiyon Döndürme (Önizleme)

Fonksiyonlar başka fonksiyonlar da döndürebilir. Bu, closure ve ileri seviye desenlerin temelidir.

```javascript
function createCheer(prefix) {
  return function(name) {
    console.log(`${prefix} ${name}!`);
  };
}

const cheer = createCheer("Harikasın");
cheer("Kayra"); // "Harikasın Kayra!"
```

Closure konusuna ileride derin bakacağız, ancak `return`'ın sadece ilkel tiplerle sınırlı olmadığını görün.

## Adım 6: Guard Clause ve `return`

Guard clause, geçersiz veriyi erken yakalayıp fonksiyondan çıkar.

```javascript
function calculateBoost(points) {
  if (points < 0) {
    return "Puan negatif olamaz.";
  }

  return points * 1.2;
}
```

- Net guard clause’lar okunabilirliği artırır.
- Gereksiz iç içe `if` bloklarından kurtulursunuz.

## Adım 7: `return` vs `console.log`

- `return`, veriyi çağırana teslim eder.
- `console.log`, sadece konsola yazar.

```javascript
function getGreeting(name) {
  return `Merhaba, ${name}!`;
}

const greeting = getGreeting("Elif");
console.log(greeting);
```

Sadece `console.log` kullanırsanız sonucu tekrar kullanamazsınız. `return`, esneklik sağlar.

## Adım 8: İma Edilen Dönüşler (Önizleme)

Fonksiyon tanımlarında `return` açıkça yazılır. İleride ok fonksiyonlarını öğrenince ima edilen dönüşleri göreceğiz:

```javascript
const doubleArrow = (number) => number * 2;
```

Şimdilik klasik tanımlarda açık `return` kullanmaya devam edin.

## Adım 9: Pratik Önerileri

1. `function milesToKilometers(miles)` yazarak dönüş değerini (1 mil ≈ 1.60934 km) hesaplayın. `5` ile çağırıp sonucu loglayın.
2. `function buildProfile(name, points)` fonksiyonu `name`, `points` ve `status` (`"pro"` eğer points ≥ 100, aksi halde `"newbie"`) içeren bir obje döndürsün.
3. `function chooseMotivation(completed)` fonksiyonu `"Zaferini kutla!"` veya `"Ufak bir hedef koy ve yeniden dene."` string’lerinden birini döndürsün.
4. `function calculateAverage(scores)` fonksiyonu girdinin dizi olduğunu ve uzunluğunun > 0 olduğunu doğrulasın; değilse guard clause ile mesaj döndürsün, geçerliyse ortalamayı hesaplasın.

## Önemli Noktalar

- ✅ `return` fonksiyon yürütmesini durdurur ve değeri çağırana gönderir.
- ✅ Tüm kod yolları anlamlı değer döndürmeli ya da açıkça hiçbir şey döndürmemeli.
- ✅ Objeler veya diziler döndürerek birden fazla bilgiyi paketleyebilirsiniz.
- ✅ Guard clause yapısı fonksiyonları temiz ve dayanıklı tutar.

---

## 🎯 Hızlı Kontrol

1. `return` ifadesinden sonra kod ne olur?
2. Bir fonksiyondan birden fazla değer nasıl döndürülür?
3. Neden `console.log` yerine `return` kullanmak daha esnektir?
4. Fonksiyon geçersiz veri alırsa ve yine de değer döndürmesi gerekiyorsa ne yapmalısınız?

Sıradaki derste modern ok fonksiyonu sözdizimiyle daha kısa ve öz fonksiyonlar yazmayı öğreneceğiz. ⚡

---
title: "Fonksiyon Parametreleri ve Argümanlar"
description: "Fonksiyonlara veri aktarma"
type: "reading"
duration: "25 dk"
day: 4
order: 2
nextLesson: "return-values"
---

# Fonksiyon Parametreleri ve Argümanlar

Fonksiyon tanımlarını güce kavuşturan şey, dışarıdan veri alabilmeleridir. Parametreler, fonksiyonlarınızın dinamik davranmasına olanak verir. Bugün parametre tanımlamayı, argümanlarla veri göndermeyi, varsayılan değerler atamayı ve birden fazla girdiyi yönetmeyi öğreneceksiniz.

## Adım 1: Parametre vs Argüman

- **Parametreler** fonksiyon tanımındaki yer tutuculardır.
- **Argümanlar** fonksiyon çağrılırken verilen gerçek değerlerdir.

```javascript
function greetLearner(name) {
  console.log(`Hoş geldin, ${name}!`);
}

greetLearner("Kayra"); // "Kayra" argümandır
greetLearner("Berk");
```

Bu örnekte `name` bir parametredir. `"Kayra"` ve `"Berk"` çağrı sırasında iletilen argümanlardır.

## Adım 2: Birden Fazla Parametre

Parametreleri virgülle ayırın:

```javascript
function logProgress(day, topic) {
  console.log(`Gün ${day}: ${topic} tamam!`);
}

logProgress(4, "Fonksiyonlar");
logProgress(5, "Diziler");
```

- Sıra önemlidir. İlk argüman ilk parametreye eşlenir.
- Anlamlı parametre isimleri seçin.

## Adım 3: Farklı Tiplerle Çalışmak

Parametreler her tür veriyi kabul eder: sayı, string, boolean, dizi, obje hatta fonksiyon.

```javascript
function cheer(name, completed) {
  if (completed) {
    console.log(`👏 Harika iş çıkardın, ${name}!`);
  } else {
    console.log(`⏳ Devam et, ${name}! Az kaldı.`);
  }
}

cheer("Tuncer", true);
cheer("Zeynep", false);
```

- Boolean değerlerle kolayca dallanabilirsiniz.
- Şablon string’lerle sayıları ve metinleri birleştirmek kolaydır.

## Adım 4: Varsayılan Parametreler

Argüman verilmediğinde kullanılacak değerleri belirleyin:

```javascript
function assignBadge(name = "Trailblazer", level = 1) {
  console.log(`${name} seviye ${level} rozetini kazandı!`);
}

assignBadge("Kayra", 4);
assignBadge(); // varsayılan değerler kullanılır
```

- Varsayılanlar `undefined` çıktılarının önüne geçer.
- Genellikle varsayılan değerleri sona yazmak daha mantıklıdır.

## Adım 5: Girdileri Doğrulamak

Beklenmedik girdilere karşı fonksiyonlarınızı koruyun:

```javascript
function calculateScore(points) {
  if (typeof points !== "number") {
    console.log("Lütfen bir sayı girin.");
    return;
  }

  console.log(`Skor: ${points * 10}`);
}

calculateScore(8);    // 80
calculateScore("A");  // uyarı mesajı
```

- Erken `return` kullanarak veriler geçersizse fonksiyondan çıkabilirsiniz.
- Gerçek uygulamalarda input kontrolü kritik önemdedir.

## Adım 6: Rest Parametreleri (Önizleme)

Rest parametreleri çok sayıda argümanı dizi halinde toplar:

```javascript
function celebrateAll(...names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`🎉 Tebrikler, ${names[i]}!`);
  }
}

celebrateAll("Ayşe", "Mert", "Nilay");
```

- `...names` tüm argümanları tek bir dizide toplar.
- Rest/spread operatörlerini ileride daha detaylı inceleyeceğiz.

## Adım 7: Fonksiyonları Argüman Olarak Gönderme (Önizleme)

JavaScript’te fonksiyonlar da değer olduğu için argüman olarak geçilebilir:

```javascript
function celebrate(name, notifier) {
  notifier(`${name} hedefini tamamladı!`);
}

function notifyConsole(message) {
  console.log(message);
}

celebrate("Elif", notifyConsole);
```

Callback konusuna ilerde ayrıntılı bakacağız, ancak parametrelerin fonksiyonları da içerdiğini şimdiden bilin.

## Adım 8: İsimli Argümanları Simüle Etmek

JavaScript’te isimli argüman yoktur, ancak objelerle benzer etki yaratabilirsiniz:

```javascript
function scheduleSession({ day, topic, duration }) {
  console.log(`Gün ${day}: ${topic} dersi ${duration} dakika sürecek.`);
}

scheduleSession({
  day: 4,
  topic: "Fonksiyon Parametreleri",
  duration: 25
});
```

- Obje kullanmak, değerlerin hangi parametreye ait olduğunu netleştirir.
- Sıralamadan bağımsız çağrı yapmanızı sağlar.

## Pratik Önerileri

1. `function sendReminder(name, task)` yazarak `"Hey name, task yapmayı unutma!"` mesajı loglayın.
2. Varsayılan parametre ekleyin: `task` verilmezse `"döngüleri tekrar et"` kullanılsın.
3. `function addProgress(progressList, newItem)` fonksiyonunda diziye öğe ekleyip yeni uzunluğu loglayın. `progressList`’in dizi olduğunu doğrulayın.
4. Rest parametre kullanarak `function totalPoints(...points)` yazın; sayıları toplayıp sonucu loglayın. Döngü içinde geçersiz girdileri atlayın.

## Önemli Noktalar

- ✅ Parametreler beklenen girdileri tanımlar; argümanlar gerçek verileri sağlar.
- ✅ Fonksiyonlar farklı veri tiplerini hatta diğer fonksiyonları alabilir.
- ✅ Varsayılan değerler fonksiyonları esnek ve güvenli hale getirir.
- ✅ Doğrulama ve rest parametreleri fonksiyonlarınızı daha dayanıklı kılar.

---

## 🎯 Hızlı Kontrol

1. Parametre ile argüman arasındaki fark nedir?
2. Varsayılan parametreler fonksiyon tasarımında nasıl yardımcı olur?
3. Rest parametreleri ne zaman kullanırsınız?
4. Objeler kullanarak isimli argüman etkisi nasıl elde edilir?

Sıradaki derste, fonksiyonların değer döndürerek diğer fonksiyonlara nasıl veri sağlayacağını inceleyeceğiz. 🔁

---
title: "Ok Fonksiyonları"
description: "Modern ES6 ok fonksiyonu sözdizimi"
type: "reading"
duration: "25 dk"
day: 4
order: 4
nextLesson: "scope-closures"
---

# Ok Fonksiyonları

ES6 ile gelen ok fonksiyonları (arrow functions), fonksiyon yazmanın kısa ve modern yolunu sunar. Küçük yardımcı fonksiyonlar, callback’ler ve çevredeki `this` bağlamını korumanız gereken durumlar için idealdir. Bugün klasik tanımlarla kıyaslayacak ve hangi senaryolarda tercih edeceğinizi öğreneceksiniz.

## Adım 1: Temel Sözdizimi

Klasik fonksiyon ifadesi:

```javascript
const double = function (number) {
  return number * 2;
};
```

Ok fonksiyonu karşılığı:

```javascript
const double = (number) => {
  return number * 2;
};
```

- `function` anahtar kelimesi ortadan kalkar.
- Parametreler ok (`=>`) öncesinde yer alır.
- Fonksiyon gövdesi aynı kalır.

## Adım 2: İma Edilen (Implicit) Dönüş

Fonksiyon gövdesi tek bir ifadeden oluşuyorsa süslü parantez ve `return` yazmadan döndürebilirsiniz.

```javascript
const double = (number) => number * 2;
```

- Ok’tan sonraki ifade otomatik olarak döner.
- Yalnızca tek ifadeli fonksiyonlarda çalışır.

## Adım 3: Parametre Kullanımı

- Parametre yoksa boş parantez kullanın:
  ```javascript
  const getTimestamp = () => Date.now();
  ```
- Tek parametrede parantez opsiyoneldir (tutarlılık için kullanmak iyi fikir):
  ```javascript
  const cheer = (name) => `Devam et, ${name}!`;
  ```
- Birden fazla parametrede parantez zorunlu:
  ```javascript
  const sum = (a, b, c) => a + b + c;
  ```

## Adım 4: Callback Olarak Ok Fonksiyonları

Inline callback’lerde ok fonksiyonları oldukça kullanışlıdır:

```javascript
const learners = ["Ada", "Grace", "Kayra"];

learners.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
```

- Kısa sözdizimi kodu okunaklı tutar.
- Sadece bir kez kullanılacak geçici fonksiyonları isimlendirmek zorunda kalmazsınız.

## Adım 5: `this` Davranışı

Ok fonksiyonları kendi `this` değerine sahip **değildir**; çevredeki kapsamdan `this` alırlar.

```javascript
const tracker = {
  total: 0,
  add(points) {
    setTimeout(() => {
      this.total += points;
      console.log(`Toplam: ${this.total}`);
    }, 100);
  }
};

tracker.add(10);
```

- Ok fonksiyonu içindeki `this`, `tracker` objesini işaret eder.
- Klasik fonksiyon kullanılsaydı `this` farklı davranacak ve `.bind(this)` gibi çözümler gerekecekti.

## Adım 6: Ok Fonksiyonlarını Kullan **mamanız** Gereken Yerler

- Kendi `this` değerine ihtiyaç duyan obje metotlarında.
  ```javascript
  const progress = {
    total: 0,
    add(points) {
      this.total += points;
    }
  };
  ```
- `new` ile kullanılacak yapıcı fonksiyonlarda (constructor). Ok fonksiyonları `new` ile çalışmaz.
- `arguments` objesine ihtiyaç duyduğunuz durumlarda (ok fonksiyonlarında `arguments` yoktur).

## Adım 7: Çok Satırlı Ok Fonksiyonları

Gövde birden fazla satır içeriyorsa süslü parantez ve `return` kullanın:

```javascript
const buildSummary = (day, topic) => {
  const status = day >= 4 ? "İleri seviye" : "Başlangıç";
  return `${topic} - ${status}`;
};
```

- Süslü parantez kullanıldığında `return` yazmayı unutmayın.

## Adım 8: Varsayılan ve Rest Parametrelerle Kullanım

Ok fonksiyonları, öğrendiğiniz parametre özellikleriyle uyumludur:

```javascript
const assignBadge = (name = "Trailblazer", ...levels) => {
  const highest = Math.max(...levels);
  return `${name} seviye ${highest} rozetine ulaştı`;
};

console.log(assignBadge("Kayra", 2, 3, 4));
```

- Varsayılan parametreler eksik argümanlara karşı koruma sağlar.
- Rest parametreleri ekstra argümanları diziye toplar.

## Adım 9: Pratik Önerileri

1. `function square(n) { return n * n; }` fonksiyonunu ima edilen dönüş kullanan ok fonksiyonuna çevirin.
2. `const buildGreeting = (name, role = "öğrenci") => ...` fonksiyonunu yazarak kişisel bir selamlama döndürün.
3. `setTimeout` kullanarak 500ms sonra `"Mola zamanı!"` yazacak ok fonksiyonu tanımlayın.
4. `const totalProgress = (numbers) => numbers.reduce((sum, value) => sum + value, 0);` fonksiyonunu `[5, 10, 15]` ile test edin.

## Önemli Noktalar

- ✅ Ok fonksiyonları küçük fonksiyonlar ve callback’ler için hızlı bir sözdizimi sunar.
- ✅ İma edilen dönüş, tek ifadeli fonksiyonları kısaltır.
- ✅ Ok fonksiyonları çevredeki `this` değerini kullanır; bu, asenkron senaryolarda hayat kurtarır.
- ✅ Kendi `this`’ine ihtiyaç duyan metotlar, yapıcı fonksiyonlar veya `arguments` gerektiren durumlar için uygun değildir.

---

## 🎯 Hızlı Kontrol

1. Ok fonksiyonlarının `this` kullanımı klasik fonksiyonlardan nasıl farklıdır?
2. İma edilen dönüşü ne zaman kullanabilirsiniz?
3. Neden ok fonksiyonları yapıcı olarak kullanılamaz?
4. İki parametreli bir ok fonksiyonunu varsayılan değer ve ima edilen dönüş kullanacak şekilde dönüştürün.

Bir sonraki derste kapsam ve closure kavramlarına dalıp değişkenlerin fonksiyonlar arasında nasıl paylaşıldığını keşfedeceğiz. 🧠

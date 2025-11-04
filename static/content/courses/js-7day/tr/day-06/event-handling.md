---
title: "Olay Yönetimi"
description: "Kullanıcı etkileşimlerine tepki vermek"
type: "reading"
duration: "30 dk"
day: 6
order: 4
nextLesson: "day-6-gallery-project"
---

# Olay Yönetimi

Olaylar, tıklama, klavye tuşu veya kaydırma gibi kullanıcı etkileşimlerini JavaScript mantığına bağlar. Bugün dinleyici eklemeyi/sökmeyi, olay verilerine erişmeyi, yayılımı kontrol etmeyi ve arayüzü daha tepkisel hale getirmeyi öğreneceksiniz.

## Adım 1: Olay Dinleyicisi Eklemek

```javascript
const buton = document.querySelector(".cta");

buton.addEventListener("click", () => {
  console.log("Buton tıklandı!");
});
```

- `addEventListener`, olay tipini, callback'i ve isteğe bağlı ayarları alır.
- Inline `onclick` attribute’ları yerine dinleyicileri tercih edin; HTML ile mantığı ayırır.

## Adım 2: Olay Nesnesi

```javascript
buton.addEventListener("click", (event) => {
  console.log(event.type); // "click"
  console.log(event.target); // olayı tetikleyen element
});
```

- Olay nesnesi koordinatlar, tuş kodları, modifiye tuşlar gibi meta veriler taşır.
- `event.target`, olayı başlatan elementi döndürür.

## Adım 3: Varsayılan Davranışı Engellemek

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Doğrulama bitene kadar form gönderimi durdu.");
});
```

- `preventDefault()`, tarayıcının varsayılan davranışını durdurur (örn. linkin gezinmesi, formun gönderilmesi).
- Varsayılanı gerçekleştirmeden önce kontrol yapmak istediğinizde kullanın.

## Adım 4: Olay Yayılımı

- Olaylar hedef elementten yukarı doğru (bubbling) ebeveynlere gider (`target → parent → document`).
- `{ capture: true }` ile tersine (top-down) yakalama (capturing) aşamasında dinleyebilirsiniz.

```javascript
document.body.addEventListener("click", () => {
  console.log("Body tıklandı");
});
```

- Yayılım, tek dinleyiciyle birçok çocuk elementi yönetmenizi sağlar.

## Adım 5: Delegasyon Deseni

```javascript
const liste = document.querySelector(".gorev-listesi");

liste.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) return;
  item.classList.toggle("tamam");
});
```

- Dinleyiciyi üst elemente koyup, eşleşen çocuk üzerinde işlem yapın.
- Dinamik listelerde (eklenen/silinen öğeler) özellikle kullanışlıdır.

## Adım 6: Dinleyici Kaldırmak

```javascript
function tiklamaIsleyici() {
  console.log("Bir kez tıklandı");
  buton.removeEventListener("click", tiklamaIsleyici);
}

buton.addEventListener("click", tiklamaIsleyici);
```

- Dinleyiciyi sökmek için fonksiyona isim verin.
- Uzun ömürlü bileşenlerde dinleyicileri kaldırmak bellek sızıntılarını önler.

## Adım 7: Klavye ve Girdi Olayları

```javascript
const arama = document.querySelector("#arama");

arama.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log(`${arama.value} aranıyor`);
  }
});
```

- `event.key`, `event.code` veya `event.shiftKey` gibi özellikleri kontrol edin.
- `input` veya `change` olayları değer değişimlerini izlemek için idealdir.

## Adım 8: Passive ve Once Seçenekleri

```javascript
window.addEventListener(
  "scroll",
  () => {
    // başlık gölgesini güncelle
  },
  { passive: true }
);

buton.addEventListener(
  "click",
  () => console.log("Tek seferlik"),
  { once: true }
);
```

- `passive: true`, dinleyicinin `preventDefault` çağırmayacağını belirtir; kaydırma performansını artırır.
- `once: true`, dinleyiciyi ilk çağrıdan sonra otomatik olarak kaldırır.

## Adım 9: Pratik Önerileri

1. Bir butona tıklanınca modala `"gorunur"` sınıfı ekleyip çıkaran dinleyici ekleyin.
2. `.todo-listesi` üzerinde delegasyon kullanarak herhangi bir `<li>`ye tıklandığında `"tamamlandi"` sınıfını değiştirin.
3. Bir form, input en az üç karakter olmadıkça gönderilmesin; kullanıcıya hata mesajı gösterin.
4. `Escape` tuşuna basıldığında bir diyalog penceresini kapatan `keydown` dinleyicisi yazın.
5. `scroll` olayını dinleyip sayfa 80px aşağı kaydığında header’a `"scrolled"` sınıfı ekleyin.

## Önemli Noktalar

- ✅ `addEventListener`, olayları mantığa bağlamanın standart yoludur.
- ✅ Olay nesnesi, hedef element ve tuş bilgileri gibi bağlam sağlar.
- ✅ Yayılım delegasyonu mümkün kılar; gerekirse `stopPropagation()` ile durdurun.
- ✅ `once` ve `passive` seçenekleri performans ve yaşam döngüsünü optimize eder.

---

## 🎯 Hızlı Kontrol

1. Neden `addEventListener`, inline event attribute’larından daha iyi kabul edilir?
2. Olay delegasyonu nasıl dinleyici sayısını azaltır?
3. Hangi durumda `event.preventDefault()` çağırırsınız?
4. `once` ve `passive` dinleyici seçenekleri ne işe yarar?

Sıradaki ders: Öğrendiklerinizi etkileşimli bir galeri projesinde uygulayın. 🖼️

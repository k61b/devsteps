---
title: "Element Seçimi"
description: "querySelector, getElementById ve daha fazlası"
type: "reading"
duration: "25 dk"
day: 6
order: 2
nextLesson: "modifying-elements"
---

# Element Seçimi

DOM’u değiştirmeden önce hangi elementlerle çalışacağınızı bilmeniz gerekir. Bugün en sık kullanılan seçim metodlarını, CSS seçicilerinin gücünü ve her aracı ne zaman tercih edeceğinizi öğreneceksiniz.

## Adım 1: `document` Nesnesi

- `document`, DOM’a açılan kapıdır.
- Seçim metodları tek element, koleksiyon veya canlı listeler döndürebilir.
- Seçiminiz hiçbir elemana denk gelmezse `null` döneceğini unutmayın ve kontroller ekleyin.

## Adım 2: `getElementById`

Tekil ID’yi bildiğiniz durumlar için en hızlı yöntemdir.

```html
<h1 id="baslik">Panel</h1>
```

```javascript
const baslik = document.getElementById("baslik");
console.log(baslik); // <h1 id="baslik">Panel</h1>
```

- Bir element veya `null` döndürür.
- ID’ler benzersiz olmalıdır; üst seviye anchor elementleri için idealdir.

## Adım 3: `querySelector`

İlk eşleşen elementi döndürür ve herhangi bir CSS seçicisini kabul eder.

```javascript
const ilkKart = document.querySelector(".kart");
const aktifLink = document.querySelector("nav a.aktif");
```

- Karmaşık seçicileri (hiyerarşi, attribute, pseudo-class) destekler.
- Birden fazla element aynı sınıfı paylaşsa bile ilk eşleşmeye ulaşmak için kullanışlıdır.

## Adım 4: `querySelectorAll`

Tüm eşleşmeleri içeren statik bir `NodeList` döndürür.

```javascript
const butonlar = document.querySelectorAll("button.primary");

butonlar.forEach((buton) => {
  buton.addEventListener("click", tiklamaIsleyici);
});
```

- `NodeList`, `forEach`, spread operatörü ve indeksleme destekler.
- Statik olduğundan seçim yaptıktan sonra DOM değişirse otomatik güncellenmez.

## Adım 5: Eski Koleksiyonlar

- `getElementsByClassName("kart")`
- `getElementsByTagName("li")`

Bu metodlar canlı (`live`) `HTMLCollection` döndürür; DOM değiştikçe liste güncellenir. Hâlâ kullanışlıdır fakat `forEach` desteklemezler—gerekirse `Array.from(...)` ile diziye çevirin.

## Adım 6: İlişkilerde Gezinme

Bir elementi seçtikten sonra akraba düğümlere ilerleyin.

```javascript
const kart = document.querySelector(".kart");

const ebeveyn = kart.parentElement;
const cocuklar = kart.children;
const ilkCocuk = kart.firstElementChild;
const sonraki = kart.nextElementSibling;
```

- Traversal metodları, sürekli tüm dokümanı sorgulamak yerine kapsam içinde kalmanızı sağlar.

## Adım 7: `null` Kontrolü

Element bulunamayabilir—kullanmadan önce kontrol edin.

```javascript
const banner = document.querySelector(".banner");

if (banner) {
  banner.classList.add("gorunur");
} else {
  console.warn("Banner bulunamadı");
}
```

Bu, koşullu yüklenen elementlerde çalışma zamanı hatalarını engeller.

## Adım 8: Kapsam İçinde Seçim

Belirli bir alt ağaç içinde sorgu yapın.

```javascript
const yanMenu = document.querySelector(".yan-menu");
const linkler = yanMenu.querySelectorAll("a");
```

- Bileşenlerin tekrar eden sınıf isimleri olduğunda kullanışlıdır.
- Büyük sayfalarda performansı artırır.

## Adım 9: Pratik Önerileri

1. `hero` ID’li elementi seçip `textContent` değerini yazdırın.
2. Bir form içindeki tüm checkbox’ları `querySelectorAll` ile toplayın ve kaç tanesinin işaretli olduğunu hesaplayın.
3. `document.getElementsByClassName("kart")` sonucunu diziye çevirip her birinden `"gizli"` sınıfını kaldırın.
4. `findNavLinks(containerSelector)` fonksiyonu yazarak belirtilen kapsayıcı içindeki tüm `<a>` elemanlarını döndürün.

## Önemli Noktalar

- ✅ Benzersiz elementler için `getElementById` hızlıdır; esnek CSS seçicileri için `querySelector`/`querySelectorAll` kullanın.
- ✅ `querySelectorAll` statik `NodeList` üretir; eski koleksiyonlar canlıdır.
- ✅ Seçim sonucu `null` olabilir—kullanmadan önce kontrol edin.
- ✅ Sorguları bileşen içinde tutarak DOM işlemlerini verimli hale getirin.

---

## 🎯 Hızlı Kontrol

1. Hangi durumda `getElementById`, `querySelector`a göre daha uygundur?
2. `querySelectorAll` sonucunu nasıl döngüye sokabilirsiniz?
3. Canlı `HTMLCollection` ile statik `NodeList` arasındaki fark nedir?
4. Sadece belirli bir navigasyon çubuğundaki linkleri nasıl seçersiniz?

Sıradaki ders: Seçtiğiniz elementlerin içerik, attribute ve stillerini değiştirmeyi öğreniyoruz. 🎨

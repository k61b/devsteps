---
title: "Elementleri Değiştirme"
description: "İçerik, stil ve attribute güncelleme"
type: "reading"
duration: "30 dk"
day: 6
order: 3
nextLesson: "event-handling"
---

# Elementleri Değiştirme

Elementleri seçebildiğinize göre, şimdi içeriklerini, attribute değerlerini ve stillerini güncelleme zamanı. Bu derste metin ve HTML eklemeyi, sınıf ve stil yönetimini ve yeni düğümler oluşturmayı öğreneceksiniz.

## Adım 1: Metin Güncelleme

```javascript
const baslik = document.querySelector("h1");
baslik.textContent = "Tekrar hoş geldin!";
```

- `textContent`, element içindeki tüm metni değiştirir.
- İçerik düz metin olarak ele alınır; HTML etiketleri escape edilir.

## Adım 2: HTML Ekleme

```javascript
const hero = document.querySelector(".hero");
hero.innerHTML = "<strong>Yeni mesaj</strong> seni bekliyor!";
```

- `innerHTML`, string’i HTML olarak ayrıştırır. Kullanıcıdan gelen verilerde XSS riskine dikkat edin.
- Karmaşık yapılar için `createElement` ve `append` gibi yöntemler daha güvenlidir.

## Adım 3: İçerik Ekleme/Ön Ekleme

```javascript
const liste = document.querySelector(".gorevler");

const li = document.createElement("li");
li.textContent = "İterasyon metodlarını gözden geçir";
liste.append(li); // sona ekler

const ilk = document.createElement("li");
ilk.textContent = "Bildirimleri kontrol et";
liste.prepend(ilk); // başa ekler
```

- `append` ve `prepend` hem düğüm hem string kabul eder.
- `appendChild` yalnızca düğüm kabul eder; farklı tarayıcı uyumluluğu gerektiğinde kullanılır.

## Adım 4: Element Silme

```javascript
const banner = document.querySelector(".banner");
banner.remove();
```

- `remove()` elementi ebeveyninden çıkarır.
- Eski tarayıcılar için `parent.removeChild(child)` alternatifini kullanabilirsiniz.

## Adım 5: Attribute Yönetimi

```javascript
const link = document.querySelector("a.cta");

link.setAttribute("href", "https://devsteps.io");
link.setAttribute("target", "_blank");

console.log(link.getAttribute("href"));
```

- `setAttribute`, `getAttribute`, `removeAttribute` genel erişim sunar.
- Yaygın attribute’lar için `link.href`, `link.id` gibi özellikleri de kullanabilirsiniz.

## Adım 6: Sınıfları Yönetme

```javascript
const kart = document.querySelector(".kart");

kart.classList.add("vurgulu");
kart.classList.remove("gizli");
kart.classList.toggle("aktif");
kart.classList.replace("eski", "yeni");

console.log(kart.classList.contains("aktif"));
```

- `classList`, sınıf ekleme/çıkarma için pratik metodlar sağlar.
- `toggle("aktif", kosul)` ile sınıfı boolean değere göre yönetebilirsiniz.

## Adım 7: Satır İçi Stiller

```javascript
const uyari = document.querySelector(".uyari");

uyari.style.backgroundColor = "#2563eb";
uyari.style.color = "#fff";
uyari.style.padding = "12px";
```

- CSS özelliklerini camelCase ile yazın (`backgroundColor` gibi).
- Satır içi stiller stylesheet’i ezer; temayı korumak için genellikle sınıfları tercih edin.

## Adım 8: CSS Değişkenleri

```javascript
document.documentElement.style.setProperty("--vurgulu", "#f97316");
```

- `setProperty` ile global CSS değişkeni tanımlayın.
- `getComputedStyle(document.documentElement).getPropertyValue("--vurgulu")` ile değerini okuyun.

## Adım 9: Pratik Önerileri

1. `status` ID’li elementin metnini `"Her şey yolunda!"` yapın.
2. `.okuma-listesi` sınıflı listeye `"Kitap incelemesi"` adlı yeni `<li>` ekleyin.
3. Bir checkbox işaretlendiğinde `body` elementine `"karanlik-mod"` sınıfını ekleyip kaldırın.
4. Bir görselin `src` ve `alt` attribute’larını yeni bir illustrasyon gösterecek şekilde güncelleyin.
5. `--ana-renk` adlı CSS değişkeni tanımlayıp bir banner’a uygulayın.

## Önemli Noktalar

- ✅ Güvenli metin için `textContent`, HTML parçaları için dikkatle `innerHTML` kullanın.
- ✅ `document.createElement` ile düğümler oluşturup `append`, `prepend`, `appendChild` ile ekleyin.
- ✅ Sınıfları `classList`, attribute’ları `setAttribute`/`getAttribute` ile yönetin.
- ✅ Satır içi stiller ve CSS değişkenleri görünümü dinamik olarak değiştirmenize yardımcı olur.

---

## 🎯 Hızlı Kontrol

1. Hangi durumda `textContent`, `innerHTML`’e göre daha güvenlidir?
2. `append` ile `appendChild` arasındaki fark nedir?
3. `classList.toggle("aktif")` ne yapar?
4. Bir CSS değişkenini JavaScript ile nasıl güncelleyebilirsiniz?

Sıradaki ders: Kullanıcı etkileşimlerine tepki vermek için olay dinleyicilerini bağlıyoruz. 🖱️

---
title: "6. Gün Etkileşimli Proje"
description: "Etkileşimli bir fotoğraf galerisi oluşturma"
type: "project"
duration: "20 dk"
day: 6
order: 5
nextLesson: "project-planning"
---

# 6. Gün Projesi: Etkileşimli Fotoğraf Galerisi

DOM seçimi, element güncelleme ve olay yönetimi becerilerinizi birleştirerek hafif bir galeri oluşturun. Küçük görselleri (thumbnail) renderlayacak, öne çıkarılan görseli gösterecek ve kullanıcıların koleksiyonu keşfetmesini sağlayacak kontroller ekleyeceksiniz.

## Proje Özeti

Galerinizin yapması gerekenler:

- Başlık/açıklama içeren öne çıkarılan bir görsel gösterin.
- Fotoğraf nesneleri dizisinden tıklanabilir küçük görseller üretin.
- Butonlar veya klavye kısayolları (`ArrowLeft`/`ArrowRight`) ile gezinmeye izin verin.
- Hangi küçük görselin aktif olduğunu görsel olarak belli edin.

Gelişmiş fikirler: geçiş animasyonları eklemek veya resimleri önceden yüklemek.

## Adım 1: Veriyi Planlayın

`galeri-veri.js` dosyası oluşturup örnek fotoğrafları ekleyin (veya script içinde tanımlayın).

```javascript
export const fotograflar = [
  {
    id: 1,
    src: "images/mountain.jpg",
    alt: "Dağların üzerinde gün doğumu",
    baslik: "Dağ Güneşi",
    aciklama: "Altın saat ışığı sırt çizgisini aydınlatıyor."
  },
  {
    id: 2,
    src: "images/forest.jpg",
    alt: "Yeşil ormanda gün ışığı",
    baslik: "Orman Yürüyüşü",
    aciklama: "Uzun çamların arasından süzülen ışık."
  }
  // en az 4 fotoğraf ekleyin
];
```

- Gerçek görseller veya `https://picsum.photos/` gibi servislerden yer tutucular kullanabilirsiniz.
- Öne çıkarılan alanda göstereceğiniz tüm meta verileri nesneye ekleyin.

## Adım 2: HTML Yapısını Hazırlayın

JavaScript’in bağlanacağı yapıyı oluşturun.

```html
<section class="galeri">
  <div class="one-cikan">
    <img class="one-cikan-gorsel" alt="" />
    <div class="detaylar">
      <h2 class="one-cikan-baslik"></h2>
      <p class="one-cikan-aciklama"></p>
    </div>
  </div>

  <div class="kontroller">
    <button class="geri">Önceki</button>
    <button class="ileri">Sonraki</button>
  </div>

  <ul class="kucuk-gorseller"></ul>
</section>
```

- Sınıf isimlerini açıklayıcı tutun; JavaScript’te onları seçeceksiniz.
- İhtiyaç halinde CSS ile düzenleyin (grid veya flex iyi çalışır).

## Adım 3: Küçük Görselleri Renderlayın

`.kucuk-gorseller` listesini seçip fotoğraf dizisine göre doldurun.

```javascript
const kucukGorseller = document.querySelector(".kucuk-gorseller");

function kucukGorselleriCiz(items) {
  kucukGorseller.innerHTML = "";
  items.forEach((foto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <button class="thumb" data-index="${index}">
        <img src="${foto.src}" alt="${foto.alt}" />
      </button>
    `;
    kucukGorseller.append(li);
  });
}

kucukGorselleriCiz(fotograflar);
```

- Her butona dizideki index (veya ID) bilgisini `data-index` olarak ekleyin.
- Aktif fotoğrafla eşleşen küçük görsele `"active"` sınıfı ekleyin.

## Adım 4: Öne Çıkan Alanı Güncelleyin

Index alan ve ana görünümü güncelleyen bir fonksiyon yazın.

```javascript
const oneCikanGorsel = document.querySelector(".one-cikan-gorsel");
const oneCikanBaslik = document.querySelector(".one-cikan-baslik");
const oneCikanAciklama = document.querySelector(".one-cikan-aciklama");

let guncelIndex = 0;

function fotoGoster(index) {
  const foto = fotograflar[index];
  if (!foto) return;

  oneCikanGorsel.src = foto.src;
  oneCikanGorsel.alt = foto.alt;
  oneCikanBaslik.textContent = foto.baslik;
  oneCikanAciklama.textContent = foto.aciklama;
  guncelIndex = index;
  kucukGorselVurgula(index);
}
```

- Render işleminden sonra `fotoGoster(0)` çağırarak galeriyi başlatın.
- `kucukGorselVurgula` fonksiyonu `"active"` sınıfını yönetmeli.

## Adım 5: Kontrolleri Bağlayın

### Küçük Görsel Tıklaması

```javascript
kucukGorseller.addEventListener("click", (event) => {
  const buton = event.target.closest("button.thumb");
  if (!buton) return;
  const index = Number(buton.dataset.index);
  fotoGoster(index);
});
```

### Önceki/Sonraki Butonları

```javascript
const geriButon = document.querySelector(".geri");
const ileriButon = document.querySelector(".ileri");

geriButon.addEventListener("click", () => {
  const sonrakiIndex = (guncelIndex - 1 + fotograflar.length) % fotograflar.length;
  fotoGoster(sonrakiIndex);
});

ileriButon.addEventListener("click", () => {
  const sonrakiIndex = (guncelIndex + 1) % fotograflar.length;
  fotoGoster(sonrakiIndex);
});
```

### Klavye Kısayolları (Opsiyonel)

```javascript
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") geriButon.click();
  if (event.key === "ArrowRight") ileriButon.click();
});
```

- Mantığı parçalara ayırarak aynı güncelleme fonksiyonunu farklı etkileşim yollarında yeniden kullanın.

## Adım 6: Aktif Küçük Görseli Vurgulayın

```javascript
function kucukGorselVurgula(aktifIndex) {
  document
    .querySelectorAll(".thumb")
    .forEach((buton, index) => {
      buton.classList.toggle("active", index === aktifIndex);
    });
}
```

- CSS ile `"active"` sınıfına özel bir görünüm (çerçeve, opaklık) verin.

## Esneme Hedefleri (Opsiyonel)

- Görsel geçişlerinde fade veya slide animasyonları ekleyin.
- `"Fotoğraf 2 / 6"` şeklinde sayaç gösterin.
- Sonraki/önceki görseli önceden yükleyerek geçişleri hızlandırın.
- `setInterval` ile otomatik oynatma modu ekleyin.

## Teslimatlar

- Etkileşimli galeriyi barındıran HTML/CSS/JS dosyaları (veya tek HTML).
- Küçük görselleri renderlayan, öne çıkardığı fotoğrafı güncelleyen ve kullanıcı girdisini yöneten JavaScript.
- Gelecekte gerçek bir API’den veri çekerseniz nasıl entegre edeceğinize dair kısa notlar veya yorumlar.

Hazırsanız 7. güne geçip final proje planınızı hazırlamaya başlayın. 🚀

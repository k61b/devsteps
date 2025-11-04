---
title: "Kullanıcı Arayüzünü Oluşturmak"
description: "HTML ve CSS yapısını oluşturma"
type: "reading"
duration: "30 dk"
day: 7
order: 2
nextLesson: "implementing-logic"
---

# Kullanıcı Arayüzünü Oluşturmak

Planınızı hazırladığınıza göre, taslakları gerçek arayüze dönüştürme zamanı. Bugünün odağı HTML yapısı, yerleşimler ve tekrar kullanılabilir bileşenler olacak; böylece yarın JavaScript katmanı sorunsuz şekilde entegre olur.

## Adım 1: Temel Yerleşimi Kur

- Uygulamanız için kök HTML dosyasını (veya Svelte bileşenini) oluşturun.
- İhtiyaç duyacağınız global stilleri, fontları veya ikon kütüphanelerini ekleyin.
- Dünkü plana göre ana kapları tanımlayın: başlık, gezinme, içerik, alt bilgi.

```html
<body>
  <header class="app-header">
    <h1>Momentum Takipçisi</h1>
    <button class="tema-toggle">🌗</button>
  </header>

  <main class="layout">
    <aside class="sidebar"></aside>
    <section class="content"></section>
  </main>
</body>
```

## Adım 2: Çekirdek Bölümleri İnşa Et

- Her özellik için yer tutucular (görev listesi, istatistik paneli, not alanı vb.) ekleyin.
- Erişilebilirliği korumak için semantik elementler (`section`, `article`, `form`) kullanın.
- CSS stratejinize uygun açıklayıcı sınıflar ekleyin.

```html
<section class="task-board" aria-labelledby="tasks-heading">
  <div class="board-header">
    <h2 id="tasks-heading">Bugünün Görevleri</h2>
    <button class="add-task">+ Yeni Görev</button>
  </div>
  <ul class="task-list"></ul>
</section>
```

## Adım 3: Tekrar Kullanılabilir Bileşenler Tasarla

- Tekrarlayan kart, rozet, buton veya liste öğelerini belirleyin.
- Minimum HTML iskeletini hazırlayıp stilleri bir kere tanımlayın.
- Stack’inize göre yardımcı sınıflar (Tailwind) veya BEM isimlendirme tercih edin.

```html
<li class="card card--task">
  <header class="card__header">
    <h3 class="card__title">Ders planını yayınla</h3>
    <span class="badge badge--priority">Yüksek</span>
  </header>
  <p class="card__meta">Teslim: Bugün · 3 alt görev</p>
</li>
```

## Adım 4: Duyarlı (Responsive) Yerleşimler Uygula

- Sütunlar ve hizalamalar için CSS Grid veya Flexbox kullanın.
- Mobil öncelikli yaklaşım için kırılım noktaları (ör. 768px altı tek sütun) ekleyin.
- Tarayıcı boyutunu değiştirerek veya DevTools cihaz modunu kullanarak test edin.

```css
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .sidebar {
    order: 2;
  }
}
```

## Adım 5: Görsel Hiyerarşi Kur

- Tipografi ölçeği belirleyin (örn. `h1` ~32px, `h2` ~24px, paragraf 16px).
- Tutarlı margin/padding için boşluk (spacing) token’ları tanımlayın.
- Renk paleti seçin ve kontrast değerlerini yeterli tutun.

Bu kararları yorumlarda veya tasarım token’ları bölümünde belgeleyin.

## Adım 6: Etkileşim Durumlarını Hazırla

- Buton ve linkler için hover/focus durumlarını stilize edin.
- Klavye erişilebilirliği için `:focus-visible` kullanın.
- Veri geleceği alanlar için boş/kaynak yükleniyor durumlarını dahil edin.

```css
.add-task {
  border: none;
  background: var(--accent);
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  transition: transform 0.15s ease;
}

.add-task:hover,
.add-task:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}
```

## Adım 7: JavaScript Kancalarını Belirle

- Scriptlerin seçeceği `data-*` attribute’ları veya sınıflar oluşturun (`data-role="task-list"`).
- Adlandırmayı tutarlı tutarak yarın elementi kolayca bulmanızı sağlayın.
- Gerekirse davranışı açıklayan yorumlar ekleyin.

```html
<form class="task-form" data-role="task-form">
  <label for="task-title">Görev adı</label>
  <input id="task-title" name="title" placeholder="E-posta kampanyasını başlat" />
  <button type="submit">Görev Ekle</button>
</form>
```

## Adım 8: Arayüzü Kalite Kontrol Et

- Kritik senaryoları test edin (uzun başlıklar, boş listeler, koyu tema).
- Hizalama, boşluk ve yazı tiplerini farklı cihaz/tarayıcılarda kontrol edin.
- HTML semantiğini doğrulayın; erişilebilirlik sorunlarını (eksik label, kontrast) düzeltin.

## Adım 9: UI Kontrol Listesi Hazırla

1. Temel yerleşim masaüstü ve mobilde çakışma olmadan çalışıyor.
2. Bileşenler plana uygun ve sınıflar tutarlı.
3. Buton, link ve form kontrolleri için etkileşim durumları mevcut.
4. DOM kancaları (`data-role`, ID, sınıf) JavaScript’e hazır.

Bir sonraki aşamaya geçmeden her maddeyi işaretleyin.

## Önemli Noktalar

- ✅ Planı semantik HTML ve tutarlı CSS’e dönüştürmeden iş mantığına geçmeyin.
- ✅ Tekrar kullanılabilir bileşenler stil ve etkileşimleri sadeleştirir.
- ✅ Duyarlı ve erişilebilir tasarım şimdi yapılırsa sonra yeniden çalışma azalır.
- ✅ Net seçiciler ve data attribute’lar, yarınki JavaScript entegrasyonunu kolaylaştırır.

---

## 🎯 Hızlı Kontrol

1. Hangi yerleşim yöntemini (Grid/Flex) seçtiniz ve neden?
2. UI’da boş veya yükleme durumlarını nasıl belirtiyorsunuz?
3. Hangi tekrar kullanılabilir bileşen kalıplarını tanımladınız?
4. JavaScript yarın DOM’un hangi noktalarına bağlanacak?

Sıradaki ders: Arayüzü dinamik veriler ve etkileşimlerle canlandırıyoruz. ⚙️

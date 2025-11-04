---
title: "JavaScript Mantığını Uygulamak"
description: "Uygulamanı hayata geçirme"
type: "reading"
duration: "45 dk"
day: 7
order: 3
nextLesson: "testing-debugging"
---

# JavaScript Mantığını Uygulamak

Planını çıkardın, arayüzü kurdun—şimdi her şeyi JavaScript ile birbirine bağlama zamanı. Bu ders, öğrendiğin tüm becerileri birleştiriyor: veri yapıları, DOM manipülasyonu, olay yönetimi ve kalıcılık.

## Adım 1: Durumu Başlat

- Veri modelini içe aktar veya tanımla (görevler, hedefler, kayıtlar).
- Durum değişkenlerini oluştur (`const state = { tasks: [], filters: {} }`).
- UI’ın hemen içerik göstermesi için örnek verilerle başlat.

```javascript
const state = {
  tasks: [
    { id: crypto.randomUUID(), title: "Proje taslağını yaz", done: false },
    { id: crypto.randomUUID(), title: "UI bileşenlerini tasarla", done: true }
  ],
  filter: "all"
};
```

## Adım 2: DOM Kancalarını Referansla

- Sık güncelleyeceğin alanlar için seçicileri önceden al.
- Tekrarlı `querySelector` çağrılarından kaçınmak için açıklayıcı sabitler kullan.

```javascript
const taskList = document.querySelector("[data-role='task-list']");
const taskTemplate = document.querySelector("#task-template");
const summary = document.querySelector("[data-role='summary']");
```

## Adım 3: Render Fonksiyonları

Duruma göre UI bölümlerini renderlayan yeniden kullanılabilir fonksiyonlar yaz.

```javascript
function renderTasks() {
  taskList.innerHTML = "";

  const filtered = state.tasks.filter((task) => {
    if (state.filter === "completed") return task.done;
    if (state.filter === "active") return !task.done;
    return true;
  });

  filtered.forEach((task) => {
    const li = taskTemplate.content.cloneNode(true);
    const item = li.querySelector(".task");
    item.dataset.id = task.id;
    li.querySelector(".task-title").textContent = task.title;
    li.querySelector(".task-toggle").checked = task.done;
    taskList.append(li);
  });
}
```

- Render fonksiyonlarını saf tut: durumdan oku, DOM’u güncelle, başka yan etki bırakma.

## Adım 4: Olay Dinleyicilerini Bağla

- Öğeler eklemek için form gönderimleri
- Durumu güncellemek için tıklama/işaretleme olayları
- Dinamik listeler için delegasyon

```javascript
const form = document.querySelector("[data-role='task-form']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title").trim();
  if (!title) return;

  state.tasks.push({
    id: crypto.randomUUID(),
    title,
    done: false
  });

  form.reset();
  sync();
});

taskList.addEventListener("change", (event) => {
  const toggle = event.target.closest(".task-toggle");
  if (!toggle) return;
  const id = toggle.closest(".task").dataset.id;
  const task = state.tasks.find((item) => item.id === id);
  if (!task) return;
  task.done = toggle.checked;
  sync();
});
```

- Tüm değişiklikleri tek bir `sync()` fonksiyonundan geçirerek tutarlılığı koru.

## Adım 5: Türetilmiş Veriler ve Özetler

Durum değiştikçe ilerleme metriklerini hesapla.

```javascript
function renderSummary() {
  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.done).length;
  summary.textContent = `Tamamlanan ${completed}/${total}`;
}
```

- `sync()` içinde özet renderına yer ver.

## Adım 6: Kalıcılık (Opsiyonel ama Güçlü)

Durumu kaydetmek ve geri yüklemek için `localStorage` kullan.

```javascript
const STORAGE_KEY = "momentum-tracker";

function load() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  Object.assign(state, JSON.parse(saved));
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function sync() {
  renderTasks();
  renderSummary();
  save();
}

load();
sync();
```

- Ayrıştırma hatalarına ve eski şemalara karşı koruma ekle.

## Adım 7: Filtre ve Görünümleri Yönet

- Filtre butonları veya menülerle `state.filter` değerini güncelle.
- Aktif filtreyi UI’da vurgula.

```javascript
document.querySelectorAll("[data-role='filter']").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document
      .querySelectorAll("[data-role='filter']")
      .forEach((btn) => btn.classList.toggle("active", btn === button));
    sync();
  });
});
```

## Adım 8: Cilalama ve Test

- Klavye navigasyonunu test et (tab sırası, Enter/Space davranışı).
- Boş durumları, uç girdileri, hızlı tıklamaları doğrula.
- Kalıcılık eklediysen sayfa yenileme sonrası durumun korunmasını kontrol et.
- Demo öncesi konsol uyarı/hatalarını temizle.

## Adım 9: Demo Hazırlığı

- Problemi, çekirdek özellikleri ve öne çıkan etkileşimleri anlatan kısa bir yürüyüş hazırla.
- Canlı sunum mümkün değilse ekran görüntüsü veya GIF yakala.
- Daha fazla zamanın olsa neleri geliştireceğini not et.

## Önemli Noktalar

- ✅ Durumu merkezi tut ve render/etkileşim mantığını oradan yönet.
- ✅ Seçim, render ve olay kalıplarını önceki günlerden yeniden kullan.
- ✅ `localStorage` gibi basit kalıcılık yöntemleri projeyi bir üst seviyeye taşır.
- ✅ Cilalı bir deneyim için etkileşimleri ve erişilebilirliği test et.

---

## 🎯 Hızlı Kontrol

1. Uygulama durumunu nerede saklıyor ve nasıl güncelliyorsun?
2. `sync()` (veya eşdeğer fonksiyonun) UI ile durumu nasıl senkron tutuyor?
3. Hangi kalıcılık stratejisini seçtin (seçtiysen)?
4. Final sunumunda hangi kullanıcı akışlarını göstereceksin?

Final gününe ulaştın! Başarını kutla ve ortaya çıkardığın projeyi paylaş. 🎉

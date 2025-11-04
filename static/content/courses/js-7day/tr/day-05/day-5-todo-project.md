---
title: "5. Gün Mini Proje"
description: "Basit bir yapılacaklar listesi yöneticisi oluşturma"
type: "project"
duration: "20 dk"
day: 5
order: 5
nextLesson: "what-is-dom"
---

# 5. Gün Mini Projesi: Yapılacaklar Yöneticisi

Dizi ve nesne bilgilerinizi kullanarak basit bir todo takipçisi inşa edin. Görevlerinizi nesne dizisi olarak saklayacak, dizi iterasyon metodlarını uygulayacak ve ileride DOM ile bağlayabileceğiniz sağlam bir veri katmanı hazırlayacaksınız.

## Proje Özeti

Todoları nesneler halinde modelleyin ve şu yardımcı fonksiyonları yazın:

- Yeni todo ekleme
- Todo’nun tamamlandı durumunu değiştirme
- Todoları duruma göre filtreleme
- İlerlemeyi özetleyen bir mesaj üretme

Sonunda, ileride arayüz eklemek için kullanabileceğiniz hafif bir veri yapısına sahip olacaksınız.

## Adım 1: Veri Yapısını Tanımla

`todos.js` dosyası açın (veya bir REPL kullanın) ve örnek verilerle başlayın.

```javascript
const todos = [
  { id: 1, baslik: "Dizi dersini oku", tamamlandi: true },
  { id: 2, baslik: "Dizi metodlarını uygula", tamamlandi: false },
  { id: 3, baslik: "Mini proje planı hazırla", tamamlandi: false }
];
```

- Her todo `id`, `baslik` ve `tamamlandi` alanları içerir.
- Yeni eklerken ardışık ID veya `Date.now()` kullanabilirsiniz.

## Adım 2: Todo Ekle

Başlık alıp yeni todo nesnesi ekleyen fonksiyon yazın.

```javascript
function todoEkle(liste, baslik) {
  const sonrakiId = liste.length ? liste[liste.length - 1].id + 1 : 1;
  const todo = { id: sonrakiId, baslik, tamamlandi: false };
  liste.push(todo);
  return todo;
}

todoEkle(todos, "İlerlemeni kutla");
```

- Fonksiyon yeni todo’yu döndürsün ki loglayabilesiniz veya test edebilesiniz.
- Orijinal listeyi değiştirip değiştirmemeye siz karar verin; sadece tutarlı olun.

## Adım 3: Tamamlama Durumunu Değiştir

ID’ye göre todo bulup `tamamlandi` değerini çevirin.

```javascript
function todoToggle(liste, id) {
  const todo = liste.find((item) => item.id === id);
  if (!todo) {
    console.warn(`ID ${id} olan todo bulunamadı`);
    return;
  }
  todo.tamamlandi = !todo.tamamlandi;
  return todo;
}

todoToggle(todos, 2);
```

- `find` veya `map` kullanabilirsiniz—size uygun olanı seçin.
- Hataları önlemek için bulunamayan ID’lere karşı koruma ekleyin.

## Adım 4: Duruma Göre Filtrele

Tamamlanan ve bekleyen todoları döndüren yardımcılar hazırlayın.

```javascript
function tamamlananlariAl(liste) {
  return liste.filter((todo) => todo.tamamlandi);
}

function bekleyenleriAl(liste) {
  return liste.filter((todo) => !todo.tamamlandi);
}

console.log(tamamlananlariAl(todos));
console.log(bekleyenleriAl(todos));
```

- `filter` yeni diziler döndürür; sonradan zincirleyebilirsiniz.

## Adım 5: İlerlemeyi Özetle

`reduce` kullanarak toplamları hesaplayın ve durum mesajı oluşturun.

```javascript
function todoOzet(liste) {
  const ozet = liste.reduce(
    (acc, todo) => {
      acc.toplam += 1;
      if (todo.tamamlandi) acc.tamamlanan += 1;
      return acc;
    },
    { toplam: 0, tamamlanan: 0 }
  );

  const bekleyen = ozet.toplam - ozet.tamamlanan;
  return `Tamamlandı ${ozet.tamamlanan}/${ozet.toplam} • Bekleyen ${bekleyen}`;
}

console.log(todoOzet(todos));
```

- İleride arayüzde kullanmak için hem sayıları hem formatlı string’i döndürebilirsiniz.

## Esneme Hedefleri (Opsiyonel)

- Todoları alfabetik veya tamamlanma durumuna göre sırala.
- ID’ye göre todo silen fonksiyon ekle.
- `aramaTodo(liste, sorgu)` yazarak başlığa göre filtrele.
- Todoları `localStorage` (veya JSON dosyası) aracılığıyla saklayarak serileştirme pratiği yap.

## Teslimatlar

- Todo dizisini ve yardımcı fonksiyonları içeren bir JavaScript modülü.
- Her yardımcının çalıştığını gösteren console log’lar veya basit testler.
- Bu veri katmanını gelecekte DOM tabanlı bir arayüze nasıl bağlayacağınıza dair kısa notlar.

Hazırsanız 6. güne geçip bu verileri tarayıcıda gerçek DOM manipülasyonu ile canlandırın. 🌐

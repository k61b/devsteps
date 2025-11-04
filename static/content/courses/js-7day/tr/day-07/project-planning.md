---
title: "Proje Planlama"
description: "Final proje uygulamasını planlama"
type: "reading"
duration: "15 dk"
day: 7
order: 1
nextLesson: "building-ui"
---

# Proje Planlama

7. güne hoş geldiniz—finale çok az kaldı! Koda başlamadan önce deneyimi tasarlayacak, özellikleri haritalandıracak ve işi yönetilebilir adımlara böleceksiniz. Sağlam bir plan, geliştirme sürecini odaklı ve akıcı tutar.

## Adım 1: Hedefi Tanımla

- Uygulamanız hangi problemi çözüyor?
- Hedef kitleniz kim (öğrenciler, hobiciler, uzaktan çalışan ekipler)?
- Bir kullanıcı 5 dakikada neyi başarabilmeli?

“Her gün başarıları kaydetmeyi sağlayan alışkanlık takipçisi” gibi tek cümlelik bir misyon yazın.

## Adım 2: Çekirdek Özellikleri Seç

Çalışan bir MVP için olmazsa olmazları listeleyin:

- Gösterilecek veya toplanacak veriler (todo, hedef, not, istatistik).
- Etkileşimler (öge ekleme, filtreleme, tamamlandı işaretleme).
- Geri bildirim öğeleri (ilerleme çubuğu, uyarılar, özetler).

En kritik üç özelliği vurgulayın; diğerleri esneme hedefi (stretch goal) olsun.

## Adım 3: Arayüzü Taslak Haline Getir

- Ana ekranların hızlı sketçini veya wireframe’ini çizin.
- Yerleşimi belirleyin: başlık, gezinme, içerik bölümleri, modallar.
- Önceki günlerde hazırladığınız bileşenleri not alın (kartlar, listeler, rozetler).

Detaydan çok yapıya odaklanın. Kabaca bir eskiz, DOM yapısını ve CSS’i planlamanıza yardımcı olur.

## Adım 4: Veri Modelini Planla

- Hangi dizi veya nesnelere ihtiyaç var?
- Öğeleri nasıl tanımlayacaksınız (`id`, `slug` vb.)?
- Toplamlar veya filtrelenmiş listeler gibi türetilmiş veriler gerekli mi?

Render edeceğiniz yapıyı görmek için örnek JSON taslağı çıkarın.

## Adım 5: Görevleri Parçala

Şu adımları içeren bir kontrol listesi oluşturun:

1. Statik HTML yapısı
2. Yerleşimi stillendirme
3. Örnek verileri ekleme
4. DOM güncellemelerini bağlama
5. Olay dinleyicilerini ekleme
6. Detayları cilalama (boş durumlar, erişilebilirlik, duyarlılık)

Her adım tek oturuşta tamamlanabilecek kadar küçük olsun.

## Adım 6: Riskleri Belirle

- Araştırmanız gereken dış API veya kütüphaneler
- Karmaşık etkileşimler (drag-and-drop, zamanlayıcılar)
- Zaman alıcı stil veya görsel hazırlıkları

Bu riskleri erken işaretleyin ki basitleştirebilesiniz veya hızlı prototip çıkarabilesiniz.

## Adım 7: Başarı Kriterlerini Tanımla

- Demo öncesi ne kesinlikle çalışmalı? (örn. “Kullanıcının görev ekleyip tamamlaması gerekiyor.”)
- Hangi esneme hedefi etkileyici olur, ama zorunlu değildir?
- Arayüzün “cilalı” sayılması için hangi kriterlere bakacaksınız? (duyarlı tasarım, klavye desteği, net görseller)

Bu kriterleri not edin ve ilerlemeyi gerçekçi takip edin.

## Proje Çalışma Sayfası

Planınızı kaydetmek için bu şablonu kullanın:

```
Misyon:
Hedef Kitle:
Çekirdek Özellikler:
Veri Model Taslağı:
UI Bölümleri:
Görev Kontrol Listesi:
Riskler ve Önlemler:
Esneme Hedefleri:
```

Bunu not uygulamanıza veya proje dosyalarınıza yorum olarak ekleyin.

## Önemli Noktalar

- ✅ Kullanıcıya sağlanacak sonucu tanımlamadan koda başlamayın.
- ✅ MVP’yi küçük bir çekirdek özellik setine indirgeyin.
- ✅ Veri yapıları ve UI bölümlerini haritalandırarak geliştirme sırasında yönünüzü kaybetmeyin.
- ✅ Planı kontrol listesine çevirerek 7. gün boyunca ilerlemeyi takip edin.

---

## 🎯 Hızlı Kontrol

1. Projenizin kullanıcıya sunduğu temel değer nedir?
2. MVP için vazgeçilmez üç özellik hangileri?
3. Verilerinizi JavaScript’te nasıl temsil edeceksiniz?
4. Geliştirme sırasında hangi riskleri izlemeniz gerekiyor?

Sıradaki ders: Planınızı şık bir kullanıcı arayüzüne dönüştürme zamanı. 🎨

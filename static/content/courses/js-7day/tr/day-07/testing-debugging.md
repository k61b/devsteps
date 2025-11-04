---
title: "Test ve Hata Ayıklama"
description: "Kodunuzdaki hataları bulup düzeltme"
type: "reading"
duration: "15 dk"
day: 7
order: 4
nextLesson: "wrap-up-next-steps"
---

# Test ve Hata Ayıklama

Parlak bir proje sadece özellikleri tamamlanmış değil, aynı zamanda stabil ve güvenilirdir. Bugün uygulamanızı zorlayacak, uç durumları yakalayacak ve kullanıcılar görmeden hataları bulmak için tekrarlanabilir bir süreç kuracaksınız.

## Adım 1: Test Kontrol Listesi Oluştur

- Uygulamayı temiz bir tarayıcı oturumunda açın.
- Planda belirlediğiniz her çekirdek özelliği adım adım deneyin.
- Boş durumları, hata durumlarını ve sınır girdilerini dahil edin.

Her adımı not edin ki güncelleme gönderirken aynı listeyi kullanabilesiniz.

## Adım 2: Manuel Test Senaryoları

1. **Oluştur**: Kısa ve uzun başlıklarla yeni kayıtlar ekleyin.
2. **Değiştir**: Öğeleri tamamlandı işaretleyin, detaylarını düzenleyin, geri alın.
3. **Sil** (varsa): Öğeleri kaldırıp kaybolduklarından emin olun.
4. **Filtreler/Görünümler**: Filtreler, sıralamalar veya sekmeler arasında geçiş yapın.
5. **Kalıcılık**: Sayfayı yenileyip durumun doğru şekilde geri geldiğini kontrol edin.

Hem masaüstü hem mobil kırılım noktalarını test edin.

## Adım 3: Konsol ve Ağ İzleme

- DevTools’u açın (`Cmd+Option+I` / `Ctrl+Shift+I`).
- **Console** sekmesinde hata, uyarı veya başarısız promise var mı bakın.
- **Network** sekmesinde asset’lerin hızlı yüklenip yüklenmediğini izleyin.

Konsoldaki hataları çözmeden projeyi tamamlanmış saymayın.

## Adım 4: Hata Ayıklama Teknikleri

- Durumu ve olay akışını görmek için geçici `console.log` satırları ekleyin.
- **Sources** panelinde breakpoint koyup kodu satır satır ilerleyin.
- Etkileşim sırasında sınıf, attribute ve stil kontrolleri için DOM inceleyicilerini kullanın.

Sorun çözülünce geçici logları kaldırarak konsolu temiz tutun.

## Adım 5: Erişilebilirlik Kontrolleri

- Sadece klavye ile gezin (Tab, Shift+Tab, Enter, Space).
- Odak göstergelerinin görünür ve mantıklı olduğundan emin olun.
- Lighthouse veya Axe çalıştırarak renk kontrastı ve ARIA hatalarını yakalayın.

Erişilebilirlik sorunları da birer hatadır—yayınlamadan önce düzeltin.

## Adım 6: Performans İpuçları

- Paket boyutunu analiz edin (Vite analyzer veya DevTools Coverage).
- Ağır script’leri erteleyin, kritik olmayan görselleri lazy-load edin.
- Görsel boyutlarını tanımlayıp flex/grid düzenlerini dikkatle kullanarak layout kaymalarını azaltın.

Küçük optimizasyonlar bile algılanan kaliteyi artırır.

## Adım 7: Regresyon Güvencesi

- Her düzeltmeden sonra kontrol listesini yeniden çalıştırın; farklı bir şeyi bozmadığınızdan emin olun.
- Senaryoları işaretleyin ve kararsız davranışları geleceğe dair not edin.
- Bilinen sınırlamalar veya takip işleri için `TESTING.md` gibi bir dosya tutmayı düşünün.

## Adım 8: Hata Takip Listesi Hazırla

- Hemen çözemediğiniz sorunları net şekilde kaydedin:
  - Reprodüksiyon adımları
  - Beklenen vs. gerçekleşen davranış
  - Öncelik seviyesi ve olası çözüm notları

Şeffaflık, gelecekte rahat iterasyon yapmanıza yardımcı olur.

## Adım 9: QA Tamamlandı Kutla

- Liste başarıyla geçtiyse final üründen kısa bir video veya GIF yakalayın.
- Arkadaşlarınızla veya mentorlarınızla paylaşarak taze gözlerden geri bildirim alın.
- Zaman kazandıran hata ayıklama tekniklerini not edin—gelecek projelerde de kullanacaksınız.

## Önemli Noktalar

- ✅ Yapılandırılmış kontrol listeleri, gözden kaçan hataları önler.
- ✅ DevTools’un konsol, breakpoint ve ağ araçları hata ayıklama çantandır.
- ✅ Erişilebilirlik ve performans kalitenin ayrılmaz parçasıdır.
- ✅ Bilinen sorunları not ederek gelecekteki iterasyonlara yön verin.

---

## 🎯 Hızlı Kontrol

1. Hangi test senaryoları en fazla hatayı ortaya çıkardı?
2. Uygulamanın fare olmadan çalıştığını nasıl doğruladınız?
3. En etkili hata ayıklama adımı ne oldu?
4. Gelecek sürümler için hangi takip maddelerini kaydedeceksiniz?

Sıradaki ders: Sprinti tamamlayıp sonrasında nereye ilerleyeceğinize karar verin. 🏁

---
title: "JavaScript Nedir?"
description: "JavaScript'in ne olduğunu ve web geliştirme için neden önemli olduğunu anlama"
type: "reading"
duration: "15 dakika"
day: 1
order: 1
nextLesson: "setting-up-environment"
---

# JavaScript Nedir?

JavaScript yolculuğunuza hoş geldiniz! Bu derste JavaScript'in ne olduğunu, neden en önemli programlama dillerinden biri olduğunu ve modern web'i nasıl güçlendirdiğini öğreneceksiniz.

## Giriş

JavaScript, web sitelerini etkileşimli ve dinamik hale getiren bir **programlama dilidir**. HTML yapıyı sağlarken ve CSS stil eklerken, JavaScript web sayfalarınıza hayat verir.

> **İlginç Bilgi:** Adına rağmen JavaScript'in Java ile hiçbir ilgisi yoktur! İsim 1990'larda pazarlama nedeniyle seçilmiştir.

## JavaScript Ne Yapabilir?

JavaScript inanılmaz derecede çok yönlüdür. İşte onunla oluşturabileceğiniz bazı şeyler:

### Web'de
- **Etkileşimli web siteleri** - Formlar, animasyonlar ve dinamik içerik
- **Web uygulamaları** - Gmail, Facebook, Twitter
- **Oyunlar** - 2048 veya Candy Crush gibi tarayıcı tabanlı oyunlar
- **Veri görselleştirme** - Grafikler, çizelgeler ve etkileşimli haritalar

### Tarayıcının Ötesinde
- **Mobil uygulamalar** - React Native gibi frameworkler kullanarak
- **Masaüstü uygulamaları** - Electron kullanarak (VS Code bununla yapılmıştır!)
- **Sunucu tarafı uygulamalar** - Node.js kullanarak
- **IoT cihazları** - Robotları ve akıllı ev cihazlarını kontrol etme

## Neden JavaScript Öğrenmeliyiz?

JavaScript öğrenmek için zorlayıcı nedenler:

1. **Yüksek talep** - JavaScript geliştiricileri dünya çapında yüksek talep görmektedir
2. **Başlangıç dostu** - Harika bir ilk programlama dili
3. **Çok yönlü** - Frontend, backend, mobil, masaüstü - hepsini yapabilir
4. **Büyük topluluk** - Milyonlarca geliştirici ve tonlarca kaynak
5. **Ücretsiz araçlar** - İhtiyacınız olan her şey ücretsiz ve açık kaynak

## Basit Bir Örnek

Basit bir JavaScript örneğine bakalım:

```javascript
// Bu bir yorum - çalışmayacak
// Kullanıcıyı selamlayalım

let kullaniciAdi = "Ayşe";
console.log("Merhaba, " + kullaniciAdi + "!");

// Bu şunu çıktı verecek: Merhaba, Ayşe!
```

Henüz her şeyi anlamıyorsanız endişelenmeyin! Tüm bunları adım adım ele alacağız.

## JavaScript Nasıl Çalışır?

JavaScript web tarayıcınızda çalışır. Her modern tarayıcının kodunuzu çalıştıran bir **JavaScript motoru** vardır:

- **Chrome** V8 kullanır
- **Firefox** SpiderMonkey kullanır
- **Safari** JavaScriptCore kullanır

Bir web sitesini ziyaret ettiğinizde, tarayıcınız:
1. HTML, CSS ve JavaScript dosyalarını indirir
2. Sayfa yapısını oluşturmak için HTML'i ayrıştırır
3. Stil için CSS'i uygular
4. Etkileşim eklemek için JavaScript'i çalıştırır

## JavaScript Pratikte

Sosyal medyada bir "beğen" düğmesine tıkladığınızda neler olur:

```javascript
// Beğen düğmesine tıklandığında
function gonderiBeğen() {
  // Beğeni sayısını güncelle
  let begeniSayisi = 42;
  begeniSayisi = begeniSayisi + 1;

  // Düğme rengini değiştir
  dugmeRenginiDegistir("mavi");

  // Sunucuya gönder
  sunucuyaKaydet(begeniSayisi);
}
```

Oldukça havalı, değil mi? JavaScript tüm bunları milisaniyeler içinde halleder!

## JavaScript Ekosistemi

JavaScript'in devasa bir ekosistemi var:

- **Kütüphaneler** - Kullanabileceğiniz önceden yazılmış kod (jQuery gibi)
- **Frameworkler** - Karmaşık uygulamalar oluşturmak için araçlar (React, Vue, Angular)
- **Paket yöneticileri** - npm, yarn (bunları daha sonra öğreneceğiz)
- **Build araçları** - Webpack, Vite, Parcel

Bu terimler konusunda şimdi endişelenmeyin. Temelleri ile başlayacağız!

## Kısa Tarihçe

JavaScript, Netscape'te Brendan Eich tarafından 1995'te **sadece 10 günde** yaratıldı. Aceleyle yaratılmasına rağmen, web'in dili haline geldi!

Önemli kilometre taşları:
- **1995** - JavaScript doğuyor
- **2005** - AJAX web uygulamalarında devrim yaratıyor
- **2009** - Node.js JavaScript'i sunuculara getiriyor
- **2015** - ES6 dili modernleştiriyor
- **Bugün** - JavaScript her yerde!

## Önemli Noktalar

Öğrendiklerinizi özetleyelim:

- ✅ JavaScript web sitelerini etkileşimli ve dinamik yapar
- ✅ Web tarayıcınızda çalışır
- ✅ Web, mobil, masaüstü ve sunucu uygulamaları için kullanabilirsiniz
- ✅ Başlangıç dostu ve büyük bir topluluğa sahip
- ✅ JavaScript en çok talep gören programlama dillerinden biri

## Sırada Ne Var?

Artık JavaScript'in ne olduğunu anladığınıza göre, geliştirme ortamınızı kurmaya ve kodlamaya başlamaya hazırsınız!

Bir sonraki derste:
- Bir kod editörü kuracağız
- Tarayıcı geliştirici araçlarınızı ayarlayacağız
- İlk JavaScript kod satırınızı yazacağız

---

## 🎯 Hızlı Kontrol

Devam etmeden önce, bu soruları cevaplayabildiğinizden emin olun:

1. JavaScript ne yapar?
2. JavaScript ile oluşturabileceğiniz üç şeyi sayın
3. JavaScript kodu nerede çalışır?
4. JavaScript neden iyi bir ilk programlama dilidir?

Bu kavramları rahatça anlıyorsanız, bir sonraki ders için hazırsınız!

---

**Topluluk Notu:** Bu ders sizin gibi geliştiriciler tarafından oluşturuldu ve sürdürülüyor. Yazım hatası mı buldunuz? Örnek eklemek mi istiyorsunuz? GitHub'da katkıda bulunun!

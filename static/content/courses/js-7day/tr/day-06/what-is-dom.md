---
title: "DOM Nedir?"
description: "Belge Nesne Modelini (Document Object Model) anlamak"
type: "reading"
duration: "15 dk"
day: 6
order: 1
nextLesson: "selecting-elements"
---

# DOM Nedir?

Document Object Model (DOM), JavaScript ile HTML sayfası arasındaki canlı ara yüzdür. Tarayıcının her elementi düğüm (node) olarak temsil etmesini sağlar ve bu sayede içerik, yapı ve stil üzerinde anlık değişiklikler yapabilirsiniz.

## Adım 1: HTML’den DOM’a

- Tarayıcı HTML’i indirir, ayrıştırır ve düğüm ağacına dönüştürür.
- Her etiket bir element düğümüne, etiket içindeki metinler ise metin düğümlerine dönüşür.
- JavaScript ham HTML yerine bu ağaç yapısıyla çalışır.

Basit bir dosyayı düşünün:

```html
<body>
  <h1>Merhaba</h1>
  <p>6. güne hoş geldin!</p>
</body>
```

DOM bunu `body`nin kök olduğu, altında `h1` ve `p` çocukları bulunan, her birinin içinde metin düğümleri barındırdığı hiyerarşik bir yapı haline getirir.

## Adım 2: DOM Düğümleri

- **Document düğümü**: Giriş noktası (`document` nesnesi).
- **Element düğümleri**: `<div>`, `<button>` gibi HTML etiketleri.
- **Metin düğümleri**: Elementlerin içindeki gerçek metin.
- **Özellik (attribute) düğümleri**: `class`, `id` gibi ek bilgiler.

Hangi düğüm türüyle çalıştığınızı bilmek, hangi özelliklere ulaşabileceğinizi belirler.

## Adım 3: DOM’a Erişim

Seçiciler ve özellikler kullanarak DOM ağacında dolaşabilirsiniz:

```javascript
const baslik = document.querySelector("h1");
console.log(baslik.textContent); // "Merhaba"
```

- Tarayıcıda `document` küresel olarak kullanılabilir.
- Farklı metodlar (`querySelector`, `getElementById` vb.) farklı seçim yolları sunar; bunları bir sonraki derste inceleyeceğiz.

## Adım 4: Canlı (Live) Yapı

- DOM, HTML veya CSS değiştirildiğinde anında güncellenir.
- JavaScript ile yaptığınız değişiklikler sayfaya hemen yansır.
- DevTools gibi araçlar bu canlı ağacı gösterir; orada yaptığınız düzenlemeler sayfayı anında değiştirir.

## Adım 5: DOM ve JavaScript İlişkisi

- JavaScript, `textContent`, `className`, `style` gibi özellikleri okuyarak mevcut durumu anlar.
- Bu özelliklere yazar veya `append`, `remove` gibi metodları çağırarak sayfayı değiştirir.
- Olay dinleyicileri (event listeners), kullanıcı etkileşimini kodunuza bağlar.

## Adım 6: Yaygın Tuzaklar

- DOM’un yalnızca tarayıcı ortamında var olduğunu unutmak (Node.js’de varsayılan olarak yoktur).
- Kodun DOM hazır olmadan çalışması—`DOMContentLoaded` bekleyin veya script etiketini `<body>` sonuna koyun.
- DOM manipülasyonunu sunucu tarafı render ile karıştırmak; hidrasyon mantığını anlamak önemlidir.

## Adım 7: Pratik Önerileri

1. Herhangi bir sitede DevTools’u açın, Elements panelinde DOM ağacını inceleyin.
2. Konsolda `document.body` yazıp özelliklerini kurcalayın.
3. Küçük bir HTML sayfası oluşturup `document.title`, `document.URL`, `document.links.length` değerlerini loglayın.
4. `document.body.append("Merhaba DOM");` kodunu çalıştırıp canlı güncellemeyi görün.

## Önemli Noktalar

- ✅ DOM, HTML’in tarayıcıdaki nesne temelli temsilidir.
- ✅ JavaScript, DOM ağacını kullanarak sayfa içeriğini okur ve değiştirir.
- ✅ Düğüm türleri (document, element, metin, attribute) hangi özelliklerin mevcut olduğunu belirler.
- ✅ DOM’u anlamak, dinamik ve etkileşimli arayüzler geliştirmek için temel adımdır.

---

## 🎯 Hızlı Kontrol

1. Tarayıcı HTML’i DOM’a nasıl dönüştürür?
2. Element düğümü ile metin düğümü arasındaki fark nedir?
3. JavaScript kodu DOM hazır olmadan çalışırsa ne olur?
4. DevTools, DOM yapısını anlamanıza nasıl yardımcı olur?

Sıradaki ders: Spesifik elementleri seçip üzerinde işlem yapmayı öğreniyoruz. 🎯

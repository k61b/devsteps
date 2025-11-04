---
title: "İlk JavaScript Programınız"
description: "İlk JavaScript kodunuzu yazma ve çalıştırma"
type: "reading"
duration: "25 dakika"
day: 1
order: 3
nextLesson: "variables-and-data-types"
---

# İlk JavaScript Programınız

Gerçek kod yazma zamanı! Bu derste ilk JavaScript programınızı oluşturacak, hem tarayıcıda hem de Node.js üzerinde çalıştıracak ve basit hataları nasıl yakalayacağınızı öğreneceksiniz.

## Adım 1: Proje Klasörü Oluşturun

Her mini projeyi kendi klasöründe saklamak düzeninizi korur ve dosyaları takip etmeyi kolaylaştırır. Terminalden:

```bash
cd devsteps-js
mkdir hello-world
cd hello-world
```

Ardından klasörü VS Code ile açın (`code .` komutuyla ya da dosya gezgininden). Dosyayı değil klasörü açmak, VS Code'un proje yapınızı anlamasını sağlar; böylece son açılan dosyalarınızı hatırlar ve komutları bu klasöre göre çalıştırır.

## Adım 2: `app.js` Dosyasını Oluşturun

Aynı klasörde `app.js` adında yeni bir dosya açın. `.js` uzantısı, editörlere bunun bir JavaScript dosyası olduğunu söyler. Aşağıdaki kodu yazın:

```javascript
// app.js
console.log("JavaScript'e hoş geldin!");
```

`console.log`, kodunuzu çalıştıran konsola mesaj gönderir. Geliştiriciler hangi değerlerin oluştuğunu görmek, geçici kontroller yapmak veya kodun belirli bir noktaya gelip gelmediğini anlamak için bu fonksiyonu çok sık kullanır. Bir sonraki adımda nasıl görüneceğini inceleyeceğiz.

## Adım 3: Kodu Tarayıcıda Çalıştırın

Tarayıcılar, JavaScript'i bir HTML sayfasına dahil ettiğinizde çalıştırır. HTML yapıyı sağlarken `<script>` etiketi tarayıcıya JavaScript dosyasını yükleyip çalıştırmasını söyler.

- Aynı klasörde `index.html` dosyası oluşturun.
- Şu başlangıç HTML'ini ekleyin:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>Merhaba JavaScript</title>
  </head>
  <body>
    <h1>Tarayıcıdan merhaba!</h1>
    <script src="./app.js"></script>
  </body>
</html>
```

- `index.html` dosyasını tarayıcıda açın (dosyaya çift tıklayabilir veya VS Code Live Server eklentisini kullanabilirsiniz).
- Geliştirici Araçlarını açın (`Ctrl+Shift+I` / `Cmd+Option+I`) ve **Console** sekmesine geçin. Geliştirici konsolu, tarayıcı içinde gömülü bir terminal gibidir—tüm `console.log` çıktıları burada görünür ve etkileşimli olarak JavaScript çalıştırabilirsiniz.

Konsolda `JavaScript'e hoş geldin!` mesajını görmelisiniz. Sayfayı her yenilediğinizde script tekrar çalışır. Kodunuzun çalışıp çalışmadığını merak ederseniz ilk önce bu konsola bakın.

## Adım 4: Kodu Node.js ile Çalıştırın

Aynı `app.js` dosyası terminal üzerinden Node.js ile doğrudan çalışabilir. Node.js, JavaScript'e tarayıcı penceresi yerine bilgisayarınıza (dosyalar, ağ vb.) erişme imkânı verir; bu yüzden araçlar ve sunucu tarafı kod için idealdir.

```bash
node app.js
```

Aynı mesajın çıktığını göreceksiniz. Bu, aynı JavaScript dilidir; yalnızca farklı bir ortamda çalışmaktadır. Node.js'de DOM veya tarayıcı API'leri yoktur, buna karşılık işletim sisteminizle çalışmanızı sağlayan modüller vardır.

> Mesajı `app.js` içinde değiştirin, dosyayı kaydedin ve `node app.js` komutunu tekrar çalıştırın. Anında geri bildirim almak, düzenle → çalıştır → doğrula döngüsünü kısa tutmanıza yardımcı olur.

## Adım 5: Değişken ve Basit Mantık Ekleyin

Dosyanızı veri saklayacak ve karar verecek şekilde güncelleyin:

```javascript
const ogrenciAdi = "Jordan";
const dersiTamamladi = true;

if (dersiTamamladi) {
  console.log(`Harika iş, ${ogrenciAdi}! Bir sonraki adıma hazırsın.`);
} else {
  console.log(`Merhaba ${ogrenciAdi}, ilerlemeden önce dersi tamamla.`);
}
```

Burada backtick kullanarak (`` ` ``) şablon dizileri yazdık ve `${ }` içine değişken yerleştirdik.

Yeni eklenen parçaları biraz açalım:

- `const`, referansı tekrar atanamayacak bir değişken oluşturur. Değeriniz değişmeyecekse tercih edin.
- `"Jordan"` bir string (metin) değeridir.
- `true`, boolean (mantıksal) bir değerdir. JavaScript'te yalnızca `true` ve `false` vardır.
- `if` ifadesi bir koşulu kontrol eder. Koşul doğruysa ilk blok, değilse `else` bloğu çalışır. Her seferinde yalnızca bir dal yürütülür.
- Şablon dizileri (backtick ile yazılan metin) sayesinde `${ogrenciAdi}` gibi değişkenleri `+` operatörüne ihtiyaç duymadan metne ekleyebiliriz.

Hem tarayıcıda hem Node.js'de dosyayı yeniden çalıştırın. `dersiTamamladi` değerini `false` yapıp farklı çıktıyı inceleyin. Ayrıca `const` yerine `let` kullanmayı deneyin; her ikisi de çalışır ancak değeri değişmeyecek değişkenlerde `const` tercih edilir.

## Adım 6: Yaygın Hataları Ayıklama

Hata yapmak normaldir! Hata mesajını okumak, toparlanmanın en hızlı yoludur.

### Stack trace nasıl okunur?
JavaScript kritik bir hatayla karşılaştığında yürütmeyi durdurur ve bir stack trace (yığın izi) yazar. Son satır genellikle dosya adını ve satır numarasını gösterir. Üzerine tıklayarak VS Code veya DevTools içinde ilgili satıra gidebilirsiniz.

### Başlangıçta sık yapılan hatalar
- **Tırnak eksikliği**: `console.log(Hosgeldin);` → Sözdizimi hatası çünkü metinler tırnak ister (`"Hosgeldin"` veya `'Hosgeldin'`).
- **Parantez veya süslü parantez eşleşmemesi**: Her `(` karakterinin bir `)` eşi, her `{` karakterinin bir `}` eşi olmalı. Editörünüz eşleşen parantezleri vurgular; bundan faydalanın.
- **Büyük/küçük harf farkı**: `Console.log` ile `console.log` aynı değildir. JavaScript harf duyarlıdır.
- **Kaydedilmeyen dosyalar**: Çıktı değişmiyorsa dosyayı kaydedip kaydetmediğinizi ve doğru dosyayı çalıştırdığınızı kontrol edin (yanlış dosya adı Node'da hata verir).
- **Dosya adında yazım hatası**: Çoğu sistemde büyük/küçük harf duyarlıdır. `App.js`, `app.js` ile aynı dosya değildir.

Hata mesajlarını satır satır okumayı alışkanlık haline getirin. Çok geçmeden kalıpları tanımaya başlayacaksınız; hiçbir geliştirici yazım hatalarından muaf değildir, önemli olan onları hızlıca düzeltmektir.

## Adım 7: Konsolu Keşfedin

Geliştirici Araçları'ndaki konsolda doğrudan JavaScript çalıştırabilirsiniz. Burası kodunuza eklemeden önce fikirlerinizi denemek için güvenli bir oyun alanıdır.

```javascript
2 + 2
Math.random()
console.log("DevTools'tan test!")
```

Ayrıca sayfanın o anki değişkenlerine ulaşabilirsiniz (örneğin script çalıştıktan sonra `ogrenciAdi` yazabilirsiniz). Bu, kodu değiştirmeden durumu incelemek için son derece faydalıdır.

## Önemli Noktalar

- ✅ JavaScript tarayıcıda ve Node.js'de benzer şekilde çalışır, sadece ortam farklıdır.
- ✅ `console.log`, değerleri takip etmenin ve program akışını anlamanın en hızlı yoludur.
- ✅ Değişkenler ve `if/else` yapıları küçük programlarda bile veriye göre karar vermenizi sağlar.
- ✅ Hatalar normaldir; stack trace'i okuyun, satırı bulun ve sorunları tek tek giderin.

---

## 🎯 Hızlı Kontrol

1. Harici bir JavaScript dosyasını sayfaya dahil etmek için hangi HTML etiketi kullanılır ve basit örneklerde neden gövdenin altına yerleştiriyoruz?
2. `app.js` dosyasını Node.js ile nasıl çalıştırırsınız ve tarayıcıya kıyasla hangi ortam farklarını beklersiniz?
3. `dersiTamamladi` `false` olursa hangi mesaj görüntülenir ve mantığı iki durumdan fazlasını destekleyecek şekilde nasıl geliştirebilirsiniz?
4. Yaygın hatalardan birini seçin, stack trace'i yorumlayın ve nasıl düzelteceğinizi anlatın.

Soruları rahatça cevaplayabiliyorsanız sıradaki dersiniz değişkenler ve veri tipleri!

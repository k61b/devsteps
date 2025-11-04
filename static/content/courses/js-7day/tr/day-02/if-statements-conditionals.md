---
title: "If İfadeleri ve Koşullar"
description: "If/else ifadeleriyle kodunuzda karar verme"
type: "reading"
duration: "30 dk"
day: 2
order: 3
nextLesson: "switch-statements"
---

# If İfadeleri ve Koşullar

Değerleri karşılaştırmayı ve mantıksal operatörleri birleştirmeyi öğrendiniz. Şimdi bu karşılaştırmaları program akışını kontrol etmek için kullanma zamanı. Koşullu ifadeler, uygulamaların her kullanıcıya farklı tepki vermesini sağlar.

Çalışmalarınıza `day2-operators.js` içinde devam edebilir veya temiz bir başlangıç için `day2-conditionals.js` dosyası oluşturabilirsiniz.

## Adım 1: Temel `if` İfadesi

```javascript
const seriGun = 5;

if (seriGun >= 5) {
  console.log("Hafta Sonu Savaşçısı rozetini kazandın! 🏅");
}
```

- `if`, parantez içindeki koşulu değerlendirir.
- Koşul truthy ise `{ }` içindeki kod çalışır.
- Falsy ise blok atlanır.

## Adım 2: `if` + `else`

```javascript
const ilerlemePaylasildi = false;

if (ilerlemePaylasildi) {
  console.log("İlerlemeni paylaştığın için teşekkürler! 🎉");
} else {
  console.log("Topluluğu motive etmek için ilerlemeni paylaş! ✨");
}
```

`else` bloğu, `if` koşulunu sağlamayan durumların tamamını yakalar.

## Adım 3: `else if` ile Çoklu Koşullar

```javascript
const xp = 680;

if (xp >= 1000) {
  console.log("Seviye atladın! 🆙");
} else if (xp >= 700) {
  console.log("Çok az kaldı, devam et!");
} else {
  console.log("Harika başlangıç—her puan değerli!");
}
```

- Koşullar üstten alta doğru değerlendirilir.
- İlk eşleşen koşul çalışır, diğerleri atlanır.
- `else` varsayılan durumları yakalar.

## Adım 4: Koşulları Mantıkla Birleştirmek

```javascript
const bugunDers = 2;
const bugunDakika = 45;

if (bugunDers >= 3 && bugunDakika >= 60) {
  console.log("Tutarlılık şampiyonu! 🏆");
} else if (bugunDers >= 1 || bugunDakika >= 30) {
  console.log("Harika hız—aynı şekilde devam!");
} else {
  console.log("Küçük adımlar da önemli. Hızlı bir ders dene!");
}
```

Aritmetik ve mantıksal operatörleri birleştirerek net eşikler tanımlayın. İlerleme takibi ve rozet sistemleri bu şekilde çalışır.

## Adım 5: Koşullarda Truthy/Falsy

Her ifade `if` koşulunda kullanılabilir. JavaScript sonucu boolean'a dönüştürür:

```javascript
const geribildirim = "";

if (geribildirim) {
  console.log(`Geribildirimin için teşekkürler: ${geribildirim}`);
} else {
  console.log("Henüz geribildirim yok—nasıl gittiğini paylaş!");
}
```

Boş string, `0`, `null` ve `undefined` falsy olduğu için `else` bloğu çalışır. Formlardan veya API'lardan gelen girişleri kontrol ederken bu davranış oldukça faydalıdır.

## Adım 6: Üçlü Operatör (Ternary)

Kısa, satır içi koşullar için ternary ifadeyi kullanın (`koşul ? doğruysa : yanlışsa`):

```javascript
const gunTamamlandi = true;
const mesaj = gunTamamlandi
  ? "Harika! 2. günü tamamladın 🙌"
  : "Yeni dersler için 2. günü bitir!";

console.log(mesaj);
```

- Ternary, değer döndürür ve string şablonlarında veya değişken atamalarında harikadır.
- Karmaşık hale gelirse tekrar klasik `if/else` yapısına dönün.

## Adım 7: Koşulları İç İçe Kullanmak (Dikkatle)

`if` ifadelerini iç içe kullanabilirsiniz ancak çok derine gitmemeye çalışın.

```javascript
const plan = "premium";
const kullanılanDepo = 8; // GB

if (plan === "premium") {
  if (kullanılanDepo < 10) {
    console.log("Bol bol depolama alanın var!");
  } else {
    console.log("Depolama sınırına yaklaşıyorsun.");
  }
} else {
  console.log("Daha fazla depolama için premium'a geç.");
}
```

İç içe yapı karmaşık hale geldiğinde:
- Koşulları mantıksal operatörlerle birleştirmeyi düşünün.
- Mantığı açıklayıcı fonksiyonlara çıkarın.
- `switch` ifadelerini değerlendirin (bir sonraki ders).

## Adım 8: Guard Clause ile Erken Çıkış

Guard clause, şart sağlanmazsa fonksiyondan erken çıkmayı sağlar:

```javascript
function rozetVer(seri) {
  if (seri < 5) {
    console.log("Devam et! Rozet 5 günde açılır.");
    return;
  }

  console.log("Rozet açıldı! 🌟");
}

rozetVer(3); // erken dönüş
rozetVer(6); // başarı
```

Bu desen kodunuzu düz ve okunabilir tutar.

## Adım 9: Yaygın Hatalardan Kaçının

- **Süslü parantez eksikliği:** Tek satırlık bloklar için bile `{ }` kullanın; ileride satır eklerken sürpriz yaşamazsınız.
- **Atama yerine karşılaştırma:** `if (skor = 0)` `skor` değişkenini 0 yapar ve falsy döner. `===` kullanın.
- **Çakışan koşullar:** `if/else if` eşiklerinin birbirini istemeden kapsamadığından emin olun.

## Pratik Önerileri

1. Mini bir danışman oluşturun:
   ```javascript
   const calismaSaat = 4;
   const guvenSeviyesi = 7; // 10 üzerinden
   ```
   Kombinasyona göre farklı motivasyon mesajları yazdırın (yüksek saat + yüksek güven → "Sınava hazırsın!").

2. `const uyelik = "gold"; const referans = 3;` değerleriyle şu mesajları oluşturun:
   - Üyelik `"gold"` ve referans ≥ 5 ise Platinum.
   - Referans ≥ 3 ise bonus hediyeler.
   - Aksi halde programa devam ettiği için teşekkür edin.

3. Ternary kullanarak `const durum = çevrimiçiMi ? "Çevrimiçi" : "Çevrimdışı";` şeklinde emoji ekleyin.

4. `recommendBreak(dakika)` fonksiyonu yazın. Dakika ≥ 50 ise `"Kısa bir mola ver"`, değilse `"Devam!"` önerisi verin.

## Önemli Noktalar

- ✅ `if/else` yapıları koşullara göre farklı kod parçalarını çalıştırmanızı sağlar.
- ✅ Aritmetik ve mantıksal operatörleri koşullarla birleştirerek net kurallar oluşturun.
- ✅ Ternary kısa ama basit durumlar için idealdir.
- ✅ Guard clause ve net eşikler kodunuzu okunur tutar.

---

## 🎯 Hızlı Kontrol

1. `if` ifadesinde süslü parantezleri unutup sonradan ikinci satırı eklerseniz ne olur?
2. Belirli tipleri bekleyen koşullarda neden `==` yerine `===` kullanılmalı?
3. Hangi durumlarda ternary, `if/else` yerine tercih edilir?
4. `tamamlananDers >= 5` **ve** `feedback` truthy ise çalışan bir koşul yazın.

Hazır mısınız? Sırada alternatif dallanma yapıları olan `switch` ifadeleri var! 🔀

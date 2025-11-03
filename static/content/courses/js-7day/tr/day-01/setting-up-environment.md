---
title: "Çalışma Ortamınızı Kurma"
description: "Geliştirme ortamınızı kurmak ve gerekli araçları yüklemek"
type: "reading"
duration: "20 dakika"
day: 1
order: 2
nextLesson: "first-javascript-program"
---

# Çalışma Ortamınızı Kurma

JavaScript yazmaya başlamadan önce güvenilir bir geliştirme ortamına ihtiyacınız var. Bu derste kurs boyunca kullanacağımız temel araçları kuracak ve her şeyin düzgün çalıştığından emin olacağız.

## Adım 1: Kod Editörü Seçin

Ücretsiz, hafif ve başlangıç seviyesindeki geliştiriciler için fazlasıyla yeterli olduğu için **Visual Studio Code (VS Code)** öneriyoruz.

1. İşletim sisteminize uygun sürümü [https://code.visualstudio.com](https://code.visualstudio.com) adresinden indirin.
2. Varsayılan seçenekleri kullanarak kurulum sihirbazını tamamlayın.
3. Uygulamayı açın ve isterseniz ayarlarınızı senkronlamak için oturum açın (opsiyonel).

### Önerilen VS Code Eklentileri
- **ESLint** – JavaScript kodunuzdaki yaygın hataları vurgular.
- **Prettier** – Kodunuzu otomatik olarak formatlar.
- **Code Spell Checker** – Yorum ve metinlerdeki yazım hatalarını yakalar.

> İpucu: Eklentileri sol kenar çubuğundaki kare ikon ile ya da `Ctrl+Shift+X` (`Cmd+Shift+X` macOS) kısayoluyla yükleyebilirsiniz.

## Adım 2: Node.js'i NVM ile Kurun

Node.js, JavaScript'i tarayıcı dışında çalıştırmanızı sağlar ve `npm` paket yöneticisini beraberinde getirir. Node'u doğrudan kurmak yerine **NVM (Node Version Manager)** kullanarak farklı projeler için sürümler arasında kolayca geçiş yapabileceksiniz.

### macOS ve Linux
1. Resmî NVM kurulum betiğini çalıştırın:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```
2. `nvm` komutunun tanınması için kabuğunuzu yeniden yükleyin:
   ```bash
   source ~/.nvm/nvm.sh
   ```
3. En güncel LTS (Long Term Support) sürümünü kurup varsayılan yapın:
   ```bash
   nvm install --lts
   nvm use --lts
   nvm alias default --lts
   ```

### Windows
1. [nvm-windows sürümleri](https://github.com/coreybutler/nvm-windows/releases) sayfasından en son `nvm-setup.exe` dosyasını indirin.
2. Kurulum sihirbazını varsayılan ayarlarla tamamlayın (hem NVM hem de Node dizinini oluşturur).
3. Yeni bir PowerShell veya Windows Terminal penceresi açın ve LTS sürümünü kurup etkinleştirin:
   ```powershell
   nvm ls available   # opsiyonel: kullanılabilir sürümleri listeler
   nvm install 20.11.1   # listede gördüğünüz en güncel LTS sürümüyle değiştirin
   nvm use 20.11.1
   nvm alias default 20.11.1
   ```

Kurulumun ardından her şeyin çalıştığını doğrulayın:

```bash
nvm --version
node --version
npm --version
```

`0.39.7`, `v20.11.1` ve `10.2.4` gibi sürüm numaraları görüyorsanız hazırsınız. Görmüyorsanız yeni bir terminal açıp `nvm use default` komutunu çalıştırın.

## Adım 3: Terminalinizi Tanıyın

Terminal (veya komut satırı), Node.js betiklerini ve geliştirici araçlarını çalıştıracağınız yerdir.

- **Windows**: **PowerShell** veya **Windows Terminal** kullanın.
- **macOS**: Yerleşik **Terminal** uygulamasını kullanın.
- **Linux**: Varsayılan terminal emülatörünüzü kullanın.

JavaScript projelerinizi düzenli tutmak için bir klasör oluşturun:

```bash
mkdir devsteps-js
cd devsteps-js
```

> İpucu: Bu klasörü dosya gezgininizde favorilere ekleyin ki VS Code'dan hızlıca açabilesiniz.

## Adım 4: VS Code'u JavaScript İçin Ayarlayın

VS Code içinde:

1. Projeler klasörünüzü açın (`File` > `Open Folder`).
2. **Auto Save** özelliğini etkinleştirin (`File` > `Auto Save`) ki çalışmalarınız kaybolmasın.
3. **Format on Save** seçeneğini açın (`Settings` > "format on save" aratıp işaretleyin).
4. Henüz yüklemediyseniz yukarıda önerdiğimiz eklentileri kurun.

Opsiyonel ama faydalı:
- Temanızı değiştirmek için `Ctrl+K Ctrl+T` (`Cmd+K Cmd+T`) kısayolunu kullanın.
- Rahat okunabilirlik için yazı tipi boyutunu ve satır yüksekliğini ayarlayın.

## Adım 5: Test Dosyası Oluşturun

Her şeyin uçtan uca çalıştığından emin olalım:

1. VS Code'da `hello.js` adlı yeni bir dosya oluşturun.
2. Aşağıdaki kodu ekleyin:

```javascript
console.log("Merhaba DevSteps!");
```

3. Dosyayı kaydedin.
4. VS Code içindeki terminalden çalıştırın:

```bash
node hello.js
```

Terminalde `Merhaba DevSteps!` çıktısını görmelisiniz.

## Adım 6: Tarayıcı Geliştirici Araçları

Modern tarayıcılar güçlü geliştirici araçlarıyla gelir. Biz **Google Chrome** kullanacağız, ancak Chromium tabanlı diğer tarayıcılar da benzer şekilde çalışır.

1. Chrome'u açın ve geliştirici araçlarını açmak için `Ctrl+Shift+I` (`Cmd+Option+I` macOS) tuşlarına basın.
2. **Console** sekmesine tıklayın.
3. `console.log("Kodlamaya hazırım!");` yazıp Enter'a basın. Mesajın konsola yazıldığını görmelisiniz.

## Sorun Giderme Kontrol Listesi

- `node` veya `npm` komutunu çalıştırırken **komut bulunamadı** hatası mı alıyorsunuz? Yeni bir terminal açıp `nvm use default` (veya `nvm use --lts`) komutunu çalıştırmayı deneyin.
- macOS/Linux'ta **izin hataları** mı görüyorsunuz? Yazılım kurarken komutunuzun başına yalnızca gerektiğinde `sudo` ekleyin; kendi kodunuzu çalıştırırken kullanmayın.
- Eklentiler çalışmıyor mu? VS Code'u `Ctrl+Shift+P` (`Cmd+Shift+P`) ile komut paletini açıp `Developer: Reload Window` yazarak yeniden başlatın.

## Önemli Noktalar

- ✅ VS Code bu kurs boyunca kullanacağımız ana kod editörü.
- ✅ NVM ile Node.js sürümlerini kolayca yönetebilirsiniz ve npm Node ile birlikte gelir.
- ✅ Terminal, betik ve araçları çalıştırmanız için vazgeçilmezdir.
- ✅ Tarayıcı geliştirici araçları JavaScript hatalarını gerçek zamanlı yakalamanıza yardımcı olur.

---

## 🎯 Hızlı Kontrol

1. Node.js'in LTS sürümünü kurup etkinleştirmek için hangi `nvm` komutlarını kullanmalısınız?
2. `script.js` adlı bir JavaScript dosyasını terminalden nasıl çalıştırırsınız?
3. JavaScript kodunuzu düzenli ve okunabilir tutmak için hangi VS Code eklentileri faydalıdır?
4. Chrome'da tarayıcı konsolunu nasıl açarsınız?

Bu soruları gönül rahatlığıyla cevaplayabiliyorsanız bir sonraki derse hazırsınız: İlk JavaScript programınızı yazmak!

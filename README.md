# 🔐 Free Security Tools Test Projesi

Bu proje, [https://s4e.io/free-security-tools](https://s4e.io/free-security-tools) adresindeki sayfa için Playwright kullanılarak yazılmış fonksiyonel ve edge case testleri vardır.

## 📦 Kullanılan Teknolojiler

- [Node.js](https://nodejs.org/) (v18 ve üzeri)
- [Playwright](https://playwright.dev/)
- TypeScript

## 🛠️ Kurulum

npm install

npx playwright install


Tekil Test Çalıştırma
npx playwright test tests/freeTools.spec.ts --grep "TC001"


Tüm Testleri Çalıştırma
npx playwright tes

```bash
git clone https://github.com/kullanici-adi/free-security-tools-test.git
cd free-security-tools-test

#Test Kodu	Açıklama
#TC001	Sayfa başarıyla yükleniyor mu?
#TC002	Araç kartları görünüyor mu?
#TC003	Arama kutusu filtreleme yapabiliyor mu?
#TC004	Alakasız veri girildiğinde boş sonuç dönüyor mu?
#TC005	Kategori filtresi çalışıyor mu?
#TC006	GitHub linkleri doğru ve erişilebilir mi?
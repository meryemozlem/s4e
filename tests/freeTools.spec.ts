// Manuel Test 


// freeTools.spec.ts
// Test edilen sayfa: https://s4e.io/free-security-tools
// Testler Playwright ile yazılmıştır. Hem fonksiyonel hem edge case senaryoları içerir.

import { test, expect } from '@playwright/test'

// TC001 - Sayfanın başarıyla yüklenip yüklenmediği kontrol edilir.
test('TC001 - Sayfa başlık kontrolü', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  await expect(page).toHaveTitle(/Free Security Tools/i);
});

// TC002 - Tüm kartların yüklenip yüklenmediği kontrol edilir.
test('TC002 - Araç kartları görünüyor mu', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  const cards = await page.locator('.flex.flex-col.gap-4 > div'); // Araç kartlarının bulunduğu kapsayıcı
  await expect(cards).toHaveCountGreaterThan(0); // En az 1 araç olmalı
});

// TC003 - Arama kutusu belirli bir anahtar kelimeyle doğru filtreleme yapıyor mu?
test('TC003 - Arama kutusu filtreleme', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  const searchInput = page.locator('input[placeholder="Search"]');
  await searchInput.fill('dns'); // "dns" içeren araçları arıyoruz
  const filteredCards = page.locator('.flex.flex-col.gap-4 > div');
  await expect(filteredCards).toHaveCountGreaterThan(0); // Sonuç gelmeli
});

// TC004 - Edge case: Arama kutusuna alakasız veri girildiğinde sonuç dönmemeli
test('TC004 - Alakasız arama (edge case)', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  const searchInput = page.locator('input[placeholder="Search"]');
  await searchInput.fill('qwerty123'); // Sonuç gelmeyecek bir arama
  const filteredCards = await page.locator('.flex.flex-col.gap-4 > div');
  await expect(filteredCards).toHaveCount(0); // Hiç sonuç olmamalı
});

// TC005 - Kategori filtresi uygulandığında sadece o kategoriye ait araçlar listelenmeli
test('TC005 - Kategori filtresi', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  await page.getByText('Browser Extensions').click(); // Filtreyi tıklıyoruz
  const filteredCards = page.locator('.flex.flex-col.gap-4 > div');
  await expect(filteredCards).toHaveCountGreaterThan(0); // Sonuç gelmeli
});

// TC006 - Kart üzerindeki "GitHub" linki tıklanabilir ve geçerli bir href içeriyor mu?
test('TC006 - GitHub link kontrolü', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  const firstGithubLink = page.locator('a', { hasText: 'GitHub' }).first();
  await expect(firstGithubLink).toHaveAttribute('href', /github\.com/); // Href github içeriyor mu?
});

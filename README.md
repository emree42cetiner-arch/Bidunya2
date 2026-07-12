# Odul Katalog Site

Next.js, TypeScript ve Tailwind CSS ile hazirlanmis SEO odakli urun katalog ve teklif alma sitesi.

## Calistirma

```bash
npm install
npm run dev
```

## Yapilar

- Urunler `data/products.ts` dosyasindan yonetilir.
- Kategoriler ve menu agaci `data/categories.ts` icindedir.
- Site iletisim bilgileri ve CTA linkleri `data/site.ts` icinden guncellenir.
- Kategori sayfalari SEO uyumlu slug yapisi ile otomatik uretilir.
- Arama sayfasi `/arama?q=...` formatinda calisir.

## Cloudflare'e Yayinlama

Proje `@opennextjs/cloudflare` adaptoru ile Cloudflare Workers uzerinde calisacak
sekilde yapilandirilmistir (statik sayfalar + `/arama` gibi dinamik sayfalar dahil).

```bash
npm install
npx wrangler login        # ilk seferde Cloudflare hesabina baglanmak icin
npm run deploy             # build alir ve Cloudflare'e yayinlar
```

Sadece yerelde denemek icin:

```bash
npm run preview
```

### Notlar

- `next/image` optimizasyonu varsayilan olarak kapalidir (`images.unoptimized: true`),
  cunku Cloudflare Workers Next.js'in kendi gorsel optimizasyon sunucusunu
  calistirmaz. Otomatik boyutlandirma/webp donusumu istenirse, zone'da
  Cloudflare Image Resizing/Images acilip `next.config.ts` icinde
  `image-loader.ts` dosyasi devreye alinabilir (dosya icindeki yorumlara bakin).
- `wrangler.toml` icindeki `name` degeri Cloudflare'daki Worker adini belirler,
  istenirse degistirilebilir.


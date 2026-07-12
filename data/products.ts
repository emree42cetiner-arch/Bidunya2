export type Product = {
  id: string;
  code: string;
  title: string;
  category: string;
  parentCategory: string;
  image: string;
  imageAlt: string;
  specs: {
    height: string | null;
    color: string | null;
    material: string | null;
    size: string | null;
  };
  shortDescription: string;
  whatsappText: string;
  featured?: boolean;
  bestSeller?: boolean;
};

export const products: Product[] = [
  {
    id: "kupa-020",
    code: "KUPA-020",
    title: "Kupa Odul Modeli 020",
    category: "kupa-odul",
    parentCategory: "oduller",
    image: "/images/catalog/kupa-set.jpg",
    imageAlt: "Farkli boylarda altin renkli KUPA-020 kupa odul modelleri",
    specs: {
      height: "52-47-43-39-34 cm",
      color: "Altin",
      material: "Metal",
      size: null,
    },
    shortDescription:
      "Spor turnuvalari, okul etkinlikleri ve kurumsal organizasyonlar icin kupa odulu.",
    whatsappText:
      "Merhaba, KUPA-020 urun kodlu kupa hakkinda bilgi almak istiyorum.",
    featured: true,
    bestSeller: true,
  },
  {
    id: "kupa-021",
    code: "KUPA-021",
    title: "Kupa Odul Modeli 021",
    category: "kupa-odul",
    parentCategory: "oduller",
    image: "/images/catalog/spor-kupa.jpg",
    imageAlt: "Gumus detayli KUPA-021 kupa odul modeli",
    specs: {
      height: "48-44-40-36 cm",
      color: "Gumus",
      material: "Metal ve plastik",
      size: null,
    },
    shortDescription:
      "Figurlu kapak ve metal govde secenekleriyle modern kupa odul modeli.",
    whatsappText:
      "Merhaba, KUPA-021 urun kodlu kupa hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "ekonomik-kupa-001",
    code: "KUPA-030",
    title: "Ekonomik Kupa Odul Modeli 030",
    category: "ekonomik-kupa-odul",
    parentCategory: "oduller",
    image: "/images/catalog/kupa-set.jpg",
    imageAlt: "Ekonomik kupa odul modeli",
    specs: {
      height: "31-28-25 cm",
      color: "Altin",
      material: "Plastik",
      size: null,
    },
    shortDescription:
      "Toplu okul ve turnuva siparisleri icin uygun maliyetli kupa secenegi.",
    whatsappText:
      "Merhaba, KUPA-030 urun kodlu ekonomik kupa hakkinda bilgi almak istiyorum.",
  },
  {
    id: "madalya-1",
    code: "M-1",
    title: "Madalya Modeli 1",
    category: "madalya",
    parentCategory: "madalyalar",
    image: "/images/catalog/madalya-set.jpg",
    imageAlt: "M-1 kurdeleli altin, gumus ve bronz madalya modelleri",
    specs: {
      height: null,
      color: "Altin",
      material: "Metal",
      size: "50 mm",
    },
    shortDescription:
      "Kurdele uygulamali, genel etkinlik ve turnuvalara uygun madalya modeli.",
    whatsappText:
      "Merhaba, M-1 urun kodlu madalya hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "madalya-2",
    code: "M-2",
    title: "Madalya Modeli 2",
    category: "madalya",
    parentCategory: "madalyalar",
    image: "/images/catalog/ozel-madalya.jpg",
    imageAlt: "M-2 gumus renkli madalya modeli",
    specs: {
      height: null,
      color: "Gumus",
      material: "Metal",
      size: "60 mm",
    },
    shortDescription:
      "Gumus renk kaplama ve temiz kenar formuyla kurumsal etkinliklere uygun.",
    whatsappText:
      "Merhaba, M-2 urun kodlu madalya hakkinda bilgi almak istiyorum.",
  },
  {
    id: "ozel-madalya-1",
    code: "OM-1",
    title: "Kisiye Ozel Madalya Modeli 1",
    category: "kisiye-ozel-madalya",
    parentCategory: "madalyalar",
    image: "/images/catalog/ozel-madalya.jpg",
    imageAlt: "OM-1 kisiye ozel madalya modeli",
    specs: {
      height: null,
      color: "Altin",
      material: "Metal",
      size: "Ozel olcu",
    },
    shortDescription:
      "Logo, isim ve etkinlik tarihine gore tasarlanabilen ozel madalya.",
    whatsappText:
      "Merhaba, OM-1 urun kodlu kisiye ozel madalya hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "kutulu-madalya-1",
    code: "M-3",
    title: "Kutulu Madalya Modeli 3",
    category: "kutulu-madalya",
    parentCategory: "madalyalar",
    image: "/images/catalog/madalya-set.jpg",
    imageAlt: "Kutulu madalya modeli",
    specs: {
      height: null,
      color: "Bronz",
      material: "Metal ve kadife kutu",
      size: "50 mm",
    },
    shortDescription:
      "Sunum kutusuyla teslim edilen protokol ve mezuniyet uyumlu madalya.",
    whatsappText:
      "Merhaba, M-3 urun kodlu kutulu madalya hakkinda bilgi almak istiyorum.",
  },
  {
    id: "bos-madalya-1",
    code: "M-4",
    title: "Bos Madalya Modeli 4",
    category: "bos-madalya",
    parentCategory: "madalyalar",
    image: "/images/catalog/madalya-set.jpg",
    imageAlt: "Bos madalya modeli",
    specs: {
      height: null,
      color: "Altin",
      material: "Metal",
      size: "50 mm",
    },
    shortDescription:
      "Uygulamasiz, stoktan temin edilebilen bos madalya secenegi.",
    whatsappText:
      "Merhaba, M-4 urun kodlu bos madalya hakkinda bilgi almak istiyorum.",
  },
  {
    id: "kristal-odul-1",
    code: "KO-1",
    title: "Kristal Odul Modeli 1",
    category: "kristal-odul",
    parentCategory: "oduller",
    image: "/images/catalog/kristal-odul.jpg",
    imageAlt: "KO-1 kristal odul modeli",
    specs: {
      height: "24 cm",
      color: "Seffaf",
      material: "Kristal",
      size: null,
    },
    shortDescription:
      "Kurumsal basari ve tesekkur torenleri icin premium kristal odul.",
    whatsappText:
      "Merhaba, KO-1 urun kodlu kristal odul hakkinda bilgi almak istiyorum.",
    featured: true,
    bestSeller: true,
  },
  {
    id: "kristal-odul-2",
    code: "KO-2",
    title: "Kristal Odul Modeli 2",
    category: "kristal-odul",
    parentCategory: "oduller",
    image: "/images/catalog/kristal-yildiz.jpg",
    imageAlt: "KO-2 kristal odul modeli",
    specs: {
      height: "28 cm",
      color: "Seffaf ve lacivert",
      material: "Kristal",
      size: null,
    },
    shortDescription:
      "Lazer kazima ve renkli baski uygulamalarina uygun kristal odul.",
    whatsappText:
      "Merhaba, KO-2 urun kodlu kristal odul hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "oscar-heykeli-1",
    code: "KO-3",
    title: "Oscar Heykeli Modeli",
    category: "oscar-heykeli",
    parentCategory: "oduller",
    image: "/images/catalog/sport-heykel.jpg",
    imageAlt: "Oscar heykeli odul modeli",
    specs: {
      height: "30 cm",
      color: "Altin",
      material: "Metalize kaplama",
      size: null,
    },
    shortDescription:
      "Sahne, okul ve eglence etkinliklerinde dikkat ceken odul modeli.",
    whatsappText:
      "Merhaba, Oscar heykeli modeli hakkinda bilgi almak istiyorum.",
  },
  {
    id: "spor-odulu-1",
    code: "KUPA-040",
    title: "Figurlu Spor Odulu",
    category: "spor-odulu",
    parentCategory: "oduller",
    image: "/images/catalog/spor-kupa.jpg",
    imageAlt: "Figurlu spor odulu",
    specs: {
      height: "36 cm",
      color: "Altin",
      material: "Metal ve plastik",
      size: null,
    },
    shortDescription:
      "Bransa ozel figurlu kapakla hazirlanan spor odulu secenegi.",
    whatsappText:
      "Merhaba, KUPA-040 urun kodlu spor odulu hakkinda bilgi almak istiyorum.",
  },
  {
    id: "mezuniyet-odulu-1",
    code: "KO-4",
    title: "Mezuniyet Odulu Modeli",
    category: "mezuniyet-odulu",
    parentCategory: "oduller",
    image: "/images/catalog/kristal-odul.jpg",
    imageAlt: "Mezuniyet odulu modeli",
    specs: {
      height: "22 cm",
      color: "Seffaf",
      material: "Kristal",
      size: null,
    },
    shortDescription:
      "Okul ve universite torenleri icin logo uygulamali mezuniyet odulu.",
    whatsappText:
      "Merhaba, mezuniyet odulu modeli hakkinda bilgi almak istiyorum.",
  },
  {
    id: "muzik-odulu-1",
    code: "KO-5",
    title: "Muzik Odulu Modeli",
    category: "muzik-odulu",
    parentCategory: "oduller",
    image: "/images/catalog/sport-heykel.jpg",
    imageAlt: "Muzik temali odul modeli",
    specs: {
      height: "26 cm",
      color: "Altin ve siyah",
      material: "Kristal ve metal",
      size: null,
    },
    shortDescription:
      "Muzik yarismalari ve festival odulleri icin tematik tasarim.",
    whatsappText:
      "Merhaba, muzik odulu modeli hakkinda bilgi almak istiyorum.",
  },
  {
    id: "kristal-plaket-1",
    code: "KP-1",
    title: "Kristal Plaket Modeli 1",
    category: "kristal-plaket",
    parentCategory: "plaketler",
    image: "/images/catalog/kristal-yildiz.jpg",
    imageAlt: "KP-1 kristal plaket modeli",
    specs: {
      height: "20 cm",
      color: "Seffaf",
      material: "Kristal",
      size: null,
    },
    shortDescription:
      "Tesekkur, basari ve kurumsal takdir sunumlari icin sade kristal plaket.",
    whatsappText:
      "Merhaba, KP-1 urun kodlu kristal plaket hakkinda bilgi almak istiyorum.",
    featured: true,
    bestSeller: true,
  },
  {
    id: "kristal-plaket-2",
    code: "KP-2",
    title: "Kristal Plaket Modeli 2",
    category: "kristal-plaket",
    parentCategory: "plaketler",
    image: "/images/catalog/kristal-odul.jpg",
    imageAlt: "KP-2 kristal plaket modeli",
    specs: {
      height: "24 cm",
      color: "Seffaf ve mavi",
      material: "Kristal",
      size: null,
    },
    shortDescription:
      "Renkli detayli, logo ve metin uygulamasina uygun kristal plaket.",
    whatsappText:
      "Merhaba, KP-2 urun kodlu kristal plaket hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "ahsap-plaket-1",
    code: "AP-1",
    title: "Ahsap Plaket Modeli 1",
    category: "ahsap-plaket",
    parentCategory: "plaketler",
    image: "/images/catalog/ozel-tasarim-plaket.jpg",
    imageAlt: "AP-1 ahsap plaket modeli",
    specs: {
      height: null,
      color: "Ceviz",
      material: "Ahsap ve metal etiket",
      size: "18 x 24 cm",
    },
    shortDescription:
      "Klasik kurumsal sunumlar icin metal etiketli ahsap plaket.",
    whatsappText:
      "Merhaba, AP-1 urun kodlu ahsap plaket hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "ahsap-plaket-2",
    code: "AP-2",
    title: "Ahsap Plaket Modeli 2",
    category: "ahsap-plaket",
    parentCategory: "plaketler",
    image: "/images/catalog/album-plaket-classic.jpg",
    imageAlt: "AP-2 ahsap plaket modeli",
    specs: {
      height: null,
      color: "Siyah",
      material: "Ahsap ve metal etiket",
      size: "20 x 25 cm",
    },
    shortDescription:
      "Modern siyah yuzeyli, logo baskisina uygun ahsap plaket modeli.",
    whatsappText:
      "Merhaba, AP-2 urun kodlu ahsap plaket hakkinda bilgi almak istiyorum.",
  },
  {
    id: "album-plaket-1",
    code: "AP-3",
    title: "Album Plaket Modeli",
    category: "album-plaket",
    parentCategory: "plaketler",
    image: "/images/catalog/album-plaket.jpg",
    imageAlt: "Kirmizi kutulu album plaket modeli",
    specs: {
      height: null,
      color: "Lacivert",
      material: "Suni deri ve metal",
      size: "A4",
    },
    shortDescription:
      "Resmi takdimler ve sertifika sunumlari icin album plaket modeli.",
    whatsappText:
      "Merhaba, album plaket modeli hakkinda bilgi almak istiyorum.",
  },
  {
    id: "kadife-plaket-1",
    code: "AP-4",
    title: "Kadife Kutulu Plaket",
    category: "kadife-kutulu-plaket",
    parentCategory: "plaketler",
    image: "/images/catalog/ozel-tasarim-plaket.jpg",
    imageAlt: "Kadife kutulu plaket",
    specs: {
      height: null,
      color: "Kirmizi kadife",
      material: "Ahsap, metal ve kadife",
      size: "20 x 25 cm",
    },
    shortDescription:
      "Prestijli sunumlar icin kadife kutu ile teslim edilen plaket.",
    whatsappText:
      "Merhaba, kadife kutulu plaket hakkinda bilgi almak istiyorum.",
  },
  {
    id: "yaka-isimlik-1",
    code: "YI-1",
    title: "Yaka Isimlik Modeli 1",
    category: "yaka-isimlik",
    parentCategory: "diger-urunler",
    image: "/images/catalog/yaka-isimlik-gold.jpg",
    imageAlt: "YI-1 yaka isimlik modeli",
    specs: {
      height: null,
      color: "Gumus",
      material: "Metal",
      size: "70 x 25 mm",
    },
    shortDescription:
      "Magnetli veya igneli kullanim icin logo baskili yaka isimligi.",
    whatsappText:
      "Merhaba, YI-1 urun kodlu yaka isimlik hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "yaka-isimlik-2",
    code: "YI-2",
    title: "Yaka Isimlik Modeli 2",
    category: "yaka-isimlik",
    parentCategory: "diger-urunler",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "YI-2 yaka isimlik modeli",
    specs: {
      height: null,
      color: "Beyaz",
      material: "Pleksi",
      size: "75 x 30 mm",
    },
    shortDescription:
      "Hafif pleksi govdeli, personel ve etkinlik ekipleri icin isimlik.",
    whatsappText:
      "Merhaba, YI-2 urun kodlu yaka isimlik hakkinda bilgi almak istiyorum.",
  },
  {
    id: "yaka-rozeti-1",
    code: "R-1",
    title: "Yaka Rozeti Modeli 1",
    category: "yaka-rozeti",
    parentCategory: "diger-urunler",
    image: "/images/catalog/yaka-isimlik-gold.jpg",
    imageAlt: "R-1 yaka rozeti modeli",
    specs: {
      height: null,
      color: "Altin",
      material: "Metal",
      size: "25 mm",
    },
    shortDescription:
      "Kurum logosuna gore hazirlanabilen metal yaka rozeti.",
    whatsappText:
      "Merhaba, R-1 urun kodlu yaka rozeti hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "buton-rozet-1",
    code: "R-2",
    title: "Buton Rozet Modeli 2",
    category: "buton-rozet",
    parentCategory: "diger-urunler",
    image: "/images/catalog/ozel-madalya.jpg",
    imageAlt: "R-2 buton rozet modeli",
    specs: {
      height: null,
      color: "Ozel baski",
      material: "Metal",
      size: "44 mm",
    },
    shortDescription:
      "Kampanya, okul ve etkinlikler icin ekonomik baskili buton rozet.",
    whatsappText:
      "Merhaba, R-2 urun kodlu buton rozet hakkinda bilgi almak istiyorum.",
  },
  {
    id: "aluminyum-etiket-1",
    code: "E-1",
    title: "Aluminyum Etiket Modeli 1",
    category: "aluminyum-etiket",
    parentCategory: "diger-urunler",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "E-1 aluminyum etiket modeli",
    specs: {
      height: null,
      color: "Mat gumus",
      material: "Aluminyum",
      size: "Ozel olcu",
    },
    shortDescription:
      "Makine, pano ve urun tanimlama icin dayanikli aluminyum etiket.",
    whatsappText:
      "Merhaba, E-1 urun kodlu aluminyum etiket hakkinda bilgi almak istiyorum.",
    featured: true,
  },
  {
    id: "leksan-etiket-1",
    code: "E-2",
    title: "Leksan Etiket Modeli 2",
    category: "leksan-etiket",
    parentCategory: "diger-urunler",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "E-2 leksan etiket modeli",
    specs: {
      height: null,
      color: "Ozel baski",
      material: "Leksan",
      size: "Ozel olcu",
    },
    shortDescription:
      "Elektronik panel ve teknik cihazlar icin net baskili leksan etiket.",
    whatsappText:
      "Merhaba, E-2 urun kodlu leksan etiket hakkinda bilgi almak istiyorum.",
  },
];

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}

export function getFeaturedProducts(limit = 8) {
  return products.filter((product) => product.featured).slice(0, limit);
}

export function getBestSellerProduct() {
  return products.find((product) => product.bestSeller) ?? products[0];
}

export function searchProducts(query: string) {
  const normalized = query.trim().toLocaleLowerCase("tr-TR");

  if (!normalized) {
    return [];
  }

  return products.filter((product) => {
    const haystack = [
      product.code,
      product.title,
      product.category,
      product.parentCategory,
      product.shortDescription,
      product.specs.color,
      product.specs.material,
      product.specs.size,
      product.specs.height,
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase("tr-TR");

    return haystack.includes(normalized);
  });
}

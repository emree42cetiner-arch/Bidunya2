export type ParentCategorySlug =
  | "madalyalar"
  | "oduller"
  | "plaketler"
  | "diger-urunler"
  | "kurumsal";

export type Category = {
  slug: string;
  title: string;
  menuTitle?: string;
  parent: ParentCategorySlug;
  description: string;
  bottomDescription: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export type NavigationGroup = {
  slug: ParentCategorySlug;
  title: string;
  items: Array<Pick<Category, "slug" | "title">>;
};

export const categories: Category[] = [
  {
    slug: "madalya",
    title: "Madalya Modelleri",
    menuTitle: "Madalya",
    parent: "madalyalar",
    description:
      "Spor turnuvalari, okul etkinlikleri ve kurumsal organizasyonlar icin farkli olcu ve renklerde madalya modelleri.",
    bottomDescription:
      "Madalya uretiminde logo, brans, etkinlik adi ve tarih gibi detaylar lazer markalama veya baski uygulamalariyla ozellestirilebilir. Toplu siparislerde hizli termin ve net teklif sureci saglanir.",
    seoTitle: "Madalya Modelleri ve Ozel Tasarim Madalyalar | BİDÜNYA REKLAM",
    seoDescription:
      "Turnuva, okul ve kurumsal etkinlikler icin madalya modelleri. Ozel tasarim, hizli uretim ve teklif icin iletisime gecin.",
    image: "/images/catalog/madalya-set.jpg",
    imageAlt: "Kurdeleli altin, gumus ve bronz madalya modelleri",
    featured: true,
  },
  {
    slug: "kisiye-ozel-madalya",
    title: "Kisiye Ozel Madalya",
    parent: "madalyalar",
    description:
      "Logo, isim, etkinlik tarihi ve ozel tasarim detaylariyla hazirlanan kisiye ozel madalya secenekleri.",
    bottomDescription:
      "Kisiye ozel madalyalar etkinliginizin kimligini yansitacak sekilde tasarlanir. Malzeme, renk, kurdele ve kutu secenekleri proje ihtiyacina gore netlestirilir.",
    seoTitle: "Kisiye Ozel Madalya Uretimi | BİDÜNYA REKLAM",
    seoDescription:
      "Logo, isim ve etkinlik bilgileriyle kisiye ozel madalya uretimi. Kurumsal ve sportif organizasyonlar icin hizli teklif alin.",
    image: "/images/catalog/ozel-madalya.jpg",
    imageAlt: "Kisiye ozel baskili madalya",
  },
  {
    slug: "kutulu-madalya",
    title: "Kutulu Madalya",
    parent: "madalyalar",
    description:
      "Sunum kalitesini artiran kadife, plastik veya ozel tasarim kutulu madalya modelleri.",
    bottomDescription:
      "Kutulu madalya cozumleri protokol, mezuniyet ve ozel odul torenleri icin daha kurumsal bir sunum saglar. Kutu rengi ve ic baski secenekleri siparise gore planlanabilir.",
    seoTitle: "Kutulu Madalya Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Kadife ve ozel sunum kutulu madalya modelleri. Toptan uretim, ozel tasarim ve hizli teklif destegi.",
    image: "/images/catalog/ozel-madalya.jpg",
    imageAlt: "Sunum kutusunda madalya",
  },
  {
    slug: "bos-madalya",
    title: "Bos Madalya",
    parent: "madalyalar",
    description:
      "Hazir gorsel veya logo uygulamasi yapilmadan temin edilebilen bos madalya alternatifleri.",
    bottomDescription:
      "Bos madalya modelleri, kendi uygulamasini yapmak isteyen atolyeler ve kurumlar icin pratik bir stok cozumudur. Renk, cap ve kurdele secimi siparis adedine gore belirlenir.",
    seoTitle: "Bos Madalya Cesitleri | BİDÜNYA REKLAM",
    seoDescription:
      "Hazir uygulamasiz bos madalya cesitleri. Farkli renk, olcu ve kurdele secenekleri icin teklif alin.",
    image: "/images/catalog/madalya-set.jpg",
    imageAlt: "Uygulamasiz bos madalya modeli",
  },
  {
    slug: "kupa-odul",
    title: "Kupa Odul Modelleri",
    menuTitle: "Kupa Odul",
    parent: "oduller",
    description:
      "Spor, okul, turnuva ve kurumsal etkinlikler icin farkli boylarda metal ve plastik kupa odul modelleri.",
    bottomDescription:
      "Kupa odul modellerinde boy, renk, figurlu kapak ve etiket uygulamasi etkinlik temasina gore secilebilir. Toplu alimlarda urun kodu uzerinden hizli teklif sureci yurutulur.",
    seoTitle: "Kupa Odul Modelleri ve Ozel Tasarim Kupalar | BİDÜNYA REKLAM",
    seoDescription:
      "Spor turnuvalari, okul etkinlikleri ve kurumsal organizasyonlar icin ozel tasarim kupa odul modelleri. Hizli uretim ve teklif icin iletisime gecin.",
    image: "/images/catalog/kupa-set.jpg",
    imageAlt: "Farkli boylarda altin renkli kupa odul modelleri",
    featured: true,
  },
  {
    slug: "ekonomik-kupa-odul",
    title: "Ekonomik Kupa Odul",
    parent: "oduller",
    description:
      "Butce dostu, toplu organizasyonlara uygun ekonomik kupa odul secenekleri.",
    bottomDescription:
      "Ekonomik kupa odulleri okul turnuvalari, dernek etkinlikleri ve genis katilimli organizasyonlarda sik tercih edilir. Standart modeller hizli tedarik ve uygun fiyat avantaji sunar.",
    seoTitle: "Ekonomik Kupa Odul Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Toplu siparise uygun ekonomik kupa odul modelleri. Uygun fiyatli turnuva kupalari icin teklif alin.",
    image: "/images/catalog/kupa-set.jpg",
    imageAlt: "Ekonomik kupa odul serisi",
  },
  {
    slug: "kristal-odul",
    title: "Kristal Odul",
    parent: "oduller",
    description:
      "Kurumsal basari, sponsorluk ve tesekkur torenleri icin premium kristal odul modelleri.",
    bottomDescription:
      "Kristal odul modelleri lazer kazima, UV baski ve ozel kutu uygulamalariyla kurumsal kimlige uyarlanabilir. Zarif sunum isteyen kurumlar icin prestijli bir secenektir.",
    seoTitle: "Kristal Odul Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Kurumsal torenler icin kristal odul modelleri. Logo uygulamali premium oduller icin hizli teklif alin.",
    image: "/images/catalog/kristal-odul.jpg",
    imageAlt: "Seffaf kristal odul modeli",
    featured: true,
  },
  {
    slug: "oscar-heykeli",
    title: "Oscar Heykeli",
    parent: "oduller",
    description:
      "Sinema, sahne, okul ve eglence odullu etkinlikleri icin dikkat cekici oscar heykeli modelleri.",
    bottomDescription:
      "Oscar heykeli modelleri isimlik plaka ve etkinlik bilgisiyle ozellestirilerek sahne odul torenlerine hazir hale getirilir.",
    seoTitle: "Oscar Heykeli Odul Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Oscar heykeli odul modelleri ve plaka uygulamali sahne odulleri icin teklif alin.",
    image: "/images/catalog/sport-heykel.jpg",
    imageAlt: "Oscar heykeli odul modeli",
  },
  {
    slug: "spor-odulu",
    title: "Spor Odulu",
    parent: "oduller",
    description:
      "Futbol, basketbol, voleybol, kosu ve diger branslar icin figurlu spor odulu modelleri.",
    bottomDescription:
      "Spor odulu urunleri brans figuru, kupa boyu ve etiket icerigiyle etkinlige gore hazirlanir. Kulup ve okul organizasyonlari icin toplu teklif saglanir.",
    seoTitle: "Spor Odulu ve Figurlu Kupa Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Farkli branslara uygun spor odulu ve figurlu kupa modelleri. Turnuvaya ozel teklif icin iletisime gecin.",
    image: "/images/catalog/spor-kupa.jpg",
    imageAlt: "Figurlu spor odulu modeli",
  },
  {
    slug: "mezuniyet-odulu",
    title: "Mezuniyet Odulu",
    parent: "oduller",
    description:
      "Okul ve universite mezuniyet torenleri icin plaket, kristal odul ve madalya alternatifleri.",
    bottomDescription:
      "Mezuniyet odulleri kurum logosu, ogrenci adi veya toren tarihiyle kisisellestirilebilir. Zamani kisitli okul siparisleri icin termin planlamasi yapilir.",
    seoTitle: "Mezuniyet Odulu Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Okul ve universite mezuniyet torenleri icin odul, plaket ve madalya modelleri.",
    image: "/images/catalog/kristal-odul.jpg",
    imageAlt: "Mezuniyet toreni icin odul modeli",
  },
  {
    slug: "muzik-odulu",
    title: "Muzik Odulu",
    parent: "oduller",
    description:
      "Muzik yarismalari, festivaller ve sahne etkinlikleri icin tematik odul modelleri.",
    bottomDescription:
      "Muzik odulu modellerinde nota, mikrofon veya sahne temali figurlu secenekler tercih edilebilir. Logo ve kategori bilgisi plakaya islenebilir.",
    seoTitle: "Muzik Odulu Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Muzik yarismalari ve festivaller icin tematik odul modelleri. Ozel tasarim teklif alin.",
    image: "/images/catalog/sport-heykel.jpg",
    imageAlt: "Muzik temali odul modeli",
  },
  {
    slug: "kristal-plaket",
    title: "Kristal Plaket",
    parent: "plaketler",
    description:
      "Tesekkur, basari ve kurumsal takdir sunumlari icin modern kristal plaket modelleri.",
    bottomDescription:
      "Kristal plaketler seffaf, sade ve kurumsal bir gorunum sunar. Logo, isim ve mesaj lazer kazima veya UV baski ile uygulanabilir.",
    seoTitle: "Kristal Plaket Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Kurumsal tesekkur ve basari torenleri icin kristal plaket modelleri. Ozel tasarim ve hizli teklif.",
    image: "/images/catalog/kristal-yildiz.jpg",
    imageAlt: "Kristal plaket modeli",
    featured: true,
  },
  {
    slug: "ahsap-plaket",
    title: "Ahsap Plaket",
    parent: "plaketler",
    description:
      "Klasik, guven veren ve genis kullanim alanina sahip ahsap plaket modelleri.",
    bottomDescription:
      "Ahsap plaketler kurumsal tesekkur, emeklilik, hizmet anisi ve egitim etkinliklerinde tercih edilir. Metal etiket ve baski alanlari ihtiyaca gore duzenlenir.",
    seoTitle: "Ahsap Plaket Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Klasik ve kurumsal ahsap plaket modelleri. Logo baskili plaketler icin teklif alin.",
    image: "/images/catalog/ozel-tasarim-plaket.jpg",
    imageAlt: "Ahsap plaket modeli",
  },
  {
    slug: "album-plaket",
    title: "Album Plaket",
    parent: "plaketler",
    description:
      "Dosya ve album formunda, resmi takdimler icin kullanilan album plaket modelleri.",
    bottomDescription:
      "Album plaketler protokol sunumlari, sertifika teslimleri ve resmi kurum etkinlikleri icin uygun bir sunum formatidir.",
    seoTitle: "Album Plaket Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Resmi sunumlara uygun album plaket modelleri ve ozel baski secenekleri.",
    image: "/images/catalog/album-plaket.jpg",
    imageAlt: "Kirmizi sunum kutulu album plaket modeli",
  },
  {
    slug: "kadife-kutulu-plaket",
    title: "Kadife Kutulu Plaket",
    parent: "plaketler",
    description:
      "Ozel gunler ve protokol sunumlari icin kadife kutulu plaket cozumleri.",
    bottomDescription:
      "Kadife kutulu plaket modelleri urune daha prestijli bir sunum kazandirir. Kutulu teslimat ozellikle resmi torenler icin tercih edilir.",
    seoTitle: "Kadife Kutulu Plaket Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Protokol ve ozel sunumlara uygun kadife kutulu plaket modelleri icin teklif alin.",
    image: "/images/catalog/ozel-tasarim-plaket.jpg",
    imageAlt: "Kadife kutusunda plaket",
  },
  {
    slug: "kisiye-ozel-plaket",
    title: "Kisiye Ozel Plaket",
    parent: "plaketler",
    description:
      "Isim, logo, mesaj ve ozel tasarim detaylariyla hazirlanan kisiye ozel plaket modelleri.",
    bottomDescription:
      "Kisiye ozel plaketlerde tasarim metni, logo ve malzeme secimi birlikte planlanir. Onayli tasarimdan sonra uretim sureci baslatilir.",
    seoTitle: "Kisiye Ozel Plaket Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Logo, isim ve mesaj uygulamali kisiye ozel plaket modelleri. Hizli tasarim ve teklif destegi.",
    image: "/images/catalog/ozel-tasarim-plaket.jpg",
    imageAlt: "Kisiye ozel plaket modeli",
  },
  {
    slug: "hizmet-anisi-plaket",
    title: "Hizmet Anisi Plaket",
    parent: "plaketler",
    description:
      "Emeklilik, hizmet yili ve kurumsal tesekkur sunumlari icin anlamli plaket modelleri.",
    bottomDescription:
      "Hizmet anisi plaketleri uzun yillarin emegini kurumsal bir dille takdir etmek icin hazirlanir. Metin ve gorsel yerlesimi ozene gore duzenlenir.",
    seoTitle: "Hizmet Anisi Plaket Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Emeklilik ve hizmet yili icin anlamli hizmet anisi plaket modelleri.",
    image: "/images/catalog/tabak-plaket.jpg",
    imageAlt: "Hizmet anisi plaket modeli",
  },
  {
    slug: "tabak-plaket",
    title: "Tabak Plaket",
    parent: "plaketler",
    description:
      "Dekoratif sunum ve kurumsal takdir icin tabak formunda plaket modelleri.",
    bottomDescription:
      "Tabak plaketler masa ustu veya vitrin sunumlari icin dekoratif ve prestijli bir alternatiftir.",
    seoTitle: "Tabak Plaket Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Dekoratif tabak plaket modelleri ve kurumsal sunum cozumleri icin teklif alin.",
    image: "/images/catalog/tabak-plaket.jpg",
    imageAlt: "Tabak formunda plaket",
  },
  {
    slug: "plaket-kutusu",
    title: "Plaket Kutusu",
    parent: "plaketler",
    description:
      "Plaketlerin guvenli ve prestijli sunumu icin farkli olculerde plaket kutulari.",
    bottomDescription:
      "Plaket kutusu secimi urun olcusu ve sunum beklentisine gore yapilir. Kadife, suni deri veya standart kutu alternatifleri degerlendirilebilir.",
    seoTitle: "Plaket Kutusu Cesitleri | BİDÜNYA REKLAM",
    seoDescription:
      "Farkli olculerde plaket kutusu cesitleri. Kurumsal sunum icin kutulu teslimat secenekleri.",
    image: "/images/catalog/album-plaket-classic.jpg",
    imageAlt: "Plaket sunum kutusu",
  },
  {
    slug: "yaka-isimlik",
    title: "Yaka Isimlik",
    parent: "diger-urunler",
    description:
      "Personel, magaza, otel ve etkinlik ekipleri icin logo baskili yaka isimlik modelleri.",
    bottomDescription:
      "Yaka isimlikleri magnetli, igneli veya ozel baglantili olarak uretilebilir. Kurumsal logo ve personel bilgileri temiz bir tipografiyle uygulanir.",
    seoTitle: "Yaka Isimlik Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Logo baskili yaka isimlik modelleri. Personel ve etkinlik ekipleri icin toplu uretim teklifi alin.",
    image: "/images/catalog/yaka-isimlik-gold.jpg",
    imageAlt: "Kurumsal yaka isimlik modeli",
    featured: true,
  },
  {
    slug: "yaka-rozeti",
    title: "Yaka Rozeti",
    parent: "diger-urunler",
    description:
      "Kurum, dernek ve etkinlik kimligi icin metal veya mine uygulamali yaka rozeti modelleri.",
    bottomDescription:
      "Yaka rozetleri logo formuna gore kalipli veya baskili olarak planlanabilir. Baglanti tipi ve kaplama rengi kullanima gore secilir.",
    seoTitle: "Yaka Rozeti Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Logo uygulamali yaka rozeti modelleri. Kurumsal ve etkinlik rozetleri icin teklif alin.",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "Metal yaka rozeti",
  },
  {
    slug: "buton-rozet",
    title: "Buton Rozet",
    parent: "diger-urunler",
    description:
      "Kampanya, okul ve etkinlikler icin ekonomik, baskili buton rozet secenekleri.",
    bottomDescription:
      "Buton rozet modelleri toplu dagitim, kampanya ve sosyal etkinliklerde uygun maliyetli bir tanitim urunudur.",
    seoTitle: "Buton Rozet Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Baskili buton rozet modelleri ve toplu uretim secenekleri icin teklif alin.",
    image: "/images/catalog/ozel-madalya.jpg",
    imageAlt: "Renkli buton rozet",
  },
  {
    slug: "masa-isimlik",
    title: "Masa Isimlik",
    parent: "diger-urunler",
    description:
      "Ofis, resepsiyon ve toplantilar icin masa ustu isimlik modelleri.",
    bottomDescription:
      "Masa isimlikleri metal, pleksi veya ahsap detaylarla kurum kimligine uygun bicimde hazirlanabilir.",
    seoTitle: "Masa Isimlik Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Ofis ve toplantilar icin masa isimlik modelleri. Logo ve isim uygulamali uretim teklifi alin.",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "Masa ustu isimlik modeli",
  },
  {
    slug: "metal-anahtarlik",
    title: "Metal Anahtarlik",
    parent: "diger-urunler",
    description:
      "Kurumsal promosyon ve hediye amacli metal anahtarlik modelleri.",
    bottomDescription:
      "Metal anahtarlik modelleri lazer logo, renkli baski veya ozel form uygulamalariyla markaniza uygun hale getirilebilir.",
    seoTitle: "Metal Anahtarlik Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Logo baskili metal anahtarlik modelleri ve kurumsal promosyon cozumleri.",
    image: "/images/catalog/yaka-isimlik-gold.jpg",
    imageAlt: "Metal anahtarlik modeli",
  },
  {
    slug: "baskili-kupa-bardak",
    title: "Baskili Kupa Bardak",
    parent: "diger-urunler",
    description:
      "Logo, gorsel veya mesaj baskili kupa bardak modelleri.",
    bottomDescription:
      "Baskili kupa bardaklar kurumsal hediye, etkinlik hatirasi ve promosyon urunu olarak kullanilir. Tasarim alani ihtiyaca gore hazirlanir.",
    seoTitle: "Baskili Kupa Bardak Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Logo ve mesaj baskili kupa bardak modelleri. Kurumsal hediye icin teklif alin.",
    image: "/images/catalog/kupa-set.jpg",
    imageAlt: "Logo baskili kupa bardak",
  },
  {
    slug: "aluminyum-etiket",
    title: "Aluminyum Etiket",
    parent: "diger-urunler",
    description:
      "Makine, pano ve urun tanimlama icin dayanikli aluminyum etiket cozumleri.",
    bottomDescription:
      "Aluminyum etiketler dis ortam dayanikliligi, net okunurluk ve kurumsal gorunum gerektiren uygulamalarda tercih edilir.",
    seoTitle: "Aluminyum Etiket Uretimi | BİDÜNYA REKLAM",
    seoDescription:
      "Makine ve pano uygulamalari icin aluminyum etiket uretimi. Olcuye ozel teklif alin.",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "Aluminyum teknik etiket",
  },
  {
    slug: "leksan-etiket",
    title: "Leksan Etiket",
    parent: "diger-urunler",
    description:
      "Elektronik panel ve endustriyel urunlerde kullanilan leksan etiket uygulamalari.",
    bottomDescription:
      "Leksan etiketler panel uzeri buton, ikon ve teknik bilgi alanlarinda temiz ve dayanikli bir cozum sunar.",
    seoTitle: "Leksan Etiket Uretimi | BİDÜNYA REKLAM",
    seoDescription:
      "Endustriyel panel ve elektronik cihazlar icin leksan etiket uretimi.",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "Leksan panel etiketi",
  },
  {
    slug: "melamin-etiket",
    title: "Melamin Etiket",
    parent: "diger-urunler",
    description:
      "Dayanikli yuzey ve endustriyel kullanim icin melamin etiket secenekleri.",
    bottomDescription:
      "Melamin etiketler uzun omurlu ve pratik tanimlama gerektiren alanlarda kullanilabilir. Olcu, renk ve baski alani projeye gore belirlenir.",
    seoTitle: "Melamin Etiket Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Endustriyel kullanim icin melamin etiket modelleri. Olcuye ozel teklif alin.",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "Melamin etiket modeli",
  },
  {
    slug: "panel-etiket",
    title: "Panel Etiket",
    parent: "diger-urunler",
    description:
      "Makine ve kontrol panelleri icin olcuye ozel panel etiket uygulamalari.",
    bottomDescription:
      "Panel etiketlerde teknik cizim, delik konumlari ve baski alanlari uretim oncesi kontrol edilir. Net ve dayanikli bir yuzey hedeflenir.",
    seoTitle: "Panel Etiket Uretimi | BİDÜNYA REKLAM",
    seoDescription:
      "Makine ve kontrol panelleri icin olcuye ozel panel etiket uretimi.",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "Kontrol paneli etiketi",
  },
  {
    slug: "kutu-harf-tabela",
    title: "Kutu Harf Tabela",
    parent: "diger-urunler",
    description:
      "Isletme dis cepheleri ve ic mekanlar icin kutu harf tabela cozumleri.",
    bottomDescription:
      "Kutu harf tabela uygulamalari marka gorunurlugunu guclendirir. Olcu, malzeme ve aydinlatma ihtiyaci kesif sonrasinda netlestirilir.",
    seoTitle: "Kutu Harf Tabela Uygulamalari | BİDÜNYA REKLAM",
    seoDescription:
      "Ic ve dis mekanlar icin kutu harf tabela uygulamalari. Markaya ozel teklif alin.",
    image: "/images/catalog/yaka-isimlik-gold.jpg",
    imageAlt: "Kutu harf tabela uygulamasi",
  },
  {
    slug: "yonlendirme-levhasi",
    title: "Yonlendirme Levhasi",
    parent: "diger-urunler",
    description:
      "Ofis, fabrika, okul ve etkinlik alanlari icin yonlendirme levhasi cozumleri.",
    bottomDescription:
      "Yonlendirme levhalari okunabilir tipografi, net ikonlar ve mekana uygun malzemeyle hazirlanir.",
    seoTitle: "Yonlendirme Levhasi Modelleri | BİDÜNYA REKLAM",
    seoDescription:
      "Ofis, okul ve fabrika alanlari icin yonlendirme levhasi modelleri ve ozel uretim.",
    image: "/images/catalog/yaka-isimlik-silver.jpg",
    imageAlt: "Yonlendirme levhasi",
  },
  {
    slug: "odul-aksesuarlari",
    title: "Odul Aksesuarlari",
    parent: "diger-urunler",
    description:
      "Kurdele, kutu, etiket, figurlu kapak ve odul sunumunu tamamlayan aksesuarlar.",
    bottomDescription:
      "Odul aksesuarlari ana urunun sunumunu tamamlar. Kupa, madalya ve plaket siparislerinde uygun aksesuarlar birlikte planlanabilir.",
    seoTitle: "Odul Aksesuarlari | BİDÜNYA REKLAM",
    seoDescription:
      "Madalya, kupa ve plaketler icin kurdele, kutu, etiket ve odul aksesuarlari.",
    image: "/images/catalog/madalya-set.jpg",
    imageAlt: "Odul aksesuar parcalari",
  },
];

const navigationOrder: Array<{ slug: ParentCategorySlug; title: string }> = [
  { slug: "madalyalar", title: "Madalyalar" },
  { slug: "oduller", title: "Ödüller" },
  { slug: "plaketler", title: "Plaketler" },
  { slug: "diger-urunler", title: "Diğer Ürünler" },
];

export const navigationGroups: NavigationGroup[] = navigationOrder.map((group) => ({
  ...group,
  items: categories
    .filter((category) => category.parent === group.slug)
    .map((category) => ({ slug: category.slug, title: category.menuTitle ?? category.title })),
}));

export const corporateLinks = [
  { slug: "hakkimizda", title: "Hakkımızda" },
  { slug: "referanslar", title: "Referanslar" },
  { slug: "iletisim", title: "İletişim" },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getFeaturedCategories() {
  return categories.filter((category) => category.featured);
}


"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const whatsappNumbers = ["00905510300730", "00905397226739"];

const content = {
  ar: {
    code: "ar",
    label: "العربية",
    dir: "rtl",
    languageLabel: "لغة العرض",
    nav: {
      home: "الرئيسية",
      products: "منتجاتنا",
      about: "من نحن",
      contact: "تواصل معنا",
    },
    logoName: "جودي",
    title: "جودي للمنسوجات",
    subtitle:
      "في معامل جودي للمنسوجات، نحوّل الخيوط إلى قيمة حقيقية لعلامتك التجارية عبر أقمشة تجمع بين المتانة، الملمس الفاخر، وثبات الجودة في كل دفعة إنتاج.",
    sectionTitle: "منتجات الأقمشة",
    productsNote: "الصور وأنواع الأقمشة ستُحدّد لاحقًا، ويمكنكم النقر على أي صورة لعرضها بحجم أكبر.",
    aboutTitle: "من نحن",
    aboutText:
      "جودي شركة متخصصة في تصنيع الأقمشة بخطوط إنتاج حديثة ومعايير دقيقة للجودة، وتخدم قطاعات الألبسة، الأزياء، والملابس المهنية.",
    teamText:
      "يعمل فريقنا الإداري على التخطيط وضبط الجودة وخدمة العملاء، بينما يدير الفريق الإنتاجي كل مراحل النسيج والتشطيب والتعبئة بكفاءة عالية.",
    contactTitle: "تواصل معنا",
    contactText: "للاستفسارات وطلبات العينات، يمكنكم التواصل معنا مباشرة عبر أرقام واتساب التالية:",
    whatsappTitle: "التواصل عبر واتساب",
    rightsText: "جميع الحقوق محفوظة",
    socialLinks: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    productLabel: {
      type: "نوع القماش",
    },
  },
  en: {
    code: "en",
    label: "English",
    dir: "ltr",
    languageLabel: "Display Language",
    nav: {
      home: "Home",
      products: "Our Products",
      about: "About Us",
      contact: "Contact Us",
    },
    logoName: "Judi",
    title: "Judi Textiles",
    subtitle:
      "At Judi Textiles, we turn yarn into measurable brand value through fabrics that combine durability, premium touch, and consistent quality in every production batch.",
    sectionTitle: "Fabric Products",
    productsNote: "Product images and fabric types are placeholders for now. Click any image to view it in a larger size.",
    aboutTitle: "About Us",
    aboutText:
      "Judi is a textile manufacturer operating modern production lines and strict quality controls to serve apparel, fashion, and professional wear markets.",
    teamText:
      "Our management team leads planning, quality assurance, and customer success, while our production team runs weaving, finishing, and packaging with high efficiency.",
    contactTitle: "Contact Us",
    contactText: "For inquiries and sample requests, contact us directly via the following WhatsApp numbers:",
    whatsappTitle: "WhatsApp Contact",
    rightsText: "All rights reserved",
    socialLinks: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    productLabel: {
      type: "Fabric Type",
    },
  },
  tr: {
    code: "tr",
    label: "Türkçe",
    dir: "ltr",
    languageLabel: "Görüntüleme Dili",
    nav: {
      home: "Ana Sayfa",
      products: "Ürünlerimiz",
      about: "Hakkımızda",
      contact: "Bize Ulaşın",
    },
    logoName: "Judi",
    title: "Judi Tekstil",
    subtitle:
      "Judi Tekstil’de ipliği, dayanıklılığı premium dokunuşla birleştiren ve her üretim partisinde tutarlı kalite sunan kumaşlara dönüştürüyoruz.",
    sectionTitle: "Kumaş Ürünleri",
    productsNote: "Ürün görselleri ve kumaş türleri şimdilik yer tutucudur. Herhangi bir görsele tıklayarak büyük boyutta görüntüleyebilirsiniz.",
    aboutTitle: "Hakkımızda",
    aboutText:
      "Judi, modern üretim hatları ve sıkı kalite standartlarıyla giyim, moda ve profesyonel kıyafet pazarları için kumaş üreten bir tekstil şirketidir.",
    teamText:
      "Yönetim ekibimiz planlama, kalite güvence ve müşteri süreçlerini yönetirken; üretim ekibimiz dokuma, finisaj ve paketleme aşamalarını yüksek verimle yürütür.",
    contactTitle: "Bize Ulaşın",
    contactText: "Bilgi ve numune talepleri için aşağıdaki WhatsApp numaralarından doğrudan bize ulaşabilirsiniz:",
    whatsappTitle: "WhatsApp İletişim",
    rightsText: "Tüm hakları saklıdır",
    socialLinks: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    productLabel: {
      type: "Kumaş Türü",
    },
  },
};

const products = [
  {
    name: "Collection 01",
    type: "Placeholder",
    image: "/products/image01.jpg",
  },
  {
    name: "Collection 02",
    type: "Placeholder",
    image: "/products/image02.png",
  },
  {
    name: "Collection 03",
    type: "Placeholder",
    image: "/products/image03.jpg",
  },
  {
    name: "Collection 04",
    type: "Placeholder",
    image: "/products/image04.jpg",
  },
];

function getWhatsAppLink(rawNumber) {
  const normalized = rawNumber.replace(/\D/g, "").replace(/^00/, "");
  return `https://wa.me/${normalized}`;
}

function getSocialIcon(label) {
  if (label === "Facebook") return <FaFacebookF aria-hidden="true" />;
  if (label === "Instagram") return <FaInstagram aria-hidden="true" />;
  if (label === "LinkedIn") return <FaLinkedinIn aria-hidden="true" />;
  return null;
}

const sectionMotion = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function HomePage() {
  const [language, setLanguage] = useState("ar");
  const [activeImage, setActiveImage] = useState(null);
  const dictionary = useMemo(() => content[language], [language]);

  useEffect(() => {
    document.documentElement.dir = dictionary.dir;
    document.documentElement.lang = dictionary.code;
  }, [dictionary]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto min-h-screen w-full max-w-6xl bg-white px-4 pb-12 pt-8 text-[#0B1E3C] sm:pt-4"
      dir={dictionary.dir}
    >
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="sticky top-4 z-30 mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#D6DFEA] bg-white p-4 shadow-[0_10px_30px_rgba(11,30,60,0.08)]"
      >
        <div className="flex items-center gap-3">
          <img src="/products/fabric.svg" alt="Judi logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-base font-semibold text-[#0B1E3C]">{dictionary.logoName} Textiles</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <motion.a whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#home-section" className="rounded-full border border-[#C7D3E3] bg-white px-4 py-2 text-sm font-semibold text-[#0B1E3C]">
            {dictionary.nav.home}
          </motion.a>
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#products"
            className="rounded-full border border-[#C7D3E3] bg-white px-4 py-2 text-sm font-semibold text-[#0B1E3C]"
          >
            {dictionary.nav.products}
          </motion.a>
          <motion.a whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#about" className="rounded-full border border-[#C7D3E3] bg-white px-4 py-2 text-sm font-semibold text-[#0B1E3C]">
            {dictionary.nav.about}
          </motion.a>
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="rounded-full border border-[#C7D3E3] bg-white px-4 py-2 text-sm font-semibold text-[#0B1E3C]"
          >
            {dictionary.nav.contact}
          </motion.a>
        </div>

        <label className="flex items-center gap-2 text-sm font-medium text-[#0B1E3C]" title={dictionary.languageLabel}>
          <span className="text-xl text-[#0B1E3C]">🌐</span>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label={dictionary.languageLabel}
            className="rounded-lg border border-[#C7D3E3] bg-white px-3 py-2 text-sm font-medium text-[#0B1E3C]"
          >
            {Object.keys(content).map((code) => (
              <option key={code} value={code}>
                {content[code].label}
              </option>
            ))}
          </select>
        </label>
      </motion.nav>

      <motion.section
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        id="home-section"
        className="rounded-xl border border-[#D6DFEA] bg-white p-6 shadow-[0_10px_30px_rgba(11,30,60,0.08)] sm:rounded-2xl"
      >
        <h1 className="m-0 text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-[#0B1E3C]">{dictionary.title}</h1>
        <p className="mt-3 text-[1.05rem] leading-8 text-[#2F466B]">{dictionary.subtitle}</p>
      </motion.section>

      <motion.section
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        id="products"
        className="mt-6"
        aria-label={dictionary.sectionTitle}
      >
        <h2 className="mb-2 text-2xl font-semibold text-[#0B1E3C]">{dictionary.sectionTitle}</h2>
        <p className="mb-4 text-sm text-[#2F466B]">{dictionary.productsNote}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {products.map((product) => (
            <motion.article
              variants={cardMotion}
              whileHover={{ y: -6 }}
              key={product.name}
              className="rounded-xl border border-[#D6DFEA] bg-white p-4 shadow-[0_8px_24px_rgba(11,30,60,0.07)] sm:rounded-2xl"
            >
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                type="button"
                className="w-full overflow-hidden rounded-lg border border-[#E1E8F2]"
                onClick={() => setActiveImage(product)}
              >
                <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
              </motion.button>
              <h3 className="mt-3 text-[1.05rem] font-semibold text-[#0B1E3C]">{product.name}</h3>
              <p className="mt-1 text-sm text-[#2F466B]">
                <strong>{dictionary.productLabel.type}:</strong> {product.type}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        id="about"
        className="mt-6 rounded-xl border border-[#D6DFEA] bg-white p-6 shadow-[0_8px_24px_rgba(11,30,60,0.07)] sm:rounded-2xl"
      >
        <h2 className="mb-3 text-2xl font-semibold text-[#0B1E3C]">{dictionary.aboutTitle}</h2>
        <p className="text-base leading-7 text-[#2F466B]">{dictionary.aboutText}</p>
        <p className="mt-3 text-base leading-7 text-[#2F466B]">{dictionary.teamText}</p>
      </motion.section>

      <motion.section
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        id="contact"
        className="mt-6 rounded-xl border border-[#D6DFEA] bg-white p-6 shadow-[0_8px_24px_rgba(11,30,60,0.07)] sm:rounded-2xl"
      >
        <h2 className="mb-3 text-2xl font-semibold text-[#0B1E3C]">{dictionary.contactTitle}</h2>
        <p className="mb-4 text-base leading-7 text-[#2F466B]">{dictionary.contactText}</p>

        <h3 className="text-lg font-semibold text-[#0B1E3C]">{dictionary.whatsappTitle}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {whatsappNumbers.map((number) => (
            <motion.a
              whileHover={{ y: -2 }}
              key={number}
              href={getWhatsAppLink(number)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B1E3C] px-4 py-2 text-sm font-semibold text-white"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-sm text-white">
                <FaWhatsapp aria-hidden="true" />
              </span>
              <span>{number}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {dictionary.socialLinks.map((social) => (
            <motion.a
              whileHover={{ y: -2 }}
              key={social.label}
              href={social.href}
              aria-label={social.label}
              title={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C7D3E3] text-lg font-semibold text-[#0B1E3C]"
            >
              {getSocialIcon(social.label)}
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.footer
        variants={sectionMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mt-8 border-t border-[#D6DFEA] py-5 text-center text-sm text-[#2F466B]"
      >
        © {new Date().getFullYear()} Judi Textiles. {dictionary.rightsText}
      </motion.footer>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#08152A]/80 p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ y: 20, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="mb-2 rounded-lg bg-white px-3 py-1 text-sm font-semibold text-[#0B1E3C]"
              >
                Close
              </button>
              <img src={activeImage.image} alt={activeImage.name} className="max-h-[75vh] w-full rounded-xl object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.main>
  );
}

"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export const dictionaries: Record<string, Record<string, string>> = {
  id: {
    // Navbar
    nav_Layanan: "Layanan",
    nav_Produk: "Produk",
    nav_Mitra: "Mitra",
    nav_Klien: "Klien",
    nav_Keunggulan: "Keunggulan",
    nav_Kontak: "Kontak",
    navbar_wa: "Konsultasi WA",
    navbar_wa_mobile: "Konsultasi via WhatsApp",
    lang_toggle: "English",

    // Hero
    hero_badge: "IT System Integrator & Solutions Provider",
    hero_title_prefix: "Solusi & Integrasi IT untuk",
    hero_title_highlight: "Operasional Bisnis",
    hero_title_suffix: "Anda",
    hero_desc: "membantu perusahaan membangun, mengelola, dan mengintegrasikan infrastruktur jaringan, perangkat enterprise, keamanan IT, serta aplikasi bisnis terpadu.",
    cta_primary: "Konsultasi Gratis",
    cta_secondary: "Lihat Layanan",
    trust_1: "100% Produk Original & Bergaransi Resmi",
    trust_2: "Pengiriman Cepat & Instalasi On-site",
    trust_3: "Dukungan Teknis Purna Jual Terpercaya",
    stat_1: "Tahun Pengalaman",
    stat_2: "Mitra Brand Resmi",
    stat_3: "Tingkat Kepuasan Klien",

    // Services
    services_badge: "Layanan Kami",
    services_title_prefix: "Solusi & Layanan",
    services_title_highlight: "IT Integrasi",
    services_subtitle: "Layanan teknologi terintegrasi mencakup perencanaan infrastruktur, aplikasi web bisnis, pemulihan bencana IT, hingga pengadaan perangkat.",
    service_net_title: "Jaringan & Infrastruktur",
    service_net_desc: "Desain strategis, implementasi, manajemen jaringan, solusi virtualisasi dan cloud untuk kontinuitas bisnis enterprise Anda.",
    service_net_h1: "Desain Strategis, Perencanaan & Implementasi",
    service_net_h2: "Manajemen Jaringan & Infrastruktur",
    service_net_h3: "Solusi Virtualisasi & Cloud",
    service_net_h4: "Keamanan Jaringan & Kepatuhan Standar",
    service_net_h5: "Kontinuitas Bisnis & Ketahanan Sistem",
    service_net_h6: "Optimalisasi Performa Operasional",

    service_web_title: "Aplikasi Web Bisnis",
    service_web_desc: "Pengembangan aplikasi web kustom dan sistem manajemen terintegrasi untuk mempercepat dan mengoptimalkan performa bisnis.",
    service_web_h1: "Website Company Profile Korporat",
    service_web_h2: "Pengembangan Aplikasi Web Kustom",
    service_web_h3: "Sistem Manajemen Dokumen (DMS)",
    service_web_h4: "Sistem Pergudangan & Inventaris (WMS)",
    service_web_h5: "Sistem Survei & Manajemen Formulir",

    service_dr_title: "Pemulihan Bencana IT",
    service_dr_desc: "Analisis risiko, strategi pemulihan bencana, backup data otomatis, dan recovery sistem untuk keamanan operasional tanpa cela.",
    service_dr_h1: "Identifikasi Risiko & Analisis Dampak",
    service_dr_h2: "Rencana Pemulihan Bencana Menyeluruh",
    service_dr_h3: "Backup Data Otomatis & Terenkripsi",
    service_dr_h4: "Pemulihan Sistem Cepat (RTO/RPO)",
    service_dr_h5: "Evaluasi & Audit Berkala",

    service_proc_title: "Pengadaan Perangkat IT",
    service_proc_desc: "Layanan pengadaan perangkat lunak dan keras IT, akuisisi perangkat jaringan, lisensi resmi, dan vendor management.",
    service_proc_h1: "Pengadaan Perangkat Keras IT Enterprise",
    service_proc_h2: "Akuisisi & Pemasangan Perangkat Jaringan",
    service_proc_h3: "Lisensi Resmi & Pengadaan Perangkat Lunak",
    service_proc_h4: "Layanan Cloud & Manajemen Vendor",

    // Product Catalog
    catalog_badge: "Katalog Perangkat",
    catalog_title_prefix: "Perangkat & Hardware",
    catalog_title_highlight: "Enterprise",
    catalog_subtitle: "Penyediaan server, jaringan, laptop bisnis, dan lisensi software bergaransi resmi vendor.",
    cat_all: "Semua",
    cat_server: "Server & Storage",
    cat_network: "Networking",
    cat_laptop: "Laptop & PC",
    cat_license: "Lisensi Software",
    catalog_showing: "Menampilkan",
    catalog_item: "item",
    catalog_in_cat: "dalam kategori",
    catalog_empty: "Tidak ada produk dalam kategori ini.",
    product_price_label: "Harga",
    product_quote_btn: "Minta Penawaran",

    // Partners
    partners_badge: "Brand Partner",
    partners_title_prefix: "Mitra",
    partners_title_highlight: "Teknologi & Principal",
    partners_subtitle: "Dukungan 49+ brand ekosistem IT enterprise global dari infrastruktur jaringan, virtualisasi, disaster recovery, hingga sistem manajemen, ERP & email kolaborasi.",
    partner_cat_1: "Network, Hardware & Cyber Security",
    partner_cat_2: "Virtualization, Cloud & Backup Storage",
    partner_cat_3: "Enterprise Apps, Collaboration & IT Management",
    partner_official: "Partner Resmi",

    // Clients
    clients_badge: "Client Area",
    clients_title_prefix: "Dipercaya oleh",
    clients_title_highlight: "Perusahaan Enterprise",
    clients_subtitle: "KaryaSistem menjadi mitra integrasi teknologi bagi berbagai sektor industri di seluruh Indonesia.",
    client_stat_1: "Proyek IT Terintegrasi",
    client_stat_2: "SLA Ketersediaan Sistem",
    client_stat_3: "Sektor Industri",
    client_stat_4: "Tingkat Repeat Order",
    client_since: "Klien sejak",

    // Values / Keunggulan
    value_badge: "Keunggulan",
    value_title_prefix: "Mengapa Memilih",
    value_title_highlight: "KaryaSistem",
    value_subtitle: "Mitra integrasi teknologi terpercaya berorientasi pada keberlanjutan dan keandalan sistem bisnis Anda.",
    val_1_title: "Garansi Resmi Vendor",
    val_1_desc: "Setiap perangkat yang kami sediakan dilengkapi dengan garansi resmi produsen. Proteksi penuh mencakup penggantian suku cadang dan dukungan teknis resmi.",
    val_1_stat_label: "Garansi Rata-rata",
    val_1_f1: "Garansi Spareparts",
    val_1_f2: "Layanan On-site",
    val_1_f3: "Respon Cepat NBD",

    val_2_title: "Pengiriman Aman & Terjamin",
    val_2_desc: "Pengiriman ke seluruh jaringan operasional bisnis di Indonesia menggunakan kemasan khusus standar perangkat elektronik dan asuransi penuh.",
    val_2_stat_label: "Estimasi Pengiriman",
    val_2_f1: "Kemasan Standar IT",
    val_2_f2: "Asuransi Pengiriman",
    val_2_f3: "Pelacakan Terintegrasi",

    val_3_title: "Dukungan Purnajual Terpercaya",
    val_3_desc: "Komitmen purnajual berkelanjutan melalui tim teknisi berpengalaman untuk membantu instalasi, konfigurasi, serta pemeliharaan berkala sistem Anda.",
    val_3_stat_label: "Helpdesk Support",
    val_3_f1: "Dukungan Teknis",
    val_3_f2: "Pemeliharaan Berkala",
    val_3_f3: "Konsultasi IT",

    // Contact & Footer
    contact_badge: "Hubungi Kami",
    contact_title_prefix: "Konsultasikan",
    contact_title_highlight: "Kebutuhan IT Anda",
    contact_subtitle: "Tim teknis dan sales profesional kami siap membantu memberikan analisis dan penawaran terbaik untuk operasional perusahaan Anda.",
    contact_addr_label: "Alamat Kantor",
    contact_phone_label: "Telepon / WhatsApp",
    contact_email_label: "Email Resmi",
    contact_hours_label: "Jam Operasional",
    contact_sales_wa: "Hubungi Tim Sales via WhatsApp",
    contact_open_maps: "Buka Google Maps",
    footer_rights: "All rights reserved. System Integrator & Solusi IT Enterprise.",

    // Floating WA
    floating_wa_title: "Konsultasi IT via WA",
    floating_wa_desc: "Tim sales siap membantu kebutuhan perusahaan Anda",
  },
  en: {
    // Navbar
    nav_Layanan: "Services",
    nav_Produk: "Products",
    nav_Mitra: "Partners",
    nav_Klien: "Clients",
    nav_Keunggulan: "Advantages",
    nav_Kontak: "Contact",
    navbar_wa: "WhatsApp Chat",
    navbar_wa_mobile: "Consult via WhatsApp",
    lang_toggle: "Indonesia",

    // Hero
    hero_badge: "IT System Integrator & Solutions Provider",
    hero_title_prefix: "IT Solutions & Integration for",
    hero_title_highlight: "Your Business Operations",
    hero_title_suffix: "",
    hero_desc: "empowers enterprises to build, manage, and seamlessly integrate network infrastructure, enterprise hardware, IT security, and unified business applications.",
    cta_primary: "Free Consultation",
    cta_secondary: "View Services",
    trust_1: "100% Genuine Products & Official Warranty",
    trust_2: "Fast Nationwide Delivery & On-site Deployment",
    trust_3: "Reliable After-Sales Technical Support",
    stat_1: "Years Experience",
    stat_2: "Official Brand Partners",
    stat_3: "Client Satisfaction Rate",

    // Services
    services_badge: "Our Services",
    services_title_prefix: "Integrated IT",
    services_title_highlight: "Solutions & Services",
    services_subtitle: "End-to-end technology services spanning infrastructure planning, custom web business applications, IT disaster recovery, and enterprise procurement.",
    service_net_title: "Network & Infrastructure",
    service_net_desc: "Strategic design, deployment, network management, virtualization, and cloud solutions for enterprise business continuity.",
    service_net_h1: "Strategic Design, Planning & Deployment",
    service_net_h2: "Network & Infrastructure Management",
    service_net_h3: "Virtualization & Cloud Solutions",
    service_net_h4: "Security & Compliance Assurance",
    service_net_h5: "Business Continuity & Resilience",
    service_net_h6: "Operational Excellence & Optimization",

    service_web_title: "Web Application",
    service_web_desc: "Custom web applications and integrated management systems to accelerate and optimize enterprise workflow efficiency.",
    service_web_h1: "Corporate Company Profile Website",
    service_web_h2: "Custom Web Application Development",
    service_web_h3: "Document Management System (DMS)",
    service_web_h4: "Warehouse Management System (WMS)",
    service_web_h5: "Survey & Form Management System",

    service_dr_title: "IT Disaster Recovery",
    service_dr_desc: "Risk identification, disaster recovery planning, automated backups, and rapid system restoration for uninterrupted business operations.",
    service_dr_h1: "Risk Identification & Impact Analysis",
    service_dr_h2: "Comprehensive Recovery Plan",
    service_dr_h3: "Automated Data Backup",
    service_dr_h4: "Rapid System Recovery",
    service_dr_h5: "Continuous Improvement & Audit",

    service_proc_title: "Procurement",
    service_proc_desc: "Enterprise IT hardware & software procurement, network device acquisition, official licensing, and vendor management.",
    service_proc_h1: "IT Hardware Procurement Solutions",
    service_proc_h2: "Network Device Acquisition & Deployment",
    service_proc_h3: "Software Licensing & Procurement",
    service_proc_h4: "Cloud Services & Vendor Management",

    // Product Catalog
    catalog_badge: "Hardware Catalog",
    catalog_title_prefix: "Enterprise Hardware &",
    catalog_title_highlight: "Equipment",
    catalog_subtitle: "Provisioning enterprise servers, networking equipment, business laptops, and officially licensed software.",
    cat_all: "All",
    cat_server: "Server & Storage",
    cat_network: "Networking",
    cat_laptop: "Laptop & PC",
    cat_license: "Software Licenses",
    catalog_showing: "Showing",
    catalog_item: "items",
    catalog_in_cat: "in category",
    catalog_empty: "No products found in this category.",
    product_price_label: "Price",
    product_quote_btn: "Request Quote",

    // Partners
    partners_badge: "Brand Partners",
    partners_title_prefix: "Principal &",
    partners_title_highlight: "Technology Partners",
    partners_subtitle: "Backed by 49+ global enterprise IT ecosystem brands across networking, virtualization, disaster recovery, ERP, and collaboration suites.",
    partner_cat_1: "Network, Hardware & Cyber Security",
    partner_cat_2: "Virtualization, Cloud & Backup Storage",
    partner_cat_3: "Enterprise Apps, Collaboration & IT Management",
    partner_official: "Official Partner",

    // Clients
    clients_badge: "Client Area",
    clients_title_prefix: "Trusted by",
    clients_title_highlight: "Enterprise Companies",
    clients_subtitle: "KaryaSistem is the trusted technology integration partner across diverse industry sectors throughout Indonesia.",
    client_stat_1: "Completed IT Projects",
    client_stat_2: "System SLA Uptime",
    client_stat_3: "Industry Sectors",
    client_stat_4: "Repeat Order Rate",
    client_since: "Client since",

    // Values / Keunggulan
    value_badge: "Why Choose Us",
    value_title_prefix: "Why Choose",
    value_title_highlight: "KaryaSistem",
    value_subtitle: "Your trusted technology integration partner committed to the resilience and reliability of your business systems.",
    val_1_title: "Official Vendor Warranty",
    val_1_desc: "Every device we provide comes with an official manufacturer warranty, comprehensive spare parts replacement, and certified technical support.",
    val_1_stat_label: "Average Warranty",
    val_1_f1: "Spare Parts Warranty",
    val_1_f2: "On-site Service",
    val_1_f3: "NBD Response",

    val_2_title: "Safe & Insured Delivery",
    val_2_desc: "Nationwide delivery across Indonesia with specialized electronic-grade packaging and comprehensive transit insurance.",
    val_2_stat_label: "Estimated Delivery",
    val_2_f1: "Standard IT Packaging",
    val_2_f2: "Transit Insurance",
    val_2_f3: "Integrated Tracking",

    val_3_title: "Reliable After-Sales Support",
    val_3_desc: "Continuous after-sales commitment by certified technicians for deployment, configuration, and periodic preventive maintenance.",
    val_3_stat_label: "Helpdesk Support",
    val_3_f1: "Technical Support",
    val_3_f2: "Preventive Maintenance",
    val_3_f3: "IT Consultation",

    // Contact & Footer
    contact_badge: "Contact Us",
    contact_title_prefix: "Consult Your",
    contact_title_highlight: "Enterprise IT Needs",
    contact_subtitle: "Our technical and sales specialists are ready to provide tailored IT consultations and proposals for your company.",
    contact_addr_label: "Office Address",
    contact_phone_label: "Phone / WhatsApp",
    contact_email_label: "Official Email",
    contact_hours_label: "Business Hours",
    contact_sales_wa: "Contact Sales via WhatsApp",
    contact_open_maps: "Open Google Maps",
    footer_rights: "All rights reserved. System Integrator & Enterprise IT Solutions.",

    // Floating WA
    floating_wa_title: "IT Consultation via WA",
    floating_wa_desc: "Our sales team is ready to assist your company's needs",
  }
};

interface LocaleContextProps {
  locale: string;
  setLocale: (loc: string) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<string>('id');

  // Detect browser language or stored preference on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('karyasistem-locale');
      if (stored === 'id' || stored === 'en') {
        setLocale(stored);
        return;
      }
      const navLang = navigator.language || (navigator as any).userLanguage || '';
      const detected = navLang.toLowerCase().startsWith('en') ? 'en' : 'id';
      setLocale(detected);
    } catch {
      setLocale('id');
    }
  }, []);

  const changeLocale = useCallback((newLoc: string) => {
    const validLoc = newLoc === 'en' ? 'en' : 'id';
    setLocale(validLoc);
    try {
      localStorage.setItem('karyasistem-locale', validLoc);
    } catch {
      // ignore
    }
  }, []);

  const toggleLocale = useCallback(() => {
    changeLocale(locale === 'id' ? 'en' : 'id');
  }, [locale, changeLocale]);

  const t = useCallback((key: string): string => {
    const dict = dictionaries[locale] || dictionaries.id;
    return dict[key] || dictionaries.id[key] || key;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return ctx;
};




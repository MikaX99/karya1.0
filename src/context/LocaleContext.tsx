"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export const dictionaries: Record<string, Record<string, string>> = {
  id: {
    // Navbar
    nav_Tentang: "Tentang",
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

    // About
    about_title_prefix: "About",
    about_title_highlight: "Karya Sistem",
    about_tagline: "Technology Solutions Built Around Your Business",
    about_pillar_1_title: "System Integrator & IT Provider",
    about_pillar_1_desc: "Solusi teknologi terpadu untuk meningkatkan efisiensi operasional, keamanan, dan keberlanjutan bisnis.",
    about_pillar_2_title: "Layanan Terintegrasi End-to-End",
    about_pillar_2_desc: "Konsultasi, pengadaan teknologi, implementasi, integrasi sistem, hingga managed support berkelanjutan.",
    about_pillar_3_title: "Vendor-Agnostic & Custom-Fit",
    about_pillar_3_desc: "Tidak terikat satu brand; solusi dipilih murni berbasis kebutuhan spesifik dan ROI jangka panjang Anda.",

    // Services
    services_badge: "Layanan Kami",
    services_title_prefix: "Solusi & Layanan",
    services_title_highlight: "IT Terintegrasi",
    services_subtitle: "Layanan teknologi komprehensif mulai dari infrastruktur IT, aplikasi bisnis, keamanan siber, hingga managed IT terpadu.",
    
    // Card 1: IT Infrastructure & Procurement
    service_infra_title: "IT Infrastructure & Procurement",
    service_infra_desc: "Perencanaan, pengadaan, implementasi, dan pengelolaan kebutuhan IT untuk mendukung operasional bisnis yang andal dan scalable.",
    service_infra_h1: "IT Infrastructure Design & Deployment",
    service_infra_h2: "Network & Infrastructure",
    service_infra_h3: "Server, Storage & Backup",
    service_infra_h4: "IT Hardware & Devices",
    service_infra_h5: "Software & License Procurement",
    service_infra_h6: "CCTV, UPS & Deployment",
    service_infra_h7: "Backup & Disaster Recovery",

    // Card 2: Business Application & Digital Solution
    service_app_title: "Business Application & Digital Solution",
    service_app_desc: "Solusi aplikasi dan digital untuk membantu perusahaan mengelola proses bisnis, meningkatkan efisiensi, dan mempercepat transformasi digital.",
    service_app_h1: "ERP Implementation & Integration",
    service_app_h2: "AI Solution & Automation",
    service_app_h3: "E-Commerce Development",
    service_app_h4: "Custom Web Application",
    service_app_h5: "Business Process Automation",

    // Card 3: Cybersecurity
    service_sec_title: "Cybersecurity",
    service_sec_desc: "Solusi keamanan untuk melindungi perangkat, jaringan, sistem, dan data perusahaan dari berbagai ancaman siber.",
    service_sec_h1: "Endpoint Security & Protection",
    service_sec_h2: "Firewall & Network Security",
    service_sec_h3: "Security Assessment",
    service_sec_h4: "Security Platform & Solution",
    service_sec_h5: "Vulnerability & Pentest",
    service_sec_h6: "Microsoft 365 Security",

    // Card 4: Managed IT & Support
    service_mgmt_title: "Managed IT & Support",
    service_mgmt_desc: "Layanan support, maintenance, dan monitoring untuk menjaga sistem IT tetap optimal, aman, dan berjalan secara berkelanjutan.",
    service_mgmt_h1: "IT Support & Helpdesk",
    service_mgmt_h2: "IT Infrastructure Maintenance",
    service_mgmt_h3: "Server & Network Monitoring",
    service_mgmt_h4: "Cloud & Productivity Platform Support",
    service_mgmt_h5: "ERP Support & Maintenance",
    service_mgmt_h6: "Preventive Maintenance",

    // Hotline format
    hotline_office: "Hotline / WA",
    hotline_support: "Support",
    hotline_info: "Info",

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
    clients_subtitle: "Karya Sistem menjadi mitra integrasi teknologi bagi berbagai sektor industri di seluruh Indonesia.",
    client_stat_1: "Proyek IT Terintegrasi",
    client_stat_2: "SLA Ketersediaan Sistem",
    client_stat_3: "Sektor Industri",
    client_stat_4: "Tingkat Repeat Order",
    client_since: "Klien sejak",

    // Values / Keunggulan
    value_badge: "Keunggulan",
    value_title_prefix: "Mengapa Memilih",
    value_title_highlight: "Karya Sistem",
    value_subtitle: "Mitra integrasi teknologi terpercaya berorientasi pada keberlanjutan, efisiensi, dan keandalan sistem bisnis Anda.",
    val_1_title: "Easy Integrations",
    val_1_tagline: "Integrasi Mulus & Sistem Terpadu",
    val_1_desc: "Kami menyediakan solusi teknologi end-to-end yang menyatu tanpa hambatan dengan infrastruktur jaringan, hardware, dan software Anda yang ada. Dirancang untuk keandalan maksimal dan konektivitas aman, layanan kami memastikan kelancaran operasional bisnis dengan dukungan teknis 24/7.",
    val_1_stat: "24/7",
    val_1_stat_label: "Dukungan Integrasi",

    val_2_title: "Smart Deployment",
    val_2_tagline: "Implementasi Efisien & Skalabilitas Fleksibel",
    val_2_desc: "Dirancang untuk implementasi cepat tanpa hambatan (zero-friction) demi mendukung ekspansi lingkungan IT yang fleksibel. Dengan cakupan strategis di berbagai lokasi data center, kami menyederhanakan skalabilitas jaringan, server, dan sumber daya cloud seiring pertumbuhan bisnis Anda.",
    val_2_stat: "Zero-Friction",
    val_2_stat_label: "Skalabilitas Cepat",

    val_3_title: "Realtime Monitoring",
    val_3_tagline: "Wawasan Performa & Optimalisasi Berkelanjutan",
    val_3_desc: "Pantau dan tingkatkan performa server, jaringan, serta aplikasi bisnis Anda melalui analitik cerdas. Dengan pelaporan utilisasi sumber daya berkala dan rekomendasi optimalisasi, Anda memegang kendali penuh atas visibilitas dan stabilitas infrastruktur IT Anda.",
    val_3_stat: "Real-time",
    val_3_stat_label: "Visibilitas & Analitik",

    // Contact & Footer
    about_badge: "Profil & Kontak Resmi",
    contact_badge: "Profil & Kontak Resmi",
    contact_title_prefix: "Mitra Solusi IT Terpercaya untuk",
    contact_title_highlight: "Skalabilitas Bisnis Anda",
    contact_subtitle: "Mengenal PT Karya Sistem Teknologi dan akses komunikasi langsung untuk perencanaan infrastruktur teknologi perusahaan Anda.",
    hotline_header: "Hotline Layanan & Kantor Resmi",
    about_card_badge: "Profil Perusahaan",
    about_card_title: "About Karya Sistem",
    about_card_tagline: "Technology Solutions Built Around Your Business",
    about_card_p1_lead: "PT Karya Sistem Teknologi",
    about_card_p1_text: "adalah System Integrator dan IT Solution Provider yang menyediakan solusi teknologi terintegrasi untuk membantu perusahaan meningkatkan efisiensi operasional, keamanan, dan keberlanjutan bisnis.",
    about_card_p2: "Kami menggabungkan konsultasi, pengadaan teknologi, implementasi, integrasi, dan dukungan IT dalam satu layanan terintegrasi. Solusi kami mencakup infrastruktur IT, business applications, cybersecurity, IT procurement, serta managed IT services.",
    about_card_p3: "Kami memahami bahwa setiap perusahaan memiliki kebutuhan dan proses bisnis yang berbeda. Karena itu, kami tidak terbatas pada satu platform tertentu. Kami membantu customer menentukan teknologi yang paling sesuai berdasarkan kondisi infrastruktur serta tujuan jangka panjang perusahaan.",
    about_badge_si: "✓ System Integrator",
    about_badge_it: "✓ IT Solution Provider",
    about_badge_agnostic: "✓ Vendor-Agnostic",
    hotline_card_badge: "Direct Hotline & Kantor",
    hotline_card_title: "Hotline Layanan & Kantor Resmi",
    hotline_label_wa: "Hotline / WA:",
    hotline_label_support: "Support:",
    hotline_label_info: "Info:",
    hotline_label_hours: "Jam Operasional:",
    footer_tagline: "Solusi & Integrasi IT Enterprise Indonesia",
    contact_cta_wa: "Konsultasi Solusi via WhatsApp",
    contact_addr_label: "Alamat Kantor",
    contact_phone_label: "Telepon / WhatsApp",
    contact_email_label: "Email Resmi",
    contact_hours_label: "Jam Operasional",
    contact_sales_wa: "Hubungi Tim Sales via WhatsApp",
    contact_open_maps: "Buka Google Maps",
    footer_rights: "All rights reserved.",

    // Floating WA
    floating_wa_title: "Konsultasi IT via WA",
    floating_wa_desc: "Tim sales siap membantu kebutuhan perusahaan Anda",
  },
  en: {
    // Navbar
    nav_Tentang: "About",
    nav_Layanan: "Services",
    nav_Produk: "Products",
    nav_Mitra: "Partners",
    nav_Klien: "Clients",
    nav_Keunggulan: "Why Us",
    nav_Kontak: "Contact",
    navbar_wa: "WhatsApp Chat",
    navbar_wa_mobile: "Consult via WhatsApp",
    lang_toggle: "Indonesia",

    // Hero
    hero_badge: "Enterprise IT Solutions & Integration",
    hero_title_prefix: "IT Solutions & System Integration for",
    hero_title_highlight: "Modern Enterprises",
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

    // About
    about_title_prefix: "About",
    about_title_highlight: "Karya Sistem",
    about_tagline: "Technology Solutions Built Around Your Business",
    about_pillar_1_title: "System Integrator & IT Provider",
    about_pillar_1_desc: "Integrated technology solutions empowering operational efficiency, security, and long-term business sustainability.",
    about_pillar_2_title: "End-to-End Integrated Services",
    about_pillar_2_desc: "Consultancy, procurement, deployment, seamless integration, through ongoing managed IT support.",
    about_pillar_3_title: "Vendor-Agnostic & Custom-Fit",
    about_pillar_3_desc: "Not tied to any single vendor; solutions are engineered around your specific infrastructure & ROI goals.",

    // Services
    services_badge: "Our Services",
    services_title_prefix: "Integrated IT",
    services_title_highlight: "Solutions & Services",
    services_subtitle: "Comprehensive technology services spanning IT infrastructure, business applications, cybersecurity, and integrated managed services.",
    
    // Card 1: IT Infrastructure & Procurement
    service_infra_title: "IT Infrastructure & Procurement",
    service_infra_desc: "Planning, procurement, implementation, and management of IT requirements to support reliable and scalable business operations.",
    service_infra_h1: "IT Infrastructure Design & Deployment",
    service_infra_h2: "Network & Infrastructure",
    service_infra_h3: "Server, Storage & Backup",
    service_infra_h4: "IT Hardware & Devices",
    service_infra_h5: "Software & License Procurement",
    service_infra_h6: "CCTV, UPS & Deployment",
    service_infra_h7: "Backup & Disaster Recovery",

    // Card 2: Business Application & Digital Solution
    service_app_title: "Business Application & Digital Solution",
    service_app_desc: "Application and digital solutions to help enterprises manage business processes, boost efficiency, and accelerate digital transformation.",
    service_app_h1: "ERP Implementation & Integration",
    service_app_h2: "AI Solution & Automation",
    service_app_h3: "E-Commerce Development",
    service_app_h4: "Custom Web Application",
    service_app_h5: "Business Process Automation",

    // Card 3: Cybersecurity
    service_sec_title: "Cybersecurity",
    service_sec_desc: "Security solutions to protect enterprise devices, networks, systems, and sensitive data from modern cyber threats.",
    service_sec_h1: "Endpoint Security & Protection",
    service_sec_h2: "Firewall & Network Security",
    service_sec_h3: "Security Assessment",
    service_sec_h4: "Security Platform & Solution",
    service_sec_h5: "Vulnerability & Pentest",
    service_sec_h6: "Microsoft 365 Security",

    // Card 4: Managed IT & Support
    service_mgmt_title: "Managed IT & Support",
    service_mgmt_desc: "Support, maintenance, and monitoring services to ensure IT systems remain optimal, secure, and running continuously.",
    service_mgmt_h1: "IT Support & Helpdesk",
    service_mgmt_h2: "IT Infrastructure Maintenance",
    service_mgmt_h3: "Server & Network Monitoring",
    service_mgmt_h4: "Cloud & Productivity Platform Support",
    service_mgmt_h5: "ERP Support & Maintenance",
    service_mgmt_h6: "Preventive Maintenance",

    // Hotline format
    hotline_office: "Hotline / WA",
    hotline_support: "Support",
    hotline_info: "Info",

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
    clients_subtitle: "Karya Sistem is the trusted technology integration partner across diverse industry sectors throughout Indonesia.",
    client_stat_1: "Completed IT Projects",
    client_stat_2: "System SLA Uptime",
    client_stat_3: "Industry Sectors",
    client_stat_4: "Repeat Order Rate",
    client_since: "Client since",

    // Values / Keunggulan
    value_badge: "Why Choose Us",
    value_title_prefix: "Why Choose",
    value_title_highlight: "Karya Sistem",
    value_subtitle: "Your trusted technology integration partner committed to the scalability, efficiency, and reliability of your business systems.",
    val_1_title: "Easy Integrations",
    val_1_tagline: "Seamless Integration & Synchronized Systems",
    val_1_desc: "We provide end-to-end technology solutions that integrate effortlessly with your existing infrastructure across networks, hardware, and software. Built for maximum reliability and secure connectivity, our services ensure smooth operational continuity backed by 24/7 technical support.",
    val_1_stat: "24/7",
    val_1_stat_label: "Integration Support",

    val_2_title: "Smart Deployment",
    val_2_tagline: "Efficient Implementation & Scalable Growth",
    val_2_desc: "Designed for rapid, zero-friction implementation to enable flexible expansion of your IT environment. With strategic coverage across multiple data center locations, we simplify the scaling of your network, servers, and cloud resources as your business expands.",
    val_2_stat: "Zero-Friction",
    val_2_stat_label: "Rapid Scalability",

    val_3_title: "Realtime Monitoring",
    val_3_tagline: "Performance Insights & Continuous Optimization",
    val_3_desc: "Track and elevate the performance of your servers, networks, and applications with actionable analytics. Through detailed resource reporting and optimization recommendations, you maintain total visibility and complete control over your IT infrastructure.",
    val_3_stat: "Real-time",
    val_3_stat_label: "Analytics & Visibility",

    // Contact & Footer
    about_badge: "Profile & Official Channels",
    contact_badge: "Profile & Official Channels",
    contact_title_prefix: "Trusted IT Solutions Partner for",
    contact_title_highlight: "Your Business Scalability",
    contact_subtitle: "Learn more about PT Karya Sistem Teknologi and get direct communication access for your enterprise IT infrastructure planning.",
    hotline_header: "Direct Hotline & Official Office",
    about_card_badge: "Company Profile",
    about_card_title: "About Karya Sistem",
    about_card_tagline: "Technology Solutions Built Around Your Business",
    about_card_p1_lead: "PT Karya Sistem Teknologi",
    about_card_p1_text: "is a trusted System Integrator and IT Solution Provider providing integrated technology solutions to empower enterprises with enhanced operational efficiency, robust cybersecurity, and sustainable growth.",
    about_card_p2: "We combine strategic consulting, hardware procurement, implementation, systems integration, and ongoing IT support into one seamless service. Our solutions encompass enterprise IT infrastructure, business applications, cybersecurity, procurement, and managed IT services.",
    about_card_p3: "We recognize that every enterprise has distinct operational workflows and technological requirements. As a vendor-agnostic partner, we recommend and implement the optimal technology tailored to your infrastructure realities and long-term business goals.",
    about_badge_si: "✓ System Integrator",
    about_badge_it: "✓ IT Solution Provider",
    about_badge_agnostic: "✓ Vendor-Agnostic",
    hotline_card_badge: "Direct Hotline & Office",
    hotline_card_title: "Direct Service Hotline & Official Office",
    hotline_label_wa: "Hotline / WA:",
    hotline_label_support: "Support:",
    hotline_label_info: "Info:",
    hotline_label_hours: "Business Hours:",
    footer_tagline: "Enterprise IT Solutions & Integration Indonesia",
    contact_cta_wa: "Consult Solutions via WhatsApp",
    contact_addr_label: "Office Address",
    contact_phone_label: "Phone / WhatsApp",
    contact_email_label: "Official Email",
    contact_hours_label: "Business Hours",
    contact_sales_wa: "Contact Sales via WhatsApp",
    contact_open_maps: "Open Google Maps",
    footer_rights: "All rights reserved.",

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
    if (dict && typeof dict[key] === 'string') {
      return dict[key];
    }
    if (dictionaries.id && typeof dictionaries.id[key] === 'string') {
      return dictionaries.id[key];
    }
    return key;
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

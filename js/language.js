const translations = {

    id: {

        home: "Beranda",
        about: "Tentang Kami",
        product: "Produk",
        advantages: "Keunggulan",
        capacity: "Kapasitas",
        contact: "Kontak",
        contactBtn: "Hubungi Kami",
        language: "Bahasa",
        qualityBadge:"Kualitas Alami",
        heroLine1:"MENGKUDU",
        heroLine2:"INDONESIA",
        heroSubtitle:"KUALITAS ALAMI, SUPPLY TERJAMIN",
        heroDescription:"<b>Kami menyediakan buah mengkudu segar berkualitas <br>tinggi dengan sistem pengelolaan modern <br>dan berkelanjutan.</b>",
        viewProduct:"Lihat Produk",
        certificationLine1: "Sertifikasi",
        certificationLine2: "Organik",
        certificationLine3: "Indonesia",
        feature1Title:"100% Alami",
        feature1Desc:"Tanpa bahan kimia",

        feature2Title:"Kualitas Terjamin",
        feature2Desc:"Kontrol kualitas ketat",

        feature3Title:"Kemitraan Jangka Panjang",
        feature3Desc:"Bersama petani lokal",
    },

    en: {

        home: "Home",
        about: "About Us",
        product: "Products",
        advantages: "Advantages",
        capacity: "Capacity",
        contact: "Contact",
        contactBtn: "Contact Us",
        language: "Language",
        qualityBadge:"Natural Quality",
        heroLine1:"INDONESIAN",
        heroLine2:"NONI",
        heroSubtitle:"NATURAL QUALITY, GUARANTEED SUPPLY",
        heroDescription:"<b>We provide premium fresh noni fruits through<br>modern and sustainable farming practices.</b>",
        viewProduct:"View Products",
        certificationLine1: "Certified",
        certificationLine2: "Organic",
        certificationLine3: "Indonesia",
        feature1Title:"100% Natural",
        feature1Desc:"No chemicals added",

        feature2Title:"Guaranteed Quality",
        feature2Desc:"Strict quality control",

        feature3Title:"Long-term Partnership",
        feature3Desc:"Working with local farmers",
    },

    ko: {

        home: "홈",
        about: "회사 소개",
        product: "제품",
        advantages: "강점",
        capacity: "생산 능력",
        contact: "문의",
        contactBtn: "문의하기",
        language: "언어",
        qualityBadge: "천연 품질",
        heroLine1: "인도네시아",
        heroLine2: "노니",
        heroSubtitle: "천연 품질, 안정적인 공급",
        heroDescription: "<b>현대적이고 지속 가능한 재배 시스템을 통해 고품질의<br>신선한 노니를 안정적으로 공급합니다.</b>",
        viewProduct: "제품 보기",
        certificationLine1: "인증",
        certificationLine2: "유기농",
        certificationLine3: "인도네시아",
        feature1Title:"100% 천연",
        feature1Desc:"화학 첨가물 없음",

        feature2Title:"품질 보장",
        feature2Desc:"엄격한 품질 관리",

        feature3Title:"장기 파트너십",
        feature3Desc:"지역 농가와 협력",
    },

    hi: {

        home: "होम",
        about: "हमारे बारे में",
        product: "उत्पाद",
        advantages: "विशेषताएँ",
        capacity: "क्षमता",
        contact: "संपर्क",
        contactBtn: "संपर्क करें",
        language: "भाषा",
        qualityBadge: "प्राकृतिक गुणवत्ता",
        heroLine1: "इंडोनेशियाई",
        heroLine2: "नोनी",
        heroSubtitle: "प्राकृतिक गुणवत्ता, सुनिश्चित आपूर्ति",
        heroDescription: "<b>हम आधुनिक और टिकाऊ खेती प्रणाली के माध्यम से उच्च<br>गुणवत्ता वाले ताज़े नोनी फल की विश्वसनीय आपूर्ति प्रदान करते हैं।</b>",
        viewProduct: "उत्पाद देखें",
        certificationLine1: "प्रमाणित",
        certificationLine2: "जैविक",
        certificationLine3: "इंडोनेशिया",
        feature1Title:"100% प्राकृतिक",
        feature1Desc:"रसायन मुक्त",

        feature2Title:"गुणवत्ता की गारंटी",
        feature2Desc:"कड़ी गुणवत्ता जाँच",

        feature3Title:"दीर्घकालिक साझेदारी",
        feature3Desc:"स्थानीय किसानों के साथ",
    }

};

function changeLanguage(lang){

    document.querySelectorAll("[data-lang]").forEach(item=>{

        const key=item.getAttribute("data-lang");

        item.innerHTML=translations[lang][key];

    });

    document.getElementById("current-language").innerHTML=translations[lang].language;

    localStorage.setItem("language",lang);

    const cert = document.querySelector(".certification");

    cert.classList.remove("korean","hindi");

    if(lang==="ko"){

        cert.classList.add("korean");

    }

    if(lang==="hi"){

        cert.classList.add("hindi");

    }

}

window.onload=()=>{

    const savedLanguage=localStorage.getItem("language") || "id";

    changeLanguage(savedLanguage);

}


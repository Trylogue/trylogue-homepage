function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 多言語辞書
const translations = {
    ja: {
        title: "trylogue",
        nav_about: "About",
        nav_features: "Features",
        nav_apps: "Apps",
        nav_contact: "Contact",
        hero_title: "挑戦の記録を、もっと楽しく。",
        hero_subtitle: "trylogueはあなたの成長を見える化し、毎日の挑戦をサポートします。",
        hero_button: "もっと知る",
        about_title: "About",
        about_text: "trylogueは、挑戦や習慣の記録を通じてあなたの目標達成を支援するサービスです。振り返りや分析機能を通して、日々の小さな成長を実感できます。",
        features_title: "Features",
        features_item1: "目標の記録と進捗管理",
        features_item2: "睡眠・運動・学習データの可視化",
        features_item3: "成長をモチベーションに変えるフィードバック",
        apps_title: "Download Apps",
        app_sleep: "睡眠アプリ（ネムログ）",
        app_michi: "ミチログ",
        contact_title: "Contact",
        contact_text: "ご質問やご相談は <a href='mailto:info@trylogue.com'>info@trylogue.com</a> まで"
    },
    en: {
        title: "trylogue",
        nav_about: "About",
        nav_features: "Features",
        nav_apps: "Apps",
        nav_contact: "Contact",
        hero_title: "Make recording challenges more fun.",
        hero_subtitle: "trylogue visualizes your growth and supports your daily challenges.",
        hero_button: "Learn More",
        about_title: "About",
        about_text: "trylogue is a service that helps you achieve your goals by recording your challenges and habits. Through review and analysis features, you can feel your small daily growth.",
        features_title: "Features",
        features_item1: "Record goals and track progress",
        features_item2: "Visualize sleep, exercise, and study data",
        features_item3: "Turn growth into motivation with feedback",
        apps_title: "Download Apps",
        app_sleep: "Sleep App (Nemulog)",
        app_michi: "Michilog",
        contact_title: "Contact",
        contact_text: "For inquiries, contact <a href='mailto:info@trylogue.com'>info@trylogue.com</a>"
    }
};

// 言語切替
function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

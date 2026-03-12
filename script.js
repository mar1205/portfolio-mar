const translations = {
    en: {
        role: "Web Developer | PHP | Laravel | JavaScript",
        aboutTitle: "About Me",
        aboutText: "I completed a Web Engineering vocational training program where I studied HTML, CSS, JavaScript, PHP, Laravel and SQL. I continue improving my skills daily and am currently developing a language learning web application as a personal project.",
        projectsTitle: "Projects",
        projectsText: "Japanese Learning Web Application (Laravel / JavaScript / MySQL",
        contactTitle: "Contact"
    },
    jp: {
        role: "Webエンジニア｜PHP｜Laravel｜JavaScript",
        aboutTitle: "自己紹介",
        aboutText: "職業訓練のWEB系エンジニア養成科を修了し、HTML / CSS / JavaScript / PHP / Laravel / SQL を学びました。現在もスキル向上のために日々学習を続けており、個人プロジェクトとして語学学習用Webアプリを開発しています。",
        projectsTitle: "制作実績",
        projectsText: "学生管理システム（開発中）",
        contactTitle: "連絡先"
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.getElementById("role").innerText = translations[lang].role;
    document.getElementById("about-title").innerText = translations[lang].aboutTitle;
    document.getElementById("about-text").innerText = translations[lang].aboutText;
    document.getElementById("projects-title").innerText = translations[lang].projectsTitle;
    document.getElementById("projects-text").innerText = translations[lang].projectsText;
    document.getElementById("contact-title").innerText = translations[lang].contactTitle;
}

// default language
setLanguage("jp");

const translations = {
    en: {
        role: "Web Developer | PHP | Laravel | JavaScript",
        aboutTitle: "About Me",
        aboutText: "I am a web developer focused on PHP, Laravel, and JavaScript. I am currently building web applications and seeking opportunities in the IT industry.",
        projectsTitle: "Projects",
        projectsText: "Student Management System (In development)",
        contactTitle: "Contact"
    },
    jp: {
        role: "Webエンジニア｜PHP｜Laravel｜JavaScript",
        aboutTitle: "自己紹介",
        aboutText: "PHP、Laravel、JavaScriptを中心に学習・開発を行っているWebエンジニアです。現在、IT業界でのキャリアを目指して開発に取り組んでいます。",
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

// idioma padrão
setLanguage("en");

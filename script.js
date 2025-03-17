function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}

const langData = {
    id: {
        name: "Moh. Rio Rizal Cashmal",
        job: "IT Support berusia 25 tahun 🖥️ berbasis Tangerang 🇮🇩 dengan pengalaman pekerja lepas, Senang berkreasi dalam bidang <i>Desain Grafis</i> dan <i>Edit Video</i>.",
        tagline: "Mari cari tahu masalahnya dan bersenang-senang!",
        note: "Semua yang ada disini hanya untuk hiburan sementara.",
        experience: "Pengalaman",
        experiencedesc1: "Ha lala indo lala indo, lalo lala indo, lalo lala indo, Ha lalo lala indo, lalo lala indo, lalo lala indo, lalo lala indo.",
        experiencedesc2: "Ha lala indo lala indo, lalo lala indo, lalo lala indo, Ha lalo lala indo, lalo lala indo, lalo lala indo, lalo lala indo.",
        experiencedesc3: "Ha lala indo lala indo, lalo lala indo, lalo lala indo, Ha lalo lala indo, lalo lala indo, lalo lala indo, lalo lala indo.",
        experiencedesc4: "Ha lala indo lala indo, lalo lala indo, lalo lala indo, Ha lalo lala indo, lalo lala indo, lalo lala indo, lalo lala indo.",
        contact: "𝒌𝒐𝒏𝒕𝒂𝒌 𝒂𝒋𝒂,",
        contact1: "𝒷𝑒𝒷𝒶𝓈!"
    },
    en: {
        name: "Moh. Rio Rizal Cashmal",
        job: "IT Support 25 years old 🖥️ based in Tangerang 🇮🇩 with freelance experience, Love to be creative in <i>Graphic Design</i> and <i>Video Editing</i>.",
        tagline: "Let's find out the problem and have fun!",
        note: "Everything here is just for temporary entertainment.",
        experience: "Experience",
        experiencedesc1: "Ya lala lolo lala lolo, lalo lala lolo, lalo lala lolo, ya lalo lala lolo, lalo lala lolo, lalo lala lolo, lalo lala lolo.",
        experiencedesc2: "Ya lala lolo lala lolo, lalo lala lolo, lalo lala lolo, ya lalo lala lolo, lalo lala lolo, lalo lala lolo, lalo lala lolo.",
        experiencedesc3: "Ya lala lolo lala lolo, lalo lala lolo, lalo lala lolo, ya lalo lala lolo, lalo lala lolo, lalo lala lolo, lalo lala lolo.",
        experiencedesc4: "Ya lala lolo lala lolo, lalo lala lolo, lalo lala lolo, ya lalo lala lolo, lalo lala lolo, lalo lala lolo, lalo lala lolo.",
        contact: "𝑱𝒖𝒔𝒕 𝒄𝒐𝒏𝒕𝒂𝒄𝒕,",
        contact1: "𝒾𝓉'𝓈 𝒻𝓇𝑒𝑒!"
    }
};

function toggleLanguage() {
    let toggle = document.getElementById("langToggle");
    let lang = toggle.checked ? 'en' : 'id';

    document.getElementById("profileName").innerHTML = langData[lang].name;
    document.getElementById("profileJob").innerHTML = langData[lang].job;
    document.getElementById("profileTagline").innerHTML = langData[lang].tagline;
    document.getElementById("profileNote").innerHTML = langData[lang].note;
    document.getElementById("profileExperience").innerHTML = langData[lang].experience;
    document.getElementById("experienceDesc1").innerHTML = langData[lang].experiencedesc1;
    document.getElementById("experienceDesc2").innerHTML = langData[lang].experiencedesc2;
    document.getElementById("experienceDesc3").innerHTML = langData[lang].experiencedesc3;
    document.getElementById("experienceDesc4").innerHTML = langData[lang].experiencedesc4;
    document.getElementById("contactTitle").innerHTML = langData[lang].contact;
    document.getElementById("contactTitle1").innerHTML = langData[lang].contac1;
}

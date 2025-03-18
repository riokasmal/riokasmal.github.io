tailwind.config = {
    darkMode: 'class'
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}

function toggleLanguage() {
    const langDropdown = document.getElementById("langDropdown");
    const selectedLang = langDropdown.value;

    if (selectedLang === "id") {
        document.getElementById("profileName").innerHTML = "Moh. Rio Rizal Cashmal";
        document.getElementById("profileJob").innerHTML = "IT Support berusia 25 tahun 🖥️ berbasis Tangerang 🇮🇩 dengan pengalaman pekerja lepas, Senang berkreasi dalam bidang <i>Desain Grafis</i> dan <i>Edit Video</i>.";
        document.getElementById("profileTagline").innerHTML = "<span class='highlight'>Mari cari tahu masalahnya dan bersenang-senang!</span>";
        document.getElementById("profileNote").innerHTML = "Semua yang ada disini hanya untuk hiburan sementara.";
        document.getElementById("profileExperience").innerHTML = "Pengalaman";
        document.getElementById("experienceDesc1").innerHTML = "Ha lala indo lala indo, lalo lala indo, lalo lala indo, Ha lalo lala indo, lalo lala indo, lalo lala indo, lalo lala indo.";
        document.getElementById("experienceDesc2").innerHTML = "Ha lala indo lala indo, lalo lala indo, lalo lala indo, Ha lalo lala indo, lalo lala indo, lalo lala indo, lalo lala indo.";
        document.getElementById("experienceDesc3").innerHTML = "Ha lala indo lala indo, lalo lala indo, lalo lala indo, Ha lalo lala indo, lalo lala indo, lalo lala indo, lalo lala indo.";
        document.getElementById("experienceDesc4").innerHTML = "Ha lala indo lala indo, lalo lala indo, lalo lala indo, Ha lalo lala indo, lalo lala indo, lalo lala indo, lalo lala indo.";
        document.getElementById("contact").innerHTML = "𝒌𝒐𝒏𝒕𝒂𝒌 𝒂𝒋𝒂,";
        document.getElementById("contact1").innerHTML = "𝒷𝑒𝒷𝒶𝓈!";
    } else {
        document.getElementById("profileName").innerHTML = "Moh. Rio Rizal Cashmal";
        document.getElementById("profileJob").innerHTML = "IT Support 25 years old 🖥️ based in Tangerang 🇮🇩 with freelance experience, Love to be creative in <i>Graphic Design</i> and <i>Video Editing</i>.";
        document.getElementById("profileTagline").innerHTML = "<span class='highlight'>Let's find out the problem and have fun!</span>";
        document.getElementById("profileNote").innerHTML = "Everything here is just for temporary entertainment.";
        document.getElementById("profileExperience").innerHTML = "Experience";
        document.getElementById("experienceDesc1").innerHTML = "Ya lala lolo lala lolo, lalo lala lolo, lalo lala lolo, ya lalo lala lolo, lalo lala lolo, lalo lala lolo, lalo lala lolo.";
        document.getElementById("experienceDesc2").innerHTML = "Ya lala lolo lala lolo, lalo lala lolo, lalo lala lolo, ya lalo lala lolo, lalo lala lolo, lalo lala lolo, lalo lala lolo.";
        document.getElementById("experienceDesc3").innerHTML = "Ya lala lolo lala lolo, lalo lala lolo, lalo lala lolo, ya lalo lala lolo, lalo lala lolo, lalo lala lolo, lalo lala lolo.";
        document.getElementById("experienceDesc4").innerHTML = "Ya lala lolo lala lolo, lalo lala lolo, lalo lala lolo, ya lalo lala lolo, lalo lala lolo, lalo lala lolo, lalo lala lolo.";
        document.getElementById("contact").innerHTML = "𝑱𝒖𝒔𝒕 𝒄𝒐𝒏𝒕𝒂𝒄𝒕,";
        document.getElementById("contact1").innerHTML = "𝒾𝓉'𝓈 𝒻𝓇𝑒𝑒!";
    }
}

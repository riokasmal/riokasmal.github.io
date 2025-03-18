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
        document.getElementById("experienceDesc1").innerHTML = "-";
        document.getElementById("experienceDesc2").innerHTML = "Menyediakan layanan panggilan telepon dan pemasangan CCTV, Telepon PABX Panasonic, dan Jaringan Internet.";
        document.getElementById("experienceDesc3").innerHTML = "Melayani pelanggan dan perbaikan terkait masalah perangkat keras/lunak komputer, menyediakan layanan perakitan komputer baru.";
        document.getElementById("experienceDesc4").innerHTML = "Mengedit foto dan menyortir file foto dokumentasi untuk pengarsipan.";
    } else {
        document.getElementById("profileName").innerHTML = "Moh. Rio Rizal Cashmal";
        document.getElementById("profileJob").innerHTML = "IT Support 25 years old 🖥️ based in Tangerang 🇮🇩 with freelance experience, Love to be creative in <i>Graphic Design</i> and <i>Video Editing</i>.";
        document.getElementById("profileTagline").innerHTML = "<span class='highlight'>Let's find out the problem and have fun!</span>";
        document.getElementById("profileNote").innerHTML = "Everything here is just for temporary entertainment.";
        document.getElementById("profileExperience").innerHTML = "Experience";
        document.getElementById("experienceDesc1").innerHTML = "-";
        document.getElementById("experienceDesc2").innerHTML = "Providing call service and installation of CCTV, PABX Panasonic Telephone, and Internet Network.";
        document.getElementById("experienceDesc3").innerHTML = "Providing customer service regarding computer hardware/software troubleshooting and providing new computer assembly services.";
        document.getElementById("experienceDesc4").innerHTML = "Editing photos and sorting documentation photo files for archiving.";
    }
}

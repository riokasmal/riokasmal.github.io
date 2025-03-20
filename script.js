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

function updateDateTime() {
    const now = new Date();
    const lang = document.getElementById('langDropdown').value;
    const optionsDate = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    
    let locale = 'en-US';
    if (lang === 'id') {
        locale = 'id-ID';
    }
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('currentTime').textContent = `${hours}:${minutes}`;
    document.getElementById('currentDate').textContent = now.toLocaleDateString(locale, optionsDate);
}

setInterval(updateDateTime, 1000);
updateDateTime();

async function updateWeather() {
    function fetchWeather(lang = "id") {
        const apiKey = "c5d689ace40474ec41523c8109b64590"; 
        const lat = "-6.234864"; 
        const lon = "106.728272";
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherDesc").textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1); // Deskripsi cuaca
            document.getElementById("weatherTemp").textContent = `${Math.round(data.main.temp)}°C`; // Suhu
    
            let iconCode = data.weather[0].icon;
            let weatherIcon = document.getElementById("weatherIcon");
    
            // Set icon
            weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
            // Dynamic shadow based on weather condition
            // let shadowColor = iconCode.includes("d") ? "rgba(255, 215, 0, 0.7)" : "rgba(173, 216, 230, 0.7)";
            weatherIcon.style.filter = `drop-shadow(0px 4px 6px ${shadowColor})`;
        })
        .catch(error => console.error("Error fetching weather data:", error));
    }
    
    fetchWeather("en");
    

}

setInterval(updateDateTime, 1000);
updateDateTime();
updateWeather();
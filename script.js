tailwind.config = {
    darkMode: 'class'
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

    // Simpan mode ke localStorage
    const isDarkMode = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update toggle switch sesuai mode
    document.getElementById("darkModeToggle").checked = isDarkMode;
}

// Load mode dari localStorage saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark";

    // Set dark mode sesuai cache
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);

    // Set switch toggle sesuai mode
    document.getElementById("darkModeToggle").checked = isDarkMode;
});

function toggleLanguage() {
    const langDropdown = document.getElementById("langDropdown");
    const selectedLang = langDropdown.value;

    if (selectedLang === "id") {
        document.getElementById("profileName").innerHTML = "Moh. Rio Rizal Cashmal";
        document.getElementById("profileJob").innerHTML = "IT Support berusia 25 tahun 🖥️ berbasis Tangerang 🇮🇩 dengan pengalaman pekerja lepas, Senang berkreasi dalam bidang <i>Desain Grafis</i> dan <i>Edit Video</i>.";
        document.getElementById("profileTagline").innerHTML = "<span class='highlight'>Mari cari tahu masalahnya dan bersenang-senang!</span>";
        document.getElementById("profileNote").innerHTML = "Semua yang ada disini hanya untuk hiburan sementara.";
        document.getElementById("profileExperience").innerHTML = "Pengalaman";
        document.getElementById("experienceDesc1").innerHTML = "";
        document.getElementById("experienceDesc2").innerHTML = "Menyediakan layanan panggilan telepon dan pemasangan CCTV, Telepon PABX Panasonic, dan Jaringan Internet.";
        document.getElementById("experienceDesc3").innerHTML = "Melayani pelanggan dan perbaikan terkait masalah perangkat keras/lunak komputer, menyediakan layanan perakitan komputer baru.";
        document.getElementById("experienceDesc4").innerHTML = "Mengedit foto dan menyortir file foto dokumentasi untuk pengarsipan.";
        document.getElementById("quickNotes").innerHTML = "Catatan";
    } else {
        document.getElementById("profileName").innerHTML = "Moh. Rio Rizal Cashmal";
        document.getElementById("profileJob").innerHTML = "IT Support 25 years old 🖥️ based in Tangerang 🇮🇩 with freelance experience, Love to be creative in <i>Graphic Design</i> and <i>Video Editing</i>.";
        document.getElementById("profileTagline").innerHTML = "<span class='highlight'>Let's find out the problem and have fun!</span>";
        document.getElementById("profileNote").innerHTML = "Everything here is just for temporary entertainment.";
        document.getElementById("profileExperience").innerHTML = "Experience";
        document.getElementById("experienceDesc1").innerHTML = "";
        document.getElementById("experienceDesc2").innerHTML = "Providing call service and installation of CCTV, PABX Panasonic Telephone, and Internet Network.";
        document.getElementById("experienceDesc3").innerHTML = "Providing customer service regarding computer hardware/software troubleshooting and providing new computer assembly services.";
        document.getElementById("experienceDesc4").innerHTML = "Editing photos and sorting documentation photo files for archiving.";
        document.getElementById("quickNotes").innerHTML = "Notes";
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
            // weatherIcon.style.filter = `drop-shadow(0px 4px 6px ${shadowColor})`;
        })
        .catch(error => console.error("Error fetching weather data:", error));
    }
    
    fetchWeather("en");
    

}

setInterval(updateDateTime, 1000);
updateDateTime();
updateWeather();


document.addEventListener("DOMContentLoaded", () => {
    const todoList = document.getElementById("todoList");
    if (todoList) {
        loadTodos();
        // new Sortable(todoList, {
        //     animation: 150,
        //     onEnd: saveTodos
        // });
    }

    // document.getElementById("todoInput").addEventListener("keypress", function(event) {
    //     if (event.key === "Enter") {
    //         addTodo();
    //     }
    // });
});

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    createTodoElement(text);
    saveTodos();
}

function createTodoElement(text) {
    const li = document.createElement("li");
    li.className = "todo-item flex items-center justify-between bg-white dark:bg-black/50 p-2 rounded-lg shadow-md";
    li.innerHTML = `
        <div class="flex items-center gap-2">
            <input type="checkbox" class="rounded-md" onchange="toggleDone(this)">
            <span class="flex-1 cursor-pointer" onclick="editTodo(this)">${text}</span>
        </div>
        <div class="flex items-center gap-2">
            <button onclick="editTodo(this.closest('li').querySelector('span'))" class="text-yellow-500">✏️</button>
            <button onclick="deleteTodo(this)" class="text-red-500">✖</button>
        </div>
    `;
    document.getElementById("todoList").appendChild(li);
}

function editTodo(span) {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null) {
        span.textContent = newText.trim();
        saveTodos();
    }
}

function toggleDone(checkbox) {
    checkbox.nextElementSibling.classList.toggle("line-through", checkbox.checked);
    saveTodos();
}

function deleteTodo(button) {
    button.parentElement.parentElement.classList.add("opacity-0", "-translate-x-10");
    setTimeout(() => {
        button.parentElement.parentElement.remove();
        saveTodos();
    }, 300);
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll("#todoList li").forEach(li => {
        todos.push({
            text: li.querySelector("span").textContent,
            done: li.querySelector("input").checked
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        createTodoElement(todo.text);
        const lastTodo = document.querySelector("#todoList li:last-child");
        lastTodo.querySelector("input").checked = todo.done;
        if (todo.done) lastTodo.querySelector("span").classList.add("line-through");
    });
}
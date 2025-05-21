document.addEventListener("DOMContentLoaded", function () {
    // Page loader
    const loader = document.getElementById("loader");
    setTimeout(() => loader.style.display = "none", 1500);

    // Dark/Light mode toggle
    const toggleMode = document.getElementById("toggle-mode");
    toggleMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Filter portfolio gallery
    window.filterSelection = function (category) {
        const projects = document.querySelectorAll(".gallery .project");
        if (category === "all") category = "";
        projects.forEach(p => {
            p.style.display = p.classList.contains(category) || category === "" ? "block" : "none";
        });
    };
    filterSelection("all");

    // Contact form validation
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            e.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            e.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^\S+@\S+\.\S+$/;
        return re.test(email);
    }
const buttons = document.querySelectorAll(".filter-btn");
const previewArea = document.getElementById("preview-area");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        let embedUrls = [];

        switch (filter) {
            case "design":
                embedUrls = [
                    "https://drive.google.com/file/d/1XAQmjONdT5SZNh7PxVkhluxnugIgmsgE/preview",
                    "https://drive.google.com/file/d/1Oe6xRn-p2fYiXSS9bneGytV9xmqPx5pY/preview",
                    "https://drive.google.com/file/d/1ajyng9XjrAoYiRXv7CNPQtUthHfNwYah/preview",
                    "https://drive.google.com/file/d/1tTWjZUmek3KfOxz4qPgR1RQ3oVL11N5V/preview"
                ];
                break;
            case "youtube":
                embedUrls = [
                    "https://www.youtube.com/embed/lVrdx0sXNZI?si=XqgF82b5zT3ktnIm",
                    "https://www.youtube.com/embed/azqgAJXeLak?si=xR2U450uY7towmV_"
                ];
                break;
            case "cv":
                embedUrls = [
                    "assets/docs/CV.pdf"
                ];
                break;
            default:
                previewArea.innerHTML = "<p>Kategori tidak dikenali.</p>";
                return;
        }

        // Render previews
        previewArea.innerHTML = embedUrls.map(url => {
            // Kalau URL berakhiran .pdf, tampilkan pakai <object>
            if (url.endsWith(".pdf")) {
                return `
                    <div class="iframe-wrapper">
                        <object data="${url}" type="application/pdf" width="100%" height="480">
                            <p>PDF tidak bisa ditampilkan. <a href="${url}" target="_blank">Download PDF</a></p>
                        </object>
                    </div>
                `;
            } else {
                // default iframe untuk video atau google drive preview
                return `
                    <div class="iframe-wrapper">
                        <iframe
                            src="${url}"
                            width="100%"
                            height="480"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            }
        }).join("");
    });
});

});

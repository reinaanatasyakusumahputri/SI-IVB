

// Ganti warna latar saat tombol diklik
function gantiWarnaBackground() {
    const warna = prompt("Masukkan warna background (misal: lightblue, pink, #f4f4f4):");
    document.body.style.backgroundColor = warna;
}

// Tambahkan efek hover ke ikon sosmed
document.addEventListener("DOMContentLoaded", function () {
    const ikonSosmed = document.querySelectorAll(".icon-sosmed");

    ikonSosmed.forEach(function (ikon) {
        ikon.addEventListener("mouseover", function () {
            ikon.style.transform = "scale(1.2)";
            ikon.style.transition = "0.3s";
        });
        ikon.addEventListener("mouseout", function () {
            ikon.style.transform = "scale(1)";
        });
    });
});

function gantiWarnaBackground() {
    // Daftar gradasi latar
    const gradients = [
        "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        "linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)",
        "linear-gradient(to right, #fbc2eb 0%, #a6c1ee 100%)",
        "linear-gradient(to right, #fdcbf1 0%, #e6dee9 100%)",
        "linear-gradient(to right, #84fab0 0%, #8fd3f4 100%)",
        "linear-gradient(to right, #d299c2 0%, #fef9d7 100%)",
        "linear-gradient(to right, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
    ];

    // Pilih gradasi secara acak
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    // Terapkan gradasi dengan transisi halus
    document.body.style.transition = "background 1s ease-in-out";
    document.body.style.backgroundImage = randomGradient;
}


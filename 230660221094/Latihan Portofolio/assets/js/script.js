
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
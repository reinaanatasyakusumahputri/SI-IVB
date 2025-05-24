// 100% Sesuai Modul: Contoh penggunaan Web API dari browser

// 1. alert() dan event listener
document.getElementById("btn-alert").addEventListener("click", function () {
  alert("Belajar JavaScript dari Web API!");
});

// 2. setTimeout()
document.getElementById("btn-timeout").addEventListener("click", function () {
  setTimeout(() => {
    document.getElementById("output").textContent =
      "Timer selesai setelah 2 detik!";
    console.log("Timer finished");
  }, 2000);
});

// 3. localStorage
document.getElementById("btn-storage").addEventListener("click", function () {
  localStorage.setItem("nama", "Ghatan Zalfaa Kautsar");
  alert("Nama disimpan ke localStorage!");
});

// 4. console.log() – sudah digunakan di atas untuk timer

// Tambahan: Cek apakah data localStorage bisa dibaca ulang
console.log("Nama dari localStorage:", localStorage.getItem("nama"));

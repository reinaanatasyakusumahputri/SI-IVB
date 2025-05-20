// Ambil referensi elemen
const input = document.getElementById("inputTugas");
const daftarTugas = document.getElementById("daftarTugas");

// Muat dari localStorage saat halaman dibuka
window.onload = function () {
  const data = JSON.parse(localStorage.getItem("tugasMahasiswa")) || [];
  data.forEach((tugas) => buatItemTugas(tugas.text, tugas.selesai));
};

// Fungsi untuk menambah tugas
function tambahTugas() {
  const teks = input.value.trim();
  if (teks !== "") {
    buatItemTugas(teks);
    simpanTugas();
    input.value = "";
  }
}

// Buat elemen list tugas
function buatItemTugas(teks, selesai = false) {
  const li = document.createElement("li");
  li.textContent = teks;
  if (selesai) li.classList.add("done");

  // Klik untuk toggle selesai
  li.addEventListener("click", () => {
    li.classList.toggle("done");
    simpanTugas();
  });

  // Tombol hapus
  const btn = document.createElement("button");
  btn.textContent = "Hapus";
  btn.className = "delete-btn";
  btn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
    simpanTugas();
  };

  li.appendChild(btn);
  daftarTugas.appendChild(li);
}

// Simpan ke localStorage
function simpanTugas() {
  const tugas = [];
  daftarTugas.querySelectorAll("li").forEach((li) => {
    tugas.push({
      text: li.firstChild.textContent,
      selesai: li.classList.contains("done"),
    });
  });
  localStorage.setItem("tugasMahasiswa", JSON.stringify(tugas));
}

// Praktik dari Modul 01 & 02: Environment & Struktur Code

// ------------ Statement ------------
const umur = 15; // Statement: deklarasi variabel
alert("Buku Saku JavaScript"); // Statement: alert
console.log("Selamat datang"); // Statement: console log

// Statement: kondisi
if (umur < 12) {
  console.log("Kamu masih kecil");
} else {
  console.log("Kamu sudah besar");
}

// ------------ Semicolon Penting ------------
alert("Hello world"); // <- harus ada titik koma

["Budi", "Agus", "Ujang"].forEach((name) => alert(name)); // baris ini butuh titik koma di atas

// ------------ Function utama dijalankan dari tombol HTML ------------
function jalankanDemo() {
  const cuaca = "hujan";

  if (cuaca === "hujan") {
    console.log("Dirumah sajalah");
  }

  // Menjalankan fungsi luas persegi panjang
  const panjang = 5;
  const lebar = 3;
  const luas = luasPersegiPanjang(panjang, lebar);
  console.log(`Luas persegi panjang: ${luas}`);
}

// ------------ Function + Comment documentation ------------

/**
 * Fungsi untuk menghitung luas persegi panjang
 *
 * @param {number} panjang - panjang dari persegi panjang
 * @param {number} lebar - lebar dari persegi panjang
 * @returns {number} luas
 */
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

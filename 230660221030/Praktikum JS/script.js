function sapa() {
    const nama = document.getElementById("nama").value;
    const output = document.getElementById("output");
  
    if (nama.trim() === "") {
      output.textContent = "Silakan masukkan nama terlebih dahulu.";
    } else {
      output.textContent = `Halo, ${nama}! Selamat datang!`;
    }
  }
  
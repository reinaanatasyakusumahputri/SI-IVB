document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah reload halaman

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name === '' || email === '') {
            resultDiv.innerHTML = `<p style="color: red;">Semua kolom wajib diisi!</p>`;
            return;
        }

        resultDiv.innerHTML = `
            <h3>Data Terkirim:</h3>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        form.reset(); // Reset formulir setelah submit
    });
});

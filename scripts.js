function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Username and Password must be filled out");
        return false;
    }

    // Contoh validasi sederhana
    if (username.length < 3) {
        alert("Username must be at least 3 characters long");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Tambahkan validasi lain sesuai kebutuhan

    // Jika semua validasi lolos
    alert("Login successful!");
    return true;
}
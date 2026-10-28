
console.log('JavaScript SIKA aktif');

const judul = document.getElementById('judul');
const formMahasiswa = document.getElementById('formMahasiswa');

const nim = document.getElementById('nim');
const nama = document.getElementById('nama');
const email = document.getElementById('email');
const prodi = document.getElementById('prodi');

const errorNim = document.getElementById('errorNim');
const errorNama = document.getElementById('errorNama');
const errorEmail = document.getElementById('errorEmail');
const errorProdi = document.getElementById('errorProdi');

const status = document.getElementById('statusForm');
const tombol = document.getElementById('btnInfo');

if (status) {
    status.textContent = 'Data siap diperiksa';
    status.classList.add('success');
    status.classList.remove('error');
}

if (tombol) {
    tombol.addEventListener('click', function() {
        alert('Selamat datang di SIKA');
    });
}

function setError(element, message) {
    if (element) {
        element.textContent = message;
    }
}

function clearError(element) {
    if (element) {
        element.textContent = '';
    }
}


function validateNim() {
    if (!nim) return true;

    const value = nim.value.trim();
    const numeric = /^\d{8}$/;

    if (!numeric.test(value)) {
        setError(errorNim, 'NIM harus terdiri dari 8 digit.');
        nim.classList.add('input-error');
        return false;
    }

    clearError(errorNim);
    nim.classList.remove('input-error');
    return true;
}


function validateNama() {
    if (!nama) return true;

    const value = nama.value.trim();

    if (value.length < 3) {
        setError(errorNama, 'Nama minimal 3 karakter.');
        nama.classList.add('input-error');
        return false;
    }

    clearError(errorNama);
    nama.classList.remove('input-error');
    return true;
}


function validateEmail() {
    if (!email) return true;

    const value = email.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(value)) {
        setError(errorEmail, 'Format email tidak valid.');
        email.classList.add('input-error');
        return false;
    }

    clearError(errorEmail);
    email.classList.remove('input-error');
    return true;
}


function validateProdi() {
    if (!prodi) return true;

    if (prodi.value === '') {
        setError(errorProdi, 'Program studi wajib dipilih.');
        prodi.classList.add('input-error');
        return false;
    }

    clearError(errorProdi);
    prodi.classList.remove('input-error');
    return true;
}

if (nim) {
    nim.addEventListener('blur', validateNim);
}

if (nama) {
    nama.addEventListener('blur', validateNama);
}

if (email) {
    email.addEventListener('blur', validateEmail);
}

if (prodi) {
    prodi.addEventListener('change', validateProdi);
}


if (formMahasiswa) {
    formMahasiswa.addEventListener('submit', function(event) {
        const nimValid = validateNim();
        const namaValid = validateNama();
        const emailValid = validateEmail();
        const prodiValid = validateProdi();

        if (!nimValid || !namaValid || !emailValid || !prodiValid) {
            event.preventDefault();
            return;
        }

        event.preventDefault();
        alert('Validasi berhasil. Data siap diproses pada tahap PHP.');
    });
}

const cari = document.getElementById('cariMahasiswa');
const rows = document.querySelectorAll('#tabelMahasiswa tbody tr');

if (cari) {
    cari.addEventListener('input', function() {
        const keyword = cari.value.trim().toLowerCase();

        rows.forEach(function(row) {
            const text = row.textContent.toLowerCase();
            row.hidden = !text.includes(keyword);
        });
    });
}

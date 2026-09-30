# UI Security Checklist

## 1. Checklist Keamanan UI

| No | Pemeriksaan                                                  | Status | Keterangan                                                      |
| -- | ------------------------------------------------------------ | ------ | --------------------------------------------------------------- |
| 1  | Data sensitif tidak ditampilkan secara langsung pada halaman | ✅ Aman | Data pribadi mahasiswa tidak ditampilkan secara berlebihan      |
| 2  | Password tidak ditampilkan dalam bentuk teks biasa           | ✅ Aman | Password menggunakan tipe input `password`                      |
| 3  | Data pribadi dibatasi sesuai kebutuhan halaman               | ✅ Aman | Hanya data yang diperlukan yang ditampilkan                     |
| 4  | Input pengguna dilakukan validasi                            | ✅ Aman | Sistem memeriksa data sebelum diproses                          |
| 5  | Informasi internal sistem tidak ditampilkan kepada pengguna  | ✅ Aman | Pesan error dibuat sederhana tanpa menampilkan informasi teknis |
| 6  | Screenshot menggunakan data dummy                            | ✅ Aman | Screenshot tidak menggunakan data mahasiswa sebenarnya          |
| 7  | Repository menggunakan data dummy                            | ✅ Aman | Data yang disimpan dalam repository merupakan data contoh/dummy |

## 2. Penggunaan Data Dummy

Seluruh data yang digunakan dalam pembuatan, pengujian, screenshot, dan repository Sistem Informasi Akademik (SIKA) menggunakan **data dummy**.

Data mahasiswa sebenarnya tidak digunakan untuk menghindari paparan informasi pribadi.

Contoh data dummy:

* NIM: `23010001`
* Nama: `Andi Pratama`
* Program Studi: `Teknik Informatika`
* Semester: `3`
* Nama Dosen: `Budi Santoso`
* Kode Mata Kuliah: `TI301`

## 3. Potensi Paparan Data Client-Side yang Dicegah

### 1. Paparan Password

Password dicegah agar tidak terlihat secara langsung pada tampilan halaman dengan menggunakan input bertipe `password`.

**Potensi paparan:** Password dapat terlihat oleh orang lain ketika pengguna sedang memasukkannya.

**Pencegahan:** Password ditampilkan sebagai karakter tersembunyi pada sisi client.

### 2. Paparan Data Pribadi Mahasiswa

Data mahasiswa sebenarnya tidak digunakan dalam screenshot maupun repository.

**Potensi paparan:** NIM, nama, dan informasi akademik mahasiswa sebenarnya dapat terekspos melalui screenshot atau file yang diunggah ke repository.

**Pencegahan:** Seluruh screenshot dan repository menggunakan data dummy sehingga data mahasiswa sebenarnya tidak ikut terekspos.

## 4. Kesimpulan

Checklist keamanan UI dilakukan untuk mengurangi risiko paparan data pada sisi client.

Dua potensi paparan data yang berhasil dicegah adalah:

1. Paparan password pada tampilan UI.
2. Paparan data pribadi mahasiswa sebenarnya melalui screenshot dan repository.

Seluruh screenshot dan repository menggunakan data dummy dan tidak menggunakan data mahasiswa sebenarnya.

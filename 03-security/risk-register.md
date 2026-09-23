Security Risk Register SIKA

1. Identifikasi Aset dan Data Sensitif

SIKA menyimpan dan menampilkan data akademik yang perlu
dilindungi dari akses atau perubahan yang tidak berwenang.

| ID | Aset/Data | Tingkat Sensitivitas | Alasan Perlindungan |
|---|---|---|---|
| AS-01 | Data mahasiswa | Tinggi | Berisi identitas dan informasi akademik mahasiswa |
| AS-02 | Data dosen | Sedang | Berisi informasi identitas dan data dosen |
| AS-03 | Data mata kuliah | Rendah | Merupakan informasi akademik yang digunakan dalam sistem |
| AS-04 | Data KRS | Tinggi | Berkaitan dengan pengambilan mata kuliah mahasiswa |
| AS-05 | Akun dan kredensial pengguna | Tinggi | Dapat digunakan untuk mengakses sistem |
| AS-06 | Database SIKA | Tinggi | Menyimpan data akademik yang harus dijaga kerahasiaan dan integritasnya |

2. Risk Register

| ID | Risiko | Aset Terdampak | Dampak | Kemungkinan | Level Risiko | Mitigasi |
|---|---|---|---|---|---|---|
| R-01 | Akses tidak sah terhadap data mahasiswa | AS-01, AS-04 | Data pribadi atau akademik dapat dilihat oleh pihak yang tidak berwenang | Sedang | Tinggi | Menggunakan autentikasi dan pembatasan hak akses berdasarkan pengguna |
| R-02 | Perubahan data akademik tanpa izin | AS-01, AS-04, AS-06 | Data mahasiswa atau KRS dapat menjadi tidak sesuai | Sedang | Tinggi | Menerapkan otorisasi, validasi input, dan pembatasan akses pengelolaan data |
| R-03 | Kebocoran kredensial pengguna | AS-05 | Akun dapat digunakan oleh pihak yang tidak berwenang | Sedang | Tinggi | Password disimpan secara aman, tidak ditampilkan pada halaman, dan menggunakan autentikasi |
| R-04 | Serangan melalui input pengguna | AS-06 | Data database dapat dimanipulasi atau sistem terganggu | Sedang | Tinggi | Melakukan validasi input dan menggunakan query yang aman |
| R-05 | Kehilangan data database | AS-06 | Informasi akademik dapat hilang dan mengganggu layanan | Rendah | Sedang | Melakukan backup database secara berkala |

3. Security Checkpoint

Beberapa checkpoint keamanan yang perlu diperhatikan dalam pengembangan SIKA adalah:

1. Autentikasi
   - Pengguna harus melakukan login sebelum mengakses fitur yang membutuhkan identitas pengguna.

2. Otorisasi
   - Hak akses mahasiswa, dosen, dan admin harus dibedakan sesuai dengan kebutuhan masing-masing.

3. Validasi Input
   - Data yang dimasukkan pengguna harus diperiksa sebelum diproses oleh sistem.

4. Keamanan Database
   - Data akademik harus dilindungi dari akses dan perubahan yang tidak berwenang.

5. Keamanan Password
   - Password tidak boleh disimpan atau ditampilkan dalam bentuk teks biasa.

6. Backup Data
   - Database perlu dicadangkan secara berkala untuk mengurangi risiko kehilangan data.

7. Penggunaan HTTP yang Aman
   - Pada sistem yang digunakan di lingkungan nyata, komunikasi pengguna dengan server sebaiknya menggunakan HTTPS untuk melindungi data selama proses transmisi.


Observasi HTTP SIKA

1. Tujuan

Observasi ini dilakukan untuk melihat proses komunikasi antara
browser dan web server saat halaman SIKA diakses melalui localhost.

2. Halaman yang Diamati

Halaman yang diamati adalah:

- Halaman: Profil Mahasiswa
- File: `mahasiswa.html`
- Server: `127.0.0.1:5500`

3. Hasil Pengamatan

Berdasarkan pengamatan menggunakan Developer Tools pada bagian
Network, terdapat request dari browser ketika halaman
`mahasiswa.html` dibuka.

Hasil pengamatan:

| Komponen | Hasil |
|---|---|
| Request | `mahasiswa.html` |
| Method | `GET` |
| Status Code | `200 OK` |
| Server | `127.0.0.1:5500` |
| Resource lain | `style.css`, `fotowinda.jpeg` |

4. Alur Request dan Response

Proses yang diamati dapat dijelaskan sebagai berikut:

1. Mahasiswa membuka halaman `mahasiswa.html` melalui browser.
2. Browser mengirim HTTP request dengan method `GET`.
3. Web server pada localhost menerima request tersebut.
4. Web server mencari dan mengirimkan file `mahasiswa.html`.
5. Browser menerima HTTP response dengan status `200 OK`.
6. Browser kemudian memuat resource lain seperti `style.css`
   dan `fotowinda.jpeg`.
7. Browser merender halaman sehingga informasi profil mahasiswa
   dapat ditampilkan.

5. Kesimpulan

Berdasarkan hasil pengamatan, halaman SIKA dapat diakses melalui
web server localhost. Browser mengirim request menggunakan method
GET dan menerima response dengan status 200 OK. Hal ini
menunjukkan bahwa proses request-response antara browser dan web
server berjalan dengan baik pada lingkungan pengujian.

Screenshot hasil pengamatan Developer Tools disimpan pada:

04-testing/screenshot-network.png
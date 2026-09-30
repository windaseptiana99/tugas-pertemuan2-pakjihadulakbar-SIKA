#Struktur Halaman dan elemen Semantik Sika

##1. Struktur Halaman

Aplikasi sistem Akademik (Sika) pada Bab 2 terdiri dari 3halaman utama yaitu:
1. Dasboard ('index.html)
2. Profil mahasiswa('mahasiswa.html')
3. Form mahasiswa('form-mahasiswa.html')

ketiga halaman tersebut saling terhubung melalui  navigasi dan hyperlink sehingga pengguna dapat beralih dari satu halaman ke halaman lain tanpa harus membuka link lain.

 Dasboard
  halaman Dasboard(index.html) merupakan halama utama yang berisi informasi awal mengenai sistem informasi akademik. halaman ini menyediakan  navigasi menuju halaman mahasiswa dan halaman lainnya.
 
 Profil Mahasiswa
  Halaman Profil mahasiswa (mahasiswa.html) digunakan untuk menampilkan informasi mahasiswa.

 Form Mahasiswa
  pada halaman ini (firm-mahasiswa.html) digunakan untuk memasukkan atau mengubah data mahasiswa. form ini menydiaka beberapa inputan seperti NIM, nama, email dll.

##2. STRUKTUR UMUM HTML
 Setiap halaman menggunakan struktur HTML5 yang terdiri atas:
 <header>
      <nav>
      <main>
           <section>
        </main>
        <footer>
struktur tsb digunakan unt membagi masing-masing bagian.

##3. Keputusan Penggunaan Elemen Semantik

1. <header> digunakan untuk menampilkan identitas aplikasi dan judul halaman SIKA.
2. <nav> digunakan untuk menaampung navigasi utama  pada setiap halaman.contoh, Menu utama: Dasboard,mahasiswa, Form mahasiswa.
3. <main> digunakan sebagai wadah utama untuk setiap kontenutama pada setiap halaman. 
4. <section> digunakan untuk mengelompokkan konten yang memiliki tema tertentu
5. <footer> digunakan untuk menunjukkan hak cipta atau identitas aplikasi

##4. Alasan Menggunakan HTML semantik

 Elemen semantik membantu Browser, mesin pencari, dan teknologi bantu memahami bagian penting sebuah halaman. Elemen yang ditekankan meliputi header, nav, main, article, section, aside, dan footer(McFedries,2024). pengggunaan elemen semantik juga membuat code HTML lebih mudah dipelihara dan dikembangkan untuk pengembangan selanjutnya.


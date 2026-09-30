# Form Field Specification

Dokumen ini berisi spesifikasi field atau kolom input yang digunakan pada formulir dalam Sistem Informasi Akademik (SIKA).

## 1. Form Data Mahasiswa

| Field | Tipe Data | Wajib | Keterangan |
|---|---|---|---|
| NIM | Text | Ya | Nomor Induk Mahasiswa |
| Nama | Text | Ya | Nama lengkap mahasiswa |
| Program Studi | Text | Ya | Program studi mahasiswa |
| Semester | Number | Ya | Semester mahasiswa |

## 2. Form Data Dosen

| Field | Tipe Data | Wajib | Keterangan |
|---|---|---|---|
| NIDN | Text | Ya | Nomor Induk Dosen Nasional |
| Nama Dosen | Text | Ya | Nama lengkap dosen |
| Mata Kuliah | Text | Ya | Mata kuliah yang diampu |

## 3. Form Data Mata Kuliah

| Field | Tipe Data | Wajib | Keterangan |
|---|---|---|---|
| Kode Mata Kuliah | Text | Ya | Kode identitas mata kuliah |
| Nama Mata Kuliah | Text | Ya | Nama mata kuliah |
| SKS | Number | Ya | Jumlah SKS mata kuliah |
| Dosen Pengampu | Text | Ya | Nama dosen yang mengampu mata kuliah |

## 4. Form KRS

| Field | Tipe Data | Wajib | Keterangan |
|---|---|---|---|
| NIM | Text | Ya | Nomor Induk Mahasiswa |
| Nama Mahasiswa | Text | Ya | Nama mahasiswa |
| Mata Kuliah | Text | Ya | Mata kuliah yang dipilih |
| SKS | Number | Ya | Jumlah SKS mata kuliah |
| Status | Select | Ya | Status pengambilan mata kuliah |

## 5. Aturan Pengisian

- Field yang bersifat wajib harus diisi oleh pengguna.
- Field NIM dan NIDN harus menggunakan format yang sesuai dengan data akademik.
- Field SKS hanya dapat diisi dengan angka.
- Data yang dimasukkan harus sesuai dengan informasi akademik yang sebenarnya.
- Sistem harus memberikan informasi apabila terdapat data yang tidak valid atau belum lengkap.
export default {
  buttons: {
    previous: {
      title: 'Sebelumnya'
    },
    next: {
      title: 'Selanjutnya'
    },
    submit: {
      title: 'Kirim'
    }
  },
  chapters: {
    c0: {
      title: 'Pendahuluan',
      subtitle: 'Perjanjian Vendor',
      itemTitle: 'Pada hari ini, [tanggal penandatanganan], telah terjadi kesepakatan antara:',
      item1: '{company} (selanjutnya disebut "Pihak Pertama"), berkedudukan di [alamat kantor], dan',
      item2: '{vendor} (selanjutnya disebut "Pihak Kedua"), yang diwakili oleh [Nama PIC], berkedudukan di [alamat vendor],',
      item3: 'secara bersama-sama selanjutnya disebut "Para Pihak".',
      item4: '{people} dengan ini sepakat untuk mengikatkan diri dalam Perjanjian Vendor ("Perjanjian") sebagai berikut:',
      people: 'Para Pihak'
    },
    c1: {
      title: 'Pasal 1',
      subtitle: 'Ruang Lingkup Kerja',
      item1: 'Pihak Kedua setuju untuk menyediakan jasa/layanan/produk sebagai kontraktor bagi Pihak Pertama.',
      item2: 'Pihak Kedua bertanggung jawab untuk menyerahkan hasil kerja atau produk sesuai dengan ketentuan yang telah ditentukan oleh Pihak Pertama.'
    },
    c2: {
      title: 'Pasal 2',
      subtitle: 'Ketentuan Pajak',
      item1: 'Setiap faktur/invoice yang diajukan oleh Pihak Kedua, jika Pihak Kedua adalah perorangan (individu), maka akan dikenakan pemotongan pajak PPh Pasal 21.',
      item2: 'Jika Pihak Kedua berbentuk badan usaha/perusahaan, maka akan dikenakan pemotongan pajak PPh Pasal 23.',
      item3: 'Pihak Pertama akan menerbitkan bukti potong (bukti pemotongan pajak) dan mengirimkannya kepada Pihak Kedua dalam jangka waktu 7 (tujuh) hari kerja setelah pembayaran dilakukan.'
    },
    c3: {
      title: 'Pasal 3',
      subtitle: 'Jadwal Pembayaran',
      item1: 'Pihak Pertama akan melakukan pembayaran kepada Pihak Kedua pada tanggal 5 (lima) dan 20 (dua puluh) setiap bulannya.',
      item2: 'Apabila tanggal 5 (lima) atau 20 (dua puluh) bertepatan dengan hari libur nasional atau akhir pekan, maka pembayaran akan diproses pada hari kerja berikutnya.',
      item3: 'Pembayaran lebih awal (di luar jadwal) dapat dipertimbangkan secara case by case dan memerlukan persetujuan Manajemen Pihak Pertama.'
    },
    c4: {
      title: 'Pasal 4',
      subtitle: 'Anti-Kickback dan Anti-Fraud',
      item1: 'Pihak Kedua sepakat untuk tidak memberikan imbalan, hadiah, atau bentuk kompensasi lain secara langsung maupun tidak langsung kepada karyawan atau perwakilan Pihak Pertama.',
      item2: 'Jika terdapat bukti bahwa Pihak Kedua telah memberikan kickback atau terlibat dalam tindakan penipuan (fraud) apa pun, Pihak Pertama berhak menempuh jalur hukum di pengadilan di Indonesia.',
      item3: 'Pihak Pertama memiliki program reward untuk mencegah kecurangan, di mana jika Pihak Kedua mengetahui adanya permintaan kickback atau praktik kecurangan oleh karyawan Pihak Pertama, dan dapat memberikan bukti yang cukup, maka Pihak Pertama akan memberikan reward sebesar Rp 10.000.000 (sepuluh juta Rupiah) kepada pelapor.'
    },
    c5: {
      title: 'Pasal 5',
      subtitle: 'Data Pihak Kedua',
      itemTitle: 'Pihak Kedua wajib melampirkan dan/atau mencantumkan data berikut:',
      item1: 'Nama Lengkap (sesuai KTP).',
      item2: 'Nomor KTP.',
      item3: 'Nomor NPWP.',
      item4: 'Nama Perusahaan (Jika berbentuk badan usaha).',
      item5: 'Nama PIC / Penanggung Jawab.',
      item6: 'Nomor Telepon.',
      item7: 'Alamat Email (opsional).',
      item8: {
        title: 'Data Rekening Bank.',
        item1: 'Nama Bank.',
        item2: 'Nomor Rekening.',
        item3: 'Nama Pemilik Rekening.'
      }
    },
    c6: {
      title: 'Pasal 6',
      subtitle: 'Hukum yang Berlaku dan Penyelesaian Sengketa',
      item1: 'Perjanjian ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia.',
      item2: 'Jika terjadi perselisihan atau sengketa sehubungan dengan Perjanjian ini, Para Pihak setuju untuk menyelesaikannya secara musyawarah untuk mufakat.',
      item3: 'Apabila musyawarah tidak mencapai kesepakatan, maka sengketa akan diselesaikan melalui jalur hukum di pengadilan yang berwenang di Indonesia.'
    },
    c7: {
      title: 'Pasal 7',
      subtitle: 'Penutup',
      item1: 'Perjanjian ini mulai berlaku efektif sejak tanggal ditandatangani oleh Para Pihak dan akan tetap berlaku sepanjang belum diakhiri oleh salah satu Pihak dengan pemberitahuan tertulis sesuai ketentuan dalam Perjanjian.',
      item2: 'Dengan menandatangani Perjanjian ini, Pihak Kedua menyatakan telah membaca, memahami, dan menyetujui seluruh isi Perjanjian tanpa ada paksaan dari pihak manapun.',
      item3: 'Demikian Perjanjian ini dibuat dalam rangkap 2 (dua) yang masing-masing bermaterai cukup dan mempunyai kekuatan hukum yang sama.'
    },
  },
  form: {
    personalInfo: {
      title: 'Informasi Pribadi',
      name: {
        label: 'Nama Lengkap (sesuai KTP)',
        placeholder: 'Nama lengkap'
      },
      identity: {
        label: 'Nomor Identitas / KTP',
        placeholder: '1234567890'
      },
      uploadIdentity: {
        label: 'Unggah Foto Identitas / KTP',
        placeholder: 'Klik untuk mengunggah'
      },
      tax: {
        label: 'Nomor NPWP',
        placeholder: '1234567890'
      },
      uploadTax: {
        label: 'Unggah Foto NPWP',
        placeholder: 'Klik untuk mengunggah'
      },
      whatsapp: {
        label: 'Nomor WhatsApp',
        placeholder: '1234567890'
      }
    },
    companyInfo: {
      title: 'Informasi Perusahaan',
      name: {
        label: 'Nama Perusahaan',
        placeholder: 'Nama perusahaan',
        hint: '(jika berbentuk badan usaha)'
      },
      pic: {
        label: 'Nama Penanggung Jawab / PIC',
        placeholder: 'Nama penanggung jawab'
      },
      email: {
        label: 'Alamat Email',
        placeholder: 'Alamat email',
        hint: '(optional)'
      }
    },
    bankInfo: {
      title: 'Informasi Rekening Bank',
      name: {
        label: 'Nama Bank',
        placeholder: 'Pilih Bank'
      },
      accountNumber: {
        label: 'Nomor Rekening',
        placeholder: '1234567890',
        suffix: 'Validasi',
        errors: {
          notFound: 'Informasi rekening tidak ditemukan, periksa kembali data yang dimasukkan.'
        }
      },
      accountName: {
        label: 'Nama Pemilik Rekening',
      }
    },
    signature: {
      title: 'Tanda Tangan Kontrak',
      placeholder: 'Klik untuk Tanda Tangan'
    },
    success: {
      title: 'Data Berhasil Dikirim',
      subtitle: 'Data sudah diterima, tim kami akan segera meninjaunya. Pantau email Anda untuk mengetahui informasi terbaru, atau jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan.'
    }
  }
}

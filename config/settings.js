/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "2007";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Tina";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Hitam Putih",             // ← GANTI JUDUL LAGU
    artist: "Fourtwnty",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO & VIDEO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:   assets/image1.jpeg  dst.
   Taruh video di:  assets/video1.mp4   dst.  (mendukung .mp4, .webm, .ogg)

   Format setiap baris:
     { file: "path/ke/file", caption: "keterangan" }

   ✦ Gambar → tampil sebagai foto biasa
   ✦ Video  → thumbnail muted preview saat hover + pemutar penuh di lightbox  */
const GALLERY_PHOTOS = [
  { file: "assets/image2.jpeg", caption: "-" },
  { file: "assets/image1.jpeg", caption: "-" },  // ← GANTI CAPTION
  { file: "assets/image3.jpeg", caption: "-" },
  { file: "assets/image4.jpeg", caption: "-" },
  { file: "assets/video.mp4", caption: "-" },
  { file: "assets/video2.mp4", caption: "-" },
  // Contoh menambahkan video:
  // { file: "assets/video1.mp4", caption: "Momen spesial ✨" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"selamat ulang tahun seseorang yang pernah menjadi favorit aku dulu, semoga hal-hal baik selalu ada dalam kehidupan kamu ya.",
"aku ga lupa kok sama tanggal ulang tahun kamu, happy birthday ke 18 my once upon a happiness. aku tau kisah kasih kita udah selesai.",
"semoga segala impian kamu bisa terwujud, semoga harapan kecil maupun harapan besarnya kebahagiaan kamu bisa menjadi kenyataan.",
"maaf yaa.. aku belum bisa menjadi seseorang yang bisa merakit senyum manis kamu selagi kita masih bersama.",
"tapi aku harap kamu jauh lebih nyaman dengan kehidupan kamu yang sekarang. stay safe, healthy, and happy. do'a terbaik untukmu.",
"maaf ga bisa ungkapin secara langsung dihadapanmu, dengan penuh senyuman seperti dulu. semua tentangmu masih tertata rapih disini dan walaupun kita udah seasing ini, semoga hal-hal baik selalu beriringan denganmu.",
"seperti biasanya setiap manusia bertambah usia dan beranjak dewasa dan aku mau do'a yang terbaik meski mungkin versi terbaik dalam kamus kamu itu beda, ada banyak semoga yang harus kamu aminkan.",
"walaupun kita udah selesai, be happy with your journey! bahagia selalu ya stranger:)<3.",

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "where it all started",
    text:  "that exact moment when everything just clicked, dan tiba-tiba semuanya mulai make so much sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the quiet days",
    text:  "literally cuma kamu, aku, and those lil simple moments yang ternyata ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "through the storms",
    text:  "we've had our rough patches fr, ada badai dan chaos juga, but somehow kita selalu find our way back to each other.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "finding the light",
    text:  "you're genuinely the brightest part of my whole journey, yang selalu bikin everything feels a little lighter even when things get heavy.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "star",    text: "HAIII PENDEKK 😗 , i'ts yor birthday today, right? semogaa panjang umurr yaaa sehatt selalu manusiaa sepcial buatku , semoga juga kebahagiaan alwas datang  yaa, brownis  ini gaakan lupa kok sama hari spesial si nene ini , dimana hari ini kamu  lahir di dunia ini, semoga di umur yang bertambah inii , bisa lebih baik dan lebih tinggi dari pada sebelumnya ya, I always wish you the best, segala doa yang baik adanya , untukmu dan mimpi mu yang mulia, be happy ya in your birthday i hope and i wish you be a good child, even better than yesterday, okay? -Happy birthday EX 🤲" },
  { icon: "wave",    text: "Happy birthday yaa 🤍 Semoga kamu selalu bahagia, sehat, dan semua yang kamu impikan tercapai. Walaupun sekarang kita bukan lagi seperti dulu, aku tetap berharap yang terbaik buat kamu. 🤍" },
  { icon: "shell",   text: "happy birthday ya  tinaa ☺️doa terbaik untukmu, maaf tidak bisa merayakan secara langsung di hadapanmu tapi segenap hati ini mengucapkan selamat bertambah usia dan semoga hal-hal baik selalu beriringan denganmu🤍" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy i just opened the bottle, tysm for making my day so much better! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
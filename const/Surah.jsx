const SURAHS = [
    {
        "number": 1,
        "name": "Al-Fātiḥah",
        "translation": "Pembuka",
        "type": "Makkiyah",
        "ayahCount": "7 Ayat",
        "arabic": "الفاتحة"
    },
    {
        "number": 2,
        "name": "Al-Baqarah",
        "translation": "Sapi",
        "type": "Madaniyah",
        "ayahCount": "286 Ayat",
        "arabic": "البقرة"
    },
    {
        "number": 3,
        "name": "Āli ‘Imrān",
        "translation": "Keluarga Imran",
        "type": "Madaniyah",
        "ayahCount": "200 Ayat",
        "arabic": "اٰل عمرٰن"
    },
    {
        "number": 4,
        "name": "An-Nisā'",
        "translation": "Perempuan",
        "type": "Madaniyah",
        "ayahCount": "176 Ayat",
        "arabic": "النّساۤء"
    },
    {
        "number": 5,
        "name": "Al-Mā'idah",
        "translation": "Hidangan",
        "type": "Madaniyah",
        "ayahCount": "120 Ayat",
        "arabic": "الماۤئدة"
    },
    {
        "number": 6,
        "name": "Al-An‘ām",
        "translation": "Binatang Ternak",
        "type": "Makkiyah",
        "ayahCount": "165 Ayat",
        "arabic": "الانعام"
    },
    {
        "number": 7,
        "name": "Al-A‘rāf",
        "translation": "Tempat Tertinggi",
        "type": "Makkiyah",
        "ayahCount": "206 Ayat",
        "arabic": "الاعراف"
    },
    {
        "number": 8,
        "name": "Al-Anfāl",
        "translation": "Rampasan Perang",
        "type": "Madaniyah",
        "ayahCount": "75 Ayat",
        "arabic": "الانفال"
    },
    {
        "number": 9,
        "name": "At-Taubah",
        "translation": "Pengampunan",
        "type": "Madaniyah",
        "ayahCount": "129 Ayat",
        "arabic": "التّوبة"
    },
    {
        "number": 10,
        "name": "Yūnus",
        "translation": "Yunus",
        "type": "Makkiyah",
        "ayahCount": "109 Ayat",
        "arabic": "يونس"
    },
    {
        "number": 11,
        "name": "Hūd",
        "translation": "Hud",
        "type": "Makkiyah",
        "ayahCount": "123 Ayat",
        "arabic": "هود"
    },
    {
        "number": 12,
        "name": "Yūsuf",
        "translation": "Yusuf",
        "type": "Makkiyah",
        "ayahCount": "111 Ayat",
        "arabic": "يوسف"
    },
    {
        "number": 13,
        "name": "Ar-Ra‘d",
        "translation": "Guruh",
        "type": "Makkiyah",
        "ayahCount": "43 Ayat",
        "arabic": "الرّعد"
    },
    {
        "number": 14,
        "name": "Ibrāhīm",
        "translation": "Ibrahim",
        "type": "Makkiyah",
        "ayahCount": "52 Ayat",
        "arabic": "ابرٰهيم"
    },
    {
        "number": 15,
        "name": "Al-Ḥijr",
        "translation": "Hijr",
        "type": "Makkiyah",
        "ayahCount": "99 Ayat",
        "arabic": "الحجر"
    },
    {
        "number": 16,
        "name": "An-Naḥl",
        "translation": "Lebah",
        "type": "Makkiyah",
        "ayahCount": "128 Ayat",
        "arabic": "النّحل"
    },
    {
        "number": 17,
        "name": "Al-Isrā'",
        "translation": "Memperjalankan di Malam Hari",
        "type": "Makkiyah",
        "ayahCount": "111 Ayat",
        "arabic": "الاسراۤء"
    },
    {
        "number": 18,
        "name": "Al-Kahf",
        "translation": "Gua",
        "type": "Makkiyah",
        "ayahCount": "110 Ayat",
        "arabic": "الكهف"
    },
    {
        "number": 19,
        "name": "Maryam",
        "translation": "Maryam",
        "type": "Makkiyah",
        "ayahCount": "98 Ayat",
        "arabic": "مريم"
    },
    {
        "number": 20,
        "name": "Ṭāhā",
        "translation": "Taha",
        "type": "Makkiyah",
        "ayahCount": "135 Ayat",
        "arabic": "طٰهٰ"
    },
    {
        "number": 21,
        "name": "Al-Anbiyā'",
        "translation": "Para Nabi",
        "type": "Makkiyah",
        "ayahCount": "112 Ayat",
        "arabic": "الانبياۤء"
    },
    {
        "number": 22,
        "name": "Al-Ḥajj",
        "translation": "Haji",
        "type": "Madaniyah",
        "ayahCount": "78 Ayat",
        "arabic": "الحجّ"
    },
    {
        "number": 23,
        "name": "Al-Mu'minūn",
        "translation": "Orang-Orang Mukmin",
        "type": "Makkiyah",
        "ayahCount": "118 Ayat",
        "arabic": "المؤمنون"
    },
    {
        "number": 24,
        "name": "An-Nūr",
        "translation": "Cahaya",
        "type": "Madaniyah",
        "ayahCount": "64 Ayat",
        "arabic": "النّور"
    },
    {
        "number": 25,
        "name": "Al-Furqān",
        "translation": "Pembeda",
        "type": "Makkiyah",
        "ayahCount": "77 Ayat",
        "arabic": "الفرقان"
    },
    {
        "number": 26,
        "name": "Asy-Syu‘arā'",
        "translation": "Para Penyair",
        "type": "Makkiyah",
        "ayahCount": "227 Ayat",
        "arabic": "الشّعراۤء"
    },
    {
        "number": 27,
        "name": "An-Naml",
        "translation": "Semut",
        "type": "Makkiyah",
        "ayahCount": "93 Ayat",
        "arabic": "النّمل"
    },
    {
        "number": 28,
        "name": "Al-Qaṣaṣ",
        "translation": "Kisah-Kisah",
        "type": "Makkiyah",
        "ayahCount": "88 Ayat",
        "arabic": "القصص"
    },
    {
        "number": 29,
        "name": "Al-‘Ankabūt",
        "translation": "Laba-Laba",
        "type": "Makkiyah",
        "ayahCount": "69 Ayat",
        "arabic": "العنكبوت"
    },
    {
        "number": 30,
        "name": "Ar-Rūm",
        "translation": "Romawi",
        "type": "Makkiyah",
        "ayahCount": "60 Ayat",
        "arabic": "الرّوم"
    },
    {
        "number": 31,
        "name": "Luqmān",
        "translation": "Luqman",
        "type": "Makkiyah",
        "ayahCount": "34 Ayat",
        "arabic": "لقمٰن"
    },
    {
        "number": 32,
        "name": "As-Sajdah",
        "translation": "Sajdah",
        "type": "Makkiyah",
        "ayahCount": "30 Ayat",
        "arabic": "السّجدة"
    },
    {
        "number": 33,
        "name": "Al-Aḥzāb",
        "translation": "Golongan Yang Bersekutu",
        "type": "Madaniyah",
        "ayahCount": "73 Ayat",
        "arabic": "الاحزاب"
    },
    {
        "number": 34,
        "name": "Saba'",
        "translation": "Saba'",
        "type": "Makkiyah",
        "ayahCount": "54 Ayat",
        "arabic": "سبأ"
    },
    {
        "number": 35,
        "name": "Fāṭir",
        "translation": "Pencipta",
        "type": "Makkiyah",
        "ayahCount": "45 Ayat",
        "arabic": "فاطر"
    },
    {
        "number": 36,
        "name": "Yāsīn",
        "translation": "Yasin",
        "type": "Makkiyah",
        "ayahCount": "83 Ayat",
        "arabic": "يٰسۤ"
    },
    {
        "number": 37,
        "name": "Aṣ-Ṣāffāt",
        "translation": "Barisan-Barisan",
        "type": "Makkiyah",
        "ayahCount": "182 Ayat",
        "arabic": "الصّٰۤفّٰت"
    },
    {
        "number": 38,
        "name": "Ṣād",
        "translation": "Ṣād",
        "type": "Makkiyah",
        "ayahCount": "88 Ayat",
        "arabic": "صۤ"
    },
    {
        "number": 39,
        "name": "Az-Zumar",
        "translation": "Rombongan",
        "type": "Makkiyah",
        "ayahCount": "75 Ayat",
        "arabic": "الزّمر"
    },
    {
        "number": 40,
        "name": "Gāfir",
        "translation": "Maha Pengampun",
        "type": "Makkiyah",
        "ayahCount": "85 Ayat",
        "arabic": "غافر"
    },
    {
        "number": 41,
        "name": "Fuṣṣilat",
        "translation": "Dijelaskan",
        "type": "Makkiyah",
        "ayahCount": "54 Ayat",
        "arabic": "فصّلت"
    },
    {
        "number": 42,
        "name": "Asy-Syūrā",
        "translation": "Musyawarah",
        "type": "Makkiyah",
        "ayahCount": "53 Ayat",
        "arabic": "الشّورٰى"
    },
    {
        "number": 43,
        "name": "Az-Zukhruf",
        "translation": "Perhiasan dari Emas",
        "type": "Makkiyah",
        "ayahCount": "89 Ayat",
        "arabic": "الزّخرف"
    },
    {
        "number": 44,
        "name": "Ad-Dukhān",
        "translation": "Kabut Asap",
        "type": "Makkiyah",
        "ayahCount": "59 Ayat",
        "arabic": "الدّخان"
    },
    {
        "number": 45,
        "name": "Al-Jāṡiyah",
        "translation": "Berlutut",
        "type": "Makkiyah",
        "ayahCount": "37 Ayat",
        "arabic": "الجاثية"
    },
    {
        "number": 46,
        "name": "Al-Aḥqāf",
        "translation": "Ahqaf",
        "type": "Makkiyah",
        "ayahCount": "35 Ayat",
        "arabic": "الاحقاف"
    },
    {
        "number": 47,
        "name": "Muḥammad",
        "translation": "Nabi Muhammad",
        "type": "Madaniyah",
        "ayahCount": "38 Ayat",
        "arabic": "محمّد"
    },
    {
        "number": 48,
        "name": "Al-Fatḥ",
        "translation": "Kemenangan",
        "type": "Madaniyah",
        "ayahCount": "29 Ayat",
        "arabic": "الفتح"
    },
    {
        "number": 49,
        "name": "Al-Ḥujurāt",
        "translation": "Kamar-Kamar",
        "type": "Madaniyah",
        "ayahCount": "18 Ayat",
        "arabic": "الحجرٰت"
    },
    {
        "number": 50,
        "name": "Qāf",
        "translation": "Qaf",
        "type": "Makkiyah",
        "ayahCount": "45 Ayat",
        "arabic": "قۤ"
    },
    {
        "number": 51,
        "name": "Aż-Żāriyāt",
        "translation": "Yang Menerbangkan",
        "type": "Makkiyah",
        "ayahCount": "60 Ayat",
        "arabic": "الذّٰريٰت"
    },
    {
        "number": 52,
        "name": "Aṭ-Ṭūr",
        "translation": "Gunung",
        "type": "Makkiyah",
        "ayahCount": "49 Ayat",
        "arabic": "الطّور"
    },
    {
        "number": 53,
        "name": "An-Najm",
        "translation": "Bintang",
        "type": "Makkiyah",
        "ayahCount": "62 Ayat",
        "arabic": "النّجم"
    },
    {
        "number": 54,
        "name": "Al-Qamar",
        "translation": "Bulan",
        "type": "Makkiyah",
        "ayahCount": "55 Ayat",
        "arabic": "القمر"
    },
    {
        "number": 55,
        "name": "Ar-Raḥmān",
        "translation": "Yang Maha Pengasih",
        "type": "Makkiyah",
        "ayahCount": "78 Ayat",
        "arabic": "الرّحمٰن"
    },
    {
        "number": 56,
        "name": "Al-Wāqi‘ah",
        "translation": "Hari Kiamat Yang Pasti Terjadi",
        "type": "Makkiyah",
        "ayahCount": "96 Ayat",
        "arabic": "الواقعة"
    },
    {
        "number": 57,
        "name": "Al-Ḥadīd",
        "translation": "Besi",
        "type": "Madaniyah",
        "ayahCount": "29 Ayat",
        "arabic": "الحديد"
    },
    {
        "number": 58,
        "name": "Al-Mujādalah",
        "translation": "Gugatan",
        "type": "Madaniyah",
        "ayahCount": "22 Ayat",
        "arabic": "المجادلة"
    },
    {
        "number": 59,
        "name": "Al-Ḥasyr",
        "translation": "Pengusiran",
        "type": "Madaniyah",
        "ayahCount": "24 Ayat",
        "arabic": "الحشر"
    },
    {
        "number": 60,
        "name": "Al-Mumtaḥanah",
        "translation": "Wanita Yang Diuji",
        "type": "Madaniyah",
        "ayahCount": "13 Ayat",
        "arabic": "الممتحنة"
    },
    {
        "number": 61,
        "name": "Aṣ-Ṣaff",
        "translation": "Barisan",
        "type": "Madaniyah",
        "ayahCount": "14 Ayat",
        "arabic": "الصّفّ"
    },
    {
        "number": 62,
        "name": "Al-Jumu‘ah",
        "translation": "Jumat",
        "type": "Madaniyah",
        "ayahCount": "11 Ayat",
        "arabic": "الجمعة"
    },
    {
        "number": 63,
        "name": "Al-Munāfiqūn",
        "translation": "Orang-Orang Munafik",
        "type": "Madaniyah",
        "ayahCount": "11 Ayat",
        "arabic": "المنٰفقون"
    },
    {
        "number": 64,
        "name": "At-Tagābun",
        "translation": "Pengungkapan Kesalahan",
        "type": "Madaniyah",
        "ayahCount": "18 Ayat",
        "arabic": "التّغابن"
    },
    {
        "number": 65,
        "name": "Aṭ-Ṭalāq",
        "translation": "Talak",
        "type": "Madaniyah",
        "ayahCount": "12 Ayat",
        "arabic": "الطّلاق"
    },
    {
        "number": 66,
        "name": "At-taḥrīm",
        "translation": "Pengharaman",
        "type": "Madaniyah",
        "ayahCount": "12 Ayat",
        "arabic": "التّحريم"
    },
    {
        "number": 67,
        "name": "Al-Mulk",
        "translation": "Kerajaan",
        "type": "Makkiyah",
        "ayahCount": "30 Ayat",
        "arabic": "المُلك"
    },
    {
        "number": 68,
        "name": "Al-Qalam",
        "translation": "Pena",
        "type": "Makkiyah",
        "ayahCount": "52 Ayat",
        "arabic": "القلم"
    },
    {
        "number": 69,
        "name": "Al-Ḥāqqah",
        "translation": "Hari Kiamat Yang Pasti Terjadi",
        "type": "Makkiyah",
        "ayahCount": "52 Ayat",
        "arabic": "الحاۤقّة"
    },
    {
        "number": 70,
        "name": "Al-Ma‘ārij",
        "translation": "Tempat-Tempat Naik",
        "type": "Makkiyah",
        "ayahCount": "44 Ayat",
        "arabic": "المعارج"
    },
    {
        "number": 71,
        "name": "Nūḥ",
        "translation": "Nuh",
        "type": "Makkiyah",
        "ayahCount": "28 Ayat",
        "arabic": "نوح"
    },
    {
        "number": 72,
        "name": "Al-Jinn",
        "translation": "Jin",
        "type": "Makkiyah",
        "ayahCount": "28 Ayat",
        "arabic": "الجنّ"
    },
    {
        "number": 73,
        "name": "Al-Muzzammil",
        "translation": "Orang Berkelumun",
        "type": "Makkiyah",
        "ayahCount": "20 Ayat",
        "arabic": "المزّمّل"
    },
    {
        "number": 74,
        "name": "Al-Muddaṡṡir",
        "translation": "Orang Berselimut",
        "type": "Makkiyah",
        "ayahCount": "56 Ayat",
        "arabic": "المدّثّر"
    },
    {
        "number": 75,
        "name": "Al-Qiyāmah",
        "translation": "Hari Kiamat",
        "type": "Makkiyah",
        "ayahCount": "40 Ayat",
        "arabic": "القيٰمة"
    },
    {
        "number": 76,
        "name": "Al-Insān",
        "translation": "Manusia",
        "type": "Madaniyah",
        "ayahCount": "31 Ayat",
        "arabic": "الانسان"
    },
    {
        "number": 77,
        "name": "Al-Mursalāt",
        "translation": "Malaikat Yang Diutus",
        "type": "Makkiyah",
        "ayahCount": "50 Ayat",
        "arabic": "المرسلٰت"
    },
    {
        "number": 78,
        "name": "An-Naba'",
        "translation": "Berita",
        "type": "Makkiyah",
        "ayahCount": "40 Ayat",
        "arabic": "النّبأ"
    },
    {
        "number": 79,
        "name": "An-Nāzi‘āt",
        "translation": "Yang Mencabut Dengan Keras",
        "type": "Makkiyah",
        "ayahCount": "46 Ayat",
        "arabic": "النّٰزعٰت"
    },
    {
        "number": 80,
        "name": "‘Abasa",
        "translation": "Berwajah Masam",
        "type": "Makkiyah",
        "ayahCount": "42 Ayat",
        "arabic": "عبس"
    },
    {
        "number": 81,
        "name": "At-Takwīr",
        "translation": "Penggulungan",
        "type": "Makkiyah",
        "ayahCount": "29 Ayat",
        "arabic": "التّكوير"
    },
    {
        "number": 82,
        "name": "Al-Infiṭār",
        "translation": "Terbelah",
        "type": "Makkiyah",
        "ayahCount": "19 Ayat",
        "arabic": "الانفطار"
    },
    {
        "number": 83,
        "name": "Al-Muṭaffifīn",
        "translation": "Orang-Orang Yang Curang",
        "type": "Makkiyah",
        "ayahCount": "36 Ayat",
        "arabic": "المطفّفين"
    },
    {
        "number": 84,
        "name": "Al-Insyiqāq",
        "translation": "Terbelah",
        "type": "Makkiyah",
        "ayahCount": "25 Ayat",
        "arabic": "الانشقاق"
    },
    {
        "number": 85,
        "name": "Al-Burūj",
        "translation": "Gugusan Bintang",
        "type": "Makkiyah",
        "ayahCount": "22 Ayat",
        "arabic": "البروج"
    },
    {
        "number": 86,
        "name": "Aṭ-Ṭāriq",
        "translation": "Yang Datang Pada Malam Hari",
        "type": "Makkiyah",
        "ayahCount": "17 Ayat",
        "arabic": "الطّارق"
    },
    {
        "number": 87,
        "name": "Al-A‘lā",
        "translation": "Yang Maha Tinggi",
        "type": "Makkiyah",
        "ayahCount": "19 Ayat",
        "arabic": "الاعلى"
    },
    {
        "number": 88,
        "name": "Al-Gāsyiyah",
        "translation": "Hari Kiamat Yang Menghilangkan Kesadaran",
        "type": "Makkiyah",
        "ayahCount": "26 Ayat",
        "arabic": "الغاشية"
    },
    {
        "number": 89,
        "name": "Al-Fajr",
        "translation": "Fajar",
        "type": "Makkiyah",
        "ayahCount": "30 Ayat",
        "arabic": "الفجر"
    },
    {
        "number": 90,
        "name": "Al-Balad",
        "translation": "Negeri",
        "type": "Makkiyah",
        "ayahCount": "20 Ayat",
        "arabic": "البلد"
    },
    {
        "number": 91,
        "name": "Asy-Syams",
        "translation": "Matahari",
        "type": "Makkiyah",
        "ayahCount": "15 Ayat",
        "arabic": "الشّمس"
    },
    {
        "number": 92,
        "name": "Al-Lail",
        "translation": "Malam",
        "type": "Makkiyah",
        "ayahCount": "21 Ayat",
        "arabic": "الّيل"
    },
    {
        "number": 93,
        "name": "Aḍ-Ḍuḥā",
        "translation": "Duha",
        "type": "Makkiyah",
        "ayahCount": "11 Ayat",
        "arabic": "الضّحى"
    },
    {
        "number": 94,
        "name": "Asy-Syarḥ",
        "translation": "Pelapangan",
        "type": "Makkiyah",
        "ayahCount": "8 Ayat",
        "arabic": "الشّرح"
    },
    {
        "number": 95,
        "name": "At-Tīn",
        "translation": "Buah Tin",
        "type": "Makkiyah",
        "ayahCount": "8 Ayat",
        "arabic": "التّين"
    },
    {
        "number": 96,
        "name": "Al-‘Alaq",
        "translation": "Segumpal Darah",
        "type": "Makkiyah",
        "ayahCount": "19 Ayat",
        "arabic": "العلق"
    },
    {
        "number": 97,
        "name": "Al-Qadr",
        "translation": "Al-Qadar",
        "type": "Makkiyah",
        "ayahCount": "5 Ayat",
        "arabic": "القدر"
    },
    {
        "number": 98,
        "name": "Al-Bayyinah",
        "translation": "Bukti Nyata",
        "type": "Madaniyah",
        "ayahCount": "8 Ayat",
        "arabic": "البيّنة"
    },
    {
        "number": 99,
        "name": "Az-Zalzalah",
        "translation": "Guncangan",
        "type": "Madaniyah",
        "ayahCount": "8 Ayat",
        "arabic": "الزّلزلة"
    },
    {
        "number": 100,
        "name": "Al-‘Ādiyāt",
        "translation": "Kuda Perang Yang Berlari Kencang",
        "type": "Makkiyah",
        "ayahCount": "11 Ayat",
        "arabic": "العٰديٰت"
    },
    {
        "number": 101,
        "name": "Al-Qāri‘ah",
        "translation": "Al-Qāri‘ah",
        "type": "Makkiyah",
        "ayahCount": "11 Ayat",
        "arabic": "القارعة"
    },
    {
        "number": 102,
        "name": "At-Takāṡur",
        "translation": "Berbangga-Bangga Dalam Memperbanyak Dunia",
        "type": "Makkiyah",
        "ayahCount": "8 Ayat",
        "arabic": "التّكاثر"
    },
    {
        "number": 103,
        "name": "Al-‘Aṣr",
        "translation": "Masa",
        "type": "Makkiyah",
        "ayahCount": "3 Ayat",
        "arabic": "العصر"
    },
    {
        "number": 104,
        "name": "Al-Humazah",
        "translation": "Pengumpat",
        "type": "Makkiyah",
        "ayahCount": "9 Ayat",
        "arabic": "الهمزة"
    },
    {
        "number": 105,
        "name": "Al-Fīl",
        "translation": "Gajah",
        "type": "Makkiyah",
        "ayahCount": "5 Ayat",
        "arabic": "الفيل"
    },
    {
        "number": 106,
        "name": "Quraisy",
        "translation": "Orang Quraisy",
        "type": "Makkiyah",
        "ayahCount": "4 Ayat",
        "arabic": "قريش"
    },
    {
        "number": 107,
        "name": "Al-Mā‘ūn",
        "translation": "Bantuan",
        "type": "Makkiyah",
        "ayahCount": "7 Ayat",
        "arabic": "الماعون"
    },
    {
        "number": 108,
        "name": "Al-Kauṡar",
        "translation": "Nikmat Yang Banyak",
        "type": "Makkiyah",
        "ayahCount": "3 Ayat",
        "arabic": "الكوثر"
    },
    {
        "number": 109,
        "name": "Al-Kāfirūn",
        "translation": "Orang-Orang kafir",
        "type": "Makkiyah",
        "ayahCount": "6 Ayat",
        "arabic": "الكٰفرون"
    },
    {
        "number": 110,
        "name": "An-Naṣr",
        "translation": "Pertolongan",
        "type": "Madaniyah",
        "ayahCount": "3 Ayat",
        "arabic": "النّصر"
    },
    {
        "number": 111,
        "name": "Al-Lahab",
        "translation": "Gejolak Api",
        "type": "Makkiyah",
        "ayahCount": "5 Ayat",
        "arabic": "اللّهب"
    },
    {
        "number": 112,
        "name": "Al-Ikhlāṣ",
        "translation": "Ikhlas",
        "type": "Makkiyah",
        "ayahCount": "4 Ayat",
        "arabic": "الاخلاص"
    },
    {
        "number": 113,
        "name": "Al-Falaq",
        "translation": "Fajar",
        "type": "Madaniyah",
        "ayahCount": "5 Ayat",
        "arabic": "الفلق"
    },
    {
        "number": 114,
        "name": "An-Nās",
        "translation": "Manusia",
        "type": "Madaniyah",
        "ayahCount": "6 Ayat",
        "arabic": "النّاس"
    }
];

export default SURAHS;
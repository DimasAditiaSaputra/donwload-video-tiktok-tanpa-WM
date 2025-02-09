# TikTok Video Downloader tanpa Watermark

Proyek ini adalah API untuk mengunduh video TikTok tanpa watermark menggunakan [@tobyg74/tiktok-api-dl](https://github.com/tobyg74/tiktok-api-dl).

## 🚀 Fitur
- ✅ Unduh video TikTok tanpa watermark
- ✅ API sederhana berbasis Express
- ✅ Mendukung input URL TikTok

## 🛠️ Instalasi
1. Clone repository ini:
   ```bash
   git clone https://github.com/DimasAditiaSaputra/donwload-video-tiktok-tanpa-WM.git
   cd repository
   ```
2. Install dependensi:
   ```bash
   npm install
   ```

## 🚀 Menjalankan Server
Jalankan server dengan perintah berikut:
```bash
node server.js
```
Server akan berjalan di `http://localhost:8080`.

## 📡 Endpoint API
### 1️⃣ **Download Video**
- **Method:** `POST`
- **Endpoint:** `/`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "url": "https://www.tiktok.com/@username/video/123456789"
  }
  ```
- **Response:**
  ```json
  {
    "videoUrl": "https://download-link.com/video.mp4"
  }
  ```

## 🏗️ Teknologi yang Digunakan
- **Node.js** & **Express.js**
- **[@tobyg74/tiktok-api-dl](https://github.com/tobyg74/tiktok-api-dl)** untuk mengunduh video TikTok
- **Axios** untuk melakukan request HTTP

## 💡 Contoh Implementasi Backend (Express.js)
```javascript
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { tiktok } = require("@tobyg74/tiktok-api-dl");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
    const { url } = req.body;
    if (!url || !url.includes("tiktok.com")) {
        return res.status(400).json({ error: "Invalid TikTok URL" });
    }
    try {
        const result = await tiktok(url);
        res.json({ videoUrl: result.video.no_watermark });
    } catch (error) {
        res.status(500).json({ error: "Failed to download video" });
    }
});

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
```

## 🤝 Kontribusi
Pull request sangat diterima! Pastikan untuk membuka issue terlebih dahulu sebelum berkontribusi.

## 📜 Lisensi
Proyek ini menggunakan lisensi **MIT**. Lihat [LICENSE](LICENSE) untuk detail lebih lanjut.

---
✨ Dibuat dengan ❤️ oleh [Nama Kamu](https://github.com/username)


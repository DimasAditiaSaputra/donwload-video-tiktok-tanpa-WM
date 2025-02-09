# TikTok Video Downloader tanpa Watermark

Proyek ini adalah API untuk mengunduh video TikTok tanpa watermark menggunakan [@tobyg74/tiktok-api-dl](https://github.com/tobyg74/tiktok-api-dl).

## 🚀 Fitur
- ✅ Unduh video TikTok tanpa watermark
- ✅ API sederhana berbasis Express
- ✅ Mendukung input URL TikTok

## 🛠️ Instalasi
1. Clone repository ini:
   ```bash
   git clone https://github.com/username/repository.git
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
- **Endpoint:** `/download`
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



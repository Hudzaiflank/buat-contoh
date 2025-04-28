# Dokumentasi API - Sistem Manajemen Keluhan

## Overview

Dokumentasi API untuk mengelola order, notifikasi, produk, user, dan keluhan pada sistem manajemen keluhan.

Semua endpoint menerima dan merespon dengan format **JSON**.

Pastikan semua body request dikirim dengan header:

```http
Content-Type: application/json
```

Detail error akan disediakan sesuai dengan jenis kesalahan server.

Untuk keamanan, pastikan semua endpoint yang memerlukan autentikasi dilindungi dengan token atau mekanisme autentikasi lain (detail implementasi autentikasi tidak tercakup dalam dokumentasi ini).

---

## Ringkasan Routes

| Resource | Method | Endpoint | Deskripsi |
|:---|:---|:---|:---|
| Order | GET | `/orders/:id` | Mengambil data order berdasarkan ID |
| Order | POST | `/orders/` | Menambahkan order baru |
| Notification | GET | `/notifications/:id` | Mengambil notifikasi berdasarkan ID |
| Notification | POST | `/notifications/` | Menambahkan notifikasi baru |
| Product | GET | `/products/:id` | Mengambil data produk berdasarkan ID |
| Product | POST | `/products/` | Menambahkan produk baru |
| Product | PUT | `/products/:id` | Memperbarui data produk berdasarkan ID |
| Product | DELETE | `/products/:id` | Menghapus produk berdasarkan ID |
| User | GET | `/users/:id` | Mengambil data user berdasarkan ID |
| User | POST | `/users/` | Menambahkan user baru |
| User | PUT | `/users/:id` | Memperbarui data user berdasarkan ID |
| User | DELETE | `/users/:id` | Menghapus user berdasarkan ID |
| Complaint | GET | `/complaints/:id` | Mengambil keluhan berdasarkan ID |
| Complaint | POST | `/complaints/` | Menambahkan keluhan baru |
| Complaint | PUT | `/complaints/:id` | Memperbarui status keluhan |
| Complaint | DELETE | `/complaints/:id` | Menghapus keluhan berdasarkan ID |

---

## Detail API

### 1. Order API

#### GET `/orders/:id`
- **Deskripsi:** Mengambil data order berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib): ID dari order
- **Response:**
  - `200 OK`
    ```json
    {
      "order_id": 1,
      "user_id": 2,
      "product_id": 3,
      "request_type": "purchase",
      "status": "pending"
    }
    ```
  - `404 Not Found`
    ```json
    { "message": "Order not found" }
    ```
  - `500 Internal Server Error`
    ```json
    { "message": "Error retrieving order", "error": "details" }
    ```

#### POST `/orders/`
- **Deskripsi:** Menambahkan order baru.
- **Body Parameter:**
  - `userId` (Integer, Wajib)
  - `productId` (Integer, Wajib)
  - `requestType` (String, Wajib)
  - `status` (String, Wajib)
- **Response:**
  - `201 Created`
    ```json
    { "message": "Order added successfully", "orderId": 1 }
    ```
  - `500 Internal Server Error`
    ```json
    { "message": "Error adding order", "error": "details" }
    ```

---

### 2. Notification API

#### GET `/notifications/:id`
- **Deskripsi:** Mengambil notifikasi berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Response:**
  - `200 OK`
    ```json
    {
      "notification_id": 1,
      "user_id": 2,
      "complaint_id": 3,
      "message": "New update available",
      "status": "unread"
    }
    ```
  - `404 Not Found`
  - `500 Internal Server Error`

#### POST `/notifications/`
- **Deskripsi:** Menambahkan notifikasi baru.
- **Body Parameter:**
  - `userId` (Integer, Wajib)
  - `complaintId` (Integer, Wajib)
  - `message` (String, Wajib)
  - `status` (String, Wajib)
- **Response:**
  - `201 Created`
  - `500 Internal Server Error`

---

### 3. Product API

#### GET `/products/:id`
- **Deskripsi:** Mengambil data produk berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Response:**
  - `200 OK`
    ```json
    {
      "product_id": 1,
      "name": "Product Name",
      "type": "Electronics",
      "location": "Warehouse A",
      "status": "available",
      "description": "A high quality product"
    }
    ```
  - `404 Not Found`
  - `500 Internal Server Error`

#### POST `/products/`
- **Deskripsi:** Menambahkan produk baru.
- **Body Parameter:**
  - `name` (String, Wajib)
  - `type` (String, Wajib)
  - `location` (String, Wajib)
  - `status` (String, Wajib)
  - `description` (String, Wajib)
- **Response:**
  - `201 Created`
  - `500 Internal Server Error`

#### PUT `/products/:id`
- **Deskripsi:** Memperbarui data produk berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Body Field (Opsional):** `name`, `type`, `location`, `status`, `description`
- **Response:**
  - `200 OK`
  - `500 Internal Server Error`

#### DELETE `/products/:id`
- **Deskripsi:** Menghapus produk berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Response:**
  - `200 OK`
  - `500 Internal Server Error`

---

### 4. User API

#### GET `/users/:id`
- **Deskripsi:** Mengambil data user berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Response:**
  - `200 OK`
    ```json
    {
      "user_id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```
  - `404 Not Found`
  - `500 Internal Server Error`

#### POST `/users/`
- **Deskripsi:** Menambahkan user baru.
- **Body Parameter:**
  - `name` (String, Wajib)
  - `email` (String, Wajib)
  - `password` (String, Wajib)
- **Response:**
  - `201 Created`
  - `500 Internal Server Error`

#### PUT `/users/:id`
- **Deskripsi:** Memperbarui data user berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Body Field (Opsional):** `name`, `email`
- **Response:**
  - `200 OK`
  - `500 Internal Server Error`

#### DELETE `/users/:id`
- **Deskripsi:** Menghapus user berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Response:**
  - `200 OK`
  - `500 Internal Server Error`

---

### 5. Complaint API

#### GET `/complaints/:id`
- **Deskripsi:** Mengambil keluhan berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Response:**
  - `200 OK`
    ```json
    {
      "complaint_id": 1,
      "user_id": 123,
      "product_id": 456,
      "complaint_text": "Product was damaged during shipping",
      "status": "pending"
    }
    ```
  - `404 Not Found`
  - `500 Internal Server Error`

#### POST `/complaints/`
- **Deskripsi:** Menambahkan keluhan baru.
- **Body Parameter:**
  - `userId` (Integer, Wajib)
  - `productId` (Integer, Wajib)
  - `complaintText` (String, Wajib)
  - `status` (String, Wajib)
- **Response:**
  - `201 Created`
  - `500 Internal Server Error`

#### PUT `/complaints/:id`
- **Deskripsi:** Memperbarui status keluhan berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Body Parameter:**
  - `status` (String, Wajib)
- **Response:**
  - `200 OK`
  - `500 Internal Server Error`

#### DELETE `/complaints/:id`
- **Deskripsi:** Menghapus keluhan berdasarkan ID.
- **Parameter:**
  - `id` (URL, Integer, Wajib)
- **Response:**
  - `200 OK`
  - `500 Internal Server Error`

---

## Model Data

### Complaint
| Field | Tipe Data | Deskripsi |
|:------|:-----|:------------|
| complaint_id | Integer | ID unik untuk keluhan |
| user_id | Integer | ID dari user penyampai keluhan |
| product_id | Integer | ID dari produk yang dikeluhkan |
| complaint_text | String | Deskripsi detail keluhan |
| status | String | Status keluhan (pending, in progress, resolved) |

### Order
| Field | Tipe Data | Deskripsi |
|:------|:-----|:------------|
| order_id | Integer | ID unik untuk order |
| user_id | Integer | ID user pembuat order |
| product_id | Integer | ID produk yang diorder |
| request_type | String | Tipe request (purchase, rent) |
| status | String | Status order |

### Notification
| Field | Tipe Data | Deskripsi |
|:------|:-----|:------------|
| notification_id | Integer | ID unik untuk notifikasi |
| user_id | Integer | ID user penerima notifikasi |
| complaint_id | Integer | ID keluhan terkait (jika ada) |
| message | String | Isi pesan notifikasi |
| status | String | Status notifikasi (unread, read) |

### Product
| Field | Tipe Data | Deskripsi |
|:------|:-----|:------------|
| product_id | Integer | ID unik untuk produk |
| name | String | Nama produk |
| type | String | Tipe/kategori produk |
| location | String | Lokasi penyimpanan |
| status | String | Status produk |
| description | String | Deskripsi detail produk |

### User
| Field | Tipe Data | Deskripsi |
|:------|:-----|:------------|
| user_id | Integer | ID unik user |
| name | String | Nama lengkap user |
| email | String | Email user |
| password | String | Password terenkripsi (tidak dikembalikan pada respons API) |

---

## Catatan

- Semua request dan response menggunakan format **JSON**.
- Header `Content-Type: application/json` wajib digunakan.
- Respons error akan mengandung pesan error yang membantu.
- Untuk keamanan, gunakan mekanisme autentikasi pada endpoint yang diperlukan.

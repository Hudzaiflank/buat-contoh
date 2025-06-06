# 🛠️ Final Project: Microservices System with RESTful API

## 📁 Folder Structure

```
.
├── client/                   # React + Vite + Tailwind frontend
├── UserService/             # Service: Users (port 3001)
├── ProductService/          # Service: Products (port 3002)
├── ComplaintService/        # Service: Complaints (port 3003)
├── NotificationService/     # Service: Notifications (port 3004)
├── OrderService/            # Service: Orders (port 3005)
├── start/                   # Runner script for all services
├── db.sql                   # SQL dump file
├── README.md                # This file
└── Instruksi Pengerjaan Proyek.pdf
```

---

## ⚙️ Installation & Running

### 🔹 Manual Per Service

#### ▶️ UserService
```bash
cd UserService
npm install
```

#### ▶️ ProductService
```bash
cd ProductService
npm install
```

#### ▶️ ComplaintService
```bash
cd ComplaintService
npm install
```

#### ▶️ NotificationService
```bash
cd NotificationService
npm install
```

#### ▶️ OrderService
```bash
cd OrderService
npm install
```

### 🔹 Global Runner (After each services been installed, run on this folder)
```bash
cd start
npm install
node start-services.js
```

### 🔹 Frontend
```bash
cd client
npm install
npm run dev
# Opens at http://localhost:5173
```

---

## 📚 API Documentation with JSON

### ✅ User Service (`http://localhost:3001/users`)

#### `GET /` & `GET /:id`
_Response:_
```json
{
  "user_id": 1,
  "name": "Budi",
  "email": "budi@example.com",
  "password": "password123"
}
```

#### `POST /`
_Body:_
```json
{
  "name": "Budi",
  "email": "budi@example.com",
  "password": "password123"
}
```
_Response:_
```json
{
  "message": "User added successfully",
  "userId": 13
}
```

#### `PUT /:id`
_Body:_
```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```
_Response:_
```json
{
  "message": "User updated successfully"
}
```

#### `DELETE /:id`
```json
{
  "message": "User deleted successfully"
}
```

---

### ✅ Product Service (`http://localhost:3002/products`)

#### `POST /`
_Body:_
```json
{
  "name": "Jalan Raya",
  "type": "Jalan",
  "location": "Jakarta",
  "status": "Rusak",
  "description": "Jalan banyak berlubang"
}
```
_Response:_
```json
{
  "message": "Product added successfully",
  "productId": 5
}
```

#### `PUT /:id`
_Body:_
```json
{
  "name": "Updated Name",
  "type": "Taman",
  "location": "Bandung",
  "status": "Baik",
  "description": "Taman diperbarui"
}
```
_Response:_
```json
{
  "message": "Product updated successfully"
}
```

---

### ✅ Complaint Service (`http://localhost:3003/complaints`)

#### `POST /`
_Body:_
```json
{
  "userId": 1,
  "productId": 2,
  "complaintText": "Jalan rusak",
  "status": "Pending"
}
```
_Response:_
```json
{
  "message": "Complaint added successfully",
  "complaintId": 7
}
```

#### `PUT /:id`
_Body:_
```json
{
  "status": "Resolved"
}
```
_Response:_
```json
{
  "message": "Complaint updated successfully"
}
```

---

### ✅ Notification Service (`http://localhost:3004/notifications`)

#### `POST /`
_Body:_
```json
{
  "userId": 1,
  "complaintId": 2,
  "message": "Keluhan Anda diproses",
  "status": "Sent"
}
```
_Response:_
```json
{
  "message": "Notification added successfully",
  "notificationId": 6
}
```

#### `PUT /:id`
_Body:_
```json
{
  "userId": 1,
  "complaintId": 2,
  "message": "Updated message",
  "status": "Pending"
}
```
_Response:_
```json
{
  "message": "Notification updated successfully"
}
```

---

### ✅ Order Service (`http://localhost:3005/orders`)

#### `POST /`
_Body:_
```json
{
  "userId": 1,
  "productId": 2,
  "requestType": "Perbaikan Mendesak",
  "status": "Pending"
}
```
_Response:_
```json
{
  "message": "Order added successfully",
  "orderId": 6
}
```

#### `PUT /:id`
_Body:_
```json
{
  "userId": 1,
  "productId": 2,
  "requestType": "Pemeliharaan",
  "status": "Resolved"
}
```
_Response:_
```json
{
  "message": "Order updated successfully"
}
```

---

© 2025 - Final Project Microservices System

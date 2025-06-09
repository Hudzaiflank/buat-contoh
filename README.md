# Final Project Microservices - Workflow App

Proyek Final untuk mata kuliah Enterprise Application Integration dengan pendekatan **Microservices Architecture**. Aplikasi ini mengintegrasikan 5 layanan backend berbasis **GraphQL**, serta 1 layanan frontend berbasis **React + Vite**.

## 📦 Layanan

Berikut ini daftar layanan backend yang digunakan dalam Workflow App:

| Layanan             | Port | Deskripsi                                | GraphQL Endpoint                                               |
| ------------------- | ---- | ---------------------------------------- | -------------------------------------------------------------- |
| UserService         | 4001 | Mengelola data user                      | [http://localhost:4001/graphql](http://localhost:4001/graphql) |
| ProductService      | 4002 | Mengelola data produk                    | [http://localhost:4002/graphql](http://localhost:4002/graphql) |
| ComplaintService    | 4003 | Mengelola data pengaduan terhadap produk | [http://localhost:4003/graphql](http://localhost:4003/graphql) |
| NotificationService | 4004 | Mengelola notifikasi untuk user          | [http://localhost:4004/graphql](http://localhost:4004/graphql) |
| OrderService        | 4005 | Mengelola pemesanan produk oleh user     | [http://localhost:4005/graphql](http://localhost:4005/graphql) |

## 🧑‍💻 Teknologi yang Digunakan

### Backend (per layanan):

- Node.js + Express
- GraphQL (Apollo Server)
- MySQL (database sudah termasuk dalam image Docker)
- Sequelize ORM (jika digunakan)
- Docker & Docker Compose

### Frontend (client):

- React + Vite
- TypeScript
- Tailwind CSS
- Apollo Client
- SweetAlert2

## 🚀 Langkah Menjalankan Aplikasi

### 1. Siapkan Folder Proyek

Buat folder baru, lalu copy file docker-compose.yaml di sini

```bash
mkdir workflow-app
cd workflow-app
# Lalu copy file docker-compose.yaml ke sini
```

### 2. Jalankan Semua Service

```bash
docker-compose up --build -d
```

## 🧾 Contoh Query & Mutation per Layanan

### 🔹 UserService (`http://localhost:4001/graphql`)

```graphql
# Get All Users
query {
  users {
    user_id
    name
    email
  }
}

# Get User by ID
query {
  user(id: 1) {
    user_id
    name
    email
  }
}

# Add User
mutation {
  addUser(input: { name: "Alya", email: "alya@email.com" }) {
    user_id
    name
  }
}

# Update User
mutation {
  updateUser(id: 1, input: { name: "Updated Name" }) {
    user_id
    name
  }
}

# Delete User
mutation {
  deleteUser(id: 1)
}
```

### 🔹 ProductService (`http://localhost:4002/graphql`)

```graphql
query {
  products {
    product_id
    name
    type
    location
    status
    description
  }
}

query {
  product(id: 1) {
    product_id
    name
  }
}

mutation {
  addProduct(
    input: {
      name: "Kipas"
      type: "Elektronik"
      location: "Rak A1"
      status: "Ready"
      description: "Kipas angin meja"
    }
  ) {
    product_id
  }
}

mutation {
  updateProduct(id: 1, input: { name: "Kipas Baru" }) {
    product_id
  }
}

mutation {
  deleteProduct(id: 1)
}
```

### 🔹 ComplaintService (`http://localhost:4003/graphql`)

```graphql
query {
  complaints {
    complaint_id
    description
  }
}

query {
  complaint(id: 1) {
    complaint_id
    description
  }
}

query {
  complaintsByUser(user_id: 1) {
    complaint_id
    description
  }
}

mutation {
  addComplaint(
    input: { user_id: 1, product_id: 1, description: "Barang rusak" }
  ) {
    complaint_id
  }
}

mutation {
  updateComplaint(id: 1, input: { description: "Sudah diperbaiki" }) {
    complaint_id
  }
}

mutation {
  deleteComplaint(id: 1)
}
```

### 🔹 NotificationService (`http://localhost:4004/graphql`)

```graphql
query {
  getAllNotifications {
    notification_id
    message
  }
}

query {
  getNotificationById(id: 1) {
    notification_id
    message
  }
}

query {
  getNotificationsByUserId(user_id: 1) {
    notification_id
    message
  }
}

mutation {
  addNotification(
    input: {
      user_id: 1
      complaint_id: 1
      message: "Pengaduan Anda sedang diproses"
    }
  ) {
    notification_id
  }
}

mutation {
  updateNotification(id: 1, input: { message: "Selesai" }) {
    notification_id
  }
}

mutation {
  deleteNotification(id: 1)
}
```

### 🔹 OrderService (`http://localhost:4005/graphql`)

```graphql
query {
  orders {
    order_id
    request_type
    status
  }
}

query {
  order(id: 1) {
    order_id
    request_type
    status
  }
}

query {
  ordersByUserId(user_id: 1) {
    order_id
    status
  }
}

mutation {
  addOrder(
    input: {
      user_id: 1
      product_id: 1
      request_type: "permintaan"
      status: "pending"
    }
  ) {
    order_id
  }
}

mutation {
  updateOrder(id: 1, input: { status: "approved" }) {
    order_id
  }
}

mutation {
  deleteOrder(id: 1)
}
```

## 🐳 Docker Commands Tambahan

### Cek status semua container

```bash
docker-compose ps
```

### Melihat logs

```bash
docker-compose logs -f UserService
```

### Stop dan hapus semua container

```bash
docker-compose down -v
```

## 📋 Catatan Penting

- Semua service GraphQL dapat diuji menggunakan GraphQL Playground
- Tidak perlu setup manual database — semua sudah diatur dalam Docker image dan `db.sql`

---

#HidupJokowi

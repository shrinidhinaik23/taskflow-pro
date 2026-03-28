# 🚀 TaskFlow Pro – Scalable Task Management System

## 📌 Overview

**TaskFlow Pro** is a full-stack task management platform designed with scalability, security, and clean architecture principles.
It demonstrates production-level backend design using REST APIs, JWT authentication, and role-based access control, along with a modern React-based frontend for seamless interaction.

---

## 🔥 Key Features

### 🔐 Authentication & Authorization

* Secure user registration & login
* Password hashing using bcrypt
* JWT-based authentication
* Role-based access control (User / Admin)

---

### 📋 Task Management (CRUD)

* Create, update, delete, and fetch tasks
* Task filtering (status, search, pagination)
* Sorting (latest, oldest)
* Priority & status management

---

### ⚙️ Backend Architecture

* Modular MVC structure
* API versioning (`/api/v1`)
* Centralized error handling
* Request validation middleware
* Secure route protection

---

### 💻 Frontend (React)

* Login & registration UI
* Protected dashboard (JWT-based)
* Task creation & listing
* API integration with Axios
* Real-time error/success feedback

---

### 🛡️ Security Practices

* JWT token validation
* Environment variable protection
* Input validation & sanitization
* Role-based middleware authorization

---

### 📈 Scalability Design

* Clean folder structure for easy scaling
* Middleware-based architecture
* Ready for:

  * Microservices migration
  * Redis caching
  * Load balancing
  * Docker deployment

---

## 🧱 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Bcrypt

### Frontend

* React.js (Vite)
* Axios
* Context API

---

## 📂 Project Structure

```
TaskFlowPro/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/shrinidhinaik23/faskflow-pro.git
cd TaskFlow-Pro
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Auth

* `POST /api/v1/auth/register`
* `POST /api/v1/auth/login`

### Tasks

* `GET /api/v1/tasks`
* `POST /api/v1/tasks`
* `PUT /api/v1/tasks/:id`
* `DELETE /api/v1/tasks/:id`

---

## 📬 API Testing

* Postman Collection supported
* Swagger (optional integration)

---

## 🧠 Scalability Notes

* Can be extended into microservices (Auth / Task Service separation)
* Redis caching can be added for frequently accessed data
* Load balancing using NGINX
* Dockerization for container-based deployment

---

## 🏆 Highlights

* Production-level backend structure
* Secure authentication system
* Clean and scalable architecture
* Full-stack integration

---

## 👨‍💻 Author

**Shrinidhi Manjunath Naik**

* GitHub: https://github.com/shrinidhinaik23

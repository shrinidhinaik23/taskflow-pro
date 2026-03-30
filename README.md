# 🚀 TaskFlow Pro — Full Stack Task Management System

A scalable full-stack task management application built with a **modern MERN architecture**, featuring secure authentication, role-based access control, and optimized API performance.

Designed to demonstrate **clean backend architecture, modular frontend structure, and real-world engineering practices**.

---

## 📸 Preview

![App Screenshot](./frontend/public/screenshot.png)

---

## 🌐 Live Demo

* 🔗 Frontend: (add after deployment)
* 🔗 Backend API: (optional)

---

## 📌 Key Features

### 🔐 Authentication & Security

* JWT-based authentication
* Password hashing using bcrypt
* Protected routes using middleware
* Rate limiting for API protection

---

### 📋 Task Management

* Create, update, and delete tasks
* Task filtering and sorting
* Pagination support for performance
* User-specific task access control

---

### 🧠 Backend Architecture

* Modular folder structure (MVC-inspired)
* Middleware-based validation
* Centralized error handling
* Logging using Morgan/Winston

---

### ⚛️ Frontend Features

* React (Vite) based UI
* Context API for global state
* API service abstraction
* Component-based architecture

---

## 🏗️ Project Structure

```bash
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── app.js
│   └── server.js

frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
```

---

## ⚙️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Express Validator
* Express Rate Limit

### Frontend

* React (Vite)
* Context API
* Axios

---

## 🔧 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/shrinidhinaik23/taskflow-pro.git
cd taskflow-pro
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend:

```env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
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

## 📡 Sample API Endpoints

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |
| GET    | /api/tasks         | Get all tasks |
| POST   | /api/tasks         | Create a task |

---

## 🧪 Future Improvements

* Add unit and integration testing
* Dockerize the application
* CI/CD pipeline setup
* Real-time updates using WebSockets

---

## 📈 Key Learnings

* Built a scalable backend structure
* Implemented secure authentication system
* Designed modular frontend architecture
* Improved performance using pagination and filtering

---

## 👨‍💻 Author

**Shrinidhi Naik**

* GitHub: https://github.com/shrinidhinaik23

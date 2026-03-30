![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)

# 🚀 TaskFlow Pro — Scalable Task Management System with Secure Authentication & RBAC

A production-inspired full-stack application demonstrating **secure backend engineering, role-based access control (RBAC), and scalable API architecture**, along with a simple frontend for API interaction.

> This project simulates how real-world backend systems handle authentication, authorization, and structured data workflows.

---

## 🧠 Overview

TaskFlow Pro goes beyond basic CRUD applications by implementing:

- 🔐 Secure authentication using JWT
- 🧑‍💼 Role-based authorization (User vs Admin)
- ⚙️ Modular and scalable backend structure
- 📡 Versioned REST APIs (`/api/v1`)
- 🛡️ Input validation & centralized error handling
- 🌐 Full-stack integration with protected frontend routes

---

## ✨ Key Features

### 🔐 Authentication & Security
- User registration & login
- Password hashing using **bcrypt**
- JWT-based authentication & session management
- Protected routes using middleware
- Secure headers using **helmet**

---

### 🧑‍💼 Role-Based Access Control (RBAC)
- Roles: `user` and `admin`
- Users → manage only their own tasks
- Admin → access all users’ tasks
- Middleware-driven authorization

---

### 📦 Task Management
- Create, read, update, delete tasks
- Task status:
  - `pending`
  - `in-progress`
  - `completed`
- Ownership-based access control

---

### ⚙️ Backend Engineering Practices
- RESTful API design
- API versioning (`/api/v1/...`)
- Clean folder structure (MVC-inspired)
- Centralized error handling
- Input validation using **express-validator**
- Logging with **morgan**

---

### 🌐 Frontend (React)
- Register & login UI
- JWT storage and reuse
- Protected dashboard
- CRUD operations via API
- API response handling

---

## 🏗️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcryptjs

### Frontend
- React.js
- Axios
- React Router

### Tools
- Postman
- Git & GitHub

---

## 📂 Project Structure

taskflow-pro/
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
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md

---

## ⚡ Getting Started

### 1. Clone Repository

git clone https://github.com/shrinidhinaik23/taskflow-pro.git  
cd taskflow-pro

---

### 2. Backend Setup

cd backend  
npm install  

Create `.env` file:

PORT=5000  
MONGO_URI=mongodb://127.0.0.1:27017/taskflow  
JWT_SECRET=your_secret_key  

Run backend:

npm run dev  

---

### 3. Frontend Setup

cd frontend  
npm install  
npm run dev  

Frontend runs on:  
http://localhost:5173  

---

## 🔌 API Endpoints

### Auth

POST   /api/v1/auth/register  
POST   /api/v1/auth/login  
GET    /api/v1/auth/profile  

---

### Tasks

POST   /api/v1/tasks  
GET    /api/v1/tasks  
GET    /api/v1/tasks/:id  
PUT    /api/v1/tasks/:id  
DELETE /api/v1/tasks/:id  

---

## 🛡️ Security

- Password hashing (bcrypt)
- JWT authentication
- Protected routes
- Role-based authorization
- Input validation
- Secure headers (helmet)

---

## 🧪 Testing

All APIs tested using Postman:
- Auth flow
- Protected routes
- RBAC validation
- CRUD operations


---

## 📈 Scalability

- Modular architecture
- Easy feature expansion
- API versioning

### Future Improvements
- Redis caching
- Rate limiting
- Docker
- Microservices
- CI/CD pipeline

---

## 🎯 Key Learnings

- JWT authentication implementation
- RBAC using middleware
- Scalable backend structuring
- Frontend-backend integration
- Real-world API design

---

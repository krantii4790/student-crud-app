# 🎓 Student Management System (Full Stack)

A full-stack web application built using **Spring Boot, Hibernate (JPA), and React (Vite)** to manage student records with complete CRUD operations.

---

## 🚀 Features

* ✅ Add Student Details
* ✅ Update Student Information
* ✅ Delete Student Records
* ✅ View All Students
* ✅ Gender Selection (Radio Buttons)
* ✅ Exam Selection (JEE, CET - Checkboxes)
* ✅ Year Selection (Dropdown: First to Fourth Year)
* ✅ Subject Marks Input (5 Subjects)
* ✅ Clean and Responsive UI

---

## 🛠️ Tech Stack

### 🔹 Backend

* Java
* Spring Boot
* Spring Data JPA (Hibernate)
* MySQL

### 🔹 Frontend

* React (Vite)
* Axios
* CSS (Flexbox + Grid)

---

## 📁 Project Structure

springboot-react-student-management-system

```
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── application.properties

├── frontend
│   ├── components
│   ├── services
│   ├── App.jsx
│   └── App.css

└── README.md
```

---

## ⚙️ Backend Setup (Spring Boot)

1. Navigate to backend folder
   cd backend

2. Configure MySQL in application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

3. Run the backend

mvn spring-boot:run

👉 Backend runs on: http://localhost:8080

---

## ⚛️ Frontend Setup (React)

1. Navigate to frontend folder
   cd frontend

2. Install dependencies
   npm install

3. Run the frontend
   npm run dev

👉 Frontend runs on: http://localhost:5173

---

## 🔗 API Endpoints

```
POST    /api/students        → Create Student
GET     /api/students        → Get All Students
GET     /api/students/{id}   → Get Student by ID
PUT     /api/students/{id}   → Update Student
DELETE  /api/students/{id}   → Delete Student
```

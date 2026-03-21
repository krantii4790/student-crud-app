# 🎓 Student CRUD Application (Full Stack)

## 📌 Overview

This is a **Full Stack Student Management System** that allows users to perform CRUD (Create, Read, Update, Delete) operations on student data.

The project is built using:

* **Backend:** Java, Spring Boot, Hibernate, REST APIs
* **Frontend:** React (Vite), HTML, CSS, JavaScript
* **Database:** MySQL

---

## 🚀 Features

* ➕ Add new student details
* 📄 View all students
* ✏️ Update student information
* ❌ Delete student records
* 🔗 REST API integration between frontend & backend
* ⚡ Fast UI using React + Vite

---

## 🏗️ Project Structure

```
student-crud-app/
├── backend/        # Spring Boot Application
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── frontend/       # React Application (Vite)
│   ├── src/
│   ├── package.json
│   └── ...
```

---

## ⚙️ Backend Setup (Spring Boot)

1. Go to backend folder:

```
cd backend
```

2. Configure database in `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=root
spring.datasource.password=your_password
```

3. Run the application:

```
mvn spring-boot:run
```

👉 Backend runs on:

```
http://localhost:8080
```

---

## 💻 Frontend Setup (React + Vite)

1. Go to frontend folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Run frontend:

```
npm run dev
```

👉 Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints (Sample)

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| GET    | /students      | Get all students |
| POST   | /students      | Add student      |
| PUT    | /students/{id} | Update student   |
| DELETE | /students/{id} | Delete student   |

---

## 🛠️ Technologies Used

* Java 8+
* Spring Boot
* Hibernate / JPA
* MySQL
* React.js
* Vite
* REST API

---

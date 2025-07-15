# 🎓 ClassQuizApplication

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Frontend](https://img.shields.io/badge/Angular-17+-red)
![Backend](https://img.shields.io/badge/Spring%20Boot-JDK%2021-green)
![Database](https://img.shields.io/badge/MySQL-8.0-blue)
![Status](https://img.shields.io/badge/status-Production%20Ready-brightgreen)

Welcome to **ClassQuizApplication** – a modern online quiz platform built with **Angular (latest)** for frontend and **Spring Boot (JDK 21)** for backend. This project aims to deliver a clean and efficient environment for conducting quizzes between **Admin(Teacher)** and **Students**. 🧠📘

---

## 📘 Overview

**ClassQuiz** is a full-stack web application that allows students to take quizzes and view their results in real-time, while admins can manage quizzes, users and performance reports.

---

## 👨‍💻 Roles

- 👑 **Admin(Teacher)**  
  - Create, update and delete quizzes  
  - Manage questions and categories  
  - View student results and download reports  
  - Handle feedbacks

- 🎓 **Student**  
  - View & attempt quizzes  
  - View past history  
  - Submit feedback  
  - Download result in PDF

---

## ✨ Features

- 🔐 JWT-Based Authentication & Role-Based Access
- 🧠 Timed Quizzes with Auto Submission
- 🧾 PDF Download of Quiz Results
- 📈 Performance Tracking
- ✍️ Feedback Submission
- 📚 History of Attempted Quizzes
- 🧑 Responsive UI with Angular Material

---

## 🚀 Tech Stack

| Category        | Technologies                                |
|-----------------|---------------------------------------------|
| 🧠 Frontend     | Angular 17+, Angular Material, Bootstrap    |
| 🔧 Backend      | Spring Boot 3.1, Java 21, REST API          |
| 🗃️ Database     | MySQL 8.0                                   |
| 🔐 Security     | Spring Security, JWT Authentication         |
| 📦 Build Tools  | Maven (backend), npm (frontend)             |
| 📄 PDF Handling | jsPDF (for exporting results)               |
| 🌐 Server       | Apache Tomcat (embedded)                    |

---

## 📸 Screenshots

### Home Page
![Home Page](screenshots/home-page.png)

### Login Page
![Login Page](screenshots/login-page.png)

### Register Page
![Register Page](screenshots/register-page.png)

### Admin Login Page
![Admin Login Page](screenshots/admin-login.png)

### Admin Dashboard Page
![Admin Dashboard Page](screenshots/admin-dashboard.png)

### Admin Profile Page
![Login Page](screenshots/admin-profile.png)

### Admin All Categories
![Admin All Categories](screenshots/admin-quiz-categories.png)

### Admin Modify Categories
![Admin Modify Categories](screenshots/admin-modify-category.png)

### Admin Add New Category
![Admin Add New Category](screenshots/admin-new-category.png)

### Admin Add New Quiz
![Admin Add New Quiz](screenshots/admin-new-quiz.png)

### Admin All Quizzes
![Admin All Quizzes](screenshots/admin-view-quiz.png)

### Admin Show Quiz
![Admin Show Quiz](screenshots/admin-show-quiz.png)

### Admin View Quiz Questions
![Admin View Quiz Questions](screenshots/admin-all-question.png)

### Admin Add New Question
![Admin Add New Question](screenshots/admin-add-question.png)

### Admin Modify Question
![Admin Modify Question](screenshots/admin-modify-question.png)

### Admin Delete Question
![Admin Delete Question](screenshots/admin-delete-question.png)

### Admin Update Quiz
![Admin Update Quiz](screenshots/admin-modify-quiz.png)

### Admin Show Attempted Quiz Records
![Admin Show Attempted Quiz Records](screenshots/admin-quiz-history.png)

### Admin Delete Quiz
![Admin Delete Quiz](screenshots/admin-delete-quiz.png)

### Admin All Feedbacks
![Admin All Feedbacks](screenshots/admin-feedback.png)

### User Login Page
![User Login Page](screenshots/user-login.png)

### User Profile Page
![User Profile Page](screenshots/user-profile.png)

### User Dashboard Page
![User Dashboard Page](screenshots/user-dashboard.png)

### User Start Quiz
![User Start Quiz](screenshots/user-quiz-instructions.png)

### User Quiz Started
![User Quiz Started](screenshots/user-quiz.png)

### User Submit Quiz
![User Submit Quiz](screenshots/user-submit-quiz.png)

### User Quiz History
![User Quiz History](screenshots/user-attempts.png)

### User Quiz Feedback
![User Quiz Feedback](screenshots/user-feedback.png)

---

## 🛠️ Setup Instructions

### ⚙️ Prerequisites
- Node.js v16+
- Angular CLI
- Java 17+
- Maven
- MySQL

---

## 🛠️ Project Setup

This project is structured into two main modules:
📁 quizapp → Spring Boot Backend
📁 quizweb → Angular Frontend

### 📦 Clone the Repository

```bash
git clone https://github.com/karanchavan01/ClassQuizApplication.git
cd ClassQuizApplication

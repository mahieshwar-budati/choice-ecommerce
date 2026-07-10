# 🛒 CHOICE - Full Stack E-Commerce Website

A modern full-stack e-commerce application built using **Node.js**, **Express.js**, and **Vanilla JavaScript**. The project provides a REST API backend and a responsive frontend that dynamically displays products fetched from the server.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Express](https://img.shields.io/badge/Express.js-Backend-black.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)

---

## 📌 Features

- Responsive Landing Page
- Product Listing
- REST API Integration
- Dynamic Product Rendering
- Modern UI Design
- Docker Support
- Environment Configuration
- Express.js Backend
- JSON-based Product API

---

## 📂 Project Structure

```text
choice-ecommerce/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   ├── .env
│   ├── .dockerignore
│   └── node_modules/
│
├── frontend/
│   ├── index.html
│   ├── Dockerfile
│   └── .dockerignore
│
└── README.md
```

---

# 🏗️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

## Backend

- Node.js
- Express.js

## DevOps

- Docker
- Dockerfile
- Environment Variables

---

# 🚀 Getting Started

## Prerequisites

- Node.js (v18 or later)
- npm
- Docker (Optional)

---

# Clone Repository

```bash
git clone https://github.com/yourusername/choice-ecommerce.git

cd choice-ecommerce
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
PORT=5000
```

Run server

```bash
npm start
```

or

```bash
node server.js
```

Backend will start at

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Simply open

```
index.html
```

or use VS Code Live Server.

Frontend will connect to

```
http://localhost:5000/api/products
```

---

# API Endpoints

## Get All Products

```http
GET /api/products
```

### Response

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": "$999",
    "image": "image_url"
  }
]
```

---

# Docker

## Backend

Build image

```bash
docker build -t choice-backend .
```

Run container

```bash
docker run -p 5000:5000 choice-backend
```

---

## Frontend

```bash
docker build -t choice-frontend .
```

Run

```bash
docker run -p 80:80 choice-frontend
```

---

# User Interface

The application includes:

- Modern Navigation Bar
- Hero Section
- Featured Products
- Dynamic Product Cards
- Responsive Layout
- Footer

---

# Future Improvements

- User Authentication
- JWT Login
- Shopping Cart
- Wishlist
- Product Search
- Product Categories
- Payment Gateway
- Order Management
- Admin Dashboard
- Product Reviews
- Inventory Management
- Database Integration (MongoDB / PostgreSQL)

---

# Security

- Environment Variables
- Docker Support
- API Separation
- Backend Validation

---

# Screenshots

## Project Structure

```
backend/
frontend/
README.md
```

*(Add application screenshots here)*

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Create a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

**Mahieshwar Budati**

GitHub:
https://github.com/mahieshwar-budati

---

⭐ If you like this project, don't forget to give it a star!

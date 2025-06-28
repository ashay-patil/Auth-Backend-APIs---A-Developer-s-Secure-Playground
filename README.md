# Auth Backend API – A Developer's Secure Playground 🚀

## 📌 Project Description

This project is a **fully functional backend authentication system** built with Node.js and Express.js. It is designed as a learning-focused, developer-friendly solution for implementing secure authentication flows including user registration, email verification via OTP, and login using JWT tokens. It follows clean architectural principles with proper validation, error handling, and modular route-controller separation.

Whether you're validating OTPs, hashing passwords, or issuing JWTs – this repo walks you through everything from scratch to solid. No bloat. Just real-world backend goodness. 💥

---

## ⚙️ Tech Stack Used

| Category        | Technology         |
| --------------- | ------------------ |
| Backend Runtime | Node.js            |
| Framework       | Express.js         |
| Database        | MongoDB (Mongoose) |
| Authentication  | bcryptjs, JWT      |
| Email OTP       | Nodemailer         |
| Validation      | Joi                |

---

## 🧠 Features Implemented

✅ User Registration with Email
✅ Password Hashing using bcryptjs
✅ Email OTP Verification System
✅ OTP Expiry Mechanism (5 mins)
✅ Resend OTP Logic
✅ Login with Email + Password
✅ Custom Middleware-Based Validation
✅ Structured Error Handling
✅ Environment-Safe Configuration
✅ MongoDB Atlas Integration
✅ Email Notification using Gmail App Password

---

## 📦 API Endpoints

### 📬 `POST /api/v1/auth/register`

Registers a user and sends an OTP for email verification.

### ✅ `POST /api/v1/auth/verify-otp`

Verifies OTP and marks the user as verified.

### 🔁 `POST /api/v1/auth/resend-otp`

Sends a new OTP to the same email (if not verified).

### 🔓 `POST /api/v1/auth/login`

Allows login only after email verification.

---

## 🛡️ Request Validation

All inputs are strictly validated using **Joi**.
Validation middleware intercepts bad requests with crystal-clear custom messages.

---

## 📁 Folder Structure

```
auth-backend/
├── controllers/       → Route logic
├── db/                → database connection
├── errors/            → Custom errors
├── middlewares/       → Validation & error handlers
├── models/            → Mongoose schemas
├── node_modules/      → Node packages
├── routes/            → Route definitions
├── services/          → Nodemailer configuration
├── utils/             → OTP generator, helpers
├── validators/        → Joi-based schema validations
├── .env               → Sensitive config
└── app.js             → Express entry point
```

---

## 🔐 Environment Variables (.env)

```
MONGO_URI=<your-mongodb-connection-string>
EMAIL_OWNER=<your-email@gmail.com>
EMAIL_PASS=<your-gmail-app-password>
JWT_SECRET=<your-jwt-secret>
```

### 🛠️ How to Get Gmail App Password for Nodemailer

1. Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Turn **2-Step Verification** ON for your account
3. Scroll to **App Passwords** and click it
4. Select app: `Mail` and device: `Other (Custom name)` (e.g., `Nodemailer`)
5. Copy the 16-digit app password (no spaces!) and paste it as `EMAIL_PASS` in `.env`

🔐 **Never share this password** publicly.

---

## 🚀 Getting Started

```bash
# Clone the project
git clone https://github.com/ashay-patil/Auth-Backend-APIs---A-Developer-s-Secure-Playground.git

# Install dependencies
npm install

# Start the server
npm start
```

---

## ⭐ Like the Project?

If this project helped you learn authentication, OTP logic, or how to structure backend APIs… give it a ⭐ on GitHub and share it with your dev buddies!

Let's keep building. Happy Coding !! 🔐🚀

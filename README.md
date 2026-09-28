# Gmail Send & Reply Application

A full-stack MERN application that allows users to create an account, sign in, and send emails using Gmail SMTP. The application supports both **Reply-enabled emails** and **No-Reply emails**.

## 🚀 Features

* User Signup
* User Signin
* Send emails to one or multiple recipients
* Reply-enabled email sending
* No-Reply email sending
* Gmail SMTP integration using Nodemailer
* MongoDB database integration
* REST API with Express.js
* React-based frontend
* Responsive user interface
* Environment variables for sensitive configuration

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemailer
* CORS
* dotenv

## 📂 Project Structure

```text
email-send-reply/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Signin.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── MailSend.jsx
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── controller/
│   │   ├── authcontroller.js
│   │   ├── replymail.js
│   │   └── noreplymail.js
│   │
│   ├── model/
│   │   └── EmailModel.js
│   │
│   ├── routes/
│   │   └── EmailRoutes.js
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## 🔄 Application Flow

```text
User
 │
 ▼
React Frontend
 │
 │ HTTP Request
 ▼
Express.js API
 │
 ├── Authentication
 │
 ├── Email Controller
 │
 ▼
Nodemailer
 │
 ▼
Gmail SMTP
 │
 ▼
Recipient's Email
```

## 🔗 API Endpoints

| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| POST   | `/api/email/signup`      | Create a new user        |
| POST   | `/api/email/signin`      | Sign in user             |
| POST   | `/api/email/send`        | Send reply-enabled email |
| POST   | `/api/email/sendnoreply` | Send no-reply email      |

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5001
MongoDb_URL=your_mongodb_connection_string

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail_address
SMTP_PASS=your_gmail_app_password
```

> Never upload your `.env` file or Gmail App Password to GitHub.

## ▶️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ay4988147-ux/email-send-reply.git
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create `.env` in the backend folder and add your MongoDB and Gmail SMTP credentials.

### 4. Start Backend

```bash
npm start
```

or, if using Nodemon:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5001
```

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Start Frontend

```bash
npm run dev
```

The frontend will run on the Vite development URL shown in the terminal.

## 📧 Gmail SMTP

This project uses **Nodemailer** with Gmail SMTP to send emails.

The application uses:

```text
SMTP Host: smtp.gmail.com
SMTP Port: 587
```

A Gmail **App Password** should be used instead of the normal Gmail account password when configuring SMTP authentication.

## 🔐 Security

* Sensitive credentials are stored in environment variables.
* `.env` should be added to `.gitignore`.
* Gmail credentials should never be hardcoded in source code.
* MongoDB connection strings should also remain private.

## 🌐 Deployment

The application is deployed using separate frontend and backend services.

**Frontend:**

`https://email-send-reply01.onrender.com`

**Backend API:**

`https://email-send-reply.onrender.com`

> If the frontend deployment uses React Router, configure the hosting service to rewrite client-side routes to `index.html`.

## 📸 Main Pages

* Signin Page
* Signup Page
* Email Sending Page
* Reply Email
* No-Reply Email

## 🎯 What I Learned

Through this project, I practiced:

* React component development
* React Router
* Fetch API
* REST API integration
* Express.js routing
* MongoDB and Mongoose
* User authentication
* Nodemailer
* Gmail SMTP
* Environment variables
* Frontend and backend deployment
* Connecting a React frontend with an Express backend

## 👨‍💻 Author

**Anil Yadav**

B.Tech – Information Technology

Interested in **MERN Stack Development and Frontend Development**.

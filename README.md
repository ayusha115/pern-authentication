# PERN Authentication System

A full-stack user authentication system built using the **PERN stack** — PostgreSQL, Express.js, React, and Node.js.

The project allows users to register, log in, access protected routes, and log out securely using **JWT authentication and HTTP-only cookies**.

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Vite

### Backend

* Node.js
* Express.js
* JWT (JSON Web Token)
* bcryptjs
* Cookie Parser
* CORS

### Database

* PostgreSQL
* pgAdmin

### Tools

* VS Code
* Postman
* Git & GitHub

## Features

* User registration
* Password hashing using bcrypt
* User login
* JWT-based authentication
* HTTP-only authentication cookies
* Protected routes
* User session verification
* Logout functionality
* PostgreSQL database integration
* REST API
* Frontend-backend communication using Axios

## Project Structure

```text
pern-authentication/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── auth.routes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

## Authentication Flow

### Registration

```text
React Registration Form
        ↓
Axios Request
        ↓
Express API
        ↓
Validate User Data
        ↓
Hash Password using bcrypt
        ↓
Store User in PostgreSQL
```

### Login

```text
React Login Form
        ↓
Axios Request
        ↓
Express API
        ↓
Find User in PostgreSQL
        ↓
Compare Password using bcrypt
        ↓
Generate JWT
        ↓
Store JWT in HTTP-only Cookie
```

### Protected Route

```text
Frontend Request
        ↓
Authentication Cookie
        ↓
Auth Middleware
        ↓
Verify JWT
        ↓
Access Protected Controller
        ↓
Return User Data
```

## API Endpoints

| Method | Endpoint             | Description         | Protected |
| ------ | -------------------- | ------------------- | --------- |
| POST   | `/api/auth/register` | Register a new user | No        |
| POST   | `/api/auth/login`    | Login user          | No        |
| POST   | `/api/auth/logout`   | Logout user         | No        |
| GET    | `/api/auth/me`       | Get logged-in user  | Yes       |

## Database

The application uses PostgreSQL with a `users` table.

Example schema:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Passwords are **not stored as plain text**. They are hashed using bcrypt before being stored in the database.

## Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=pern_auth
DB_PASSWORD=your_postgres_password
DB_PORT=5432

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

> Do not commit your `.env` file to GitHub.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ayusha115/pern-authentication.git
cd pern-authentication
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure the database

Create a PostgreSQL database named:

```text
pern_auth
```

Then create the `users` table using the SQL schema provided above.

### 4. Configure environment variables

Create:

```text
backend/.env
```

and add your PostgreSQL credentials and JWT secret.

### 5. Start the backend

From the `backend` folder:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 6. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 7. Start the frontend

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## Testing

The backend APIs can also be tested using **Postman**.

For example, to register a user:

```http
POST http://localhost:5000/api/auth/register
```

Request body:

```json
{
    "name": "John",
    "email": "john@example.com",
    "password": "password123"
}
```

Login:

```http
POST http://localhost:5000/api/auth/login
```

Request body:

```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

## Security

The project uses several basic security practices:

* Passwords are hashed using bcrypt.
* JWT is used for authentication.
* JWT is stored in an HTTP-only cookie.
* Protected routes verify the JWT before providing access.
* PostgreSQL parameterized queries are used to help prevent SQL injection.
* Environment variables are used for sensitive configuration.
* CORS is configured to allow requests from the frontend.

## What I Learned

Through this project, I learned how different parts of a full-stack application work together, including:

* Building REST APIs using Express.js
* Connecting Node.js with PostgreSQL
* Implementing user registration and login
* Password hashing with bcrypt
* JWT-based authentication
* HTTP-only cookies
* Creating protected routes
* Connecting React with a backend API using Axios
* Testing APIs using Postman
* Managing a project using Git and GitHub

## Future Improvements

Some features that could be added in the future:

* Forgot password functionality
* Email verification
* Password reset
* Better form validation
* Improved UI/UX
* Role-based authorization
* Refresh token implementation
* Deployment to a cloud platform

## Author

**Ayush**

B.Tech Computer Science & Engineering Student

GitHub:
https://github.com/ayusha115

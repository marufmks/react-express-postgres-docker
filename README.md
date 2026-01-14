# React + Express + PostgreSQL (Dockerized)

A full-stack CRUD application running in Docker containers using:

- **React** (frontend)
- **Express.js** (backend)
- **PostgreSQL** (database)
- **Docker & Docker Compose**

This project demonstrates a typical setup for containerized full-stack development.

---

## 🚀 Features

✔ CRUD REST API (Express)  
✔ PostgreSQL database with persistence  
✔ React UI for interacting with API  
✔ Hot-reload for both backend and frontend (dev mode)  
✔ Dockerized environment (no local DB installation required)  

---

## 🏗 Project Structure

project/
├── backend/ # Express server
├── frontend/ # React application
├── docker-compose.yml
└── README.md


---

## 🐳 Docker Setup

### **Prerequisites**

- Docker Desktop installed

### **Start containers**

```sh
docker compose up --build

Stop containers

docker compose down

🌐 Services & Ports
Service	URL / Port
Frontend	http://localhost:3000
Backend API	http://localhost:5001
PostgreSQL	5432 (default)
⚙️ Environment Variables

backend/.env:

PORT=4000
DB_USER=user
DB_PASSWORD=password
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=appdb

React can consume:

frontend/.env:

REACT_APP_API_URL=http://localhost:5001

📦 Backend (Express API)
Install locally (optional)

cd backend
npm install
npm run dev

API Example

GET /api/items
POST /api/items
PUT /api/items/:id
DELETE /api/items/:id

🗄 Database (PostgreSQL)

Volume is created for persistence:

pgdata:/var/lib/postgresql/data

So data survives container restarts.
🧱 Technology Stack
Layer	Tech
Frontend	React, Axios
Backend	Express.js
Database	PostgreSQL
Runtime	Node.js
DevOps	Docker Compose
📑 Scripts
Frontend

npm start       # development
npm build       # production build

Backend

npm run dev     # nodemon dev mode
npm start       # production mode

🔐 .gitignore

Make sure .env, node_modules, and volumes are not committed:

node_modules/
.env
pgdata/
build/

📸 Screenshots (Optional)

    Add screenshots of your UI if using this for a portfolio.

📄 License

MIT — free to use.
🤝 Contributing

Pull requests are welcome!
👤 Author

Maruf
GitHub: https://github.com/marufmks
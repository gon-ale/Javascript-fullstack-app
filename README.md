
# 📘 Fullstack App – NestJS + PostgreSQL + React

Este proyecto es una aplicación Fullstack compuesta por:

Backend: API en NestJS con Sequelize conectada a PostgreSQL.

Frontend: React con Redux Toolkit para la gestión de estado.

Base de datos: PostgreSQL levantada con Docker.

## 🚀 Requisitos previos

Asegúrate de tener instalado:

Node.js >= 18

Docker y Docker Compose

Git

## 📂 Estructura del proyecto
```bash
├── backend/        # NestJS + Sequelize + PostgreSQL
├── frontend/       # React + Redux
└── README.md
```
    
## ⚙️ Configuración inicial

### 1. Clonar el repositorio
```bash
git clone https://github.com/gon-ale/Javascript-fullstack-app.git
cd Javascript-fullstack-app
```


### 2. Levantar la base de datos con Docker

Dentro de la carpeta backend/ ya tienes un docker-compose.yml configurado:
```bash
cd backend
docker-compose up -d
```

👉 Esto levantará un contenedor con PostgreSQL en localhost:5432.

### 3. Configurar variables de entorno
### Backend (backend/.env)
##### Puerto de la API
`PORT` = 3000

##### Config DB
`DB_HOST`=localhost
`DB_PORT`=5432
`DB_USER`=postgres
`DB_PASS`=postgres
`DB_NAME`=fullstack_db

### Frontend (frontend/.env)
#### Puerto fijo 
`PORT`=3001

### 4. Instalar dependencias
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd ../frontend
npm install
```
## ▶️ Levantar el proyecto
Backend (NestJS API)
```bash
cd backend
npm run start:dev
```

API corriendo en: http://localhost:3000

Frontend (React)
```bash
cd frontend
npm run dev
```

Frontend corriendo en: http://localhost:3001

📡 Endpoints disponibles
Usuarios (/users)

GET /users → Listar todos los usuarios

POST /users → Crear un nuevo usuario

DELETE /users/:id → Eliminar usuario por ID

Ejemplo crear usuario:

```bash
curl -X POST http://localhost:3000/users \
 -H "Content-Type: application/json" \
 -d '{"name":"Alex","age":28}'
```
## 🖥️ Funcionalidad del Frontend

Muestra los usuarios en una tabla.

Permite filtrar por nombre o edad.

Formulario para crear usuarios.

Botón para eliminar usuarios.

## 🛠️ Buenas prácticas incluidas

Variables de entorno (.env) separadas para frontend y backend.

Redux Toolkit para estado global.

Sequelize con migraciones automáticas.

Docker para entorno de base de datos portable.

## 🧑‍💻 Desarrollo

Backend: http://localhost:3000

Frontend: http://localhost:3001
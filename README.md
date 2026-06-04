# CrowdsourcedWebsite

A collaborative platform for doctors, researchers, and healthcare professionals to share publicly available datasets, engage in expert discussions, and accelerate medical and scientific discovery.

---

## Overview

CrowdsourcedWebsite is an open, community-driven platform designed for the medical and research community. It enables professionals to:

- **Discover and share** publicly available medical and scientific datasets
- **Collaborate** through structured discussion forums by specialty or research domain
- **Contribute** annotations, comments, and derived datasets back to the community
- **Verify** contributors through a professional credentialing layer

The platform is built with a **React** frontend and a **Spring Boot** backend, following a RESTful API architecture.

---

## Features

### 🗂️ Dataset Repository
- Upload, browse, and download publicly available datasets
- Filter by domain (oncology, genomics, epidemiology, etc.)
- Dataset versioning and changelog tracking
- Metadata tagging (size, format, source, license)
- Dataset preview and summary statistics

### 💬 Discussion Forums
- Topic-based forums organized by medical specialty and research field
- Threaded discussions with upvoting and expert endorsement
- Ability to link forum threads to specific datasets
- Moderation tools for verified professionals

### 👤 User Profiles & Credentialing
- Profile pages with professional background, publications, and affiliations
- Optional credential verification (medical license, institutional affiliation)
- Contribution history and reputation scoring

### 🔍 Search & Discovery
- Full-text search across datasets and forum threads
- Advanced filters (date, category, contributor type, file format)
- Trending datasets and popular discussions

---

## Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Frontend    | React 18, React Router, Axios        |
| UI Library  | Tailwind CSS / Material UI           |
| State Mgmt  | Redux Toolkit / React Query          |
| Backend     | Spring Boot 3.x, Spring Security     |
| Database    | PostgreSQL                           |        
| Auth        | JWT (JSON Web Tokens) + OAuth2       |

---

## Architecture

```
┌─────────────────────────────────────┐
│            React Frontend           │
│  (SPA served via Nginx / Vite Dev)  │
└──────────────┬──────────────────────┘
               │ REST API (HTTPS)
               ▼
┌─────────────────────────────────────┐
│        Spring Boot Backend          │
│   Controllers → Services → Repos    │
└────────┬───────|──────┬──────────────┘
                 |
               MySQL
```

---

## Getting Started

### Prerequisites

- **Java 17+**
- **Node.js 18+** and **npm / yarn**
- **PostgreSQL 14+**
- **Docker & Docker Compose** (recommended)
- **Maven 3.8+**

---

### Backend Setup (Spring Boot)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/crowdsourcedwebsite.git
   cd crowdsourcedwebsite/backend
   ```

2. **Configure the database:**

   Create a MySQL database:
   ```sql
   CREATE DATABASE crowdsourced_db;
   CREATE USER csw_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE crowdsourced_db TO csw_user;
   ```

3. **Set environment variables** (see [Environment Variables](#environment-variables)):
   ```bash
   cp src/main/resources/application.example.properties src/main/resources/application.properties
   # Edit application.properties with your values
   ```

4. **Build and run:**
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```
   The backend will start on `http://localhost:8080`.

---

### Frontend Setup (React)

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your API base URL and other settings
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

---

Services will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8080`
- MySQL: `localhost:5432`

---

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_NAME=CrowdsourcedWebsite
```

---


> Built with ❤️ for the global medical and research community.

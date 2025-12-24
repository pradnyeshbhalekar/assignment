# Full Stack E-Commerce Product Explorer

A full-stack, multi-page e-commerce application built using React (Vite), Node.js, Express, and MongoDB. This project demonstrates frontend-backend integration, RESTful API design, database modeling, routing, and state management.

## Tech Stack

### Frontend
- **ReactJS (Vite)** - Functional Components & Hooks
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **RESTful API Design** - API architecture

### Database
- **MongoDB** - NoSQL database
- **Mongoose** - ODM (Object Data Modeling)

## Project Structure

### Frontend
```
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── hooks/
│   ├── config/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .env
├── package.json
└── vite.config.js
```

### Backend
```
backend/
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
├── server.js
├── .env
└── package.json
```

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/pradnyeshbhalekar/assignment
cd assignment
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce

# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce
```

Start the server:
```bash
npm run dev
```

The backend will run on: **http://localhost:3000**

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Start the frontend:
```bash
npm run dev
```

The frontend will run on: **http://localhost:5173**

## Database Setup

- Install MongoDB locally or use MongoDB Atlas
- Create a database named `ecommerce`
- Required collections: `products`, `categories`, `carts`

### Product Data Structure
- Title
- Description
- Price
- Category
- Image URL
- Timestamps (CreatedAt/UpdatedAt)

## API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Fetch all products |
| GET | `/api/products/:id` | Fetch product by ID |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Categories
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Fetch all categories |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cart` | Add product to cart |
| GET | `/api/cart` | Get cart items |
| DELETE | `/api/cart/:id` | Remove cart item |

> **Note:** Cart logic automatically increments quantity if the product already exists.

## Frontend Routing & State

### Routes
- `/` - Home / Product Listing
- `/product/:id` - Product Details
- `/cart` - Shopping Cart
- `*` - 404 Page

### State Management
React Context API is used to manage global state for:
- Products
- Cart
- Cart Count
# ScholorHat Management API

A lightweight Node.js + Express REST API for managing products and categories with MongoDB. Features standardized HTTP status codes and clean architecture.

## Features

-  Product CRUD operations
-  Category management
-  Standardized HTTP responses
-  Modular structure (Routes, Controllers, Models)

## Quick Start

```bash
# Clone & setup
git clone https://github.com/your-username/scholor-hat-management-api.git
cd scholor-hat-management-api
npm install

# Configure environment
echo "MONGO_URI=mongodb://localhost:27017/" > .env

# Start server
npm start
```
Server runs at: `http://localhost:4800`

## API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/product/add` | Add new product |
| GET | `/api/product/getall` | Get all products |
| GET | `/api/product/get/:id` | Get product |
| PATCH | `/api/product/update/:id` | Update product |
| DELETE | `/api/product/delete/:id` | Delete product |

### Categories
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/category/add` | Add new category |
| GET | `/api/category/getall` | Get all categories |
| GET | `/api/category/get/:id` | Get category |
| PATCH | `/api/category/update/:id` | Update category |
| DELETE | `/api/category/delete/:id` | Delete category |

##  Tech Stack

- Node.js • Express.js • MongoDB • Mongoose • http-status-codes

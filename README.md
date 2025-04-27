# Urvashi Jewellers Website

A modern and minimalistic website for Urvashi Jewellers, a jewelry business in India. This project includes a TypeScript backend with Express and a frontend built with Nuxt.js.

## Project Structure

```
├── backend/             # TypeScript Express backend
│   ├── src/             # Source code
│   │   ├── models/      # Mongoose models
│   │   ├── routes/      # Express routes
│   │   └── index.ts     # Main entry point
│   ├── package.json     # Backend dependencies
│   └── tsconfig.json    # TypeScript configuration
│
└── frontend/            # Nuxt.js frontend
    ├── assets/          # Static assets (CSS, images, etc.)
    ├── components/      # Reusable Vue components
    ├── layouts/         # Page layouts
    ├── pages/           # Application pages
    ├── public/          # Public static files
    ├── nuxt.config.ts   # Nuxt configuration
    └── package.json     # Frontend dependencies
```

## Features

- Modern, minimalist design inspired by luxury jewelry brands
- Responsive layout for all device sizes
- Product catalog with filtering and sorting
- Product detail pages
- About Us and Contact pages
- Backend API for product management

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (for database)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The application will be available at `http://localhost:3000`

## Deployment

### Backend Deployment

1. Build the TypeScript code:
   ```bash
   cd backend
   npm run build
   ```

2. The compiled JavaScript files will be in the `dist` directory.

### Frontend Deployment

1. Build the Nuxt application:
   ```bash
   cd frontend
   npm run build
   ```

2. Generate static files (optional):
   ```bash
   npm run generate
   ```

3. The built application will be in the `.output` directory.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - TypeScript
  - MongoDB
  - Mongoose

- **Frontend**:
  - Nuxt.js
  - Vue.js
  - SCSS/CSS
  - Responsive Design

## License

This project is licensed under the ISC License.

## Acknowledgements

Design inspiration taken from:
- CaratLane
- Giva
- Various luxury jewelry brands 
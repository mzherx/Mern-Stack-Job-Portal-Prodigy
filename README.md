# Prodigy - MERN Stack Job Portal

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern job portal application built with the MERN stack (MongoDB, Express, React, Node.js) where recruiters/companies can post jobs and applicants can search/apply for opportunities. Features dedicated dashboards for both recruiters and applicants.


## Screenshots

[![Online-Jobs-2-1.png](https://i.postimg.cc/RZb2DvZg/Online-Jobs-2-1.png)](https://postimg.cc/bZk6Gcbn)


## ✨ Features

**Recruiters/Companies:**
- Create and manage job postings
- View applications for posted jobs
- Dashboard with analytics and job management
- Company profile customization

**Applicants:**
- Search/filter job listings
- Apply to jobs with resume/CV
- Track application statuses
- Applicant profile management

**General:**
- Authentication with Clerk
- Error monitoring with Sentry
- File uploads via Cloudinary
- Responsive UI with Tailwind CSS
- RESTful API with JWT authentication
## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- React Router
- Axios
- Chart.js (for dashboards)

**Backend:**
- Express.js
- Mongoose (MongoDB ODM)
- JSON Web Tokens (JWT)
- Bcrypt (password hashing)
- CORS
- Svix (webhooks)

**Third-Party Services:**
- Clerk (Authentication)
- Sentry (Error Tracking)
- Cloudinary (File Storage)
## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Clerk, Sentry, and Cloudinary accounts

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/prodigy-job-portal.git
   cd prodigy-job-portal

2.  **Client**

    * cd client

    * npm install

 **Server**

    * cd ../server
    * npm install

3. **Environment Setup**

Create .env files in both client/ and server/ directories:

* Server (.env):

    MONGODB_URI=your_mongodb_uri
    CLERK_SECRET_KEY=your_clerk_secret_key
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    SENTRY_DSN=your_sentry_dsn
    CLERK_WEBHOOK_SECRET=your_svix_webhook_secret
    PORT=5000

* Client (.env):

    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
    VITE_API_BASE_URL=http://localhost:5000/api


# Start backend server
* cd server

* npm run dev

# Start frontend (in separate terminal)
* cd client

* npm run dev


## 🚀 Contributions

Contributions are welcome! Please follow these steps:

**Fork the repository**

* Create your feature branch (git checkout -b feature/AmazingFeature)

* Commit your changes (git commit -m 'Add some AmazingFeature')

* Push to the branch (git push origin feature/AmazingFeature)

* Open a Pull Request.


📄 License
Distributed under the MIT License. See LICENSE for more information.

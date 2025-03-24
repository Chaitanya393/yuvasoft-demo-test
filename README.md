# Job Management System

A React-based job management system with user authentication and persistent data storage using Redux Persist.

## Features

- User Authentication (Login)
- Protected Routes
- Job Management (Create, Read, Delete)
- Persistent Data Storage using Redux Persist
- Responsive Design

## Tech Stack

- React
- Redux Toolkit
- Redux Persist
- React Router DOM
- Modern CSS

## Getting Started

1. Clone the repository
```bash
git clone [your-repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## Login Credentials

- Email: user@example.com
- Password: 1234

## Features

### Authentication
- Protected routes using React Router
- Simple login system
- Persistent user session

### Job Management
- Add new jobs with details:
  - Candidate Name
  - Age
  - Job Title
  - Description
  - Salary
- View all jobs in a clean, card-based layout
- Delete jobs
- Persistent job data using Redux Persist

### UI/UX
- Responsive design
- Modern and clean interface
- Form validation
- Confirmation dialogs for important actions

## Project Structure

```
src/
├── components/
│   ├── Assests/
│   │   └── loginSignup/
│   ├── Dashboard/
│   └── ProtectedRoute.jsx
├── redux/
│   ├── features/
│   │   └── jobSlice.js
│   └── store.js
└── App.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
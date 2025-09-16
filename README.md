# Profile Management App

A full-stack **MERN** application for managing user profiles. This project follows the **MVC architecture** and implements user authentication, profile management, and detailed profile views.  

---

## Features

### Backend
- Built with **Node.js**, **Express**, and **MongoDB**.
- **MVC Architecture**:
  - Models for user and profile data.
  - Controllers to handle CRUD operations and authentication.
- **User Authentication**:
  - Passwords hashed with **bcrypt**.
  - **JWT** tokens for secure authentication.
- **Validations**:
  - Input validation for all required fields.
- **File Uploads**:
  - Profile images uploaded using **Multer** and stored on **Cloudinary**.
- Tested APIs with **Postman**.

### Frontend
- Built with **React.js** and styled using **Tailwind CSS**.
- Used **React Hooks**:
  - `useState` for state management.
  - `useEffect` for side effects and fetching data.
- Form handling with `e.preventDefault()`.
- Navigation with `useNavigate` hook from **React Router**.
- Dynamic profile cards:
  - Clicking on a profile card navigates to a detailed profile page.
  - Detailed page includes all fields and layout elements from the Figma design.
  - Back button to return to the profile cards page.

---





# User CRUD App

A simple User CRUD (Create, Read, Update, Delete) application built with React and Node.js. This application allows users to manage a list of users, including creating new users, reading user details, updating existing users, and deleting users.

## Features

- **Create Users:** Add new users with their name, family name, and phone number.
- **Read Users:** View a list of all users.
- **Update Users:** Edit existing user details.
- **Delete Users:** Remove users from the list.
- **Form Validation:** Ensure that all required fields are filled before submission.
- **RTL Support:** Right-to-left layout for better readability in RTL languages.
- **Styled with CSS:** Basic styling using CSS.

## Screenshots


![Screenshot 2024-06-12 161211](https://github.com/farzamrana/user-crud-app/assets/73165323/7ac3a680-4640-4207-95e6-c5c45918dc9e)

 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installing

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/user-crud-app.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd user-crud-app
    ```

3. **Install dependencies for both the frontend and backend:**

    ```sh
    # Navigate to the backend directory and install dependencies
    cd backend
    npm install

    # Navigate to the frontend directory and install dependencies
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Start the backend server:**

    ```sh
    # From the backend directory
    npm start
    ```

2. **Start the frontend development server:**

    ```sh
    # From the frontend directory
    npm start
    ```

3. **Open your browser and navigate to:**

    ```sh
    http://localhost:3000
    ```

### Project Structure

```plaintext
user-crud-app/
├── backend/
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── users.js
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── styles.css
│   │   └── index.js
│   └── package.json
└── README.md

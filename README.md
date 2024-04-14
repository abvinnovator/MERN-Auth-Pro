
---

# MERN Full Authentication with Forgot Password

This project is a full authentication system implemented using the MERN stack, along with additional features such as forgot password functionality. It provides user authentication using JSON Web Tokens (JWT), hashing passwords using bcrypt, and storing user data in a MongoDB database. Nodemailer is used for sending password reset emails to users who have forgotten their passwords.

## Technologies Used

- **MongoDB**: NoSQL database used for storing user data.
- **Express.js**: Web application framework used for building the backend API.
- **Node.js**: JavaScript runtime environment used for running the server-side code.
- **React.js**: JavaScript library used for building the frontend user interface.
- **JWT (JSON Web Tokens)**: Used for authentication and generating tokens.
- **bcrypt**: Library used for hashing passwords.
- **Nodemailer**: Module used for sending emails, particularly for forgot password functionality.
- **cookie-parser**: Middleware used for parsing cookies attached to the client requests.

## Features

- User authentication (signup, login, logout)
- Password hashing for secure storage
- JSON Web Token-based authentication
- Forgot password functionality with email reset link
- Secure password reset mechanism

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
```



3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define the following variables:
     ```
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret_key>
     EMAIL=<your_email_for_sending_reset_links>
     EMAIL_PASSWORD=<your_email_password>
     ```

5. Start the development server:

```bash
npm start
```

## Usage

- Register a new user account using the signup form.
- Log in with the registered credentials.
- To reset the password, click on the "Forgot Password" link and follow the instructions provided via email.






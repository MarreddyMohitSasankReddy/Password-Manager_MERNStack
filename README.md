# Password Manager MERN App

This is a full-stack password management application built using the **MERN** (MongoDB, Express.js, React.js, Node.js) stack. The app enables users to securely store, retrieve, and manage their passwords. It includes authentication and user-specific data management, ensuring secure access to user information.

---

## **Features**

- **User Authentication**:

  - Secure signup and login functionality.
  - Passwords are hashed and stored securely using bcrypt.
  - JSON Web Tokens (JWT) for user session management.

- **Password Management**:

  - Add, view, and delete passwords.
  - Passwords are stored securely in the database.

- **Responsive UI**:

  - Built using React.js for a dynamic and interactive user experience.
  - Navigation bar for seamless switching between sections.

- **State Management**:

  - Global state is managed using Redux for consistent data across components.

---

## **Project Structure**

### **Client-Side (React)**

#### **1. ********************`src`******************** Directory**

- **`app.js`**: Main React component that handles routing and initial authentication checks.
- **`index.js`**: Entry point for the React app, rendering the root component.
- **`redux`**\*\* Directory\*\*:
  - `actions.js`: Defines Redux action creators.
  - `reducer.js`: Contains the reducer for managing app state.
  - `store.js`: Configures the Redux store.
- **`Pages`**\*\* Directory\*\*:
  - `home.js`: Displays a welcome message and user-specific details.
  - `login.js`: Login page for user authentication.
  - `logout.js`: Logs out the user and clears the session.
  - `passwords.js`: Page for managing user passwords.
  - `signup.js`: Signup page for new users.
- **`Components`**\*\* Directory\*\*:
  - `Navbar.js`: Navigation bar component.
  - `Password.js`: Component for displaying individual passwords.
- **`axios`**\*\* Directory\*\*:
  - `instance.js`: Axios instance for API calls with base URL configuration.

### **Server-Side (Node.js + Express)**

#### \*\*1. \*\***`server.js`**

- Entry point for the server application.
- Connects to the MongoDB database.
- Sets up middleware, routes, and error handling.

#### **2. Directories**

- **`models`**:
  - `User.js`: Mongoose schema for user data.
  - `Password.js`: Mongoose schema for password data.
- **`controllers`**:
  - `authController.js`: Handles user authentication (signup, login, logout).
  - `passwordController.js`: Manages password-related operations (add, retrieve, delete).
- **`middlewares`**:
  - `authMiddleware.js`: Protects routes by verifying JWT tokens.
- **`routes`**:
  - `authRoutes.js`: Defines routes for authentication endpoints.
  - `passwordRoutes.js`: Defines routes for managing passwords.
- **`config`**:
  - `db.js`: MongoDB connection logic.

---

## **Setup Instructions**

### **Prerequisites**

- Node.js (v14 or above)
- MongoDB (Local or Cloud instance)

### **Steps**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/MarreddyMohitSasankReddy/Password-Manager_MERNStack.git
   cd Password-Manager_MERNStack
   ```

2. **Install Dependencies**:

   - For the server:
     ```bash
     cd server
     npm install
     ```
   - For the client:
     ```bash
     cd client
     npm install
     ```

3. **Environment Variables**:

   - Create a `.env` file in the server directory with the following keys:
     ```env
     MONGO_URI=<Your MongoDB connection string>
     JWT_SECRET=<Your JWT secret key>
     ```

4. **Run the Application**:

   - Start the server:
     ```bash
     cd server
     npm start
     ```
   - Start the client:
     ```bash
     cd client
     npm start
     ```

5. **Access the App**:
   Open your browser and navigate to `http://localhost:3000`.

---

## **API Endpoints**

### **Authentication**

- **POST \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****`/signup`**: Register a new user.
- **POST \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****`/signin`**: Authenticate an existing user.
- **GET \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****`/logout`**: Log out the current user.

### **Passwords**

- **GET \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****`/passwords`**: Retrieve all passwords for the authenticated user.
- **POST \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****`/passwords`**: Add a new password.
- **DELETE \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****`/passwords/:id`**: Delete a password by its ID.

---

## **Technologies Used**

### **Frontend**

- React.js
- Redux
- Axios

### **Backend**

- Node.js
- Express.js
- MongoDB (Mongoose)

### **Security**

- bcrypt.js for password hashing.
- JSON Web Tokens (JWT) for authentication.

---

## **Future Improvements**

- Add password encryption for enhanced security.
- Implement pagination for password lists.
- Include password strength validation.
- Add support for password sharing between users.

---

## **Contributing**

Contributions are welcome! To contribute:

- Fork the repository.
- Create a new branch (`git checkout -b feature/your-feature`).
- Commit your changes (`git commit -m 'Add some feature'`).
- Push to the branch (`git push origin feature/your-feature`).
- Open a pull request.



## **Contact**

For any inquiries, please contact:

- **Author**: Mohit Marreddy
- **Email**:mohit(mailto:[.marreddy470@gmail.com](mailto:.marreddy470@gmail.com))


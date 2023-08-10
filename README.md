# **Blogging Application - Frontend**

Welcome to the frontend repository of the Blogging Application. This application provides users with a platform to create, read, and manage blog posts. The frontend is developed using modern web technologies to ensure an engaging and user-friendly experience.

## **Features**

- User Registration and Authentication
- Create New Blog Posts
- View and Read Existing Blog Posts
- User-friendly and Responsive UI

## **Technologies Used**

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: For handling navigation within the application
- **CSS**: Styling the application for a visually appealing experience.

## **Getting Started**

1. Clone the repository using the following command:
    
    ```bash
    
    git clone chiemezie1/newSite
    
    ```
    
2. Navigate to the project directory:
    
    ```bash
    cd client
    
    ```
    
3. Install the project dependencies:
    
    ```
    npm install
    
    ```
    
4. Start the development server:
    
    ```sql
    npm start
    
    ```
    
5. Access the application in your browser at: **[http://localhost:3000](http://localhost:3000/)**

## **Screenshots**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/311b3501-40f9-470d-89f6-d3983dd3faed/Untitled.png)

!https://chat.openai.com/c/screenshots/screenshot2.png

## **Contributing**

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## **License**

This project is licensed under the MIT License. See the **[LICENSE](https://chat.openai.com/c/LICENSE)** file for details.

---

# **Blogging Application - Backend**

Welcome to the backend repository of the Blogging Application. This backend component handles user authentication, post management, and data storage.

## **Features**

- User Registration and Authentication
- Create, Update, and Retrieve Blog Posts
- JWT-based Authentication and Authorization
- Secure Password Hashing

## **Technologies Used**

- **Node.js**: A runtime environment for executing JavaScript code on the server.
- **Express.js**: A web application framework for Node.js to create APIs.
- **MongoDB**: A NoSQL database for storing application data.
- **JSON Web Tokens (JWT)**: For secure authentication and authorization.
- **bcrypt**: A library for secure password hashing.

## **Getting Started**

1. Clone the repository using the following command:
2. Navigate to the project directory:
    
    ```bash
    
    cd backend
    
    ```
    
3. Install the project dependencies:
    
    ```
    
    npm install
    
    ```
    
4. Set up environment variables by creating a **`.env`** file based on **`.env.example`**.
5. Start the server:
    
    ```sql
    
    npm start
    
    ```
    
6. The server will run at: **[http://localhost:4000](http://localhost:4000/)**

## **API Endpoints**

- **`/register`**: User registration
- **`/login`**: User login
- **`/profile`**: Get user profile information
- **`/logout`**: Log out user
- **`/post`**: Create and retrieve posts
- **`/post/:id`**: Retrieve a specific post

## **Contributing**

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## **License**

This project is licensed under the MIT License. See the **[LICENSE](https://chat.openai.com/c/LICENSE)** file for details.

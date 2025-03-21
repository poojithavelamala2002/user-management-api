# 🚀 User Management API

A simple **User Management API** built with **Node.js, Express, and MongoDB** for creating, retrieving, updating, and deleting users.

## 📌 Features
- Create a new user
- Retrieve all users
- Retrieve a single user by ID or username
- Update a user's details
- Delete a user

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/user-management-api.git
cd user-management-api
```

### 2️⃣ Install Dependencies
`npm install`

### 3️⃣ Create a .env File
```
MONGO_URI=mongodb+srv://yourusername:yourpassword@yourcluster.mongodb.net/yourdbname?retryWrites=true&w=majority
PORT=5000
```

### 4️⃣ Start the Server
```sh
npm start
```
By default, the server runs on http://localhost:5000

## 📌 API Endpoints
### 1️⃣ Create a User
- POST /api/users
- Creates a new user.
#### 📤 Request Body
```
{
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28,
  "username": "alice123"
}
```
#### 📥 Response
```
{
  "_id": "1234567890abcdef",
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28,
  "username": "alice123",
  "__v": 0
}
```
### 2️⃣ Retrieve All Users
- GET /api/users
- Fetches all users.

#### 📥 Response
```
[
  {
    "_id": "1234567890abcdef",
    "name": "Alice",
    "email": "alice@example.com",
    "age": 28,
    "username": "alice123"
  },
  {
    "_id": "abcdef1234567890",
    "name": "Bob",
    "email": "bob@example.com",
    "age": 30,
    "username": "bob123"
  }
]
```
### 3️⃣ Retrieve a Single User
- GET /api/users/:identifier
- Fetches a user by ID or Username.

- Example: Fetch by ID
```sh
GET /api/users/1234567890abcdef
```
- Example: Fetch by Username
```sh
GET /api/users/alice123
```
#### 📥 Response
```
{
  "_id": "1234567890abcdef",
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28,
  "username": "alice123"
}
```
### 4️⃣ Update a User
- PUT /api/users/:id
- Updates user details.
#### 📤 Request Body
```
{
  "name": "Alice Johnson",
  "email": "alice.j@example.com"
}
```
#### 📥 Response
```
{
  "_id": "1234567890abcdef",
  "name": "Alice Johnson",
  "email": "alice.j@example.com",
  "age": 28,
  "username": "alice123"
}
```
### 5️⃣ Delete a User
- DELETE /api/users/:identifier
- Deletes a user by ID or Username.

- Example: Delete by ID
```sh
DELETE /api/users/1234567890abcdef
```
- Example: Delete by Username
```sh
DELETE /api/users/alice123
```
#### 📥 Response
```
{
  "message": "User deleted successfully"
}
```

## 📌 Technologies Used
- Node.js - Backend Runtime
- Express.js - API Framework
- MongoDB + Mongoose - Database and ODM
- dotenv - Environment Variables
- body-parser - Parsing Request Bodies
- cors - Handling Cross-Origin Requests
  
## 📌 How to Contribute
1. Fork the repository
2. Create a new branch: git checkout -b feature-branch
3. Make your changes and commit them: git commit -m "Added new feature"
4. Push to the branch: git push origin feature-branch
5. Submit a pull request

## 📌 License
This project is licensed under the MIT License.





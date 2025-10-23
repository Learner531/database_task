# Database Task - Express.js & MongoDB API

A simple REST API built with Express.js and MongoDB for managing blog posts. This project demonstrates CRUD operations using Mongoose ODM.

## 🚀 Features

- **Create Posts**: Add new blog posts with title and content
- **Read Posts**: Retrieve all posts from the database
- **Update Posts**: Modify existing posts by ID
- **Delete Posts**: Remove posts from the database
- **MongoDB Integration**: Uses Mongoose for database operations
- **Error Handling**: Comprehensive error handling for all endpoints

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB instance)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd database_task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB connection**
   - Update the MongoDB connection string in `index.js` (line 13)
   - Replace `<username>` and `<password>` with your MongoDB Atlas credentials
   - Or use your local MongoDB connection string

4. **Start the server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`

## 📡 API Endpoints

### Test Endpoint
- **GET** `/test`
  - Returns: "Hello Worldd"
  - Purpose: Basic connectivity test

### Posts Management

#### Create a Post
- **POST** `/addPosts`
- **Body** (JSON):
  ```json
  {
    "title": "Your Post Title",
    "content": "Your post content here"
  }
  ```
- **Response**: Success message with created post data

#### Get All Posts
- **GET** `/getPosts`
- **Response**: Array of all posts in the database

#### Update a Post
- **PATCH** `/post/:id`
- **Body** (JSON):
  ```json
  {
    "title": "Updated Title",
    "content": "Updated content"
  }
  ```
- **Response**: Success message with updated post data

#### Delete a Post
- **DELETE** `/delPosts/:id`
- **Response**: Success message confirming deletion

## 🗄️ Database Schema

The project uses a simple Post schema:

```javascript
{
  title: String,
  content: String
}
```

## 🧪 Testing the API

You can test the API using:

1. **Postman** - Import the collection or manually test endpoints
2. **MongoDB Compass** - View database changes
3. **curl** commands:

```bash
# Test connection
curl http://localhost:3000/test

# Create a post
curl -X POST http://localhost:3000/addPosts \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Post","content":"This is my first blog post"}'

# Get all posts
curl http://localhost:3000/getPosts

# Update a post (replace :id with actual post ID)
curl -X PATCH http://localhost:3000/post/:id \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'

# Delete a post (replace :id with actual post ID)
curl -X DELETE http://localhost:3000/delPosts/:id
```

## 📁 Project Structure

```
database_task/
├── index.js              # Main server file
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
├── node_modules/         # Installed packages
├── screenshots/          # API testing screenshots
│   ├── add_post_compass.png.png
│   ├── add_post_postman.png.png
│   ├── delete_post_compass.png.png
│   ├── delete_post_postman.png.png
│   ├── get_posts_postman.png.png
│   ├── patch_post_compass.png.png
│   └── patch_post_postman.png.png
└── README.md             # This file
```

## 🔧 Configuration

### MongoDB Connection
Update the connection string in `index.js`:

```javascript
await mongoose.connect("mongodb+srv://<username>:<password>.ypxjvwp.mongodb.net/inventory");
```


##  Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid request data
- **404 Not Found**: Post not found (for update/delete operations)
- **500 Internal Server Error**: Server-side errors

##  Screenshots

The `screenshots/` folder contains visual documentation of API testing using:
- MongoDB Compass (database operations)
- Postman (API endpoint testing)

.


##  Support

For issues and questions:
- Check the error logs in the console
- Verify your MongoDB connection
- Ensure all dependencies are installed correctly



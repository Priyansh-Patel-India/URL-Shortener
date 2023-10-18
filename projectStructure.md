# Project Structure

Welcome to [Your Project Name]! This project is structured with a focus on modularity, readability, and scalability.

## Sections

### 🌐 URL

- **Controllers:**

  - `urlController.js`: Handles URL-related logic.

- **Models:**

  - `urlModel.js`: Defines the structure for URL data.

- **Routes:**

  - `urlRouter.js`: Express route handler for URL-related endpoints.

- **Services:**
  - `urlService.js`: Additional services or business logic related to URLs.

### 👤 User

- **Controllers:**

  - `userController.js`: Manages user-related logic.

- **Models:**

  - `userModel.js`: Defines the structure for user data.

- **Routes:**

  - `userRouter.js`: Express route handler for user-related endpoints.

- **Services:**
  - `userService.js`: Additional services or business logic related to users.

### 🔐 Auth Middleware

- **Middleware:**
  - `auth.js`: Authentication middleware to handle user authentication.

### 🔄 Static Content

- **Routes:**
  - `staticRouter.js`: Express route handler for serving static content.

### 🖼️ Views

- **EJS Templates:**
  - `index.ejs`: Main template for rendering the homepage.
  - `login.ejs`: Template for rendering the login page.
  - `signup.ejs`: Template for rendering the signup page.

### ⚙️ Configuration

- **Config:**
  - `config.js`: Configuration file for setting up server parameters.

### 📂 Additional Files

- `.gitignore`: Specifies files and directories to be ignored by version control.
- `package.json`: Node.js project configuration file.
- `server.js` (or `index.js`): Main server file where Express is set up, and routes are defined.

## Get Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Priyansh-Patel-India/URL-Shortener.git
   cd URL-Shortener
   ```
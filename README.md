Project Proposal: TodoList App with Authentication and Authorization

1. Description of Scenario:
The app aims to simplify task management by providing users with a platform to create, organize, and manage their todos efficiently.

2. Problem Statement:
The problem the project seeks to solve is the lack of a user-friendly and secure todo list application. Many existing todo apps lack robust authentication and authorization features, leaving users' data vulnerable to unauthorized access. The app addresses this issue by implementing secure user authentication and authorization mechanisms.

3. Technical Components:

Routes:
Authentication routes: /register, /login
Todo CRUD routes: /todos, /todos/:id
Category CRUD routes: /categories, /categories/:id
Text search route for todos: /todos/search

Data Models:
User model with email and hashed password fields
Todo model with title, completed, and userId fields
Category model with name and userId fields

4. Meeting Project Requirements:

Authentication and Authorization:
Implement JWT-based authentication for user registration and login.
Use middleware for authorization to protect todo and category routes.

CRUD Routes and Text Search:
Implement CRUD routes for managing todos.
Implement CRUD routes for managing categories.
Include text search functionality for searching todos by title.

Indexes for Performance and Uniqueness:
Create indexes on the userId field in the Todo and Category models for performance.
Ensure email field uniqueness in the User model.

Testing:
Write unit tests for all routes using Jest.
Aim for test coverage of over 80%.

Demo:
Prepare a simple front-end interface to interact with the API.
Provide a Postman collection for testing the API endpoints.

5. Project Timeline

Week 1: Setup project structure, define data models, implement user authentication routes, and write tests.

Week 2: Implement todo CRUD routes, category CRUD routes, text search functionality, and authorization middleware. Write corresponding tests.

Week 3: Add error handling, validation, and logging. Improve test coverage. Prepare front-end interface and finalize documentation. Conduct final testing, refine project presentation, and practice demo.

05/27/24 - missing test and need some improvement in the code itself
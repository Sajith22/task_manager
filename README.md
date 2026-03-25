# Task Manager Application

A full-stack task management application built with Angular frontend, Next.js backend, and MySQL database.

## 🚀 Features

- ✅ Create new tasks with title, description, and status
- 📋 View all tasks in a responsive table
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- 🏷️ Task status management (Pending, In Progress, Completed)
- 📅 Automatic timestamp tracking
- 🔄 Real-time updates with database

## 🛠️ Technology Stack

### Frontend
- **Angular 19+** - UI framework
- **Bootstrap 5** - Styling and responsive design
- **TypeScript** - Type-safe programming
- **RxJS** - Reactive programming

### Backend
- **Next.js 15+** - API routes
- **Node.js** - Runtime environment
- **TypeScript** - Type-safe programming
- **MySQL2** - Database driver

### Database
- **MySQL** - Relational database
- **XAMPP** - Local development environment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [XAMPP](https://www.apachefriends.org/) (for MySQL)
- [Git](https://git-scm.com/) (optional, for version control)
- [VS Code](https://code.visualstudio.com/) (recommended editor)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sajith22/task_manager.git
cd task_manager
```
  ### 2. Set Up the Database
Start XAMPP and launch Apache and MySQL services

Open phpMyAdmin (http://localhost/phpmyadmin)

Create a new database named task_manager

Run the following SQL to create the tasks table:
```bash
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in-progress', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
```bash
-- Insert sample data
INSERT INTO tasks (title, description, status) VALUES
('Complete project setup', 'Set up Angular frontend and Next.js backend', 'pending'),
('Test database connection', 'Verify MySQL connection from Next.js', 'in-progress'),
('Build UI components', 'Create task list and form components', 'completed');
```

## 3. Set Up the Backend
 ### Navigate to backend folder
cd Backend/next-backend

 ### Install dependencies
npm install

 ### Configure database (already set up in lib/db.ts)
 Default XAMPP credentials:
 - host: localhost
 - user: root
 - password: (empty)
 - database: task_manager

### Start the backend server
npm run dev

### The backend will run on http://localhost:3000

## 4. Set Up the Frontend
Open a new terminal:

### Navigate to frontend folder
```bash
cd frontend/angular-app
```

### Install dependencies
```bash
npm install
```

### Start the Angular development server
```bash
npm start
```

The frontend will run on http://localhost:4200

## 5. Access the Application
Frontend: http://localhost:4200

Backend API: http://localhost:3000/api/tasks

📁 Project Structure
```bash
task_manager/
├── Backend/
│   └── next-backend/
│       ├── src/
│       │   ├── app/
│       │   │   ├── api/
│       │   │   │   └── tasks/
│       │   │   │       ├── route.ts        # GET all, POST new
│       │   │   │       └── [id]/
│       │   │   │           └── route.ts    # GET, PUT, DELETE by id
│       │   │   ├── layout.tsx
│       │   │   └── page.tsx
│       │   └── lib/
│       │       └── db.ts                   # Database connection
│       ├── package.json
│       └── tsconfig.json
├── frontend/
│   └── angular-app/
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/
│       │   │   │   └── task-list/
│       │   │   │       ├── task-list.component.ts
│       │   │   │       ├── task-list.component.html
│       │   │   │       └── task-list.component.css
│       │   │   ├── models/
│       │   │   │   └── task.model.ts
│       │   │   ├── services/
│       │   │   │   └── task.service.ts
│       │   │   ├── app.module.ts
│       │   │   └── app.component.html
│       │   ├── index.html
│       │   └── styles.css
│       ├── angular.json
│       └── package.json
├── database/
│   └── schema.sql
└── README.md
```
```bash
🎯 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/:id	Get a specific task
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task
Example API Requests
```

```bash
Create a task:
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"New Task","description":"Task description","status":"pending"}'
  ```
  
```bash
Update a task:
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Task","description":"New description","status":"completed"}'
```

## 🧪 Testing the Application
Frontend Testing:

Open http://localhost:4200

Add a new task using the form

Edit existing tasks by clicking the Edit button

Delete tasks using the Delete button

Verify tasks appear in the table

### Backend Testing:

Visit http://localhost:3000/api/tasks to see all tasks

Use Postman or curl to test individual endpoints

## 🐛 Troubleshooting
Common Issues and Solutions
Frontend won't connect to backend:

Ensure backend is running on port 3000

Check CORS configuration in Next.js

Verify API URL in task.service.ts

### Database connection errors:

Verify MySQL is running in XAMPP

Check database credentials in src/lib/db.ts

Ensure database task_manager exists

### Port conflicts:

Change frontend port: ng serve --port 4201

Change backend port: Update package.json scripts

### Module not found errors:

Run npm install in both frontend and backend folders

Delete node_modules and reinstall if needed

📝 Development Commands

### Development mode
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Lint code
```bash
npm run lint
```

bash
## Development server
```bash
npm start
```

## Build for production
npm run build

## Run tests
```bash
npm test
```

🚢 Deployment

Backend Deployment (Vercel)

```bash
cd Backend/next-backend
```

vercel deploy
```bash
Frontend Deployment (Netlify/Vercel)
```

```bash
cd frontend/angular-app
npm run build
```

### Deploy the dist/angular-app folder
🤝 Contributing
Fork the repository

```bash
Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)
```

###Open a Pull Request

### 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

###👨‍💻 Author
Sajith22

### GitHub: @Sajith22
🙏 Acknowledgments
Angular Team for the amazing framework

Next.js Team for the powerful React framework

Bootstrap for the UI components

MySQL for the reliable database

Made with ❤️ using Angular, Next.js, and MySQL

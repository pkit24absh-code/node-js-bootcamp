# Node.js Bootcamp

A 10-day full stack web development bootcamp covering everything from JavaScript fundamentals to deploying production-ready applications. This repository contains hands-on exercises and projects completed throughout the course.

> **Note:** Currently Day 1, Day 2, and Day 3 are implemented. The remaining days will be added as the course progresses.

---

## Course Structure

### Day 1: Introduction to Web Development ✅

- Web fundamentals (HTTP, client-server)
- Tools setup (VS Code, Node.js, Postman)
- Git and GitHub basics

### Day 2: JavaScript for Backend Development ✅

- ES6+ concepts
- Async/await, promises
- Modules and project structure
- Express.js basics (server setup, JSON responses)
- Unit testing with Jest

### Day 3: Node.js Fundamentals ✅

- Event loop & async execution (fetch, setTimeout, async/await)
- File system operations (read, write, create directories)
- Building an HTTP server with the `http` module
- Serving JSON data from files
- Routing and request handling

### Day 4: Express.js and API Development 🔜

- Express routing
- Middleware
- REST API structure

### Day 5: Database Integration 🔜

- PostgreSQL basics
- CRUD operations
- Connecting DB with Node.js

### Day 6: Authentication & Authorization 🔜

- JWT authentication
- Password hashing (bcrypt)
- Protected routes

### Day 7: Frontend Basics + API Integration 🔜

- React/Next.js introduction (optional)
- Fetching API data
- Form handling and UI integration

### Day 8: Full Stack Mini Project Development 🔜

- Student project planning
- Backend + frontend connection

### Day 9: Deployment and Production Practices 🔜

- Environment variables
- Hosting overview (Vercel, Render, AWS basics)
- Deployment demo

### Day 10: Final Project Presentation 🔜

- Student presentations
- Code review and improvement tips
- Career roadmap and interview guidance

---

## Project Structure

```
├── firstDay/       # Day 1 - JavaScript basics & web fundamentals
│   ├── variables.js
│   ├── operators.js
│   ├── strings.js
│   ├── boolean.js
│   ├── logical.js
│   ├── ternary.js
│   ├── array.js
│   └── forLoop.js
│
├── secondDay/      # Day 2 - JavaScript for backend development
│   ├── app.js          # Express server setup
│   ├── index.js        # Server entry point
│   ├── package.json
│   ├── jest.config.js
│   └── __tests__/
│       └── index.spec.js
│
├── thirdDay/       # Day 3 - Node.js fundamentals
│   ├── eventLoop/
│   │   └── event-loop.js    # Event loop & async demo
│   ├── fileSystem/
│   │   └── file-system.js   # File system operations (read/write/mkdir)
│   ├── httpServer/
│   │   └── httpServer.js    # HTTP server with routing
│   └── data/
│       ├── posts.json       # Sample blog post data
│       └── posts2.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A code editor (VS Code recommended)

### Run Day 1 Examples

```bash
cd firstDay
node variables.js
```

### Run Day 2 Examples

```bash
cd secondDay
npm install
node index.js
```

### Run Day 3 Examples

```bash
# Event loop demo
cd thirdDay/eventLoop
node event-loop.js

# File system operations
cd thirdDay/fileSystem
node file-system.js

# HTTP server (runs on port 5000)
cd thirdDay/httpServer
node httpServer.js
```

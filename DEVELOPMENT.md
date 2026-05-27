# 🎯 Development Guide

Complete guide for developing and contributing to the URL Shortener project.

## Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Code Guidelines](#code-guidelines)
- [Testing](#testing)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

**URL Shortener** is a full-stack application that allows users to:
- Create short, shareable links from long URLs
- Track analytics (click counts)
- Manage shortened URLs
- Copy links to clipboard
- Delete links from dashboard

**Architecture**: React Frontend → Express Backend → MongoDB Database

---

## Technology Stack

### Frontend
- **React 19.0** - UI library
- **Tailwind CSS 3.4** - Utility-first CSS
- **Vite 5.4** - Build tool
- **JavaScript ES6+** - Programming language

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM (Object Data Modeling)

### Tools
- **npm** - Package manager
- **Git** - Version control
- **VS Code** - Recommended IDE
- **Postman/Insomnia** - API testing

---

## Getting Started

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm or yarn
- MongoDB (local or Atlas cloud)
- Git
- VS Code (optional but recommended)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sonukapar00/URL-Shortener.git
   cd URL-Shortener
   ```

2. **Setup Frontend**
   ```bash
   cd client
   npm install
   cp .env.example .env.local
   # Edit .env.local if needed
   npm run dev
   ```

3. **Setup Backend** (in a new terminal)
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000
   - API Documentation: http://localhost:3000/api/docs (if Swagger is set up)

---

## Project Structure

```
URL-Shortener/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/             # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── UrlForm.jsx
│   │   │   ├── AnalyticsCards.jsx
│   │   │   ├── UrlTable.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ToastContainer.jsx
│   │   ├── pages/                  # Page components
│   │   │   └── Dashboard.jsx
│   │   ├── services/               # API calls
│   │   │   └── urlService.js
│   │   ├── hooks/                  # Custom hooks
│   │   │   └── useToast.js
│   │   ├── App.jsx                 # Root component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── public/                     # Static assets
│   ├── index.html                  # HTML template
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── package.json                # Dependencies
│   └── README.md                   # Frontend documentation
│
├── server/                         # Express backend
│   ├── models/                     # Mongoose schemas
│   │   └── Url.js
│   ├── controllers/                # Route handlers
│   │   └── urlController.js
│   ├── routes/                     # API routes
│   │   ├── apiRoutes.js
│   │   └── urlRoutes.js
│   ├── config/                     # Configuration
│   │   └── db.js
│   ├── middlewares/                # Custom middleware
│   │   └── validateUrl.js
│   ├── index.js                    # Server entry point
│   ├── package.json                # Dependencies
│   └── README.md                   # Backend documentation
│
├── config/                         # Project configuration
├── DEPLOYMENT.md                   # Deployment guide
├── DEVELOPMENT.md                  # This file
├── README.md                       # Main project documentation
└── LICENSE                         # License file
```

---

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 2. Make Your Changes
- Keep commits atomic and focused
- Write clear commit messages

### 3. Test Your Changes
```bash
# Frontend
cd client
npm run dev      # Run development server
npm run build    # Test production build

# Backend
cd server
npm start        # Run development server
npm test         # Run tests (if available)
```

### 4. Commit and Push
```bash
git add .
git commit -m "Add: amazing feature description"
git push origin feature/amazing-feature
```

### 5. Create a Pull Request
- Go to GitHub repository
- Click "Pull requests" → "New pull request"
- Select your feature branch
- Write clear description of changes
- Submit for review

---

## Code Guidelines

### JavaScript/React Best Practices

1. **Component Structure**
   ```jsx
   /**
    * Component Description
    * What it does, key features
    */
   
   import { useState } from 'react';
   
   const MyComponent = ({ prop1, prop2 }) => {
     const [state, setState] = useState(null);
     
     const handleAction = () => {
       // Logic here
     };
     
     return (
       <div>
         {/* JSX here */}
       </div>
     );
   };
   
   export default MyComponent;
   ```

2. **Naming Conventions**
   - Components: PascalCase (e.g., `UrlForm`)
   - Functions: camelCase (e.g., `handleSubmit`)
   - Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
   - CSS Classes: kebab-case (e.g., `card-header`)

3. **Comments**
   - Add JSDoc comments for components
   - Explain "why", not "what"
   - Keep comments updated with code

4. **Props Validation**
   ```javascript
   // Use JSDoc or PropTypes for documentation
   /**
    * MyComponent Component
    * @param {string} title - Component title
    * @param {boolean} disabled - Disabled state
    * @param {function} onClick - Click handler
    */
   ```

5. **Event Handlers**
   - Name handlers: `handleActionName`
   - e.g., `handleSubmit`, `handleDelete`, `handleCopy`

### CSS/Tailwind Guidelines

1. **Use Tailwind Classes**
   - Prefer Tailwind utilities over custom CSS
   - Use `@apply` for repeated patterns
   - Keep custom CSS in `index.css`

2. **Spacing**
   - Use consistent spacing scale
   - Typical pattern: 4px, 8px, 16px, 24px, etc.

3. **Responsive Design**
   - Mobile-first approach
   - Use Tailwind breakpoints: `sm`, `md`, `lg`, `xl`
   - Test on multiple screen sizes

4. **Colors**
   - Use Tailwind color palette
   - Define custom colors in `tailwind.config.js`
   - Maintain consistency across UI

### Commit Message Guidelines

```
type(scope): subject

- type: feat, fix, docs, style, refactor, perf, test, chore
- scope: component or module affected
- subject: 50 chars or less, imperative tone

Examples:
feat(UrlForm): add URL validation
fix(AnalyticsCards): correct click count calculation
docs(README): update deployment instructions
```

---

## Testing

### Frontend Testing

Set up testing framework (optional but recommended):

```bash
cd client
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

Example test file:
```javascript
// components/UrlForm.test.jsx
import { render, screen } from '@testing-library/react';
import UrlForm from './UrlForm';

describe('UrlForm Component', () => {
  it('renders input field', () => {
    const mockOnSubmit = vi.fn();
    render(<UrlForm onSubmit={mockOnSubmit} loading={false} />);
    
    const input = screen.getByPlaceholderText(/enter the url/i);
    expect(input).toBeInTheDocument();
  });
});
```

### Manual Testing Checklist

- [ ] Create a short URL
- [ ] View the dashboard
- [ ] Copy short URL to clipboard
- [ ] Delete a URL
- [ ] Verify analytics update
- [ ] Test on mobile device
- [ ] Check for console errors
- [ ] Test network errors gracefully

---

## Common Tasks

### Adding a New Component

1. **Create component file**
   ```bash
   # Create in appropriate folder
   touch src/components/MyComponent.jsx
   ```

2. **Write component**
   ```jsx
   /**
    * MyComponent Description
    * Features: list key features
    */
   
   const MyComponent = () => {
     return (
       <div className="component-class">
         {/* Content */}
       </div>
     );
   };
   
   export default MyComponent;
   ```

3. **Import and use**
   ```jsx
   import MyComponent from './components/MyComponent';
   
   // In parent component
   <MyComponent />
   ```

4. **Add styling** (in component or `index.css`)
   ```css
   .component-class {
     @apply rounded-lg bg-slate-900 p-6;
   }
   ```

### Adding a New API Endpoint

1. **Create controller** (server/controllers/)
2. **Create route** (server/routes/)
3. **Add service call** (client/services/urlService.js)
4. **Update component** to use new endpoint

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest

# Review changes before committing
git diff package.json
```

---

## Troubleshooting

### Frontend Issues

**Port already in use**
```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

**Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Styling not applying**
1. Check class names match Tailwind output
2. Rebuild Tailwind: `npm run dev`
3. Clear browser cache (Ctrl+Shift+Del)

### Backend Issues

**Database connection fails**
1. Check MongoDB is running
2. Verify connection string in `.env`
3. Check database user credentials
4. Ensure IP whitelist allows your connection

**Port already in use**
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### CORS Errors

**Error: "No 'Access-Control-Allow-Origin' header"**
1. Backend must be running
2. Check CORS configuration in Express
3. Verify API URL in frontend `.env`

### Performance Issues

1. **Frontend slow**
   - Check network tab for slow requests
   - Run Lighthouse audit
   - Check for unnecessary re-renders (React DevTools)

2. **Backend slow**
   - Add MongoDB indexes
   - Check database query performance
   - Monitor API response times

---

## IDE Setup (VS Code)

### Recommended Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Thunder Client (API testing)

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## Git Workflow

### Useful Git Commands

```bash
# Create and switch to new branch
git checkout -b feature/name

# View changes
git status
git diff

# Stage changes
git add .
git add filename

# Commit changes
git commit -m "message"

# Push to remote
git push origin feature/name

# Pull latest changes
git pull origin main

# View commit history
git log --oneline

# Undo changes
git reset --hard HEAD
```

---

## Performance Tips

1. **Frontend**
   - Use React.memo for expensive components
   - Implement useCallback for event handlers
   - Lazy load components if needed
   - Minimize bundle size

2. **Backend**
   - Add database indexes
   - Use pagination for large datasets
   - Implement caching
   - Optimize database queries

3. **General**
   - Use production builds for testing
   - Monitor page speed metrics
   - Implement lazy loading for images
   - Compress assets

---

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Vite Documentation](https://vitejs.dev)
- [JavaScript.info](https://javascript.info)

---

## Getting Help

1. **Check existing issues** on GitHub
2. **Search documentation** for your topic
3. **Ask in discussions** on GitHub
4. **Contact maintainers** with detailed description
5. **Provide minimum reproducible example**

---

**Happy coding! 🚀**

Last Updated: 2024
Maintainer: URL Shortener Team

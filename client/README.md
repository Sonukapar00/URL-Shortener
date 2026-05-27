# URL Shortener - Frontend Dashboard

A modern, production-ready React + Tailwind CSS frontend for URL shortening and management with real-time analytics.

## 🎯 Features

- **Modern UI/UX** - Professional dark-themed dashboard with glassmorphism effects
- **Real-time Analytics** - Track URL clicks and performance metrics
- **Responsive Design** - Mobile, tablet, and desktop optimization
- **Smooth Animations** - Polished transitions and micro-interactions
- **Copy to Clipboard** - One-click sharing of shortened links
- **Error Handling** - Toast notifications for user feedback
- **Production Ready** - Optimized build, accessibility features, and SEO

## 🛠️ Tech Stack

- **React** 19.0+ - UI library
- **Tailwind CSS** 3.4+ - Utility-first CSS framework
- **Vite** 5.4+ - Lightning-fast build tool
- **JavaScript ES6+** - Modern JavaScript

## 📋 Project Structure

```
client/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── UrlForm.jsx
│   │   ├── AnalyticsCards.jsx
│   │   ├── UrlTable.jsx
│   │   ├── Footer.jsx
│   │   └── ToastContainer.jsx
│   ├── pages/               # Page components
│   │   └── Dashboard.jsx
│   ├── services/            # API service calls
│   │   └── urlService.js
│   ├── hooks/               # Custom React hooks
│   │   └── useToast.js
│   ├── App.jsx              # Root app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
├── .env.example             # Environment variables template
├── package.json             # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sonukapar00/URL-Shortener.git
   cd URL-Shortener/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and update the API URL:
   ```
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

#### Hot Module Replacement (HMR)
- Any changes to the code will automatically refresh the browser
- CSS changes are applied instantly without full reload

### Production Build

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📚 Component Overview

### Navbar
- Branding and navigation header
- GitHub repository link
- Portfolio badge

### HeroSection
- Feature highlights
- Key value propositions
- Call-to-action information

### UrlForm
- URL input with validation
- Submit button with loading state
- Error message display
- URL format guidance

### AnalyticsCards
- Total links created
- Total clicks across all links
- Top-performing link metrics
- Visual progress indicators

### UrlTable
- List of all shortened URLs
- Original and short URL display
- Click count tracking
- Copy to clipboard action
- Delete URL action
- Empty state handling
- Loading state

### Footer
- Project information
- Technology stack display
- Links and social media

### ToastContainer
- Success/error notifications
- Auto-dismiss functionality
- Smooth animations

## 🎨 Tailwind CSS Configuration

Custom extensions in `tailwind.config.js`:

- **Custom Colors** - Primary, secondary, accent colors
- **Animations** - Fade, slide, pulse effects
- **Shadows** - Glow effects for cards and buttons
- **Border Radius** - Consistent rounded elements
- **Gradients** - Modern gradient backgrounds

## 🎭 CSS Features

### Global Styles (`index.css`)
- Typography system
- Form element styling
- Button variants (primary, secondary, ghost, danger)
- Badge styles
- Responsive utilities
- Accessibility features
- Print styles

### Available Classes
- `.card` - Standard card styling
- `.glass-card` - Glassmorphism effect
- `.badge` - Badge component
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.animate-in` - Fade-in animation
- `.text-gradient` - Gradient text effect

## 🔄 API Integration

The frontend communicates with the backend API through `services/urlService.js`:

### Available Endpoints
- `GET /api/shorturls` - Fetch all shortened URLs
- `POST /api/shorturls` - Create a new shortened URL
- `DELETE /api/shorturls/:id` - Delete a shortened URL

## 🎯 Performance Optimization

- **Code Splitting** - Separate React chunk for optimal loading
- **Minification** - Production builds are minified
- **Source Maps** - Disabled in production for smaller bundle size
- **Tree Shaking** - Unused code is removed during build
- **Lazy Loading** - Images and components loaded on demand

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Focus indicators
- Keyboard navigation support
- Color contrast compliance
- Reduced motion support (`prefers-reduced-motion`)
- Skip navigation links

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import the project
   - Set environment variables
   - Deploy

3. **Environment Variables** (set in Vercel dashboard)
   ```
   VITE_API_BASE_URL=https://your-api-domain.com/api
   ```

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the dist/ folder
```

**GitHub Pages:**
- Update build output to docs/
- Enable GitHub Pages in repository settings

**Traditional Hosting:**
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🧪 Testing

To add tests (recommended for production):

```bash
npm install --save-dev vitest @testing-library/react
```

Create test files alongside components:
```
components/Navbar.jsx
components/Navbar.test.jsx
```

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM rendering

### Development
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - CSS framework
- `postcss` - CSS transformation
- `autoprefixer` - Vendor prefixes
- `vite` - Build tool

## 🐛 Troubleshooting

### API Connection Issues
- Ensure backend server is running
- Check `VITE_API_BASE_URL` in `.env.local`
- Verify CORS headers on backend

### Build Issues
- Clear `node_modules/` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf dist .vite`
- Update Node.js to latest LTS version

### Performance Issues
- Use Chrome DevTools to profile
- Check for unnecessary re-renders in React
- Analyze bundle size: `npm install -g webpack-bundle-analyzer`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Created as a modern portfolio project showcasing frontend best practices.

## 🔗 Links

- [GitHub Repository](https://github.com/Sonukapar00/URL-Shortener)
- [Live Demo](https://url-shortener-demo.vercel.app)
- [Backend API](https://github.com/Sonukapar00/URL-Shortener/tree/main/server)

---

**Made with ❤️ for modern web development**

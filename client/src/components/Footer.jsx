/**
 * Footer Component
 * Professional footer with project information and links
 */

const Footer = () => (
  <footer className="mt-12 animate-fadeIn rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl transition-smooth sm:p-8">
    {/* Main content */}
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Project Info */}
        <div className="space-y-2 md:col-span-2">
          <h3 className="text-lg font-semibold text-white">URL Shortener Dashboard</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            A production-ready URL shortening platform built with React, Tailwind CSS, Node.js, Express, and MongoDB. 
            Designed for modern web applications and recruiter portfolios.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="rounded-xl border border-white/10 bg-slate-950/80 p-4">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Tech Stack</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              React 19.0
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Node.js/Express
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Bottom section */}
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} URL Shortener. Optimized for scalability and recruiter portfolios.
        </p>
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="text-xs text-slate-400 transition-smooth hover:text-cyan-300"
            aria-label="Terms of Service"
          >
            Terms
          </a>
          <a 
            href="#" 
            className="text-xs text-slate-400 transition-smooth hover:text-cyan-300"
            aria-label="Privacy Policy"
          >
            Privacy
          </a>
          <a 
            href="https://github.com/Sonukapar00/URL-Shortener" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-slate-400 transition-smooth hover:text-cyan-300"
            aria-label="GitHub Repository"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

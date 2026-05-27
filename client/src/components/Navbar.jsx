/**
 * Navbar Component
 * Professional header with branding and GitHub link
 * Features: responsive design, glassmorphism, smooth transitions
 */

const Navbar = () => (
  <header className="relative z-10 mx-auto flex max-w-7xl animate-slideDown items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 shadow-glow backdrop-blur-xl transition-smooth sm:px-8">
    {/* Animated gradient background */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 hover:opacity-100" />
    
    {/* Left Content - Branding */}
    <div className="relative space-y-1">
      <span className="inline-flex animate-fadeIn rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 transition-smooth hover:bg-cyan-500/25">
        ⚡ URL Shortener
      </span>
      <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Modern Link Management
      </h1>
    </div>

    {/* Right Content - CTA & Links */}
    <div className="relative hidden items-center gap-3 md:flex">
      <span className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm font-medium text-slate-300 transition-smooth hover:border-white/20 hover:bg-slate-900/80">
        Portfolio Ready
      </span>
      <a
        href="https://github.com/Sonukapar00/URL-Shortener"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View project on GitHub"
        className="group relative rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:brightness-110 active:scale-95"
      >
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </span>
      </a>
    </div>
  </header>
);

export default Navbar;

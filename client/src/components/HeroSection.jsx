/**
 * HeroSection Component
 * Prominent hero section with features and call-to-action information
 * Features: responsive layout, gradient backgrounds, feature highlights
 */

const HeroSection = () => (
  <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl animate-slideUp sm:p-8">
    {/* Animated gradient background */}
    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20 blur-3xl opacity-60" />
    
    {/* Content */}
    <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      {/* Left side - Main content */}
      <div className="space-y-5">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-300/80 font-semibold">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            SaaS-Ready Dashboard
          </p>
        </div>
        
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
          Fast URL Shortening, Analytics & Management
        </h2>
        
        <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">
          A modern dashboard for creating short links, tracking clicks in real-time, and managing your URL portfolio. 
          Built for developers and recruiters who value clean design and performance.
        </p>

        {/* Features list */}
        <div className="grid gap-3 pt-4 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-slate-300">Real-time analytics tracking</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-slate-300">Copy to clipboard functionality</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-slate-300">Click analytics & insights</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-cyan-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-slate-300">Responsive mobile design</span>
          </div>
        </div>
      </div>

      {/* Right side - Highlight card */}
      <div className="rounded-2xl border border-white/10 bg-slate-950/90 p-6 shadow-card hover:shadow-card-lg transition-smooth">
        <div className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Platform Features</p>
          </div>
          
          <div className="space-y-4">
            {/* Feature item 1 */}
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 transition-smooth hover:border-cyan-500/30 hover:bg-slate-900/90">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-400">
                    ⚡
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Instant Shortening</p>
                  <p className="mt-1 text-xs text-slate-400">Create short links in seconds</p>
                </div>
              </div>
            </div>

            {/* Feature item 2 */}
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 transition-smooth hover:border-violet-500/30 hover:bg-slate-900/90">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-violet-500/20 text-violet-400">
                    📊
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Live Analytics</p>
                  <p className="mt-1 text-xs text-slate-400">Track every click in real-time</p>
                </div>
              </div>
            </div>

            {/* Feature item 3 */}
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 transition-smooth hover:border-pink-500/30 hover:bg-slate-900/90">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-pink-500/20 text-pink-400">
                    🎨
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Modern UI</p>
                  <p className="mt-1 text-xs text-slate-400">Production-ready design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

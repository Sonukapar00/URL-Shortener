/**
 * AnalyticsCards Component
 * Displays key metrics and performance insights
 * Features: real-time stats, top-performing link, responsive grid
 */

const AnalyticsCards = ({ stats }) => (
  <div className="grid gap-6 sm:grid-cols-2 animate-slideUp">
    {/* Total Links Card */}
    <article className="group rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-glow-md sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
            Total Links
          </p>
          <p className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            {stats.totalUrls}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Short URLs created in your dashboard
          </p>
        </div>
        <div className="flex-shrink-0 rounded-xl bg-cyan-500/20 p-3 text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000-2A4 4 0 000 5v10a4 4 0 004 4h12a4 4 0 004-4V5a4 4 0 00-4-4 1 1 0 000 2 2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: `${stats.urlProgress}%` }} />
      </div>
    </article>

    {/* Total Clicks Card */}
    <article className="group rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-glow-md sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
            Total Clicks
          </p>
          <p className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            {stats.totalClicks}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Clicks aggregated across all links
          </p>
        </div>
        <div className="flex-shrink-0 rounded-xl bg-violet-500/20 p-3 text-violet-400 group-hover:bg-violet-500/30 transition-colors">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full" style={{ width: `${stats.clickProgress}%` }} />
      </div>
    </article>

    {/* Top Performing Link Card - Full width */}
    {stats.topUrl ? (
      <article className="col-span-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                🏆 Top Performing Link
              </p>
              <span className="inline-flex items-center rounded-full bg-pink-500/20 px-2 py-1 text-xs font-semibold text-pink-300">
                Trending
              </span>
            </div>
            <a
              href={stats.topUrl.fullUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-lg font-semibold text-cyan-300 hover:text-cyan-200 truncate transition-colors"
              title={stats.topUrl.fullUrl}
            >
              {stats.topUrl.fullUrl}
            </a>
            <p className="mt-1 text-sm text-slate-400 truncate">
              Highest engagement on your dashboard
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-4 sm:flex-col sm:items-end">
            <div className="text-right">
              <p className="text-3xl font-bold text-white">{stats.topUrl.clicks}</p>
              <p className="text-xs text-slate-400 mt-1">Total Clicks</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden sm:block" />
            <div className="text-right">
              <p className="text-xl font-semibold text-pink-300">
                {stats.totalClicks > 0 
                  ? Math.round((stats.topUrl.clicks / stats.totalClicks) * 100) 
                  : 0}%
              </p>
              <p className="text-xs text-slate-400 mt-1">Of Total</p>
            </div>
          </div>
        </div>
      </article>
    ) : null}

    {/* Empty state */}
    {!stats.topUrl && stats.totalUrls === 0 && (
      <article className="col-span-full rounded-2xl border border-dashed border-white/10 bg-slate-950/50 p-8 text-center">
        <div className="text-4xl mb-3">🔗</div>
        <p className="text-slate-400">No links created yet. Create your first short link to see analytics!</p>
      </article>
    )}
  </div>
);

export default AnalyticsCards;

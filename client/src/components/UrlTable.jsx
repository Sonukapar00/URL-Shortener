/**
 * UrlTable Component
 * Displays all created short URLs with copy and delete actions
 * Features: table layout, action buttons, responsive design, empty state
 */

const UrlTable = ({ urls, loading, onCopy, onDelete }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl transition-smooth sm:p-8">
    {/* Header */}
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
          Link Manager
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">
          Your shortened links
        </h3>
      </div>
      <span className="flex items-center justify-center rounded-full bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-300 w-fit">
        <span className="h-2 w-2 rounded-full bg-cyan-400 mr-2" />
        {urls.length} {urls.length === 1 ? 'link' : 'links'}
      </span>
    </div>

    {/* Loading state */}
    {loading ? (
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 py-12">
        <div className="mb-4">
          <svg className="h-10 w-10 animate-spin text-cyan-400" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
        <p className="text-slate-400 font-medium">Loading your links...</p>
      </div>
    ) : urls.length === 0 ? (
      /* Empty state */
      <div className="rounded-xl border border-dashed border-white/10 bg-slate-950/50 py-12 px-6 text-center">
        <div className="text-5xl mb-4">🔗</div>
        <p className="text-slate-400 font-medium">No links created yet</p>
        <p className="mt-2 text-sm text-slate-500">
          Create your first short URL above to start building your link portfolio
        </p>
      </div>
    ) : (
      /* Table */
      <div className="overflow-x-auto -mx-6 sm:-mx-8">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-slate-500 font-semibold sm:px-8">
                Original URL
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-slate-500 font-semibold sm:px-8">
                Short Link
              </th>
              <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-slate-500 font-semibold sm:px-8">
                Clicks
              </th>
              <th className="px-6 py-4 text-right text-xs uppercase tracking-widest text-slate-500 font-semibold sm:px-8">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {urls.map((item) => (
              <tr 
                key={item._id} 
                className="transition-all duration-300 hover:bg-slate-950/70 group"
              >
                {/* Original URL */}
                <td className="px-6 py-4 sm:px-8">
                  <a 
                    href={item.fullUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block truncate text-sm text-cyan-300 hover:text-cyan-200 hover:underline transition-colors max-w-xs"
                    title={item.fullUrl}
                  >
                    {item.fullUrl}
                  </a>
                </td>

                {/* Short Link */}
                <td className="px-6 py-4 sm:px-8">
                  {(() => {
                    const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/url';
                    const backendOrigin = apiBase.replace(/\/api\/.*$/, '');
                    const redirectHref = `${backendOrigin}/${item.shortCode}`;
                    return (
                      <a
                        href={redirectHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-950/80 px-3 py-2 text-sm text-slate-100 font-mono border border-white/10 group-hover:border-cyan-500/30 transition-colors break-all"
                      >
                        <span className="truncate">{redirectHref}</span>
                        <span className="hidden text-xs text-slate-400 sm:inline">↗</span>
                      </a>
                    );
                  })()}
                </td>

                {/* Click count */}
                <td className="px-6 py-4 sm:px-8">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-lg font-semibold text-white">
                      {item.clicks}
                    </span>
                    {item.clicks > 0 && (
                      <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V9.414l-4.293 4.293a1 1 0 01-1.414-1.414L13.586 8H12z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 sm:px-8 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {/* Copy button */}
                    <button
                      onClick={() => onCopy(item.shortCode)}
                      className="group/btn relative inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-slate-900/80 hover:border-cyan-500/30 hover:text-cyan-300 active:scale-95"
                      title="Copy short link to clipboard"
                      aria-label={`Copy short URL /${item.shortCode} to clipboard`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="hidden sm:inline">Copy</span>
                    </button>

                    {/* Delete button */}
                    <button
                      onClick={() => onDelete(item._id)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500/20 px-3 py-2 text-sm font-medium text-rose-300 transition-all duration-300 border border-rose-500/30 hover:bg-rose-500/30 hover:border-rose-500/50 active:scale-95"
                      title="Delete this short link"
                      aria-label={`Delete short URL /${item.shortCode}`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {/* Info footer */}
    {urls.length > 0 && !loading && (
      <div className="mt-6 pt-6 border-t border-white/10 text-xs text-slate-500">
        <p>
          💡 <strong>Tip:</strong> Click the copy button to share your short link, or click the URL to verify where it leads.
        </p>
      </div>
    )}
  </div>
);

export default UrlTable;

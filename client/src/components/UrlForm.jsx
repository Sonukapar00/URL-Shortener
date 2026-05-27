/**
 * UrlForm Component
 * Form for creating short URLs
 * Features: input validation, loading state, gradient button, smooth transitions
 */

import { useState } from 'react';

const UrlForm = ({ onSubmit, loading }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    
    if (!value.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    // Basic URL validation
    try {
      new URL(value.trim());
      onSubmit(value.trim());
      setValue('');
    } catch {
      setError('Please enter a valid URL (e.g., https://example.com)');
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl transition-smooth sm:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-300/80 font-semibold">
            Shorten URL
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Create a fast, branded short link
          </h3>
        </div>
        <span className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          loading 
            ? 'bg-cyan-500/20 text-cyan-300' 
            : 'bg-slate-950/70 text-slate-300'
        }`}>
          {loading ? '⏳ Processing...' : '✨ Ready'}
        </span>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Input field */}
        <div>
          <label htmlFor="url-input" className="sr-only">
            Enter the full URL to shorten
          </label>
          <input
            id="url-input"
            type="url"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (error) setError('');
            }}
            placeholder="https://example.com/very-long-url"
            className={`w-full rounded-xl border bg-slate-950/80 px-5 py-4 text-slate-100 outline-none transition-all duration-300 ${
              error
                ? 'border-rose-500/50 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
            }`}
            disabled={loading}
            autoFocus
          />
          {error && (
            <p className="mt-2 text-sm text-rose-300 flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading || !value.trim()}
          className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:-translate-y-0"
        >
          <span className="flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Shortening...
              </>
            ) : (
              <>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Shorten URL
              </>
            )}
          </span>
        </button>
      </form>

      {/* Info text */}
      <p className="mt-4 text-xs text-slate-500">
        ℹ️ Paste any valid URL (starting with https:// or http://) to create a short link instantly.
      </p>
    </div>
  );
};

export default UrlForm;

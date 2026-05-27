/**
 * ToastContainer Component
 * Displays success/error notifications with smooth animations
 * Features: auto-dismiss, color-coded variants, smooth transitions
 */

const ToastContainer = ({ messages }) => (
  <div 
    className="fixed right-5 top-5 z-50 flex w-full max-w-md flex-col gap-3 pointer-events-none"
    role="region"
    aria-live="polite"
    aria-label="Notifications"
  >
    {messages.map((toast) => (
      <div
        key={toast.id}
        className={`animate-slideDown pointer-events-auto rounded-xl border px-5 py-4 shadow-xl shadow-slate-950/40 backdrop-blur-sm transition-all duration-500 ease-out ${
          toast.variant === 'error' 
            ? 'border-rose-500/50 bg-rose-500/10 text-rose-100' 
            : 'border-cyan-500/50 bg-cyan-500/10 text-cyan-100'
        }`}
        role="alert"
      >
        <div className="flex items-start gap-3">
          {/* Icon */}
          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">
            {toast.variant === 'error' ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </span>

          {/* Message */}
          <p className="text-sm font-medium leading-relaxed flex-1">{toast.message}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ToastContainer;

/**
 * App Component
 * Main application root
 * Handles state management for URLs, loading, and notifications
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import useToast from './hooks/useToast';
import Dashboard from './pages/Dashboard';
import { fetchUrls, createShortUrl, deleteShortUrl } from './services/urlService';

const App = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { messages, notify } = useToast();

  // Load all URLs on component mount
  const loadUrls = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchUrls();
      setUrls(data || []);
    } catch (error) {
      console.error('Failed to load URLs:', error);
      notify('Unable to load the dashboard. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  }, [notify]);

  // Handle creating a new short URL
  const handleCreate = async (fullUrl) => {
    setSubmitting(true);
    try {
      const newUrl = await createShortUrl(fullUrl);
      setUrls((current) => [newUrl, ...current]);
      notify('✨ Short URL created successfully!');
    } catch (error) {
      console.error('Failed to create short URL:', error);
      notify(error.message || 'Unable to create short URL.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // Handle deleting a short URL
  const handleDelete = async (id) => {
    try {
      await deleteShortUrl(id);
      setUrls((current) => current.filter((item) => item._id !== id));
      notify('🗑️ Link removed from the dashboard.');
    } catch (error) {
      console.error('Failed to delete URL:', error);
      notify('Unable to delete the link.', 'error');
    }
  };

  // Handle copying short URL to clipboard
  const handleCopy = async (shortCode) => {
    const shortUrl = `${window.location.origin}/${shortCode}`;
    try {
      await navigator.clipboard.writeText(shortUrl);
      notify('📋 Short URL copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      notify('Clipboard access denied. Copy manually.', 'error');
    }
  };

  // Load URLs on component mount
  useEffect(() => {
    loadUrls();
  }, [loadUrls]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalUrls = urls.length;
    const totalClicks = urls.reduce((sum, item) => sum + (item.clicks || 0), 0);
    const topUrl = urls.reduce(
      (best, item) => (item.clicks > (best?.clicks || 0) ? item : best),
      null
    );
    const urlProgress = totalUrls > 0 ? Math.min(100, 20 + totalUrls * 8) : 0;
    const clickProgress = totalClicks > 0 ? Math.min(100, 20 + totalClicks * 4) : 0;
    return { totalUrls, totalClicks, topUrl, urlProgress, clickProgress };
  }, [urls]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Animated background gradient */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-96 bg-hero-gradient blur-3xl opacity-60" />
      <div className="pointer-events-none fixed inset-x-0 -top-40 h-96 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />

      {/* Main content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-8 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 py-8">
          <Dashboard
            urls={urls}
            loading={loading}
            submitting={submitting}
            stats={stats}
            onCreate={handleCreate}
            onCopy={handleCopy}
            onDelete={handleDelete}
          />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Toast notifications */}
      <ToastContainer messages={messages} />
    </div>
  );
};

export default App;

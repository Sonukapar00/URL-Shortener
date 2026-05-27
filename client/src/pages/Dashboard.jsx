/**
 * Dashboard Page
 * Main page composing all components
 * Layout: Hero + Form/Analytics + Table
 */

import HeroSection from '../components/HeroSection';
import UrlForm from '../components/UrlForm';
import AnalyticsCards from '../components/AnalyticsCards';
import UrlTable from '../components/UrlTable';

const Dashboard = ({ urls, loading, submitting, stats, onCreate, onCopy, onDelete }) => (
  <div className="space-y-8 animate-fadeIn">
    {/* Hero Section */}
    <HeroSection />

    {/* Main content grid */}
    <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
      {/* Left Column - Form and Analytics */}
      <section className="space-y-8">
        {/* URL Form */}
        <UrlForm onSubmit={onCreate} loading={submitting} />

        {/* Analytics Cards */}
        <AnalyticsCards stats={stats} />
      </section>

      {/* Right Column - URL Table */}
      <section>
        <UrlTable urls={urls} loading={loading} onCopy={onCopy} onDelete={onDelete} />
      </section>
    </div>
  </div>
);

export default Dashboard;

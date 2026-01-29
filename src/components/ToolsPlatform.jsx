const navItems = [
  { label: 'Dashboard', active: false },
  { label: 'Students', active: true },
  { label: 'Sessions', active: false },
  { label: 'Resources', active: false },
  { label: 'Reports', active: false },
  { label: 'Settings', active: false },
]

const features = [
  'Client Management',
  'Session Scheduler',
  'Resource Hub',
  'Performance Analytics',
  'Communication Tools',
  'Secure Data Storage',
]

const cards = [
  { icon: 'chart', title: 'Comprehensive Counselor Tool', desc: 'Monitor and manage your counseling activities.' },
  { icon: 'megaphone', title: 'Marketing Support', desc: 'Reach more students with built-in outreach tools.' },
  { icon: 'dashboard', title: 'Performance Dashboard', desc: 'Track your impact and grow your practice.' },
]

const whyApp = [
  'Personalized Recommendations',
  'Detailed Career Paths',
  'Interactive Learning Modules',
  'Progress Tracking',
  'Expert Community Access',
  'Mock Interviews',
  'Skill Development Workshops',
  'Career Assessments',
]

const cardIcons = {
  chart: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  megaphone: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
  dashboard: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
}

export default function ToolsPlatform() {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools to Help You <span className="text-primary">Succeed!</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Leverage our advanced platform and innovative tools to streamline your counseling process, enhance student engagement, and maximize your impact.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-card bg-white">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-4 bg-primary p-6 lg:p-8">
              <p className="text-white font-display font-bold text-lg mb-6">GuideXpert</p>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${item.active ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="lg:col-span-8 bg-gray-50/80 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">Professional Interface</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Efficiently manage your counseling activities, student profiles, and resources with our intuitive and user-friendly interface.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-sm font-medium text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {cards.map((c) => (
                  <div key={c.title} className="bg-sky-pale/80 rounded-xl p-4 border border-sky-100 flex gap-3 group hover:border-primary/20 transition-colors">
                    <span className="text-primary shrink-0">{cardIcons[c.icon]}</span>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-sm">{c.title}</h4>
                      <p className="text-gray-600 text-xs mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="font-display text-sm font-bold text-gray-900 mb-3">Why GuideXpert App</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {whyApp.map((item) => (
                  <div key={item} className="bg-primary/5 hover:bg-primary/10 rounded-xl px-3 py-2.5 text-xs font-medium text-gray-700 text-center transition-colors border border-primary/5">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

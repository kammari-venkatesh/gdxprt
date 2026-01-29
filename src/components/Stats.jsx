import Button from './Button'

const stats = [
  { value: '1,700+', label: 'Certified Counselors', icon: 'person' },
  { value: '1,000+', label: 'Positive Reviews', icon: 'star' },
  { value: '100+', label: 'Success Stories', icon: 'trophy' },
]

const bullets = [
  'Expert-designed Curriculum',
  'Real-world Case Studies',
  'Cutting-edge Tools',
  'Continuous Skill Development',
]

const icons = {
  person: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  star: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  trophy: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
}

export default function Stats() {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built on a Legacy of <span className="text-primary">Proven Success</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Join a community of successful counselors and make a lasting impact on countless student lives.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-card hover:border-primary/10 transition-all duration-300">
              <span className="text-primary inline-flex items-center justify-center mb-4">{icons[s.icon]}</span>
              <span className="font-display text-3xl md:text-4xl font-bold text-primary block">{s.value}</span>
              <span className="text-gray-600 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-white shadow-card">
            <h3 className="font-display font-bold text-xl mb-3">Powered by Industry Leaders</h3>
            <p className="text-white/90 leading-relaxed">
              Our program is developed in collaboration with leading experts and institutions to ensure the highest quality and relevance.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 items-center">
                  <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-700 font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  )
}

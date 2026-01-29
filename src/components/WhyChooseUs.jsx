import Button from './Button'

const features = [
  {
    title: 'The GuideXpert Edge',
    desc: 'Access cutting-edge resources, training, and a supportive community that helps you stand out as a trusted career guide.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
  },
  {
    title: 'Building Bridges to Bright Futures',
    desc: 'Connect students with the right opportunities and institutions. Your guidance can shape careers and change lives.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
  },
  {
    title: 'Unlock Opportunities, Ignite Careers',
    desc: 'Help students discover their strengths, explore career paths, and take confident steps toward their dreams.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
    ),
  },
]

const stats = [
  { value: '12+', label: 'Years of Expertise', icon: '👤' },
  { value: '1.7L', label: 'Students Impacted', icon: '⭐' },
  { value: '250+', label: 'Institutions Connected', icon: '🌐' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Become a <span className="text-primary">GuideXpert</span> Counselor?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            At GuideXpert, we believe in empowering individuals to make informed career decisions and achieve their full potential. As a counselor with us, you play a pivotal role in shaping futures and unlocking opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-white/80 rounded-2xl py-8 px-4 border border-gray-100 shadow-soft">
              <span className="text-3xl mb-3 block">{s.icon}</span>
              <span className="font-display text-2xl md:text-3xl font-bold text-primary block">{s.value}</span>
              <span className="text-gray-500 text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  )
}

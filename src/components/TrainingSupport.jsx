import Button from './Button'

const topRow = [
  { icon: 'mentor', title: 'Expert Mentorship', desc: 'Learn from seasoned counselors and industry experts who guide you every step of the way.' },
  { icon: 'lib', title: 'Resource Library', desc: 'Access a wealth of materials, templates, and tools to support your counseling practice.' },
  { icon: 'forum', title: 'Community Forum', desc: 'Connect with fellow counselors, share experiences, and grow together.' },
]

const bottomRow = [
  { icon: 'learn', title: 'Learn', desc: 'Absorb knowledge through structured modules and live sessions.' },
  { icon: 'practice', title: 'Practice', desc: 'Apply what you learn with real case studies and simulations.' },
  { icon: 'succeed', title: 'Succeed', desc: 'Launch your counseling journey with confidence and ongoing support.' },
]

const icons = {
  mentor: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  lib: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  forum: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>,
  learn: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  practice: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  succeed: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
}

export default function TrainingSupport() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Training & Support <span className="text-primary">That Empowers You</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            At GuideXpert, we are committed to your success. Our robust training and support system is designed to provide you with everything you need to excel as a career counselor.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topRow.map((item) => (
            <div
              key={item.title}
              className="group bg-gray-50/80 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-card transition-all duration-300 flex gap-4"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {icons[item.icon]}
              </span>
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-display text-lg font-bold text-gray-900 mb-6 text-center">Complete Training Journey</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bottomRow.map((item) => (
            <div
              key={item.title}
              className="group bg-sky-pale/50 hover:bg-sky-pale rounded-2xl p-6 border border-sky-100 hover:border-primary/20 transition-all duration-300 flex gap-4"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {icons[item.icon]}
              </span>
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button>Explore Training</Button>
        </div>
      </div>
    </section>
  )
}

const steps = [
  { title: 'Register', desc: 'Sign up and complete your profile to join the program.', color: 'bg-primary' },
  { title: 'Complete Training', desc: 'Learn from experts and master counseling best practices.', color: 'bg-emerald-500' },
  { title: 'Get Certified', desc: 'Earn your GuideXpert certification and stand out.', color: 'bg-amber-500' },
  { title: 'Start Counseling', desc: 'Begin guiding students on their career journeys.', color: 'bg-sky-400' },
  { title: 'Earn & Grow', desc: 'Scale your impact and income as a certified counselor.', color: 'bg-primary' },
]

const earning = [
  { amount: '₹1,00,000', label: 'Beginner', sub: 'Starting potential' },
  { amount: '₹2,50,000', label: 'Intermediate', sub: 'With experience' },
  { amount: '₹5,00,000', label: 'Advanced', sub: 'Top performers' },
]

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shape Careers, <span className="text-primary">Build Yours Too</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Are you ready to make a significant impact on young minds and embark on a fulfilling career journey? The GuideXpert Counselor Certification Program is your pathway to success.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 mb-20">
          {steps.map((s, i) => (
            <div key={s.title} className="flex md:flex-1 md:min-w-0 md:flex-row md:items-start gap-0">
              <div className="flex flex-col md:flex-1 items-center md:items-start text-center md:text-left">
                <div className={`w-14 h-14 rounded-2xl ${s.color} text-white font-display font-bold text-lg flex items-center justify-center mb-4 shrink-0 shadow-md`}>
                  {i + 1}
                </div>
                <h3 className="font-display font-bold text-gray-900">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-6 lg:w-10 h-0.5 bg-gray-200 shrink-0 mt-7 self-center mx-1" aria-hidden />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {earning.map((e) => (
            <div key={e.label} className="group text-center bg-sky-pale/60 hover:bg-sky-pale rounded-2xl p-8 border border-sky-100 hover:border-primary/20 transition-all duration-300">
              <p className="text-primary font-semibold text-sm mb-1">{e.sub}</p>
              <span className="font-display text-2xl md:text-3xl font-bold text-primary block">{e.amount}</span>
              <span className="text-gray-600 font-medium">{e.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

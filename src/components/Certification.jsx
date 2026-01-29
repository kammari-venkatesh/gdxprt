const bullets = [
  'Comprehensive Curriculum',
  'Expert-led Training',
  'Practical Case Studies',
  'Industry-recognized Certification',
  'Ongoing Mentorship & Support',
]

const Check = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
)

export default function Certification() {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Become a <span className="text-primary">Certified GuideXpert</span> Counselor
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our comprehensive program equips you with the knowledge, skills, and confidence to become a highly effective and sought-after career counselor.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-4 items-start group">
                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center mt-0.5 group-hover:scale-105 transition-transform">
                  <Check />
                </span>
                <span className="text-gray-700 font-medium leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-sky-200/40 rounded-3xl blur-2xl opacity-60" aria-hidden />
              <div className="relative aspect-[3/4] bg-gradient-to-br from-white to-sky-pale rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-8 text-center shadow-card">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-xl mb-2">Certificate</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">Placeholder for an actual certificate image or interactive element demonstrating certification.</p>
                <p className="text-primary font-display font-semibold">GuideXpert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

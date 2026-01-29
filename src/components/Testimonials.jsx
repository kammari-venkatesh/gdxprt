const testimonials = [
  { quote: 'Nexus Pro transformed how we manage projects. Clear, fast, and the support team actually responds.', author: 'Sarah Chen', role: 'Operations Lead, TechFlow' },
  { quote: 'We cut onboarding time by half. The platform is intuitive and our team adopted it quickly.', author: 'Marcus Webb', role: 'CEO, ScaleUp Inc' },
  { quote: 'Finally, a solution that scales with us. Pricing is fair and the outcomes speak for themselves.', author: 'Elena Rodriguez', role: 'Director, DataFirst' },
  { quote: 'Reliable, transparent, and genuinely helpful. We’ve recommended them to several partners.', author: 'James Park', role: 'CTO, CloudNine' },
  { quote: 'Strong ROI within the first quarter. The training and support made all the difference.', author: 'Priya Sharma', role: 'VP Product, Innovate Labs' },
  { quote: 'Clean UX, powerful features. We switched from two separate tools to one—huge win.', author: 'David Okonkwo', role: 'Head of Engineering, BuildRight' },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Teams worldwide trust us to deliver results. Here’s what they’re saying.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-xl p-6 border border-gray-100 flex flex-col min-h-[200px] transition duration-200 hover:border-sky-200 hover:shadow-sm"
            >
              <p className="text-gray-700 flex-1 mb-4">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

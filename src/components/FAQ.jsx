import { useState } from 'react'
import Button from './Button'

const faqs = [
  { q: 'What is the GuideXpert Counselor Certification Program?', a: 'The GuideXpert Counselor Certification Program is a comprehensive training and certification initiative designed to equip you with the knowledge, skills, and credentials needed to excel as a career counselor. You will learn best practices, use our platform and resources, and join a community of certified counselors.' },
  { q: 'Who is this program for?', a: 'The program is for anyone passionate about guiding students and professionals on their career paths—including educators, HR professionals, career coaches, and individuals looking to start a fulfilling career in counseling.' },
  { q: 'What are the eligibility criteria?', a: 'There are no strict eligibility barriers. A genuine interest in career guidance, good communication skills, and a commitment to complete the training are what we look for. Specific requirements may apply for certain advanced modules.' },
  { q: 'How long does the program take to complete?', a: 'The program is designed to be flexible. Most participants complete the core certification within a few weeks, depending on their pace. You can access materials online and learn at your convenience.' },
  { q: 'What kind of support will I receive?', a: 'You get access to expert mentorship, a resource library, community forums, and ongoing support from the GuideXpert team. We are committed to helping you succeed at every step.' },
  { q: 'What are the career opportunities after certification?', a: 'Certified GuideXpert counselors can work with students, institutions, and organizations. Many counselors build independent practices, collaborate with schools and colleges, or work with ed-tech platforms. Earning potential grows with experience and impact.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Got <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Explore our frequently asked questions below or contact us directly for personalized assistance.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${open === i ? 'border-primary/30 shadow-card bg-sky-pale/30' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50/50 transition"
              >
                <span className="text-[15px]">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 transition-all duration-300 ${open === i ? 'rotate-180 bg-primary/10 text-primary' : ''}`} aria-hidden>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600 text-[15px] leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button>Contact Support</Button>
        </div>
      </div>
    </section>
  )
}

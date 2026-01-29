import { useState } from 'react'
import Button from './Button'

const trust = [
  { value: '500+', label: 'Students Assisted', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  { value: '200+', label: 'Experts', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  { value: '100+', label: 'Happy Stories', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
]

const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 placeholder:text-gray-400'

export default function Hero() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', city: '', state: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="relative bg-hero-gradient py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> India&apos;s largest career community
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[2.75rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-5">
              Become a{' '}
              <span className="text-primary">Certified Elite Counselor</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Be a part of India&apos;s largest career community and guide students on the right career path. Help them unleash their full potential and build a successful future.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {trust.map((t) => (
                <div
                  key={t.label}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border ${t.bg} ${t.border} ${t.text}`}
                >
                  <span className="font-display font-bold text-lg">{t.value}</span>
                  <span className="text-sm font-medium">{t.label}</span>
                </div>
              ))}
            </div>
            <Button>Apply Now</Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-sky-100 rounded-2xl blur-xl opacity-60" aria-hidden />
            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                </div>
                <h2 className="font-display text-xl font-bold text-gray-900">Register to get a free demo!</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required />
                <input type="email" placeholder="Email ID" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} required />
                <input type="tel" placeholder="Mobile Number" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className={inputClass} />
                <input type="text" placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClass} />
                <select value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className={inputClass + ' cursor-pointer'}>
                  <option value="">State</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="KA">Karnataka</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="MH">Maharashtra</option>
                  <option value="DL">Delhi</option>
                  <option value="other">Other</option>
                </select>
                <Button type="submit" className="w-full">Get A Demo</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

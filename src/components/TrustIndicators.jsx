const items = [
  { label: 'Certified', color: 'bg-primary', icon: 'check' },
  { label: 'Trusted', color: 'bg-emerald-500', icon: 'shield' },
  { label: 'Support', color: 'bg-amber-500', icon: 'support' },
  { label: 'Growth', color: 'bg-sky-400', icon: 'growth' },
]

const icons = {
  check: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  ),
  support: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  growth: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  ),
}

export default function TrustIndicators() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="group bg-gray-50/80 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-card transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <span className={`inline-flex w-14 h-14 items-center justify-center rounded-2xl ${item.color} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                {icons[item.icon]}
              </span>
              <h3 className="font-display font-bold text-gray-900 text-lg">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60'
  const variants = {
    primary: 'bg-primary text-white shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 focus:ring-primary/50 active:translate-y-0',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-sky-pale hover:border-primary-light focus:ring-primary/50',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 shadow-soft',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

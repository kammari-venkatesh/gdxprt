export default function Logo({ light }) {
  const blue = light ? 'text-white' : 'text-primary'
  const gold = 'text-logo-gold'

  return (
    <div className="flex flex-col items-start">
      <span className={`font-logo font-semibold text-2xl tracking-tight leading-tight ${blue}`}>
        Guide<span className={gold}>X</span>pert
      </span>
      <span className="text-[11px] font-semibold tracking-wide uppercase mt-1 text-logo-gold">
        powered by NxtWave
      </span>
    </div>
  )
}

export default function Logo({ light }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${light ? 'bg-white/15 ring-1 ring-white/20' : 'bg-primary'}`}>
        <span className="text-white font-bold text-lg font-display">G</span>
      </div>
      <div className="flex flex-col items-start">
        <span className={`font-display font-bold text-xl tracking-tight leading-tight ${light ? 'text-white' : 'text-primary'}`}>GuideXpert</span>
        <span className={`text-[10px] font-medium tracking-wide uppercase ${light ? 'text-white/60' : 'text-gray-500'}`}>powered by NxtWave</span>
      </div>
    </div>
  )
}

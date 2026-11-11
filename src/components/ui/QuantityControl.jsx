import { Minus, Plus } from 'lucide-react'

export default function QuantityControl({
  value,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
}) {
  const buttonSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'
  const iconSize = size === 'sm' ? 14 : 16

  return (
    <div className="inline-flex items-center rounded-xl border border-espresso/15 bg-white">
      <button
        type="button"
        aria-label="Diminuir quantidade"
        className={`${buttonSize} inline-flex items-center justify-center text-espresso/70 transition hover:text-espresso disabled:opacity-40`}
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus size={iconSize} strokeWidth={1.75} />
      </button>
      <span className="min-w-8 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label="Aumentar quantidade"
        className={`${buttonSize} inline-flex items-center justify-center text-espresso/70 transition hover:text-espresso disabled:opacity-40`}
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus size={iconSize} strokeWidth={1.75} />
      </button>
    </div>
  )
}

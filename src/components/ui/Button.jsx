import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-espresso text-cream hover:bg-espresso/90 focus-visible:ring-caramel',
  secondary:
    'bg-caramel text-white hover:bg-caramel/90 focus-visible:ring-espresso',
  outline:
    'border border-espresso/20 bg-transparent text-espresso hover:border-espresso/40 hover:bg-white/60 focus-visible:ring-caramel',
  ghost:
    'bg-transparent text-espresso hover:bg-espresso/5 focus-visible:ring-caramel',
}

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  type = 'button',
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-wide transition duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  ].join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

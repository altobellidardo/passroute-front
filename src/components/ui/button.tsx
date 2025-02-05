import { cn } from "@/libs/tailwind"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const ButtonStyles = {
  primary: 'border-2 text-purple-100 border-purple-600 hover:bg-purple-700 font-semibold py-1 px-4 rounded-xl transition-colors',
  secondary: 'border-2 border-purple-600 bg-purple-600 hover:bg-purple-700 text-purple-100 font-semibold py-1 px-4 rounded-xl transition-colors'
}

function Button ({ children, className, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(ButtonStyles[variant || 'primary'], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

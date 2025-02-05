import { cn } from '@/libs/tailwind';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'xl';
  rounded?: boolean;
}

const baseStyles = 'rounded-xl font-semibold transition-colors duration-200'

const sizeStyles = {
  sm: 'px-4 py-1 text-sm',
  md: 'px-6 py-2 text-base',
  xl: 'px-8 py-3 text-lg'
};

const ButtonStyles = {
  primary: 'border-2 border-purple-600 text-purple-100 hover:bg-purple-700',
  secondary: 'border-2 border-purple-600 text-purple-100 bg-purple-600 hover:bg-purple-700'
};

function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  rounded,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        sizeStyles[size],
        ButtonStyles[variant],
        baseStyles, className,
        { 'rounded-full': rounded }
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

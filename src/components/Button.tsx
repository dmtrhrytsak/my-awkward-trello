import classNames from 'classnames';

const classes = {
  base: 'transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  sizes: {
    small: 'p-1 w-full text-sm',
    normal: 'px-3 py-2 text-sm',
    large: 'px-8 py-3 text-lg',
  },
  variants: {
    primary: 'rounded-sm bg-sky-600 text-white hover:bg-sky-700',
    secondary: 'rounded-sm text-neutral-600 hover:bg-gray-300',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
};

type ButtonProps = {
  variant?: keyof typeof classes.variants;
  size?: keyof typeof classes.sizes;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'normal',
  disabled = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        classes.base,
        classes.sizes[size],
        classes.variants[variant],
        [className]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

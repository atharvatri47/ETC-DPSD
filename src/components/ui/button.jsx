import React from 'react';

export const Button = React.forwardRef(({ 
  className = '', 
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props 
}, ref) => {
  const Component = asChild ? React.Fragment : 'button';
  
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (asChild && React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      className: classes,
      ref,
      ...props,
    });
  }
  
  return (
    <Component className={classes} ref={ref} {...props}>
      {children}
    </Component>
  );
});

Button.displayName = 'Button';
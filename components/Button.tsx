import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-orange-700 focus:ring-primary shadow-sm hover:shadow",
    secondary: "bg-secondary text-white hover:bg-slate-800 focus:ring-secondary shadow-sm hover:shadow",
    outline: "border border-slate-200 text-secondary hover:border-primary hover:text-primary bg-transparent focus:ring-primary",
    ghost: "text-secondary hover:bg-slate-50 focus:ring-secondary",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
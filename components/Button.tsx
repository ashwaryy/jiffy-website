import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-scale";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-md shadow-orange-200/50 hover:shadow-lg hover:shadow-orange-300/50",
    secondary:
      "bg-secondary text-white hover:bg-slate-800 focus:ring-secondary shadow-md hover:shadow-lg",
    outline:
      "border-2 border-slate-200 text-secondary hover:border-primary hover:text-primary bg-transparent focus:ring-primary",
    ghost: "text-secondary hover:bg-warm-50 focus:ring-secondary",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

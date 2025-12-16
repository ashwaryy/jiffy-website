import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: ReactNode;
  hoverEffect?: "lift" | "glow" | "border" | "none";
  delay?: number;
}

export default function Card({
  children,
  className = "",
  title,
  icon,
  hoverEffect = "lift",
  delay = 0,
}: CardProps) {
  const hoverStyles = {
    lift: "transition-lift",
    glow: "hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300",
    border: "hover:border-primary/50 transition-all duration-300",
    none: "",
  };

  const delayClass = delay > 0 ? `animate-delay-${Math.round(delay * 1000)}` : "";

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-slate-100/80 p-6 ${hoverStyles[hoverEffect]} ${delayClass} ${className}`}
    >
      {icon && (
        <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center text-primary">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
      )}
      {children}
    </div>
  );
}

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function Card({ children, className = "", title }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-200 ${className}`}>
      {title && <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>}
      {children}
    </div>
  );
}
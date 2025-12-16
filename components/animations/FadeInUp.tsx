import { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInUp({
  children,
  delay = 0,
  className = "",
}: FadeInUpProps) {
  const delayClass = delay > 0 ? `animate-delay-${Math.round(delay * 1000)}` : "";

  return (
    <div className={`animate-fade-in-up ${className} ${delayClass}`}>
      {children}
    </div>
  );
}

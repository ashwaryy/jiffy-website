import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  rotate?: boolean;
}

export default function FloatingElement({
  children,
  className = "",
  rotate = false,
}: FloatingElementProps) {
  const animationClass = rotate ? "animate-float-rotate" : "animate-float";

  return (
    <div className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}

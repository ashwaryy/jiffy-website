import { ReactNode, Children, cloneElement, isValidElement } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  const childrenArray = Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          const delay = index * staggerDelay;
          const delayClass = `animate-delay-${Math.round(delay * 1000)}`;

          return cloneElement(child, {
            ...(child as any).props,
            className: `${(child as any).props.className || ""} ${delayClass}`.trim(),
          } as any);
        }
        return child;
      })}
    </div>
  );
}

// Export a simple object for backwards compatibility
export const staggerChild = {
  hidden: {},
  visible: {},
};

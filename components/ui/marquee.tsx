import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  /** Animation duration in seconds. Default: 40 */
  speed?: number;
}

/**
 * Infinite horizontal marquee. Renders children twice for a seamless loop.
 * Set --gap via className (e.g. `[--gap:1.5rem]`) to control spacing between items.
 */
export function Marquee({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
  speed = 40,
}: MarqueeProps) {
  const rowClass = cn(
    "flex shrink-0 animate-marquee-cards gap-[var(--gap,1.5rem)]",
    reverse && "[animation-direction:reverse]",
    pauseOnHover && "group-hover:[animation-play-state:paused]"
  );

  return (
    <div
      className={cn("group flex overflow-hidden gap-[var(--gap,1.5rem)]", className)}
      style={{ "--duration": `${speed}s` } as CSSProperties}
    >
      <div className={rowClass}>{children}</div>
      <div className={rowClass} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1 font-heading tracking-wide ${className ?? "text-sm"}`}>
      <Link href="/" className="text-[#0F1A12]/30 hover:text-[#1B6240] transition-colors flex items-center gap-1">
        <Home className="w-3 h-3" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="w-3 h-3 text-[#0F1A12]/20" />
          {item.href ? (
            <Link href={item.href} className="text-[#0F1A12]/40 hover:text-[#1B6240] transition-colors uppercase tracking-[0.12em]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0F1A12]/70 uppercase tracking-[0.12em]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

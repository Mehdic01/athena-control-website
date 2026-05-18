import * as React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, style, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-[#D1D5DB] md:grid-cols-3",
        className
      )}
      style={style}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-[#D1D5DB]" />

      {/* Row 1, Col 1 — Motortronics */}
      <LogoCard
        className="relative border-r border-b border-[#D1D5DB] bg-[#F4F4F4]"
        logo={{ src: "/images/logo/motortronics-logo.png", alt: "Motortronics" }}
                logoWidth={200} 
        logoHeight={50}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-black"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 1, Col 2 — Athena Group */}
      <LogoCard
        className="border-b border-[#D1D5DB] md:border-r"
        logo={{ src: "/images/logo/athena-group-logo.png", alt: "Athena Group" }}
                logoWidth={200} 
        logoHeight={50}
      />

      {/* Row 1, Col 3 (desktop) / Row 2, Col 1 (mobile) — SHINKAWA Electric */}
      <LogoCard
        className="relative border-r border-b border-[#D1D5DB] bg-[#F4F4F4] md:border-r-0"
        logo={{ src: "/images/logo/shinkawa-logo.png", alt: "SHINKAWA Electric" }}
                logoWidth={200} 
        logoHeight={50}
      >
        {/* Mobile only: intersection at col1/col2 + row2/row3 */}
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-black md:hidden"
          strokeWidth={1}
        
        />
        {/* Desktop only: intersection at col2/col3 + row1/row2 */}
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 text-black md:block"
          strokeWidth={1}
          
        />
      </LogoCard>

      {/* Row 2, Col 1 (desktop) / Row 2, Col 2 (mobile) — Renle */}
      <LogoCard
        className="border-b border-[#D1D5DB] md:border-b-0 md:border-r"
        logo={{ src: "/images/logo/renle-logo.png", alt: "Renle" }}
                logoWidth={200} 
        logoHeight={50}
      />

      {/* Row 2, Col 2 (desktop) / Row 3, Col 1 (mobile) — Athena Valve */}
      <LogoCard
        className="border-r border-[#D1D5DB] bg-[#F4F4F4]"
        logo={{ src: "/images/logo/athena-valve-logo.png", alt: "Athena Valve"}}
        logoWidth={200} 
        logoHeight={50}

        

      />

      {/* Row 2, Col 3 (desktop) / Row 3, Col 2 (mobile) — Valentech */}
      <LogoCard
        className=""
        logo={{ src: "/images/logo/valentech-logo.webp", alt: "Valentech" }}
                logoWidth={200} 
        logoHeight={50}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-[#D1D5DB]" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
  logoWidth?: number;
  logoHeight?: number;
};

function LogoCard({ logo, logoWidth, logoHeight, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-white px-6 py-8 sm:px-8 sm:py-10 md:p-16 transition-shadow duration-300 hover:shadow-[inset_0_0_0_1px_#D1D5DB] hover:z-10",
        className
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={logo.alt}
        className="pointer-events-none h-6 select-none sm:h-8 md:h-14 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5"
        style = {{ maxWidth: logoWidth ? `${logoWidth}px` : "auto", maxHeight: logoHeight ? `${logoHeight}px` : "auto" }}
        src={logo.src}
      />
      {children}
    </div>
  );
}

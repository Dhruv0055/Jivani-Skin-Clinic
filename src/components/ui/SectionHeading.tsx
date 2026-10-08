import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl mb-6 sm:mb-10 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 xs:px-3 py-1 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-primary-light text-primary-dark mb-2 sm:mb-2.5 border border-primary/20 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-[clamp(1.3rem,4.5vw,2.25rem)] font-heading font-bold tracking-tight text-slate-deep leading-[1.2]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 sm:mt-2.5 text-[clamp(0.8125rem,2.2vw,0.95rem)] text-slate-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

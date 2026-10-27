import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  dark = false,
  center = true,
  className = "",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {kicker && <p className={`kicker ${dark ? "kicker--on-dark" : ""} ${center ? "justify-center" : ""}`}>{kicker}</p>}
      <h2
        className={`mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.9rem] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-blue-100/85" : "text-slate-body"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

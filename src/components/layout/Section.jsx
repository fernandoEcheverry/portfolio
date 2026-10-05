import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function Section({ id, children, className = "" }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      <div className="max-container">{children}</div>
    </section>
  );
}

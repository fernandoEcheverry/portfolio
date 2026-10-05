export default function Badge({ children, variant = "default" }) {
  const variants = {
    default:
      "bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300",
    outline:
      "border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-400",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

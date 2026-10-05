export default function Button({ children, href, onClick, variant = "primary", className = "" }) {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200";
  const variants = {
    primary: "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40",
    outline: "border-2 border-accent-500 text-accent-600 dark:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20",
    ghost: "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-surface",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

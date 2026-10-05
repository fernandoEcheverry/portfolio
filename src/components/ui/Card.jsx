export default function Card({ children, onClick, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:-translate-y-1 ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

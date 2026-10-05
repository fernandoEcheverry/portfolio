import { useLanguage } from "../../hooks/useLanguage";

export default function FilterBar({ categories, active, onFilterChange }) {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onFilterChange(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active === cat.id
              ? "bg-accent-500 text-white shadow-md shadow-accent-500/25"
              : "bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          {cat.label[lang]}
        </button>
      ))}
    </div>
  );
}

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "../ui/Icons";
import Section from "../layout/Section";
import Button from "../ui/Button";
import { useLanguage } from "../../hooks/useLanguage";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/meaongez", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <Section id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
        {t("contact.heading")}
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-center mb-12">
        {t("contact.subtitle")}
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              {t("contact.nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder={t("contact.namePlaceholder")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              {t("contact.emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder={t("contact.emailPlaceholder")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              {t("contact.messageLabel")}
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={t("contact.messagePlaceholder")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          <Button
            onClick={undefined}
            className={`w-full justify-center ${
              status === "sent" ? "!bg-green-500 !shadow-green-500/25" : ""
            }`}
          >
            {status === "sending" ? (
              t("contact.sending")
            ) : status === "sent" ? (
              t("contact.sent")
            ) : status === "error" ? (
              t("contact.error")
            ) : (
              <>
                {t("contact.send")}
                <Send size={16} />
              </>
            )}
          </Button>
        </form>

        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              {t("contact.heading")}
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:fernando.hernandez951013@gmail.com"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-accent-500 transition-colors"
              >
                <div className="p-2 rounded-lg bg-accent-50 dark:bg-accent-900/20">
                  <Mail size={20} className="text-accent-500" />
                </div>
                fernando.hernandez951013@gmail.com
              </a>

              {/*<a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-accent-500 transition-colors"
              >
                <div className="p-2 rounded-lg bg-accent-50 dark:bg-accent-900/20">
                  <LinkedinIcon size={20} className="text-accent-500" />
                </div>
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-accent-500 transition-colors"
              >
                <div className="p-2 rounded-lg bg-accent-50 dark:bg-accent-900/20">
                  <SiGithub size={20} className="text-accent-500" />
                </div>
                GitHub
              </a>*/}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckIcon, SendIcon } from "./icons";

const SUBJECTS = ["quote", "demo", "support", "other"] as const;
const COUNTRIES = [
  "Algérie", "Tunisie", "Maroc", "Égypte", "Sénégal", "Congo", "RD Congo",
  "Arabie Saoudite", "Émirats Arabes Unis", "Jordanie", "France", "Royaume-Uni",
  "Allemagne", "Portugal", "Nigeria", "Autre",
];

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "subject" | "message" | "consent", string>>;

const NAME_RE = /^[\p{L}' -]{2,60}$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9 ().-]{8,17}$/;

export default function ContactForm() {
  const t = useTranslations("contact");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [len, setLen] = useState(0);

  const inputCls = (err?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 outline-none transition focus:shadow-[0_0_0_3px_rgba(0,72,119,0.12)] ${
      err ? "border-red-400 focus:border-red-400" : "border-line focus:border-brand-500"
    }`;

  const validate = (f: FormData): Errors => {
    const e: Errors = {};
    const name = (k: string) => NAME_RE.test(String(f.get(k) ?? "").trim());
    if (!name("firstName")) e.firstName = t("errors.name");
    if (!name("lastName")) e.lastName = t("errors.name");
    if (!EMAIL_RE.test(String(f.get("email") ?? "").trim())) e.email = t("errors.email");
    const phone = String(f.get("phone") ?? "").trim();
    if (phone && !PHONE_RE.test(phone)) e.phone = t("errors.phone");
    if (!f.get("subject")) e.subject = t("errors.interest");
    const msg = String(f.get("message") ?? "").trim();
    if (msg.length < 20 || msg.length > 1000) e.message = t("errors.message");
    if (!f.get("consent")) e.consent = t("errors.consent");
    return e;
  };

  const submit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    setState("sending");
    setTimeout(() => setState("sent"), 1200);
  };

  if (state === "sent") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-line bg-white p-10 text-center shadow-sm">
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-brand-700">
          <CheckIcon className="h-8 w-8" />
        </span>
        <p className="max-w-sm text-xl font-bold text-navy">{t("sent")}</p>
      </div>
    );
  }

  const fieldLabel = (htmlFor: string, children: React.ReactNode) => (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-navy">
      {children}
    </label>
  );
  const fieldErr = (id: keyof Errors) =>
    errors[id] ? <p className="mt-1.5 text-xs font-medium text-red-600">{errors[id]}</p> : null;

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-brand-900/5 sm:p-9">
      {Object.keys(errors).length > 0 && (
        <p className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {t("fix")}
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {fieldLabel("firstName", t("firstName"))}
          <input id="firstName" name="firstName" autoComplete="given-name" className={inputCls(errors.firstName)} />
          {fieldErr("firstName")}
        </div>
        <div>
          {fieldLabel("lastName", t("lastName"))}
          <input id="lastName" name="lastName" autoComplete="family-name" className={inputCls(errors.lastName)} />
          {fieldErr("lastName")}
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          {fieldLabel("email", t("email"))}
          <input id="email" name="email" type="email" dir="ltr" autoComplete="email" className={inputCls(errors.email)} />
          {fieldErr("email")}
        </div>
        <div>
          {fieldLabel("subject", t("subject"))}
          <select id="subject" name="subject" defaultValue="" className={`${inputCls(errors.subject)} appearance-none`}>
            <option value="" disabled>{t("subjectPlaceholder")}</option>
            {SUBJECTS.map((k) => (
              <option key={k} value={k}>{t(`subjects.${k}`)}</option>
            ))}
          </select>
          {fieldErr("subject")}
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          {fieldLabel("country", t("country"))}
          <select id="country" name="country" className={`${inputCls()} appearance-none`}>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          {fieldLabel("phone", <>{t("phone")} <span className="font-normal text-slate-400">{t("optional")}</span></>)}
          <input id="phone" name="phone" type="tel" dir="ltr" placeholder={t("phonePlaceholder")} autoComplete="tel" className={inputCls(errors.phone)} />
          {fieldErr("phone")}
        </div>
      </div>

      <div className="mt-5">
        {fieldLabel("message", t("message"))}
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          onChange={(e) => setLen(e.target.value.length)}
          className={`${inputCls(errors.message)} resize-none`}
        />
        <div className="mt-1.5 flex items-center justify-between">
          {fieldErr("message")}
          <span className={`ms-auto text-xs font-medium ${len > 0 && len < 20 ? "text-red-500" : "text-slate-400"}`}>
            {len}/1000 {t("chars")}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-body">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-[#004877]"
          />
          <span>
            {t("consentPre")}{" "}
            <Link href="/politique-confidentialite" className="font-semibold text-brand-600 underline underline-offset-2 hover:text-brand-700">
              {t("consentLink")}
            </Link>
          </span>
        </label>
        {fieldErr("consent")}
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-gold mt-7 w-full sm:w-auto disabled:opacity-60"
      >
        {state === "sending" ? t("sending") : t("send")}
        <SendIcon className="h-4 w-4 rtl:-scale-x-100" />
      </button>
    </form>
  );
}

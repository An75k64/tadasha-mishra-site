"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const trap = String(formData.get("company") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (trap) {
      setStatus("Submission blocked.");
      return;
    }

    if (!name || !email || !message) {
      setStatus("Please complete all required fields.");
      return;
    }

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:office@tadashamishra.in?subject=${subject}&body=${body}`;
    setStatus("Opening your email client.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-black/10 bg-white p-8 shadow-soft">
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-[0.18em] text-ink/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="w-full rounded-full border border-black/10 bg-paper px-5 py-3 outline-none transition focus:border-navy"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm uppercase tracking-[0.18em] text-ink/70">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full rounded-full border border-black/10 bg-paper px-5 py-3 outline-none transition focus:border-navy"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-[0.18em] text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full rounded-[1.5rem] border border-black/10 bg-paper px-5 py-4 outline-none transition focus:border-navy"
        />
      </div>
      <button
        type="submit"
        className="inline-flex rounded-full bg-navy px-6 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-[#173754]"
      >
        Send Message
      </button>
      {status ? <p className="text-sm text-ink/70">{status}</p> : null}
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "../lib/api";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await submitContactForm({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        subject: String(data.get("subject") || "General Inquiry"),
        message: String(data.get("message") || ""),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="premium-card space-y-5 p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Full Name
          </label>
          <input
            name="name"
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Phone Number
          </label>
          <input
            name="phone"
            placeholder="+91 00000 00000"
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Subject
          </label>
          <input
            name="subject"
            placeholder="Project Inquiry"
            className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-brand w-full text-sm disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send size={16} />
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm font-medium text-green-600">
          <CheckCircle2 size={16} />
          Thanks! Your message has been sent — we&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm font-medium text-red-500">
          <AlertCircle size={16} />
          {errorMsg}
        </p>
      )}
    </form>
  );
}

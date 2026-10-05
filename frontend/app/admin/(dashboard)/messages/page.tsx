"use client";

import { useEffect, useState } from "react";
import { Trash2, Mail, MailOpen } from "lucide-react";
import { adminApi } from "@/app/src/admin/lib/adminApi";

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await adminApi.list<{ messages: ContactMessage[] }>("contact");
      setMessages(res.messages ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const updateStatus = async (id: string, status: ContactMessage["status"]) => {
    await adminApi.update("contact", id, { status });
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await adminApi.remove("contact", id);
    load();
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[var(--text-primary)]">Contact Messages</h1>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">
        Messages submitted through your website&apos;s contact form.
      </p>

      <div className="mt-6 space-y-4">
        {loading && <p className="text-sm text-[var(--text-muted)]">Loading...</p>}

        {!loading && messages.length === 0 && (
          <p className="premium-card p-6 text-sm text-[var(--text-muted)]">
            No messages yet.
          </p>
        )}

        {messages.map((msg) => (
          <div key={msg._id} className="premium-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {msg.name} &middot;{" "}
                  <span className="font-normal text-[var(--text-secondary)]">{msg.email}</span>
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                  {msg.subject} · {new Date(msg.createdAt).toLocaleString()}
                  {msg.phone ? ` · ${msg.phone}` : ""}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={msg.status}
                  onChange={(e) => updateStatus(msg._id, e.target.value as ContactMessage["status"])}
                  className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs"
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>

                {msg.status === "new" ? (
                  <Mail size={16} className="text-[var(--brand-pink)]" />
                ) : (
                  <MailOpen size={16} className="text-[var(--text-muted)]" />
                )}

                <button
                  onClick={() => remove(msg._id)}
                  aria-label="Delete message"
                  className="text-red-400 hover:text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { adminApi } from "../lib/adminApi";

export interface FieldConfig {
  name: string;
  label: string;
  type?: "text" | "textarea" | "number" | "checkbox";
  placeholder?: string;
}

interface ResourceManagerProps {
  resource: string;
  listKey: string;
  title: string;
  fields: FieldConfig[];
  columns: { key: string; label: string }[];
  emptyDefaults?: Record<string, unknown>;
}

type Row = Record<string, unknown> & { _id: string };

export default function ResourceManager({
  resource,
  listKey,
  title,
  fields,
  columns,
  emptyDefaults = {},
}: ResourceManagerProps) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Row | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<Record<string, unknown>>(emptyDefaults);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await adminApi.list<Record<string, Row[]>>(resource);
      setRows(res[listKey] ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyDefaults);
    setFormOpen(true);
  };

  const openEdit = (row: Row) => {
    setEditing(row);
    setForm(row);
    setFormOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = { ...form };
      if (typeof payload.features === "string") {
        payload.features = (payload.features as string)
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean);
      }
      if (editing) {
        await adminApi.update(resource, editing._id, payload);
      } else {
        await adminApi.create(resource, payload);
      }
      setFormOpen(false);
      await load();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    await adminApi.remove(resource, id);
    await load();
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">{title}</h1>
        <button onClick={openCreate} className="btn-brand text-sm">
          <Plus size={16} />
          Add New
        </button>
      </div>

      <div className="premium-card mt-6 overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[var(--border)] text-xs uppercase text-[var(--text-muted)]">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4 font-semibold">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-[var(--text-muted)]">
                  Loading...
                </td>
              </tr>
            )}

            {!loading && rows.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-[var(--text-muted)]">
                  No records yet. Click &quot;Add New&quot; to create one.
                </td>
              </tr>
            )}

            {rows.map((row) => (
              <tr key={row._id} className="border-b border-[var(--border)] last:border-0">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 text-[var(--text-secondary)]">
                    {String(row[col.key] ?? "")}
                  </td>
                ))}
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => openEdit(row)}
                    className="mr-3 text-[var(--brand-blue-dark)] hover:text-[var(--brand-pink)]"
                    aria-label="Edit"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(row._id)}
                    className="text-red-400 hover:text-red-600"
                    aria-label="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="premium-card w-full max-w-lg p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                {editing ? "Edit" : "Add"} {title}
              </h2>
              <button onClick={() => setFormOpen(false)} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 max-h-[60vh] space-y-4 overflow-y-auto pr-1">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      rows={3}
                      value={String(form[field.name] ?? "")}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm outline-none"
                    />
                  ) : field.type === "checkbox" ? (
                    <input
                      type="checkbox"
                      checked={Boolean(form[field.name])}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.checked })}
                      className="h-4 w-4"
                    />
                  ) : (
                    <input
                      type={field.type === "number" ? "number" : "text"}
                      value={String(form[field.name] ?? "")}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm outline-none"
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleSave}
              disabled={saving}
              className="btn-brand mt-6 w-full text-sm disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

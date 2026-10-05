// Central place to talk to the backend. All homepage sections that are
// admin-controlled (services, team, testimonials, clients, contact form)
// go through here. If the API is unreachable, callers fall back to the
// static defaults in `data/` so the site never breaks on a fresh install.

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function safeGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json as T;
  } catch {
    return null;
  }
}

export interface ApiService {
  _id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description?: string;
  icon: string;
  features: string[];
}

export interface ApiTeamMember {
  _id: string;
  name: string;
  designation: string;
  photo?: string;
}

export interface ApiTestimonial {
  _id: string;
  clientName: string;
  company: string;
  message: string;
  photo?: string;
}

export interface ApiClient {
  _id: string;
  name: string;
  logo: string;
  website?: string;
}

export async function getServices() {
  const data = await safeGet<{ services: ApiService[] }>("/services");
  return data?.services ?? null;
}

export async function getTeamMembers() {
  const data = await safeGet<{ members: ApiTeamMember[] }>("/team");
  return data?.members ?? null;
}

export async function getTestimonials() {
  const data = await safeGet<{ testimonials: ApiTestimonial[] }>("/testimonials");
  return data?.testimonials ?? null;
}

export async function getClients() {
  const data = await safeGet<{ clients: ApiClient[] }>("/clients");
  return data?.clients ?? null;
}

export async function submitContactForm(payload: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Failed to send message");
  return json;
}

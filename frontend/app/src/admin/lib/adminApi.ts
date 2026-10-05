// All admin API calls go through here. The backend sets an httpOnly
// auth cookie on login, so every request just needs credentials: "include".

import { API_URL } from "../../lib/api";

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Request failed");
  return json as T;
}

export const adminApi = {
  login: (email: string, password: string) =>
    request<{ admin: { name: string; email: string; role: string } }>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  logout: () => request("/auth/logout", { method: "POST" }),

  me: () =>
    request<{ admin: { name: string; email: string; role: string } }>("/auth/me"),

  list: <T>(resource: string) => request<T>(`/${resource}?all=true`),

  create: (resource: string, data: unknown) =>
    request(`/${resource}`, { method: "POST", body: JSON.stringify(data) }),

  update: (resource: string, id: string, data: unknown) =>
    request(`/${resource}/${id}`, { method: "PUT", body: JSON.stringify(data) }),

  remove: (resource: string, id: string) =>
    request(`/${resource}/${id}`, { method: "DELETE" }),
};

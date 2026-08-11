const BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1';

async function handleRes(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? `Error ${res.status}`);
  return data;
}

export const api = {
  get: (endpoint) =>
    fetch(`${BASE}${endpoint}`).then(handleRes),

  post: (endpoint, body) =>
    fetch(`${BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(handleRes),

  put: (endpoint, body) =>
    fetch(`${BASE}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(handleRes),

  delete: (endpoint) =>
    fetch(`${BASE}${endpoint}`, { method: 'DELETE' }).then(handleRes),
};
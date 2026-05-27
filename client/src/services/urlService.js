const apiBase = import.meta.env.VITE_API_BASE_URL || '/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    throw new Error(payload?.message || 'Server request failed.');
  }
  return response.json();
};

export const fetchUrls = async () => {
  const response = await fetch(`${apiBase}/shorturls`);
  return handleResponse(response);
};

export const createShortUrl = async (fullUrl) => {
  const response = await fetch(`${apiBase}/shorturls`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullUrl }),
  });
  return handleResponse(response);
};

export const deleteShortUrl = async (id) => {
  const response = await fetch(`${apiBase}/shorturls/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

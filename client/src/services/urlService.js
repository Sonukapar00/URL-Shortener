const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/url';

const handleResponse = async (response) => {
  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    throw new Error(payload?.message || 'Server request failed.');
  }
  return response.json();
};

export const fetchUrls = async () => {
  const url = `${apiBase}`;
  console.log('API Request:', url);
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  });
  return handleResponse(response);
};

export const createShortUrl = async (fullUrl) => {
  const url = `${apiBase}`;
  console.log('API Request:', url);
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ fullUrl }),
  });
  return handleResponse(response);
};

export const deleteShortUrl = async (id) => {
  const url = `${apiBase}/${id}`;
  console.log('API Request:', url);
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 'Accept': 'application/json' },
  });
  return handleResponse(response);
};

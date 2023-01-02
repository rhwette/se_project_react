// export const BASE_URL = 'http://localhost:3000/se_project_react';
export const BASE_URL = 'http://localhost:3000';

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getItemList = () => {
  return fetch(`${BASE_URL}/items`, {
    headers: {
      'Content-Type': "application/json'",
    },
  }).then(handleServerResponse);
};

export const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-type': "application/json'",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
};

export const removeItem = (id) => {
  return fetch(`$BASE_URL.items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': "application/json'",
    },
  }).then(handleServerResponse);
};

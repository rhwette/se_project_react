// export const BASE_URL = 'http://localhost:3001';
export const BASE_URL =
  'https://my-json-server.typicode.com/rhwette/se_project_react';

export const handleServerResponse = (res) => {
  const resp = res.json();
  console.log('resp=', resp);
  console.log('here1');
  return res.ok ? resp : Promise.reject(`Error: ${res.status}`);
};

export const getItemList = () => {
  console.log('here');
  return fetch(`${BASE_URL}/items`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(handleServerResponse);
};

export const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
};

export const removeItem = (id) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(handleServerResponse);
};

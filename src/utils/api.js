export const BASE_URL =
  'https://my-json-server.typicode.com/rhwette/se_project_react';

export const handleServerResponse = (res) => {
  const resp = res.json();

  return res.ok ? resp : Promise.reject(`Error: ${res.status}`);
};

export const getItemList = () => {
  return fetch(`${BASE_URL}/items`, {
    headers: {
      'content-type': 'application/json',
    },
  }).then(handleServerResponse);
  // .catch((error) => {
  //   console.error(error);
  // });
};

export const addItem = ({ id, name, weather, imageUrl }) => {
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
  // .catch((error) => {
  //   console.error(error);
  // });
};

export const removeItem = (id) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  }).then(handleServerResponse);
  // .catch((error) => {
  //   console.error(error);
  // });
};

export const BASE_URL = 'http://localhost:3001';

export const handleServerResponse = (res) => {
  // console.log('res=', res);
  // console.log('res body json=', res.json());
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getItemList = () => {
  return fetch(`${BASE_URL}/items`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(handleServerResponse);
};

export const addItem = ({ name, weather, imageUrl }) => {
  console.log('in addItem');
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
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

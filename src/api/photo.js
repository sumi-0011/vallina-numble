const BASE_PATH = 'https://api.unsplash.com';
const PHOTO_TOKEN = import.meta.env.VITE_APP_PHOTO;

const getRandomPhoto = async () => {
  try {
    const data = await requestUnsplashGET('/photos/random');

    return data.urls.regular;
  } catch (error) {
    throw error;
  }
};

export const requestUnsplashGET = async (url) => {
  const response = await fetch(`${BASE_PATH}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Client-ID ${PHOTO_TOKEN}`,
    },
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  return response;
};

export { getRandomPhoto };

const BASE_PATH = 'https://api.unsplash.com';

const getRandomPhoto = async () => {
  try {
    const data = await requestUnsplashGET('/photos/random');

    return data.urls.regular;
  } catch (error) {
    console.log('error: ', error);
  }
};

const token = 'KLRMYJSMFGdHYXudkGOSTJViYY7tS6axjnwUPhVmnoo';

export const requestUnsplashGET = async (url) => {
  const response = await fetch(`${BASE_PATH}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Client-ID ${token}`,
    },
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  return response;
};

export { getRandomPhoto };

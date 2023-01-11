const BASE_PATH = 'http://43.201.103.199';

export const requestGET = async (url, options = {}) => {
  const fullUrl = `${BASE_PATH}${url}`;
  const response = await fetch(fullUrl, options);

  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error({ name: 'API 통신 실패', message: 'API 통신 실패' });
};

export const requestPOST = async (url, body) => {
  try {
    const fullUrl = `${BASE_PATH}${url}`;

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log('response: ', response);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error({
      status: response.status,
      statusText: response.statusText,
    });
  } catch (error) {
    throw error;
  }
};

export const requestDELETE = async (url) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, {
      method: 'DELETE',
    });

    console.log('response: ', response);

    return response;
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log('error: ', error);
  }
};

export const requestPATCH = async (url, body) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log('response: ', response);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log('error: ', error);
  }
};

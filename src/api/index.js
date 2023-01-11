const BASE_PATH = 'http://43.201.103.199';

export const requestGET = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, options);

    const json = await response.json();
    if (response.ok) {
      return json;
    }
    throw new Error('API 통신 실패');
  } catch (error) {
    throw error;
  }
};

export const requestPOST = async (url, body) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const json = await response.json();

    if (response.ok) {
      return json;
    }

    if (json.code === 400) {
      throw new Error(json.message);
    }

    throw new Error('API 통신 실패');
  } catch (error) {
    throw error;
  }
};

export const requestDELETE = async (url) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`, {
      method: 'DELETE',
    });

    const json = await response.json();
    if (response.ok) {
      return json;
    }
    throw new Error('API 통신 실패');
  } catch (error) {
    throw error;
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

    const json = await response.json();
    if (response.ok) {
      return json;
    }

    throw new Error('API 통신 실패');
  } catch (error) {
    throw error;
  }
};

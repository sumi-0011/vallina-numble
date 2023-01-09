const BASE_PATH = 'http://43.201.103.199';

export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${BASE_PATH}${url}`;
    const response = await fetch(fullUrl, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API 통신 실패');
  } catch (error) {
    console.log('error: ', error);
  }
};

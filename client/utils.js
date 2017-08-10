import fetch from 'isomorphic-fetch';

export const fetchApi = async (url) => {
  const response = await fetch(`${url}`, {
    method: 'get'
  });
  const data = await response.json();

  return data.list;
};

export const buildApiUrl = async (days) => {
  return new Promise((resolve, reject) => {
    const positionSuccess = (position) => {
      const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=e0adebdad640b4759ea3aea9366da78a&units=metric&cnt=${days}`;

      resolve(url);
    };
    const positionError = (error) => {
      reject(`ERROR(${error.code}): ${error.message}`);
    };

    navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
  });
};


export function filterData(data, value, propertyName='locationName') {
  return data
    .filter((item) => {
      const index = item[propertyName]
        .toLowerCase()                    // make case-insensitive
        .indexOf(value.toLowerCase());    // get position of value within string
      return index > -1;                  // test if value is contained
      }
    );
}

export function queryCurrentWeatherInfo() {
  return fetch('http://localhost:1337/current')
    .then((response) => {
      if (response.status !== 200) {
        console.error(`Network request status code is ${response.status}, expected 200`);
        return Promise.reject();
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Request failed', error);
    });
}

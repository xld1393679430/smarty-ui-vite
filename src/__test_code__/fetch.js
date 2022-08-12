const axios = require("axios").default;

// const getData = () => {
//   return axios("https://cdn.segmentfault.com/r-5c56753c/static/logo-b.d865fc97.svg")
//     .then((res) => {
//       return "123";
//     })
//     .catch((error) => {
//       return "456";
//     });
// };

const getData = () => {
    // return axios("https://cdn.segmentfault.com/r-5c56753c/static/logo-b.d865fc97.svg")
    return Promise.resolve('123')
  };

module.exports = getData;

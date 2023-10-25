const axios = require("axios");

const instanciaAxios = axios.create({
  baseURL: "https://companyenrichment.abstractapi.com/v1",
  params: {
    api_key: "287bc113d2e246ffa4937e3425b3e3f2",
  },
});

module.exports = instanciaAxios;

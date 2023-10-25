const express = require("express");
const instanciaAxios = require("./axios");

const app = express();

app.use(express.json());

app.get("/empresas", async (req, res) => {
  const { dominioEmpresa } = req.query;
  const { data } = await instanciaAxios.get(`?domain=${dominioEmpresa}`);
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", data);
  return res.status(200).json(data);
});

app.listen(3000);

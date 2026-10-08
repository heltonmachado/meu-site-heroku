const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/teste', (req, res) => {
  res.json({ mensagem: "API funcionando na Vercel!" });
});

app.get('/api', (req, res) => {
  res.json({ status: "online" });
});

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
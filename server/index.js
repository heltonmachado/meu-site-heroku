const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// ROTA DE TESTE DA API
app.get('/api/teste', (req, res) => {
  res.json({ mensagem: "API funcionando no Heroku!" });
});

// Se tiver mais rotas, crie uma pasta server/routes

// --- SERVIR O REACT EM PRODUÇÃO (ESSENCIAL PARA HEROKU) ---
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
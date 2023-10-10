const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Chave secreta para assinar e verificar o token
const secretKey = 'suaChaveSecreta';

// Middleware para fazer o parsing do corpo das requisições em JSON
app.use(bodyParser.json());

// Rota 1: Gera um token JWT com uma mensagem aleatória
app.get('/gerar-token', (req, res) => {
  // Mensagem aleatória para incluir no token
  const mensagem = 'Mensagem aleatória gerada';

  // Cria o token com a mensagem e a chave secreta
  const token = jwt.sign({ mensagem }, secretKey);

  res.json({ token });
});

// Rota 2: Recebe token por body e retorna a mensagem decodificada se o token for válido
app.post('/verificar-token', (req, res) => {
  const { token } = req.body;

  try {
    // Verifica se o token é válido usando a chave secreta
    const decoded = jwt.verify(token, secretKey);

    res.json({ mensagem: decoded.mensagem });
  } catch (error) {
    res.status(401).json({ mensagem: 'Token inválido' });
  }
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

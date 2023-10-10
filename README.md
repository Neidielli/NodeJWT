# 🟢 NodeJWT

A aplicação é um projeto Node.js que implementa uma API REST com dois endpoints:

### Rota 1 - Geração de Token JWT

Esta rota permite gerar um token JWT contendo uma mensagem aleatória.

**URL:** `/gerar-token`
**Método HTTP:** POST

#### Resposta

A resposta será um token JWT válido contendo uma mensagem aleatória.

### Rota 2 - Decodificação de Token JWT

Esta rota permite receber um token JWT no corpo da requisição e decodificar a mensagem se o token for válido.

**URL:** `/verificar-token`
**Método HTTP:** POST

#### Parâmetros de Entrada

- **token**: O token JWT a ser decodificado.

#### Resposta

Se o token for válido, a resposta será a mensagem decodificada. Caso contrário, a resposta indicará que o token é inválido.

### Teste usando o Postman

![image](https://github.com/Neidielli/NodeJWT/assets/100215137/dc9a1806-85ee-46a8-bed3-2921fa9988ce)

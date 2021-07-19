<h1 align="center" >Cadastro de Clientes</h1>


### Protótipo da página para cadastro de clientes.
#
A página foi desenvolvida em React utilizando o conceito de SPA (single page aplication), a estilização foi feita com 
Styled Components e o controle de estados fo feito com Redux

#
## Funcionalidades

<ul>
<li>Cadastro de clientes</li>
<li>Visualização de todos os cadastros adquiridos via consulta em API </li>
<li>Vizualização dos detalhes de cada cadastro</li>
</ul>

#
## Demonstração

[Clique aqui para acessar a demonstração](https://cadastro-spa-redux.vercel.app/)
#
## Tecnologias utilizadas

- [React](https://reactjs.org/)
- [SASS](https://sass-lang.com/)
- [Redux ToolKit](https://redux-toolkit.js.org/)
#
## Como executar

Clone o projeto

```bash
  git clone git@github.com:enicio/cadastro-spa-redux.git
```

Mude para as pasta raiz

```bash
  cd cadastro-spa-redux
```

Instale as dependencias

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```
#
## API

Api com os dados para renderização dos cards.

#### Listar todos os cadastros

```http
  GET https://api-rest-ahlero.herokuapp.com/
```

#### Criar novo cadastro

```http
  POST https://api-rest-ahlero.herokuapp.com/api/v1/transacao
```

```http
  {
   "estabelecimento": "45.283.163/0001-67",
   "cliente": "094.214.930-01",
   "valor": 590.01,
   "descricao": "Pagamento a fornecedor auditado via Gedanken!"
}
```
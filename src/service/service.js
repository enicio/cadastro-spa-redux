import axios from 'axios';

const URL = 'https://apideprodutos.vercel.app/api/petproducts';

const instance = axios.create({
  baseURL: "https://apideprodutos.vercel.app",
});

const instanceTransations = axios.create({
  baseURL: "https://api-rest-ahlero.herokuapp.com/",
});

export const getProducts = async () => {
  const { data } = await instance.get('/api/petproducts')
                          .then((response) => response);
  console.log(data)
  return data;
};

export const getRegisters = async () => {
  const { data } = await instanceTransations.get('/')
                          .then((response) => response);
  console.log(data)
  return data;
};

export const postRegister = async (inputField) => {
  const { data } = await instanceTransations.post('/api/v1/transacao', {
    "estabelecimento": inputField.cnpj,
    "cliente": inputField.cpf,
    "valor": inputField.valor,
    "descricao": inputField.description,
  }).then((response) => response);

  console.log('LOGO ANTES', inputField)
  console.log(data);
  return data;
};


export const fetchProduts = async () => {
  const results = await fetch(URL);
  const data = await results.json();
  return data;
};

export const convertCurrency = (price, discount = 0) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  .format((price/100) - ( price/100 * discount))
}

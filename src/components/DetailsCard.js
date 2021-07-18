import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Span = styled.span`
  font-size: 1em;
  padding: 0.5em;
`

function DetailsCard() {
  const products = useSelector((state) => state.counterStorage);
  const { idToDetailRender } = useSelector((state) => state.counterStorage);

  const productDetail = products.productsList.filter((product) => product.id === idToDetailRender );

  const { estabelecimento, cliente, valor, descricao  } =  productDetail[0];

  return(
    <div>
      <Span>{estabelecimento}</Span>
      <Span>{cliente}</Span>
      <Span>{valor}</Span>
      <Span>{descricao}</Span>
    </div>
  );
}

export default DetailsCard;
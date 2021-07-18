import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Span = styled.span`
  font-size: 1em;
  padding: 0.5em;
`

function DetailsCard() {
  const {
    registersList,
    idToDetailRender
  } = useSelector((state) => state.registersStorage);

  const registerDetail = registersList.filter((product) => product.id === idToDetailRender );

  const { id, estabelecimento, cliente, valor, descricao  } =  registerDetail[0];

  return(
    <div>
      <Span>{id}</Span>
      <Span>{estabelecimento}</Span>
      <Span>{cliente}</Span>
      <Span>{valor}</Span>
      <Span>{descricao}</Span>
    </div>
  );
}

export default DetailsCard;
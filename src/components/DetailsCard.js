import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ConstainerDetails = styled.div`
  min-width: 40vw;
  background-color: #d9d9d9;
  margin: 1em;
  border-radius: 1em;
`

const Span = styled.span`
  font-size: 1em;
  padding: 0.5em;
  display: flex;
`

function DetailsCard() {
  const {
    registersList,
    idToDetailRender
  } = useSelector((state) => state.registersStorage);

  const registerDetail = registersList.filter((product) => product.id === idToDetailRender );

  const { id, estabelecimento, cliente, valor, descricao  } =  registerDetail[0];

  return(
    <ConstainerDetails>
      <Span>id: {id}</Span>
      <Span>Estabelecimento: {estabelecimento}</Span>
      <Span>Cliente: {cliente}</Span>
      <Span>Valor: {valor}</Span>
      <Span>Descrição: {descricao}</Span>
    </ConstainerDetails>
  );
}

export default DetailsCard;
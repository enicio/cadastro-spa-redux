import React from 'react';
import styled from 'styled-components'
import {useDispatch } from 'react-redux'
import {
  renderDetails
} from '../redux/features/cadastreSlice';

const CardStyled = styled.div`
    width: 30rem;
    display: flex;
    justify-content: space-around;
    background-color: bisque;
    margin: 0.2em;
`
const Dados = styled.span`
  font-size: 1em;
  padding: 0.5em;
`

function Card({ props }) {
  const dispatch = useDispatch();
  const { estabelecimento, cliente, id } = props;
  return(
    <CardStyled>
      <Dados>{estabelecimento}</Dados>
      <Dados>{cliente}</Dados>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(renderDetails(id))}
      >Detalhes
      </button>
    </CardStyled>
  );
}

export default Card;
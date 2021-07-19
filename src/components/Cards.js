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
    align-items: center;
    background-color: whitesmoke;
    margin: 0.2em;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em #d9d9d9;
`
const Dados = styled.span`
  color: #a0a0a0;
  font-size: 1em;
  padding: 0.5em;
  line-height: 1.5em;
`

const Button = styled.button`
  border: none;
  width: 10em;
  height: 3em;
  font-size: 0.9em;
  background-color: transparent;
  color: #a0a0a0;
  cursor: pointer;
`

function Card({ props }) {
  const dispatch = useDispatch();
  const { estabelecimento, cliente, id } = props;
  return(
    <CardStyled>
      <Dados>Estabelecimento: {estabelecimento}</Dados>
      <Dados>Cliente: {cliente}</Dados>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(renderDetails(id))}
      >
        Detalhes
      </Button>
    </CardStyled>
  );
}

export default Card;
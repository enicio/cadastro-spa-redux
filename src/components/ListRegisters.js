import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Card from './Cards'
import styled from 'styled-components'
import { fetchRegisters } from '../redux/features/cadastreSlice';

const Button = styled.button`
  background-color: blue;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function ListRegisters() {
  const {
    renderDetail,
    registersList,
    loading,
    created
  } = useSelector((state) => state.registersStorage);

  const dispatch = useDispatch()
  console.log(renderDetail);

  useEffect(() => {
    dispatch(fetchRegisters());
  }, [dispatch, created]);

  return(
    <div>
    {(loading)
    ?<h1>Loading...</h1>
    :registersList.map((transation, index) => <Card key={transation.id}  props={transation}/>) }
  </div>

  );
}

export default ListRegisters;

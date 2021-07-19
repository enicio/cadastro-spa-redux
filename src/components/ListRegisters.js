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

const ListUserContainner = styled.div`
  min-width: 32em;
  max-height: 40em;
  min-height: 40em;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`

const Loading = styled.div`
  min-width: 32em;
  min-height: 40em;
  max-height: 40em;
  /* overflow: initial; */
  font-size: 5em;
  color: red;
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
    <ListUserContainner>
    {(loading)
    ?<Loading>Loading...</Loading>
    :registersList.map((transation, index) => <Card key={transation.id}  props={transation}/>) }
  </ListUserContainner>

  );
}

export default ListRegisters;

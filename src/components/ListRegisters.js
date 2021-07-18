import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Form from './components/forms';
import Card from './components/cards'
import DetailsCard from './components/detailsCard';
import styled from 'styled-components'
import {
  decrement,
  increment,
  incrementByAmount,
  fetchProducts,
} from './redux/features/counter/counterSlice';

const Button = styled.button`
  background-color: blue;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function ListRegisters() {
  const count = useSelector((state) => state.counterStorage.value)
  const products = useSelector((state) => state.counterStorage);
  const { renderDetail } = useSelector((state) => state.counterStorage);
  const dispatch = useDispatch()
  console.log(renderDetail);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, products.created]);


  return(
    <div>
    <Form/>
    <div>
      <Button
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
      >
      Decrementd
    </Button>
      <span>{count}</span>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(incrementByAmount(30))}
      >
        incrementByAmount
      </Button>
    </div>
    {(products.loading)
    ?<h1>Loading...</h1>
    :products.productsList.map((transation, index) => <Card key={transation.id}  props={transation}/>) }

    {(renderDetail)?<DetailsCard/>: ""}
  </div>

  );
}

export default ListRegisters;

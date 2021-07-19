import React, { useState } from 'react';
import {useDispatch } from 'react-redux'
import styled from 'styled-components';
import {
  showForm
} from '../redux/features/cadastreSlice';

const Button = styled.button`
  background-color: #09a150;
  border: none;
  width: 10em;
  height: 3em;
  font-size: 0.9em;
  font-weight: 600;
  color: white;
  border-radius: 2em 0 0 0;
`


function ShowForm() {
const [ textButton, setTextButton] = useState(true)

  const dispatch = useDispatch();
  return(
    <Button
      onClick={() =>{ dispatch(showForm());
                      setTextButton(!textButton)
      }
    }>
        {(textButton)? "Novo Cadastro": "Fechar"}
    </Button>
  );
}

export default ShowForm;

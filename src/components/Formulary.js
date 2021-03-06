import React, { useState } from 'react';
import MaskedInput from './MaskedInput';
import { validateCNPJ, validateCPF } from 'validations-br';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { createRegister } from '../redux/features/cadastreSlice';

const ContainerForm = styled.div`
  position: absolute;
  /* top: 8em; */
  /* left: 9em; */
  background-color: #16376c;
  width: 28em;
  margin: 5em;
  padding: 2em;
  height: 36em;
  display: flex;
  justify-content: center;
  margin: auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 0.3em;
  font-weight: 700;
  color: whitesmoke;
`

const Button = styled.button`
  background-color: #09a150;
  border-radius: 1em;
  border: none;
  height: 2.5em;
  font-weight: 700;
  font-size: 1.5em;
  color: whitesmoke;
  margin-top: 2em;
`

function Formulary() {
  const dispatch = useDispatch();
  const [ inputField, setInputFileld ] = useState('');
  const [validations, setValidations] = useState({
    cpf: false,
    cnpj: false,
    valor: false,
  });

  function handleChange(e) {
    setInputFileld({
      ...inputField,
        [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('ops');
    const cpfIsValid = validateCPF(inputField.cpf);
    const cnpjIsValid = validateCNPJ(inputField.cnpj);

    console.log(cpfIsValid, cnpjIsValid);

    const valueSchema = Yup.object().shape({
      decimal: Yup.number().test(
        'is-decimal',
        'invalid decimal',
        value => (value + "").match(/^[0-9.]*$/),
        ),
      });
      const isValor = await valueSchema.isValid({decimal: inputField.valor});
      console.log(isValor);
      await setValidations({cnpj: cnpjIsValid, cpf: cpfIsValid, valor: isValor });
      console.log('Teste Total', validations);

      if(cpfIsValid && cnpjIsValid && isValor) dispatch(createRegister(inputField));
  }

  return(
    <div>
      <ContainerForm>
      <Form onSubmit={handleSubmit} >
        <Label htmlFor="cpf">
          CPF
          </Label>
          <MaskedInput
            name="cpf"
            mask="999.999.999-99"
            value={inputField.cpf}
            onChange={handleChange}
          />
        <Label htmlFor="cpf">
            CNPJ
        </Label>
            <MaskedInput
              name="cnpj"
              mask="99.999.999/9999-99"
              value={inputField.cnpj}
              onChange={handleChange}
            />
        <Label htmlFor="valor">
          Valor
        </Label>
          <input name="valor" id="valor" type="text" required onChange={handleChange} />
        <Label htmlFor="description">
          Descri????o
        </Label>
          <input id="description" name="description" type="text" required onChange={handleChange} />
        <Button  >Cadastrar</Button>
      </Form>
      </ContainerForm>
    </div>
  )
}

export default Formulary;

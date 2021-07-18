import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Formulary from '../components/Formulary';
import ListRegisters from '../components/ListRegisters';
import DetailsCard from '../components/DetailsCard';

const MainContainer = styled.div`
  background-color: #57995f42;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function MainPage(params) {
  const { renderDetail } = useSelector((state) => state.registersStorage);

  return(
    <MainContainer>
      <Formulary/>
      <ListRegisters/>
      {(renderDetail)?<DetailsCard/>: ""}
    </MainContainer>
  );
}

export default MainPage;
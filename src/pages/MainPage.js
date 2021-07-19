import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Formulary from '../components/Formulary';
import ListRegisters from '../components/ListRegisters';
import DetailsCard from '../components/DetailsCard';
import ShowForm from '../components/ShowForm';

const MainContainer = styled.div`
  background-color: #f1f3f5;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const InformationContainer = styled.div`
  min-width: 80vw;
  max-width: 80vw;
  min-height: 70vh;
  background-color: #f8f8f8;
  display: flex;
`

const Header = styled.header`
  width: 80vw;
  height: 5vh;
  background-color: #16376c;
  border-radius: 5em 5em 0 0;
`

function MainPage(params) {
  const { renderDetail, showForm } = useSelector((state) => state.registersStorage);

  return(
    <MainContainer>
        <Header>
          <ShowForm/>
        </Header>
      <InformationContainer>
        {(showForm)? <Formulary/>: ''}
        <ListRegisters/>
        {(renderDetail)?<DetailsCard/>: ""}
      </InformationContainer>
    </MainContainer>
  );
}

export default MainPage;

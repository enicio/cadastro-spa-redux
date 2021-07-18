import React from 'react';
import Formulary from '../components/Formulary';
import ListRegisters from '../components/ListRegisters';

function MainPage(params) {
  return(
    <div>
      <Formulary/>
      <ListRegisters/>
    </div>
  );
}

export default MainPage;
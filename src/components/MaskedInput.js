import InputMask from 'react-input-mask';

function MaskedInput({name, mask, inputField, onChange}) {

  return(
    <InputMask
      name={name}
      mask={mask}
      value={inputField}
      onChange={onChange}
    />
  );
}

export default MaskedInput;
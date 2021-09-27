import React from 'react';
import TextField from '@mui/material/TextField';
import { dataActions } from '../../store/reducers/data';
import { useAppDispatch, useAppSelector } from '../../hooks/appHooks';
import * as S from "./Controls.styles";

const TextInput = () => {

  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(dataActions.setCustomPerson(event.target.value));
  };

  const person = useAppSelector((state) => state.data.customPerson);

  return (
    <S.ControlContainer>
      <TextField
        id="outlined-name"
        label="Impersonate Chuck Norris"
        fullWidth
        value={person}
        onChange={handleChange}
        variant="outlined"
        sx={{border: 'solid 1px', borderRadius:"5px"}}

      />
      </S.ControlContainer>
  );
}


export default TextInput;
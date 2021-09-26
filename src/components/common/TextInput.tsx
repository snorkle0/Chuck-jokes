import * as React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = () => {
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleChange}
      />
  );
}


export default TextInput;
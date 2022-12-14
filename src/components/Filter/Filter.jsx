import { useDispatch, useSelector } from 'react-redux';

import { setFilterValue } from 'redux/contacts/contactSlice';
import { getFilter } from 'redux/contacts/selector';

import { TextField } from '@mui/material';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <Label>
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        type="text"
        onChange={onChange}
        value={filter}
      />
    </Label>
  );
};

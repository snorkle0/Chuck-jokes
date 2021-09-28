import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useGetJokeCategoriesQuery } from "../../services/chuckJokes";
import * as S from "./Controls.styles";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { dataActions } from "../../store/reducers/data";
import { capitalize } from 'lodash';

const Dropdown = () => {
  const dispatch = useAppDispatch();

  const [categories, setCategories] = React.useState([]);

  const { data, error, isLoading } = useGetJokeCategoriesQuery("");

  React.useEffect(() => {
    setCategories(data);
  }, [data]);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(dataActions.setCategory(event.target.value));
  };
  const category = useAppSelector((state) => state.data.category);

  return (
    <S.ControlContainer>
      <FormControl fullWidth sx={{textAlign: 'left'}}>
        <InputLabel id="dropdownLabel">Categories</InputLabel>
        <Select
          labelId="dropdownLabel"
          id="category"
          value={category}
          onChange={handleChange}
          label="Categories"
        >
          {categories &&
            categories.map((item: string, id: number) => {
              return (
                <MenuItem key={`item_${id}`} value={item}>
                  {capitalize(item)}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </S.ControlContainer>
  );
};

export default Dropdown;

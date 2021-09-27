import React from "react";
import { IconButton } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { dataActions } from "../../store/reducers/data";

const AddJoke = () => {
  const dispatch = useAppDispatch();
  const joke = useAppSelector((state) => state.data.currentJoke);
  const currentJokesAmount = useAppSelector(
    (state) => Object.keys(state.data.savedJokes).length
  );
  

  const onClickHandler = () => {
    dispatch(dataActions.addSavedJoke({id: currentJokesAmount, jokeVal: joke}));
  };

  return (
    <>
      <IconButton onClick={onClickHandler}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </>
  );
};

export default AddJoke;

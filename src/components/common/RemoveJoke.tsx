import React from "react";
import { IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { dataActions } from "../../store/reducers/data";
import Minus from "../../assets/minus.svg";

const RemoveJoke = () => {
  const dispatch = useAppDispatch();
  const currentJokesAmount = useAppSelector(
    (state) => Object.keys(state.data.savedJokes).length
  );

  const onClickHandler = () => {
    dispatch(dataActions.deleteSavedJoke({ id: currentJokesAmount - 1 }));
  };
  return (
    <>
      <IconButton onClick={onClickHandler} sx={{padding: '8px 30px 0 0'}}>
        <img src={Minus} alt="Remove Joke" />
      </IconButton>
    </>
  );
};

export default RemoveJoke;

import React from "react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { dataActions } from "../../store/reducers/data";

const RemoveJoke = () => {
  const dispatch = useAppDispatch();
  const currentJokesAmount = useAppSelector(
    (state) => Object.keys(state.data.savedJokes).length
  );

  const onClickHandler = () => {
    dispatch(dataActions.deleteSavedJoke({ id: currentJokesAmount-1 }));
  };
  return (
    <>
      <IconButton onClick={onClickHandler}>
        <RemoveCircleOutlinedIcon />
      </IconButton>
    </>
  );
};

export default RemoveJoke;

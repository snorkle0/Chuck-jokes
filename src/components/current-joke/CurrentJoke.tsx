import React, { useCallback } from "react";
import Controls from "../common/Controls";
import * as S from "./CurrentJoke.styles";
import ChuckNorrisPhoto from "../../assets/chuck-norris-photo.jpg";
import RandomPhoto from "../../assets/random-photo.jpg";
import { useGetRandomJokeQuery } from "../../services/chuckJokes";
import { dataActions } from "../../store/reducers/data";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";

const CurrentJoke = () => {
  const currentJoke = useAppSelector((state) => state.data.currentJoke);
  const person = useAppSelector((state) => state.data.customPerson);


  return (
    <>
      <S.Image src={person? RandomPhoto : ChuckNorrisPhoto}></S.Image>
      <S.TextArea>{currentJoke}</S.TextArea>
    </>
  );
};

export default CurrentJoke;

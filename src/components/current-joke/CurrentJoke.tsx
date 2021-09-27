import React from "react";
import * as S from "./CurrentJoke.styles";
import ChuckNorrisPhoto from "../../assets/chuck-norris-photo.png";
import RandomPhoto from "../../assets/random-photo.png";
import { useAppSelector } from "../../hooks/appHooks";

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

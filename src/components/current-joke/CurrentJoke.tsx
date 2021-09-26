import React, { useCallback } from "react";
import Controls from "../common/Controls";
import * as S from "./CurrentJoke.styles";
import ChuckNorrisPhoto from "../../assets/chuck-norris-photo.jpg";
import RandomPhoto from "../../assets/random-photo.jpg";
import { useGetRandomJokeQuery } from "../../services/chuckJokes";
import { dataActions } from "../../store/reducers/data";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";

const CurrentJoke = () => {
  const { data, error, isLoading } = useGetRandomJokeQuery("random");
  const getJoke = useCallback(() => {
    const { joke } = data;
    // const dispatch = useAppDispatch();
    // dispatch(dataActions.setCurrentJoke(joke));
  }, [useGetRandomJokeQuery]);
  const currentJoke = useAppSelector((state) => state.data.currentJoke);

  if (isLoading) return <div>Thinking of something creative...</div>;

  if (error) return <div>Joke's on you!</div>;
  return (
    <>
      <S.Image src={ChuckNorrisPhoto}></S.Image>
      <S.TextArea>{currentJoke}</S.TextArea>
    </>
  );
};

export default CurrentJoke;

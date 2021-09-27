import React from "react";
import * as S from "./SavedJokes.styles";
import Controls from "../common/Controls";
import { useAppSelector } from "../../hooks/appHooks";

const SavedJokes = () => {
  const currentJokesAmount = useAppSelector(
    (state) => Object.keys(state.data.savedJokes).length
  );

  return (
    <>
      <S.ControlContainer>
        <S.AddRemoveContainer>
          <Controls.RemoveJoke />
          {currentJokesAmount}
          <Controls.AddJoke />
        </S.AddRemoveContainer>
        <S.SaveContainer>
          <Controls.SaveJokes />
        </S.SaveContainer>
      </S.ControlContainer>
    </>
  );
};

export default SavedJokes;

import React from "react";
import * as S from "./SavedJokes.styles";
import Controls from "../common/Controls";
import { useAppSelector } from "../../hooks/appHooks";
import Stack from "@mui/material/Stack";

const SavedJokes = () => {
  const currentJokesAmount = useAppSelector(
    (state) => Object.keys(state.data.savedJokes).length
  );

  return (
    <>
      <S.ControlContainer>
        <Stack direction="row">
          <S.AddRemoveContainer>
            <Controls.RemoveJoke />
            {currentJokesAmount}
            <Controls.AddJoke />
          </S.AddRemoveContainer>
          <S.SaveContainer>
            <Controls.SaveJokes />
          </S.SaveContainer>
        </Stack>
      </S.ControlContainer>
    </>
  );
};

export default SavedJokes;

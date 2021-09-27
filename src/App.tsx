import React from "react";
import * as S from "./App.styles";
import Controls from "./components/common/Controls";
import "./App.styles.tsx";
import CurrentJoke from "./components/current-joke/CurrentJoke";
import SavedJokes from "./components/saved-jokes/SavedJokes";
import { useGetRandomJokeQuery } from "./services/chuckJokes";
import { useAppDispatch, useAppSelector } from "./hooks/appHooks";
import { dataActions } from "./store/reducers/data";

function App() {

  const queryParams = useAppSelector((state) => state.ui.queryParams);
  const { data, error, isLoading } = useGetRandomJokeQuery(queryParams);

  const dispatch = useAppDispatch();
  dispatch(dataActions.setCurrentJoke(data));

  return (
    <S.App>
      <S.Rectangle>
        <CurrentJoke />
        <Controls.Dropdown />
        <Controls.TextInput />
        <Controls.ActionButton />
        <SavedJokes />
      </S.Rectangle>
    </S.App>
  );
}

export default App;

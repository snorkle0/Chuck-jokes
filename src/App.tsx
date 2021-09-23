import React from "react";
import * as S from "./App.styles";
import "./App.styles.tsx";
import CurrentJoke from "./components/current-joke/CurrentJoke";

function App() {
  return (
    <S.App>
      <S.Rectangle>
        <CurrentJoke />
      </S.Rectangle>
    </S.App>
  );
}

export default App;

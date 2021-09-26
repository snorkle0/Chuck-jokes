import React from "react";
import * as S from "./App.styles";
import Controls from "./components/common/Controls";
import "./App.styles.tsx";
import CurrentJoke from "./components/current-joke/CurrentJoke";

function App() {

  return (
    <S.App>
      <S.Rectangle>
        <CurrentJoke />
        <Controls.Dropdown />
        <Controls.TextInput />
      </S.Rectangle>
    </S.App>
  );
}

export default App;

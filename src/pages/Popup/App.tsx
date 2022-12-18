import React from "react";
import { RecoilRoot } from "recoil";
import Popup from "./Popup";
import GlobalStyle from "../../styles/GlobalStyles";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Popup />
    </RecoilRoot>
  );
}

export default App;

import { ApiProvider } from "./Context/ApiContext";
import { ViewProvider } from "./Context/ViewContext";
import { useState, useContext } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import { ViewContext } from "./Context/ViewContext";
import Main from "./components/Main";

function App() {
  // const character = useContext(ViewContext);
  

  return (
    <div className="App">
      <ApiProvider>
        <Header></Header>
        <Main></Main>
      </ApiProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;

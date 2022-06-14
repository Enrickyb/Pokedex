import { ApiProvider } from "./context/ApiContext";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";

import Main from "./components/Main";


function App() {

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

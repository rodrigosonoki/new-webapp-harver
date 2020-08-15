import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

//GLOBAL STYLE
import GlobalStyle from "./styles/global";

//ROUTES
import Routes from "./routes";

//STYLES
import light from "./styles/themes/light";

function App() {
  const [theme] = usePersistedState("theme", light);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

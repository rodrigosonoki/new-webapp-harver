import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

//GLOBAL STYLE
import GlobalStyle from "./styles/global";

//ROUTES
import Routes from "./routes";

function App() {
  return (
    <>
      <Helmet>
        <title>Harver- Dashboard</title>
        <meta name="description" content="Todos!" />
        <meta name="theme-color" content="#008f68" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,700;1,400&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;

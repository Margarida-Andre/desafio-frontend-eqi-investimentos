import React from "react";
import Home from "./pages/home";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { IndicatorsProvider } from "./hooks/useIndicator";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IndicatorsProvider>
        <Home />
        <GlobalStyle />
      </IndicatorsProvider>
    </ThemeProvider>
  );
}

export default App;

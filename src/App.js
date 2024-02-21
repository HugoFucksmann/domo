import React from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import BodyLayout from "./layout/body";
import AppProvider from "./context/appContext";
import RutasApp from "./rutasApp";
import Mxi from "./pages/mxi/mxi";

// global theme
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial",
    fontWeightBold: 800,
  },
});

const themeMxi = createTheme({
  typography: {
    fontFamily: "Poppins, Arial",
    fontWeightBold: 800,
  },
});

const urlqr = window.location.pathname;

function App(props) {
  function sendHTMLToReactNative() {
    const content = document.documentElement.outerHTML;
    // Redirigir a la URL personalizada para enviar el contenido HTML a la aplicación React Native
    window.postMessage(content);
  }

  // Llamar a la función para enviar el contenido HTML cuando la página se carga
  window.addEventListener("load", function () {
    sendHTMLToReactNative();
  });
  if (urlqr.search(/mxi/i) > 0 || urlqr.search(/masculinidad/i) > 0)
    return (
      <ThemeProvider theme={themeMxi}>
        <CssBaseline />
        <Mxi />
      </ThemeProvider>
    );

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BodyLayout>
          <RutasApp />
        </BodyLayout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

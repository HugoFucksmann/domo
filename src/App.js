import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import BodyLayout from "./layout/body";
import AppProvider from "./context/appContext";
import { Suspense } from "react";
import RutasApp from "./rutasApp";
import Loader from "./components/loader";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial",
  },
});

function App(props) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          <BodyLayout>
            <RutasApp />
          </BodyLayout>
        </Suspense>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

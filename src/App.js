import { CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import BodyLayout from "./layout/body";
import Home from "./pages/home";
import AppProvider from "./context/appContext";
import PageNotFound from "./pages/pageNotFound";
import JuegoDos from "./juegos/juegodos";
import JuegoUno from "./juegos/preguntas";
import { useLocation } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["Sora", "sans-serif"].join(","),
  },
  colores: {
    mainStrong: "#5A1372",
    mainSoft: "#9280AB",
    mainPink: "#FA405C",
    secondary: "#B6A9CB",
    secondarySoft1: "#E9DCFF",
    secondSoft2: "#E9E4F4",
    backgSoft: "#f7ebff",
    backgStr: "#E7EBF0",
  },
});

function App(props) {
  console.log("ruta: ", window.location.href);
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BodyLayout>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/juego-1" element={<JuegoUno />} />
              <Route path="/juego-2" element={<JuegoDos />} />
              {/* <Route path="*" element={<PageNotFound />} /> */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </BodyLayout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;

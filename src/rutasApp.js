import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "./context/appContext";
import JuegoDos from "./juegos/juegodos";
import JuegoTres from "./juegos/juegoTres";
import JuegoUno from "./juegos/juegouno";
import Home from "./pages/home";
import Loader from "./components/loader";

const RutasApp = () => {
  const { ruta, setRuta } = useContext(AppContext);

  //--- change behavior over the browser back button ----

  const onBackButtonEvent = useCallback((e) => {
    e.preventDefault();
    if (ruta === "home") return window.history.back();
    setRuta("home");
  });
  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);

    return () => window.removeEventListener("popstate", onBackButtonEvent);
  }, [onBackButtonEvent]);
  //-----------------------------

  function handleRutas() {
    switch (ruta) {
      case "home":
        return <Home />;

      case "JuegoUno":
        return <JuegoUno />;

      case "JuegoDos":
        return <JuegoDos />;

      case "JuegoTres":
        return <JuegoTres />;
      case "loader":
        return <Loader />;

      default:
        return <Home />;
    }
  }

  return <>{handleRutas()}</>;
};

export default RutasApp;

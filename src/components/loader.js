import { Backdrop, CircularProgress } from "@mui/material";
import micaLogo from "../assets/logoMicaela.png";
import colores from "../styles/colors";
import { isMobile } from "../styles/isMobile";

const Loader = () => {
  return (
    <Backdrop open={true}>
      <Backdrop open={true}>
        <img
          src={micaLogo}
          alt="jorita"
          style={{
            width: isMobile() ? 250 : 300,
            filter: "drop-shadow(5px 5px 5px #222)",
          }}
        />
      </Backdrop>
      <CircularProgress
        thickness={1}
        style={{
          color: colores.mainSoft,
          marginRight: 15,
          borderWidth: "1px",
        }}
        size={isMobile() ? 230 : 270}
        variant="indeterminate"
      />
    </Backdrop>
  );
};

export default Loader;

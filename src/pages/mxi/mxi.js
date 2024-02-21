import React, { useEffect } from "react";
import MxiEncabezado from "./mxiEncabezado";
import MxiHeader from "./mxiHeader";
import MxiSlider from "./mxiSlider";
import MxiItems from "./mxiItems";
import MxiFooter from "./mxiFooter";
import { isMobile } from "../../styles/isMobile";

const Mxi = () => {
  useEffect(() => {
    document.title = "mxi";
  }, []);

  return (
    <div style={styles.divContainer}>
      <MxiHeader />
      <div
        style={{
          paddingRight: !isMobile() ? "18%" : "4%",
          paddingLeft: !isMobile() ? "18%" : "4%",
          maxWidth: 1960,
          margin: "auto",
        }}
      >
        <MxiEncabezado />
        <br />
        <br />
        <MxiSlider />
        <MxiItems />
      </div>
      <MxiFooter />
    </div>
  );
};

const styles = {
  divContainer: { overflow: "hidden" },
};

export default Mxi;

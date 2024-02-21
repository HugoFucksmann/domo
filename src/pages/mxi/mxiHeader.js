import React from "react";

import headerImg from "./images/fondoHeader.png";
import headerLogo from "./images/Logo.png";

import genero from "./images/logos/Genero.png";
import santaFe from "./images/logos/SantaFe.png";
import unfpa from "./images/logos/UNFPA.png";

import { isMobile } from "../../styles/isMobile";

const MxiHeader = () => {
  return (
    <div style={styles.divContainer}>
      <div
        style={{
          width: isMobile() ? "90%" : "46%",

          position: "absolute",
          top: 40,
          height: isMobile() ? 20 : 40,

          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span>
          <img
            alt="santaFe"
            src={santaFe}
            style={{
              height: isMobile() ? 30 : "100%",
            }}
          />
        </span>
        <span>
          <img
            alt="santaFe"
            src={genero}
            style={{
              height: isMobile() ? 30 : "100%",
            }}
          />
        </span>
        <span>
          <img
            alt="santaFe"
            src={unfpa}
            style={{ height: isMobile() ? 30 : "100%" }}
          />
        </span>
        {/* <img alt="santaFe" src={santaFe} style={styles.imgLogo} /> */}
      </div>
      <img alt="fondoheader" src={headerImg} style={styles.imgHeader} />
      <img alt="headerlogo" src={headerLogo} style={styles.imgLogo} />
    </div>
  );
};

const styles = {
  divContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //height: '60vh',
  },
  imgHeader: {
    marginTop: !isMobile() && "-4%",
    width: isMobile() ? "200%" : "100%",
  },
  imgLogo: {
    position: "absolute",
    top: isMobile() ? 100 : 120,
    width: isMobile() ? "60%" : "32%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  santafe: {
    position: "absolute",
    top: isMobile() ? 50 : 20,
    width: isMobile() ? "60%" : "6%",
  },
};

export default MxiHeader;

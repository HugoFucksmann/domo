import React from "react";
import { Typography } from "@mui/material";

const MxiEncabezado = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 36,
      }}
    >
      <Typography style={{ fontSize: "1.8rem" }}>
        ¿Conocés el programa
      </Typography>

      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#49147C",
        }}
      >
        Masculinidades por la igualdad?
      </Typography>
      <br />
      <br />
      <Typography style={{ fontSize: "1.4rem" }}>
        Es un nuevo programa del Gobierno Provincial impulsado con el objetivo
        de promover la corresponsabilidad de los varones en el cambio cultural
        que nuestra sociedad demanda y necesita para vivir una vida libre de
        violencias.
      </Typography>
    </div>
  );
};

const styles = {
  divContainer: {
    textAling: "center",
  },
};

export default MxiEncabezado;

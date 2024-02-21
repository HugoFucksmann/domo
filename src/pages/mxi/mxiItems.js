import React from "react";
import pdf from "../../pdf/Cuadernillo.pdf";
import pdfLineamiento from "../../pdf/pdf_lineamientos.pdf";
import iconItem1 from "./images/icons/Icono1.png";
import iconItem2 from "./images/icons/Icono2.png";
import iconItem3 from "./images/icons/Icono3.png";
import iconItem4 from "./images/icons/Icono4.png";
import { isMobile } from "../../styles/isMobile";
import { Grid, Typography } from "@mui/material";

const MxiItems = () => {
  return (
    <div style={styles.divContainer}>
      <Typography
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#49147C",
        }}
      >
        ¿Cómo pensamos <span style={{ fontWeight: "bold" }}> hacerlo</span>?
      </Typography>
      <Grid container spacing={3} style={{ margin: 12, marginBottom: 60 }}>
        <ItemVideo0 />
        <ItemTextLink />
        <Item1 />
        <Item2 />
        <ItemVideo3 />
        <Item4 />
      </Grid>
    </div>
  );
};
const ItemTextLink = () => {
  return (
    <Grid Grid item xs={12} style={{ margin: "20px 0px" }}>
      <Typography>
        Descargar el libro{" "}
        <a href="https://dwww.santafe.gov.ar/juegosmicaela/static/media/libro_espacio_atencion_varones.86345ae39e34027b251f.pdf">
          “Espacios de atención a varones que ejercieron violencias por razones
          de género. Insumos teóricos y prácticos para su creación e
          implementación”
        </a>{" "}
        , elaborado desde el Programa MxI con el apoyo de UNFPA.
      </Typography>
    </Grid>
  );
};

const ItemVideo0 = () => {
  return (
    <>
      <Grid item xs={12} md={12}></Grid>
      <Grid item xs={12} md={5}>
        <Grid item xs={10} md={11}>
          <img alt="item" src={iconItem1} />
        </Grid>
        <br />
        <Grid item xs={11} md={11}>
          <Typography style={{ fontSize: "1rem", textAlign: "left" }}>
            Impulsando la creación de espacios de atención a varones que han
            ejercido violencia de género en los municipios de nuestra provincia,
            a través de cursos de formación, asistencia técnica y financiera.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={11} md={7}>
        <video width="100%" height="100%" controls>
          <source
            src={`https://drive.google.com/u/0/uc?id=1Tm0ZPZ_KsRAL5PW3yIsVggHL0V7ivhvb&export=download`}
            type="video/mp4"
          />
          Su navegador no soporte la reproducción de video
        </video>
      </Grid>
      <Grid item xs={11} md={11}>
        <a href={pdfLineamiento} target="_blank">
          Descarga los lineamientos metodológicos para la atención a varones
          (Res. N° 098/2023).
        </a>
      </Grid>

      <Grid item xs={12} md={12}></Grid>
    </>
  );
};

const Item1 = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={4}
        style={{
          display: "flex",

          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img alt="item" src={iconItem2} />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        style={{
          fontSize: "1rem",
          textAlign: "left",
        }}
      >
        <Typography>
          Promoviendo una estrategia de formación de Multiplicadores,
          acompañando a varones de organizaciones de la sociedad civil y de
          otros programas de gobierno a trabajar esta agenda con iniciativas en
          sus propios ámbitos y territorios.
        </Typography>
      </Grid>
      <Grid item xs={0} md={1}></Grid>
    </>
  );
};

const Item2 = () => {
  return (
    <>
      <Grid item xs={12} md={12}></Grid>
      <Grid item xs={11} md={11}>
        <Typography style={{ fontSize: "1rem", textAlign: "left" }}>
          Realizamos dos ediciones del Curso "Masculinidad(es), Género y
          Educación Técnica. Orientaciones pedagógicas para un abordaje con
          perspectiva de Masculinidades en las Escuelas Secundarias Técnicas de
          la provincia de Santa Fe", convocadas en articulación con la Dirección
          Provincial de Educación Técnica del Ministerio de Educación del
          Gobierno de la Provincia de Santa Fe., alcanzando a 116 docentes,
          supervisores y directores varones, de 73 E.E.T.P. distribuidas en 35
          localidades santafesinas.
        </Typography>
      </Grid>

      <Grid item xs={11} md={11}>
        <a href={pdf} target="_blank">
          Les compartimos este cuadernillo para descargar y trabajar en las
          aulas.
        </a>
      </Grid>
    </>
  );
};

const ItemVideo3 = () => {
  return (
    <>
      <Grid item xs={12} md={12}></Grid>
      <Grid item xs={12} md={5}>
        <Grid item xs={10} md={11}>
          <img alt="item" src={iconItem3} />
        </Grid>
        <br />
        <Grid item xs={11} md={11}>
          <Typography style={{ fontSize: "1rem", textAlign: "left" }}>
            Organizando las Rondas de Varones como espacios de encuentro y
            reflexión con jóvenes para la revisión crítica y transformadora de
            estereotipos y mandatos, de las relaciones entre violencia,
            complicidad y consentimiento, y la necesaria corresponsabilidad en
            los cuidados.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={11} md={7}>
        <video width="100%" height="100%" controls>
          <source
            src={`https://drive.google.com/u/0/uc?id=1yrYLYZyriWyhABDv7syWW3OmSu8W6JAb&export=download`}
            type="video/mp4"
          />
          Su navegador no soporte la reproducción de video
        </video>
      </Grid>

      <Grid item xs={12} md={12}></Grid>
    </>
  );
};
const Item4 = () => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <img alt="item" src={iconItem4} />
      </Grid>
      <Grid item xs={11} md={7}>
        <Typography style={{ fontSize: "1rem", textAlign: "left" }}>
          Realizando Campañas de sensibilización, y promoviendo políticas
          culturales para expandir estas conversaciones de manera transversal
          con todos los santafesinos y santafesinas.
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}></Grid>
    </>
  );
};

const styles = {
  divContainer: {
    marginTop: 26,
    marginRight: !isMobile() ? "8%" : "4%",
    marginLeft: !isMobile() && "8%",
  },
};

export default MxiItems;

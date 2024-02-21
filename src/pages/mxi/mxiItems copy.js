import React from "react";
import pdf from "../../pdf/Cuadernillo.pdf";
import pdfLineamiento from "../../pdf/pdf_lineamientos.pdf";

import mapasf from "../../assets/mapasf.png";
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
        {items.map((item, i) => (
          <Item itemData={item} index={i} />
        ))}
      </Grid>
    </div>
  );
};

const Item = ({ itemData, index }) => {
  if (index === 2)
    return (
      <>
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={11} md={11}>
          <Typography style={{ fontSize: "1rem", textAlign: "left" }}>
            {itemData.txt}
          </Typography>
        </Grid>

        <Grid item xs={11} md={11}>
          <a href={itemData.link_archivo} target="_blank">
            {itemData.link}
          </a>
        </Grid>
      </>
    );
  if (itemData.link_video)
    return (
      <>
        <Grid item xs={12} md={12}></Grid>
        <Grid item xs={12} md={5}>
          <Grid item xs={10} md={11}>
            <img
              alt="item"
              src={itemData.icon}
              /* style={{ width: isMobile() ? "30%" : "58%" }} */
            />
          </Grid>
          <br />
          <Grid item xs={11} md={11}>
            <Typography style={{ fontSize: "1rem", textAlign: "left" }}>
              {itemData.txt}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={11} md={7}>
          <video width="100%" height="100%" controls>
            <source src={itemData.link_video} type="video/mp4" />
            Su navegador no soporte la reproducción de video
          </video>
        </Grid>
        {!itemData.link_archivo ? (
          ""
        ) : (
          <Grid item xs={11} md={11}>
            <a href={itemData.link_archivo} target="_blank">
              {itemData.link_text}
            </a>
          </Grid>
        )}

        <Grid item xs={12} md={12}></Grid>
      </>
    );
  if (!isMobile() && index % 2 === 1) {
    return (
      <>
        <Grid
          item
          xs={12}
          md={itemData.link ? 12 : 7}
          style={{
            fontSize: "1rem",
            textAlign: "right",
            textAlign: itemData.link && "center",
          }}
        >
          <Typography>{itemData.txt}</Typography>
          {itemData.link && (
            <div style={{ marginTop: 10 }}>
              <a href={itemData.link_archivo} target="_blank">
                {itemData.link}
              </a>
            </div>
          )}
        </Grid>
        <Grid item xs={0} md={1}></Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {!itemData.link && (
            <img
              alt="item"
              src={itemData.icon}
              /*  style={{
              height: isMobile() ? "28%" : "70%",
            }} */
            />
          )}
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </>
    );
  } else {
    /**
     * Si tiene un link de video renderizo el grid con el video
     * sino rederizo el grid default
     */
    return (
      <>
        {itemData.icon && (
          <Grid item xs={12} md={4}>
            <img alt="item" src={itemData.icon} />
          </Grid>
        )}
        <Grid item xs={11} md={7}>
          <Typography style={{ fontSize: "1rem", textAlign: "left" }}>
            {itemData.txt}
          </Typography>
          {itemData.link && (
            <div style={{ marginTop: 10 }}>
              <a href={itemData.link_archivo} target="_blank">
                {itemData.link}
              </a>
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={12}></Grid>
      </>
    );
  }
};

const styles = {
  divContainer: {
    marginTop: 26,
    marginRight: !isMobile() ? "12%" : "4%",
    marginLeft: !isMobile() && "12%",
  },
};
//https://drive.google.com/u/0/uc?id=1yrYLYZyriWyhABDv7syWW3OmSu8W6JAb&export=download
//https://drive.google.com/file/d/1yrYLYZyriWyhABDv7syWW3OmSu8W6JAb/preview?usp=sharing
/*<iframe
							id='player'
							width='100%'
							height='100%'
							src={itemData.link_video}
							frameborder='0'
							style={{
								borderRadius: 10,
							}}
						></iframe>*/

const items = [
  {
    icon: iconItem1,
    txt: `Impulsando la creación de espacios de atención a varones que han ejercido violencia de género en los municipios de nuestra provincia, a través de cursos de formación, asistencia técnica y financiera. `,
    link_video: `https://drive.google.com/u/0/uc?id=1Tm0ZPZ_KsRAL5PW3yIsVggHL0V7ivhvb&export=download`,
    link_archivo: pdfLineamiento,
    link_text: ` Descarga los lineamientos metodológicos para la atención a varones
	(Res. N° 098/2023).`,
  },
  {
    icon: iconItem2,
    txt: `Promoviendo una estrategia de formación de Multiplicadores, acompañando a varones de organizaciones de la sociedad civil y de otros programas de gobierno a trabajar esta agenda con iniciativas en sus propios ámbitos y territorios.`,
    link_video: false,
    link_archivo: false,
  },
  {
    icon: false,
    txt: `Realizamos dos ediciones del Curso "Masculinidad(es), Género y Educación Técnica. 
    Orientaciones pedagógicas para un abordaje con perspectiva de Masculinidades 
    en las Escuelas Secundarias Técnicas de la provincia de Santa Fe", 
    convocadas en articulación con la Dirección Provincial de Educación Técnica del 
    Ministerio de Educación del Gobierno de la Provincia de Santa Fe., alcanzando a 
    116 docentes, supervisores y directores varones, de 73 E.E.T.P. distribuidas en 35 localidades santafesinas.`,
    link_video: false,
    link_archivo: pdf,
    link: ` Les compartimos este cuadernillo para descargar y trabajar en las aulas.`,
  },
  {
    icon: iconItem3,
    txt: `Organizando las Rondas de Varones como espacios de encuentro y reflexión con jóvenes para la revisión crítica y transformadora de estereotipos y mandatos, de las relaciones entre violencia, complicidad y consentimiento, y la necesaria corresponsabilidad en los cuidados.`,
    link_video: `https://drive.google.com/u/0/uc?id=1yrYLYZyriWyhABDv7syWW3OmSu8W6JAb&export=download`,
    link_archivo: false,
    link_text: false,
  },

  {
    icon: iconItem4,
    txt: `Realizando Campañas de sensibilización, y promoviendo políticas culturales para expandir estas conversaciones de manera transversal con todos los santafesinos y santafesinas. `,
    link_video: false,
    link_archivo: false,
  },
];

export default MxiItems;

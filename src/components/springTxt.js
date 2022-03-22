import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";

import { makeStyles } from "@mui/styles";
import TypographyStyled from "./typografyStyled";

const useStyles = makeStyles(() => ({
  trialTxt: {
    color: " #f2f2f2",
    willChange: " transform, opacity",
  },
}));

const Trail = ({ open, children }) => {
  const classes = useStyles();
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 100,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={classes.trialTxt} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function SpringTxt({
  txts = "",
  size = "1.8vw",
  widthDiv = "100%",
  open = true,
}) {
  let palabrasPares = txts
    .toUpperCase()
    .split(" ")
    .filter((word, i) => i % 2 === 0);
  let palabrasImpares = txts
    .toUpperCase()
    .split(" ")
    .filter((word, i) => i % 2 === 1);

  return (
    <div style={{ width: widthDiv }}>
      <Trail open={open}>
        {palabrasPares.map((txt, i) => (
          <TypographyStyled
            style={{ fontSize: size, fontWeight: "bold" }}
            key={txt}
          >
            {txt} {palabrasImpares[i] && palabrasImpares[i]}
          </TypographyStyled>
        ))}
      </Trail>
    </div>
  );
}

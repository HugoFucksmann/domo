import React from "react";
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
  color = "rgba(255, 255, 255,.8)",
  whiteSpace = false,
  lspacing = 1.4,
}) {
  let palabrasP1,
    palabrasP2,
    palabrasP3,
    palabrasP4,
    palabrasP5 = [];
  const words = txts.toUpperCase().split(" ");

  if (words.length > 32) {
    palabrasP1 = words.filter((word, i) => i % 5 === 0);
    palabrasP2 = words.filter((word, i) => i % 5 === 1);
    palabrasP3 = words.filter((word, i) => i % 5 === 2);
    palabrasP4 = words.filter((word, i) => i % 5 === 3);
    palabrasP5 = words.filter((word, i) => i % 5 === 4);
  } else {
    palabrasP1 = words.filter((word, i) => i % 4 === 0);
    palabrasP2 = words.filter((word, i) => i % 4 === 1);
    palabrasP3 = words.filter((word, i) => i % 4 === 2);
    palabrasP4 = words.filter((word, i) => i % 4 === 3);
  }

  return (
    <div
      style={{
        width: widthDiv,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Trail open={open}>
        {palabrasP1.map((txt1, i) => (
          <TypographyStyled
            style={{
              fontSize: size,
              fontWeight: 800,
              constterSpacing: lspacing,
              whiteSpace: whiteSpace,
              color: color,
            }}
            key={txt1}
          >
            {txt1} {palabrasP2[i] && palabrasP2[i]}{" "}
            {palabrasP3[i] && palabrasP3[i]} {palabrasP4[i] && palabrasP4[i]}{" "}
            {palabrasP5[i] && palabrasP5[i]}
          </TypographyStyled>
        ))}
      </Trail>
    </div>
  );
}

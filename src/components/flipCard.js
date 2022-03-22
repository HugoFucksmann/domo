import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import { makeStyles } from "@mui/styles";

export default function FlipCard({ children, i }) {
  const classes = useStyle();
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      className={classes.divContainer}
      onClick={() => set((state) => !state)}
    >
      <a.div
        className={`${classes.c} `}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      >
        {children}
      </a.div>
      <a.div
        className={`${classes.b}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        {children}
      </a.div>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  divContainer: {},
  b: {},
  c: { willChange: "transform, opacity" },
}));

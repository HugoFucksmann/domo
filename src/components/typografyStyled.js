import { Typography } from "@mui/material";

const TypographyStyled = (props) => {
  return (
    <Typography
      style={{
        fontFamily: "Sora",

        ...props.style,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default TypographyStyled;

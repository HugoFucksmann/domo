import { Typography } from "@mui/material";

const TypographyStyled = (props) => {
  return (
    <Typography
      style={{
        fontFamily: "Poppins",
        ...props.style,
        fontWeight: 700,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default TypographyStyled;

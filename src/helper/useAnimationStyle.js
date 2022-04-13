import { makeStyles } from "@mui/styles";

export const useAnimationStyles = ({ score }) => {
  const classes = makeStyles({
    "@keyframes animation": {
      "0%": {
        backgroundPosition: "10% 0%",
      },
      "50%": {
        backgroundPosition: "50% 50%",
      },
      "100%": {
        backgroundPosition: "100% 100%",
      },
    },
    animationCard: {
      borderRadius: "45%",
      border: "4px solid #5F0173",
      background: `linear-gradient(0deg, purple  ${score * 5}%, #fff 0%)`,
      backgroundSize: `200% 200%`,
      animation: "Animation 5s ease forwards",
    },
  });

  return classes();
};

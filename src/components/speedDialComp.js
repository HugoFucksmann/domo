import { useState } from "react";
import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { makeStyles } from "@mui/styles";

const actions = [
  { icon: <ArrowBackIcon />, name: "volver" },
  { icon: <InfoOutlinedIcon />, name: "informacion" },
  { icon: <AutoFixHighOutlinedIcon />, name: "instrucciones" },
];

const SpeedDialComp = () => {
  const speedClass = useStyles();
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        ariaLabel="S"
        sx={{ position: "absolute", bottom: 35, right: 35 }}
        icon={<SpeedDialIcon />}
        FabProps={{
          color: "secondary",
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            TooltipClasses={speedClass}
            tooltipOpen
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              action.name === "volver" && navigate("/");
            }}
          />
        ))}
      </SpeedDial>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  staticTooltipLabel: {
    backgroundColor: "red",
  },
  tooltip: {
    backgroundColor: "yellow",
  },
}));

export default SpeedDialComp;

import { forwardRef, useContext } from "react";
import { AppContext } from "../../context/appContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TypographyStyled from "../../components/typografyStyled";
import Slide from "@mui/material/Slide";
import sizeLetter from "../../styles/fontSize";
import colores from "../../styles/colors";
import { isMobile } from "../../styles/isMobile";

const ModalResult = () => {
  const { handlerModalClose, dataModal, openModal } = useContext(AppContext);

  return (
    <Dialog
      maxWidth="md"
      open={openModal}
      onClose={handlerModalClose}
      aria-labelledby="responsive-dialog-title"
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          padding: isMobile() ? 20 : 45,
          marginRight: !isMobile() && "18%",
          marginLeft: !isMobile() && "18%",
          borderRadius: 15,
          backgroundColor: "#F3F6F9",
          borderRight: `8px solid ${colores.mainPurple}`,
        },
      }}
    >
      <DialogTitle id="responsive-dialog-title">
        <TypographyStyled
          style={{
            fontSize: isMobile() ? sizeLetter.cellBig : sizeLetter.big,
            color: colores.mainPurple,
            fontWeight: 800,
          }}
        >
          {dataModal.title.toString()}
        </TypographyStyled>
      </DialogTitle>
      <DialogContent>
        <TypographyStyled
          style={{
            fontSize: isMobile() ? sizeLetter.cellNormal : sizeLetter.normal,
            color: colores.textSoft,
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: dataModal.txt.toString() }} />
        </TypographyStyled>
        <br />
        {dataModal.icons && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {dataModal.icons.map((icon, i) => (
              <img
                key={i}
                alt={i}
                src={icon}
                style={{
                  height: isMobile() ? 50 : 80,
                  filter: `drop-shadow(3px 3px 3px ${colores.mainStrongTr})`,
                }}
              />
            ))}
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={handlerModalClose}
          autoFocus
          style={{
            backgroundColor: colores.mainPurple,
          }}
        >
          <TypographyStyled
            style={{
              fontWeight: 800,
              fontSize: isMobile() ? sizeLetter.cellSmall : sizeLetter.small,
            }}
          >
            Continuar !
          </TypographyStyled>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ModalResult;

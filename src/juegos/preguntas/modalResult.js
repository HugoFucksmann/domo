import { forwardRef, useContext } from "react";
import { AppContext } from "../../context/appContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TypographyStyled from "../../components/typografyStyled";
import Slide from "@mui/material/Slide";
import sizeLetter from "../../styles/fontSize";

const ModalResult = () => {
  const { handlerModalClose, dataModal, openModal } = useContext(AppContext);
  return (
    <Dialog
      maxWidth="md"
      open={openModal}
      onClose={handlerModalClose}
      aria-labelledby="responsive-dialog-title"
      TransitionComponent={Transition}
      PaperProps={{ style: { padding: 30, borderRadius: 15 } }}
    >
      <DialogTitle id="responsive-dialog-title">
        <TypographyStyled style={{ fontSize: sizeLetter.big }}>
          Su respuesta fue {dataModal.correcto} !!
        </TypographyStyled>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TypographyStyled style={{ fontSize: sizeLetter.normal }}>
            {dataModal.txt}
          </TypographyStyled>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handlerModalClose} autoFocus>
          <TypographyStyled style={{ fontSize: sizeLetter.small }}>
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

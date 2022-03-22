import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import { useContext, useRef } from "react";
import { AppContext } from "../../context/appContext";
import colores from "../../styles/colors";
import { makeStyles } from "@mui/styles";
import TypographyStyled from "../../components/typografyStyled";
import { typography } from "@mui/system";
import MultipleSelect from "./form/multipleSelect";
import sizeLetter from "../../styles/fontSize";

const FormStart = () => {
  const { datosPersona, handlerPersona, handlerStart } = useContext(AppContext);

  function isCompleted() {
    return (
      datosPersona.edad > 0 && datosPersona.tipo && datosPersona.tipo.length > 0
    );
  }

  return (
    <Zoom in={true}>
      <Card
        elevation={3}
        style={{
          padding: 35,
          borderRadius: 15,
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={7}>
            <Grid container spacing={2} direction="column">
              <Grid item md={12}>
                <TypographyStyled style={{ fontSize: sizeLetter.normal }}>
                  Edad
                </TypographyStyled>
                <Slider
                  defaultValue={0}
                  max={80}
                  //getAriaValueText={valuetext}
                  color="secondary"
                  style={{ width: "90%" }}
                  onChange={(e) =>
                    handlerPersona({
                      ...datosPersona,
                      edad: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item md={12}>
                <TypographyStyled style={{ fontSize: sizeLetter.normal }}>
                  Convivencia:
                </TypographyStyled>
                <FormGroup>
                  {["menores de 6", "adolecente +16", "adultos mayores"].map(
                    (op) => (
                      <FormControlLabel
                        key={op}
                        control={
                          <Checkbox
                            color="secondary"
                            onChange={(e) => {
                              if (e.target.checked)
                                handlerPersona({
                                  ...datosPersona,
                                  tipo: [...datosPersona.tipo, op],
                                });
                              else {
                                let filter = datosPersona.tipo.filter(
                                  (ops) => ops !== op
                                );
                                handlerPersona({
                                  ...datosPersona,
                                  tipo: filter,
                                });
                              }
                            }}
                          />
                        }
                        label={op}
                        componentsProps={{
                          typography: {
                            fontFamily: "Sora",
                            fontSize: sizeLetter.small,
                          },
                        }}
                      />
                    )
                  )}
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={5} style={{ width: "100%" }}>
            <Card
              variant="outlined"
              style={{
                borderRadius: 10,
                padding: 20,
                textAlign: "center",
                borderColor: colores.mainStrong,
              }}
            >
              <TypographyStyled style={{ fontSize: sizeLetter.small }}>
                Edad: {datosPersona.edad}
              </TypographyStyled>
              <Divider variant="middle" />
              <TypographyStyled style={{ fontSize: sizeLetter.small }}>
                Convivencia:
              </TypographyStyled>
              {datosPersona.tipo &&
                datosPersona.tipo.map((op) => (
                  <TypographyStyled
                    style={{ fontSize: sizeLetter.small }}
                    key={op}
                  >
                    {op}
                  </TypographyStyled>
                ))}
            </Card>
          </Grid>

          <Grid item md={12} style={{ width: "100%" }}>
            <Button
              disabled={!isCompleted()}
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ fontFamily: "Sora", fontSize: sizeLetter.small }}
              onClick={() => handlerStart()}
            >
              Iniciar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Zoom>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    "&$focused": {
      color: "#000",
    },
  },
  select: {
    borderRadius: 10,
  },
}));

export default FormStart;

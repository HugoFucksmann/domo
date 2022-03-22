import { makeStyles } from "@mui/styles";
import { colors } from "./colors";

const layoutStyle = makeStyles((theme) => ({
    fullScreen: {
        height: "100vh",
        backgroundColor: colors.body,
    },
    headerLayout: {
        height: 80,
        textAlign: "center",
        backgroundColor: colors.header,
        padding: "2vh",
    },
    bodyLayout: {
        height: "79vh",
        marginRight: "12%",
        marginLeft: "12%",
        padding: "3vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    footerLayout: {
        height: "10vh",
        backgroundColor: "green",
    },
}));

export default layoutStyle;

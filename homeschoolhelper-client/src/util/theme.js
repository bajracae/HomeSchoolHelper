export default {
  palette: {
    primary: {
      light: "#C8D6AF",
      main: "#F2D0A4",
      dark: "#A4303F",
      contrastText: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      light: "#F5F3BB",
      main: "#11cb5f",
      dark: "#412722",
      contrastText: "#fff",
    },
  },
  // the object to be spread
  spreadThis: {
    typography: {
      useNextVariants: true,
    },
    form: {
      textAlign: "center",
    },
    image: {
      width: "100px",
      margin: "10px auto 10px auto",
    },
    pageTitle: {
      margin: "10px auto 10px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    button: {
      marginTop: 20,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 5,
    },
    progress: {
      position: "absolute",
    },
  },
};

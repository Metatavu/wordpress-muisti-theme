import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import "../styles/styles.scss";
import PostPage from "./PostPage";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

/**
 * Interface representing component properties
 */
interface Props {
}

/**
 * Interface representing component state
 */
interface State {
}

/**
 * Application theme
 */
const theme = createMuiTheme({
  palette: {
    primary: { main: "#F5EFEA" },
    secondary: { main: "#C24A49" },
    background: {
      default: "#26201E",
      paper: "#F5EFEA"
    }
  },
  typography: {
    h1: {
      fontSize: 55,
      fontWeight: 900,
      textTransform: "uppercase"
    },
    h2: {
      fontSize: 34,
      fontWeight: 500
    },
    h3: {
      fontSize: 21,
      fontWeight: 500
    },
    body1: {
      fontSize: 13,
      fontWeight: 300
    },
    body2: {
      fontSize: 8,
      fontWeight: 300
    }
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        justifyContent: "space-between",
        textTransform: "initial",
        height: 65,
        borderRadius: 0,
        padding: "5px 15px",
        borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
          "&:active": {
            borderWidth: 2,
          }
      }
    }
  }
});

/**
 * App component
 */
class App extends React.Component<Props, State> {

  /**
   * Component render method
   */
  public render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Route
                path="/"
                exact={ true }
                component={WelcomePage}
              />
            <Route
                path="/:slug"
                exact={ true }
                render={(props) => (
                  <PostPage
                    slug={props.match.params.slug as string}
                  />
                )}
              />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
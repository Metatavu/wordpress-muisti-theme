import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import PostPage from "./pages/PostPage";
import { CssBaseline, responsiveFontSizes } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import muistiTheme from "../styles/theme";
import strings from "../localization/strings";

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
 * Material UI's automated responsive font sizes
 */
const theme = responsiveFontSizes(muistiTheme);

/**
 * App component
 */
class App extends React.Component<Props, State> {
  /**
   * Component render method
   */
  public render() {
    // Todo: check selected language
    strings.setLanguage("fi");
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <Route
              path="/"
              exact={ true }
              component={WelcomePage}
            />
            <Route
              path="/:slug"
              render={ (props) => (
                <PostPage
                  slug={ props.location.pathname as string }
                />
              )}
            />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
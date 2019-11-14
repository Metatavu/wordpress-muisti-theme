import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import PostPage from "./pages/PostPage";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../styles/theme";

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
 * App component
 */
class App extends React.Component<Props, State> {

  /**
   * Component render method
   */
  public render() {
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
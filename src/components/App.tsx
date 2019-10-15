import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import Api from "../wpapi";
import "../styles/styles.scss";

Api.configure("http://localhost:1234/wp-json/");

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
      <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={WelcomePage} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
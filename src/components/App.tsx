import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import "../styles/styles.scss";

/**
 * App component
 */
class App extends React.Component {

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
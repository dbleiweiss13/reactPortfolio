import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </header>
  </div>
  );
}

export default App;

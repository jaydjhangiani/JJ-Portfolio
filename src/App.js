import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import NotFound from "./pages/404";
import Contact from "./pages/contact";
import Internship from "./pages/internship";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/internship-coincap" component={Internship} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

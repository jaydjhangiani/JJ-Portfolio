import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

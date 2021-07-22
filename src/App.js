
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SignInPage from './pages/signin';

function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path = "/" component={Home} exact />
        <Route path = "/contact" component={SignInPage} exact />
        
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

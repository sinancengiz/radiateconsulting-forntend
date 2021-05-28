import React from 'react';
import { BrowserRouter as Router,   Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ROUTES from '../../constants/routes';
import Home from "../Home"
import Store from "../Store"

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.STORE} component={Store}/>
    </Router>
 
  );
}

export default App;

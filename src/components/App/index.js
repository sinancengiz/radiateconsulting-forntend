import React from 'react';
import { BrowserRouter as Router,   Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ROUTES from '../../constants/routes';
import Home from "../Home"
import Store from "../Store"
import NewStoreForm from "../Store/NewStoreForm"
import NewTableForm from "../Table/NewTableForm"

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.STORE} component={Store}/>
      <Route exact path={ROUTES.NEWSTOREFORM} component={NewStoreForm}/>
      <Route exact path={ROUTES.NEWTABLEFORM} component={NewTableForm}/>
    </Router>
 
  );
}

export default App;

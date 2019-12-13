import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { NotFound } from './components/NotFound/NotFound';


const App: React.FC = () => {
  return (
      <BrowserRouter>
          <React.Fragment> 
            <Switch>
              <Route exact path="/" component={Landing} /> 
              <Route component={NotFound} />
            </Switch> 
          </React.Fragment>
        </BrowserRouter>
  );
}

export default App;

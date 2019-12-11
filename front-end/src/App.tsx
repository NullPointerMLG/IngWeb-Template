import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';


const App: React.FC = () => {
  return (
      <BrowserRouter>
          <React.Fragment> 
            <Switch>
              <Route exact path="/" component={Landing} /> 
              <Route exact path="/register" component={Register} />
              <Route component={NotFound} />
            </Switch> 
          </React.Fragment>
        </BrowserRouter>
  );
}

export default App;

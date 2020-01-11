import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Redux
import store from './store';

//Routes
import NotFound from './components/layouts/NotFound';
import DetailPage from './components/layouts/DetailPage';
import SearchPage from './components/layouts/SearchPage';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className='container'>
            <Switch>
              <Route exact path='/' component={SearchPage} />
              <Route exact path='/details' component={DetailPage} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

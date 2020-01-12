import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from 'antd';

//Redux
import store from './store';

//Routes
import NotFound from './components/layouts/NotFound';
import DetailPage from './components/layouts/DetailPage';
import SearchPage from './components/layouts/SearchPage';
import BattleList from './components/layouts/BattleList';

import './App.css';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Layout>
            <Header>
              <Link to='/'>
                <h1 className='fonts'>Game Of Thrones Battle</h1>
              </Link>
            </Header>
            <Content>
              <Switch>
                <Route exact path='/' component={SearchPage} />
                <Route
                  exact
                  path='/battlelist/:location'
                  component={BattleList}
                />
                <Route exact path='/details' component={DetailPage} />
                <Route component={NotFound} />
              </Switch>
            </Content>
          </Layout>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

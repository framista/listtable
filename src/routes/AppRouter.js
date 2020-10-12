import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../components/pages/not-found-page';
import Home from '../components/pages/home';
import CreateTask from '../components/pages/createTask';

const AppRouter = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/createTask" component={CreateTask} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default AppRouter;

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' component={StreamCreate} />
            <Route path='/streams/delete/:id' component={StreamDelete} />
            <Route path='/streams/edit/:id' component={StreamEdit} />
            <Route path='/streams/:id' component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

// 944428562476-35k80f7djbbin3pohlqs3c1gs0rhk3pd.apps.googleusercontent.com

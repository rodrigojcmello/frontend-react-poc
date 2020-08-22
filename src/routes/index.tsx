import React, { FC, ReactElement } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Summary from './Summary';
import BreedList from './Fetch/BreedList';
import BreedImages from './Fetch/BreedImages';
// import PostList from './Fetch/PostList';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Summary} />
        <Route>
          <Route path="/fetch-breed" exact component={BreedList} />
          <Route path="/fetch-breed/:breed" exact component={BreedImages} />
        </Route>
        {/* <Route> */}
        {/*  <Route path="/fetch-post" exact component={PostList} /> */}
        {/*  /!* <Route path="/fetch-post/:id" exact component={BreedImages} /> *!/ */}
        {/* </Route> */}
        <Route path="*" component={(): ReactElement => <div>404 --</div>} />
      </Switch>

      {/* <Route path="/fetch-breed"> */}
      {/*  <Route path="/fetch-breed/"> */}
      {/*    <BreedList /> */}
      {/*  </Route> */}
      {/*  <Route path="/fetch-breed/teste"> */}
      {/*    <BreedImages /> */}
      {/*  </Route> */}
      {/* </Route> */}
      {/* <Route */}
      {/*  path="/fetch-breed" */}
      {/*  render={({ match: { url } }): ReactElement => ( */}
      {/*    <> */}
      {/*      <Route path={`${url}/`} component={BreedList} exact /> */}
      {/*      <Route path={`${url}/images`} component={BreedImages} /> */}
      {/*    </> */}
      {/*  )} */}
      {/* /> */}
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

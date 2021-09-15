import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';
import ArticlesDetialsView from './containers/ArticlesDetialsView';
import CustomForm from './Components/Form';

const App = () => {
  return (
    <Switch>
      <Route exact path="/new" component={CustomForm} />
      <CustomLayout>
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/:articleID" component={ArticlesDetialsView} />
      </CustomLayout>
    </Switch>
  );
};

export default App;

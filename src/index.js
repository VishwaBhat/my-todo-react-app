import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Main from './components/Main';
import TodoPage from './components/TodoPage';
import Archives from './components/Archives';
import Settings from './components/Settings';


ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<IndexRoute component={TodoPage}/>
  		//<Route path="archives" name="archives" component={Archives}/>
  		<Route path="settings" name="settings" component={Settings}/>
  	</Route>
  </Router>,
  document.getElementById('root')
);

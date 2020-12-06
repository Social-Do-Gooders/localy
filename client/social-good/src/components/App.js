import {Switch, Route} from 'react-router-dom';
import Header from './utils/Header';
import Home from './home/Home';
import List from './grid/List';

import '../css/general.css';
import '../css/component.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/business'>
          <List feature='business'/>
        </Route>

        <Route exact path='/meetups'>
          <List feature='meetups'/>
        </Route>

        <Route exact path='/news'>
          <List feature='news'/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;

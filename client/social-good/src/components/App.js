import {Switch, Route} from 'react-router-dom';
import Header from './utils/Header';
import Footer from './utils/Footer';
import Home from './home/Home';
import List from './grid/List';
import Item from './item/Item';
import Display from './Articles/Display'

import '../css/general.css';
import '../css/grid.css';
import '../css/home.css';
import '../css/utils.css';
import '../css/item.css';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/organization'>
          <List feature='organization'/>
        </Route>

        <Route exact path='/meetup'>
          <List feature='meetup'/>
        </Route>

        <Route exact path='/news'>
          <Display/>
        </Route>

        <Route exact path='/:feature/:id'>
          <Item />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

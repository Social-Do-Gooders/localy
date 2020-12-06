import {Switch, Route} from 'react-router-dom';
import Header from './utils/Header';
import Home from './home/Home';
import Business from './business/Business';
import Meetups from './meetups/Meetups';
import News from './news/News';
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
          <Business />
        </Route>

        <Route exact path='/meetups'>
          <Meetups />
        </Route>

        <Route exact path='/news'>
          <News />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

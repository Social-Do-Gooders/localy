import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Tech from './Tech';
import Science from './Science';
import Business from './Business';


function Display() {
  return (
    <div>
        <h2>Select a news Category</h2>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/business/">Business</Link>
            </li>
            <li>
              <Link to="/tech/">Tech</Link>
            </li>
            <li>
              <Link to="/science/">Science </Link>
            </li>

          </ul>
        </nav>
      </div>
    

      <Route path="/business/" exact component={Business}/>
      <Route path="/tech/" exact component={Tech}/>
      <Route path="/science/" exact component={Science}/>

    </Router>
    </div>
  )
}
export default Display;
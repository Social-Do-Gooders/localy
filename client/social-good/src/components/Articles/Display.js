import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Tech from './Tech';
import Science from './Science';
import Business from './Business';



class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideTech: false,
      showHideScience: false,
      showHideBusiness: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideTech":
        this.setState({ showHideTech: !this.state.showHideTech });
        break;
      case "showHideScience":
        this.setState({ showHideScience: !this.state.showHideScience });
        break;
      case "showHideBusiness":
        this.setState({ showHideBusiness: !this.state.showHideBusiness });
        break;

    }
  }

  render() {
    const { showHideTech, showHideScience, showHideBusiness } = this.state;
    return (

      <div>
         <h3 className='list-title'>Showing News list</h3>
        <div className='bg-light filter'>
          <p className='filter-title'><em>Filters</em></p>
          <div className='filter-flex'>
            <div className='filter-inner-bar'>
              <button type="button" className="btn btn-light filter-item" onClick={() => this.hideComponent("showHideTech")}>
                Tech News
              </button>
              <button type="button" className="btn btn-light filter-item" onClick={() => this.hideComponent("showHideScience")}>
                Science News
              </button>
              <button type="button" className="btn btn-light filter-item" onClick={() => this.hideComponent("showHideBusiness")}>
                Business News
              </button>
            </div>
          </div>
        </div>
        {showHideTech && <Tech /> }
        {showHideScience && <Science />}
        {showHideBusiness && <Business />}
      </div>
    );
  }
}
export default Display;
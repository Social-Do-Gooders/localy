import {Link} from 'react-router-dom';


function Header(){

  return(
  <div className='header-item'>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand text-white" to='/'>Logo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to='/business'>Businesses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/meetups'>Meetups</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/news'>News</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default Header;

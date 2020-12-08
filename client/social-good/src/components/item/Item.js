import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import placeholder1 from '../../images/carousel/placeholder1.jpg';

function Item(){

  const {feature} = useParams();

  useEffect(() => {
    window.scrollTo(0,0);

  }, []);

  const dummyAddress = 'Lorem ipsum dolor sit amet';
  const tag = 'Ipsum elit';
  const owner = 'Lorem ipsum';

  let action;

  if(feature === 'organization'){
    action = 'Fund organization';
  }else{
    action = 'Attend meetup';
  }

  return(
    <div className='app-container item'>
      <img src={placeholder1} alt='dummy' />
      <h2>Name of Organization</h2>
      <hr />

      <div className='item-pill-group'>
        <div className='bg-light item-pill'>Organization top official: <em>{owner}</em></div>
        <div className='bg-light item-pill'>Organization type: <em>{tag}</em></div>
      </div>

      <h5>About the organization</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p>Address of {feature}: <em>{dummyAddress}</em></p>

      <button type="button" className='app-btn'>{action}</button>

    </div>
  )
}

export default Item;

import {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import placeholder1 from '../../images/carousel/placeholder1.jpg';

function Item(){

  const {feature} = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);

  }, []);

  let item = location.state.item;
  const dummyAddress = 'Lorem ipsum dolor sit amet';
  const dummyTag = 'Ipsum elit';
  const dummyOwner = 'Lorem ipsum';

  let address, tag, owner, orgName, imgSrc, about;

  if(feature === 'organization' && item){
    address = item.address;
    tag = item.organization_type;
    owner = item.owner;
    orgName = item.name;
    imgSrc = item.image_url;
    about = item.about;
  }else{
    address = dummyAddress;
    tag = dummyTag;
    owner = dummyOwner;
    orgName = 'Name of Organization';
    imgSrc = placeholder1;
    about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  }

  let action;

  if(feature === 'organization'){
    action = 'Fund organization';
  }else{
    action = 'Attend meetup';
  }

  return(
    <div className='app-container item'>
      <img src={imgSrc} alt='dummy' />
      <h2>{orgName}</h2>
      <hr />

      <div className='item-pill-group'>
        <div className='bg-light item-pill'>Organization top official: <em>{owner}</em></div>
        <div className='bg-light item-pill'>Organization type: <em>{tag}</em></div>
      </div>

      <h5>About the organization</h5>
      <p>
        {about}
      </p>

      <p>Address of {feature}: <em>{address}</em></p>

      <button type="button" className='app-btn'>{action}</button>

    </div>
  )
}

export default Item;

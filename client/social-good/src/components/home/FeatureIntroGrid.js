import {useHistory} from 'react-router-dom';
import placeholder1 from '../../images/carousel/placeholder1.jpg';
import placeholder2 from '../../images/carousel/placeholder2.jpg';
import placeholder3 from '../../images/carousel/placeholder3.jpg';


function FeatureIntroGrid({feature, altText, btnText}){
  let history = useHistory();

  let data = [1,2,3,4,5,6];
  let imgSrc;

  switch(feature){
    case 'organization':
    imgSrc = placeholder1;
    break;

    case 'meetup':
    imgSrc = placeholder2;
    break;

    case 'news':
    imgSrc = placeholder3;
    break;

    default:
    imgSrc = placeholder1;
  }

  function handleOnClick(){
    history.push(feature);
  }

  return (
    <div className='intro-grid app-color'>
      <div className='app-container'>
        <div className='intro-grid-scroll'>
          {data.map((item, index) => <div className='intro-grid-img-contain'>
            <img key={index} src={imgSrc} loading='lazy'
            className='intro-grid-img' alt={altText}/>
            <p className='intro-grid-img-content'>Name of object</p>
          </div>)}
        </div>
        <button type="button" className="app-btn" onClick={handleOnClick}>{btnText}</button>
      </div>
    </div>
  );
}

export default FeatureIntroGrid;

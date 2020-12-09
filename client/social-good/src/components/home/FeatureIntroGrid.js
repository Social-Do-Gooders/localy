import {useHistory} from 'react-router-dom';
import IntroCard from './IntroCard';

function FeatureIntroGrid({feature, btnText, data}){
  const history = useHistory();
  let customData;

  switch(feature){
    case 'news':
    customData = data.news;
    break;

    default:
    customData = data.meetups;
  }

  if(customData.length > 6){
    customData = customData.slice(0,7);
  }

  function handleBtnOnClick(){
    history.push(feature);
  }

  return (
    <div className='intro-grid app-color'>
      <div className='app-container'>
        <div className='intro-grid-scroll'>
          {customData.map((item, index) => <div key={'introGrid'+index} className='intro-grid-img-contain'>
            <IntroCard feature={feature} id={index} item={item}/>
          </div>)}
        </div>
        <button type="button" className="app-btn" onClick={handleBtnOnClick}>{btnText}</button>
      </div>
    </div>
  );
}

export default FeatureIntroGrid;

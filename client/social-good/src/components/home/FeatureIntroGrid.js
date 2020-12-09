import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import IntroCard from './IntroCard';

import placeholder1 from '../../images/carousel/placeholder1.jpg';
import placeholder2 from '../../images/carousel/placeholder2.jpg';
import placeholder3 from '../../images/carousel/placeholder3.jpg';


function FeatureIntroGrid({feature, btnText}){
  const history = useHistory();
  let state = useSelector(state => state);

  let dummyData = [1,2,3,4,5,6];
  let title = 'Name of object';

  let data;
  let imgSrc;

  data = dummyData

  if(feature === 'news'){
    data = state.news;
  }

  function handleBtnOnClick(){
    history.push(feature);
  }

  return (
    <div className='intro-grid app-color'>
      <div className='app-container'>
        <div className='intro-grid-scroll'>
          {data.map((item, index) => <div key={'introGrid'+index} className='intro-grid-img-contain'>
            <IntroCard feature={feature} id={index} item={item}/>
          </div>)}
        </div>
        <button type="button" className="app-btn" onClick={handleBtnOnClick}>{btnText}</button>
      </div>
    </div>
  );
}

export default FeatureIntroGrid;

import React from 'react';
import placeholder1 from '../../images/carousel/placeholder1.jpg';
import placeholder2 from '../../images/carousel/placeholder2.jpg';
import placeholder3 from '../../images/carousel/placeholder3.jpg';


function FeatureIntroGrid({feature}){
  let data = [1,2,3,4,5,6];
  let imgSrc;
  let altText;

  switch(feature){
    case 'fund':
    imgSrc = placeholder1;
    altText = 'local businesses';
    break;

    case 'schedule':
    imgSrc = placeholder2;
    altText = 'meetups';
    break;

    case 'news':
    imgSrc = placeholder3;
    altText = 'business news';
    break;

    default:
    imgSrc = placeholder1;
    altText = 'local businesses';
  }

  return (
    <div className='intro-grid app-color'>

      <div className='app-container'>
        <div className='intro-grid-scroll'>
          {data.map((item, index) => <img key={index} src={imgSrc} className='intro-grid-img' alt={altText}/>)}
        </div>
        <button type="button" className="intro-btn">Success</button>
      </div>

    </div>
  );
}

export default FeatureIntroGrid;

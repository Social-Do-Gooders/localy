import React from 'react';
import placeholder1 from '../../images/carousel/placeholder1.jpg';
import placeholder2 from '../../images/carousel/placeholder2.jpg';
import placeholder3 from '../../images/carousel/placeholder3.jpg';


function FeatureIntroGrid({feature, altText, btnText}){
  let data = [1,2,3,4,5,6];
  let imgSrc;

  switch(feature){
    case 'fund':
    imgSrc = placeholder1;
    break;

    case 'schedule':
    imgSrc = placeholder2;
    break;

    case 'news':
    imgSrc = placeholder3;
    break;

    default:
    imgSrc = placeholder1;
  }

  return (
    <div className='intro-grid app-color'>
      <div className='app-container'>
        <div className='intro-grid-scroll'>
          {data.map((item, index) => <div className='intro-grid-img-contain'>
            <img key={index} src={imgSrc}
            className='intro-grid-img' alt={altText}/>
            <p className='intro-grid-img-content'>Name of object</p>
          </div>)}
        </div>
        <button type="button" className="intro-btn">{btnText}</button>
      </div>
    </div>
  );
}

export default FeatureIntroGrid;

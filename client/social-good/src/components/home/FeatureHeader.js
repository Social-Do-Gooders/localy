import React from 'react';
import placeholder1 from '../../images/carousel/placeholder1.jpg';
import placeholder2 from '../../images/carousel/placeholder2.jpg';
import placeholder3 from '../../images/carousel/placeholder3.jpg';

function FeatureHeader({text, feature}){
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

  return(
    <div className='feature-header'>
      <p className='feature-header-icon'><img src={imgSrc}/></p>
      <h1 className='feature-text'>{text}</h1>
    </div>
  );
}

export default FeatureHeader;

import React from 'react';
import fund from '../../images/home-icons/fund.svg';
import meeting from '../../images/home-icons/meeting.svg';
import news from '../../images/home-icons/newspaper.svg';

function FeatureHeader({text, feature}){
  let imgSrc;

  switch(feature){
    case 'fund':
    imgSrc = fund;
    break;

    case 'schedule':
    imgSrc = meeting;
    break;

    case 'news':
    imgSrc = news;
    break;

    default:
    imgSrc = fund;
  }

  return(
    <div className='feature-header'>
      <p ><img src={imgSrc} className='feature-header-icon' alt='feature icon'/></p>
      <h1 className='feature-text'>{text}</h1>
    </div>
  );
}

export default FeatureHeader;

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
    <div className='app-container'>
      <div className='feature-header'>
        <img src={imgSrc} className='feature-header-icon' alt='feature icon'/>
        <p className='feature-text'>{text}</p>
      </div>
    </div>
  );
}

export default FeatureHeader;

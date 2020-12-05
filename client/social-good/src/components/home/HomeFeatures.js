import React from 'react';
import FeatureHeader from './FeatureHeader';
import FeatureIntroGrid from './FeatureIntroGrid';

function HomeFeatures() {
  let features = [
    {
      header: 'First header',
      feature: 'fund'
    }, {
      header: 'Second header',
      feature: 'schedule'
    }, {
      header: 'Third header',
      feature: 'news'
    }
  ]

  return (<div>
    {
      features.map((item,index) => <div>
        <FeatureHeader key={index} text={item.header} feature={item.feature}/>
        <FeatureIntroGrid key={index} feature={item.feature}/>
        {index !== features.length-1 && <hr className='app-rule'/>}
      </div>)
    }
  </div>);
}

export default HomeFeatures;

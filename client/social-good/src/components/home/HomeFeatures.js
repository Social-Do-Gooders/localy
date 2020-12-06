import FeatureHeader from './FeatureHeader';
import FeatureIntroGrid from './FeatureIntroGrid';

function HomeFeatures() {
  let features = [
    {
      feature: 'fund',
      header: 'Donate to local institutions, such as businesses, schools, hospitals and more, to help grow such institutions. You can help by donating money or offering services',
      altText: 'local businesses',
      btnText: 'See more local businesses to fund',
    }, {
      feature: 'schedule',
      header: 'Schedule knowledge sharing meetups in your locality, such as conferences, workshops and more, to help increase the skills and knowledge of business owners in your locality. You can also attend such meetups already scheduled in your locality',
      altText: 'meetups',
      btnText: 'See more meetups to attend',
    }, {
      feature: 'news',
      header: 'Get the latest news on what is happening in the world of business and have up-to-date knowledge to help you in positioning your business for the future',
      altText: 'business news',
      btnText: 'See more business articles',
    }
  ]

  return (<div>
    {
      features.map((item,index) => <div>
        <FeatureHeader key={index} text={item.header} feature={item.feature}/>
        <FeatureIntroGrid key={index} feature={item.feature}
          altText={item.altText} btnText={item.btnText}/>
        {index !== features.length-1 && <hr className='app-rule'/>}
      </div>)
    }
  </div>);
}

export default HomeFeatures;

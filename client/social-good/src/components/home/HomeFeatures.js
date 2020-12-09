import FeatureHeader from './FeatureHeader';
import FeatureIntroGrid from './FeatureIntroGrid';

function HomeFeatures() {
  let features = [
    {
      feature: 'organization',
      header: 'Donate to local organizations, such as businesses, schools, hospitals and more, to help grow such institutions. You can help by donating money or offering services',
      btnText: 'See more local organizations to fund',
    }, {
      feature: 'meetup',
      header: 'Schedule knowledge sharing meetups in your locality, such as conferences, workshops and more, to help increase the skills and knowledge of business owners in your locality. You can also attend such meetups already scheduled in your locality',
      btnText: 'See more meetups to attend',
    }, {
      feature: 'news',
      header: 'Get the latest news on what is happening in the world of business and have up-to-date knowledge to help you in positioning your business for the future',
      btnText: 'See more news articles',
    }
  ]

  return (<div>
    {
      features.map((item,index) => <div key={'home'+index}>
        <FeatureHeader text={item.header} feature={item.feature}/>
        <FeatureIntroGrid feature={item.feature} btnText={item.btnText}/>
        {index !== features.length-1 && <hr className='app-rule'/>}
      </div>)
    }
  </div>);
}

export default HomeFeatures;

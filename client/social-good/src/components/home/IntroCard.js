import {useHistory} from 'react-router-dom';
import defaultImg from '../../images/general/placeholder1.jpg';

function IntroCard({feature, id, item}){
  const history = useHistory();

  let cardTitle;
  let handleOnClick = defaultOnClick;
  let imgSrc;

  if(feature === 'news'){
    cardTitle = item.newsTitle;
    imgSrc = item.imgUrl? item.imgUrl: defaultImg;
    handleOnClick = newsOnClick;

  }else if(feature === 'organization'){
    cardTitle = item.name;
    imgSrc = item.image_url;

  }else{
    cardTitle = 'Name of object';
    imgSrc = defaultImg;
  }

  function newsOnClick(){
    window.open(item.newsUrl, '_blank');
  }

  function defaultOnClick(){
    let param = feature === 'organization'? item.name: id;
    history.push({
      pathname: `${feature}/${param}`,
      state: {item}
    });
  }

  const max = 30;
  cardTitle = cardTitle.length > max? cardTitle.substr(0, max) + "..." : cardTitle;

  return(
    <div  onClick={handleOnClick}>
      <img src={imgSrc} loading='lazy' className='intro-grid-img' alt={cardTitle}/>

      <p className='intro-grid-img-content'>{cardTitle}</p>
    </div>
  )
}

export default IntroCard;

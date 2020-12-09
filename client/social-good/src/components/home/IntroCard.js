import {useHistory} from 'react-router-dom';
import defaultImg from '../../images/general/placeholder1.jpg';

function IntroCard({feature, id, item}){
  const history = useHistory();

  const max = 30;
  let cardTitle;
  let handleOnClick;
  let imgSrc = item.imgUrl? item.imgUrl: defaultImg;

  if(feature === 'news'){
    cardTitle = item.newsTitle;
    handleOnClick = newsOnClick;
  }else{
    cardTitle = 'Name of object';
    handleOnClick = defaultOnClick
  }

  function newsOnClick(){
    window.open(item.newsUrl, '_blank');
  }

  function defaultOnClick(){
    history.push(`${feature}/${id}`);
  }

  cardTitle = cardTitle.length > max? cardTitle.substr(0, max) + "..." : cardTitle;

  return(
    <div  onClick={handleOnClick}>
      <img src={imgSrc} loading='lazy' className='intro-grid-img' alt={cardTitle}/>

      <p className='intro-grid-img-content'>{cardTitle}</p>
    </div>
  )
}

export default IntroCard;

import {useHistory} from 'react-router-dom';
import defaultImg from '../../images/carousel/placeholder1.jpg';

function Card({feature, item, id}){
  let history = useHistory();

  let cardTitle;
  let handleOnClick;
  let imgSrc = item.imgUrl? item.imgUrl: defaultImg;
  let dummyTitle = "Aliquam ligula libero nunc at mi viverra tincidunt.";

  if(feature === 'news'){
    cardTitle = item.newsTitle;
    handleOnClick = newsOnClick;
  }else{
    cardTitle = dummyTitle;
    handleOnClick = defaultOnClick;
  }

  let max = 50;
  cardTitle = cardTitle.length > max? cardTitle.substr(0, max) + "..." : cardTitle;

  function newsOnClick(){
    window.open(item.newsUrl, '_blank');
  }

  function defaultOnClick(){
    history.push(`${feature}/${id}`);
  }

  return(
    <div className="card grid-card" onClick={handleOnClick}>
      <img src={imgSrc} loading='lazy' className="card-img-top" alt={feature}/>

      <div className="card-body">
        <p className="card-text">{cardTitle}</p>
      </div>
    </div>
  )
}

export default Card;

import {useHistory} from 'react-router-dom';
import defaultImg from '../../images/general/placeholder1.jpg';

function Card({feature, item, id}){
  let history = useHistory();

  let cardTitle;
  let handleOnClick = defaultOnClick;
  let imgSrc;
  let dummyTitle = "Aliquam ligula libero nunc at mi viverra tincidunt.";

  if(feature === 'news'){
    cardTitle = item.newsTitle;
    handleOnClick = newsOnClick;
    imgSrc = item.imgUrl? item.imgUrl: defaultImg;

  }else if(feature === 'organization'){
    cardTitle = item.name? item.name: dummyTitle;
    imgSrc = item.image_url? item.image_url: defaultImg;

  }else{
    cardTitle = dummyTitle;
    imgSrc = defaultImg;
  }

  let max = 50;
  cardTitle = cardTitle.length > max? cardTitle.substr(0, max) + "..." : cardTitle;

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

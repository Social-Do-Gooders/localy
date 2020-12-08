import {useHistory} from 'react-router-dom';

function Card({feature, imgSrc, title, id}){
  let history = useHistory();

  let max = 50;
  let cardTitle = title.length > max? title.substr(0, max) + "..." : title;

  function handleOnClick(){
    history.push(`${feature}/${id}`);
  }

  return(
    <div className="card grid-card">
      <img src={imgSrc} loading='lazy' onClick={handleOnClick}
        className="card-img-top" alt={feature}/>

      <div className="card-body">
        <p className="card-text">{cardTitle}</p>
      </div>
    </div>
  )
}

export default Card;

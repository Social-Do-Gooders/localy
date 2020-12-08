import {useHistory} from 'react-router-dom';

function IntroCard({feature, imgSrc, id, altText, title}){
  const history = useHistory();

  const max = 30;
  const cardTitle = title.length > max? title.substr(0, max) + "..." : title;

  function handleCardOnClick(){
    history.push(`${feature}/${id}`);
  }

  return(
    <div  onClick={handleCardOnClick}>
      <img src={imgSrc} loading='lazy' className='intro-grid-img' alt={altText}/>

      <p className='intro-grid-img-content'>{cardTitle}</p>
    </div>
  )
}

export default IntroCard;

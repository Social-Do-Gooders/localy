import image from '../../images/carousel/placeholder1.jpg';

function Card({feature}){

  return(
    <div>
      <div className="card">
        <img src={image} className="card-img-top grid-card" alt={feature}/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

    </div>
  )
}

export default Card;

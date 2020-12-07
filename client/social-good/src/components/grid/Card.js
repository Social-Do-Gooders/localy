
function Card({feature, imgSrc, title}){
  let max = 50;
  let cardTitle = title.length > max? title.substr(0, max) + "..." : title;

  return(
    <div>
      <div className="card grid-card">
        <img src={imgSrc} className="card-img-top" alt={feature}/>
          <div className="card-body">
            <p className="card-text">{cardTitle}</p>
          </div>
        </div>

    </div>
  )
}

export default Card;

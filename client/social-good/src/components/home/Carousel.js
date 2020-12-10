import fund from '../../images/carousel/fund.jpg';
import meetup from '../../images/carousel/meetup.jpg';
import news from '../../images/carousel/news.jpg';


function Carousel(){

  return (
    <div className='app-container carousel-comp'>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={fund} loading='lazy' className="carousel-img" alt="placeholder"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Help a local organizations with funding</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={meetup} loading='lazy' className="carousel-img" alt="placeholder"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Attend knowledge sharing meetups in your locality</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={news} loading='lazy' className="carousel-img" alt="placeholder"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Get caught up with the latest business news</h5>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
}


export default Carousel;

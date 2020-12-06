import placeholder1 from '../../images/carousel/placeholder1.jpg';
import placeholder2 from '../../images/carousel/placeholder2.jpg';
import placeholder3 from '../../images/carousel/placeholder3.jpg';


function Carousel(){

  return (
    <div className='app-container carousel-comp'>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={placeholder1} className="carousel-img" alt="placeholder"/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Help a local business with funding</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={placeholder2} className="carousel-img" alt="placeholder"/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Attend knowledge sharing meetups in your locality</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={placeholder3} className="carousel-img" alt="placeholder"/>
          <div class="carousel-caption d-none d-md-block">
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

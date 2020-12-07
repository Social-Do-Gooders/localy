import Card from './Card';
import Filter from './Filter';
import image from '../../images/carousel/placeholder1.jpg';

function List({feature}) {
  let data = [1,2,3,4,5,6,7,8];
  let dummyTitle = "Aliquam ligula libero, hendrerit a leo id, porttitor ultricies neque. Nulla eget enim mattis, condimentum ligula at, gravida arcu. Proin consectetur commodo porttitor. Curabitur tempus gravida quam vel pulvinar. Sed sem nisl, rutrum quis pharetra in, ullamcorper sed sapien. Donec egestas nunc at mi viverra tincidunt.";

  return (
    <div>
      <Filter feature={feature}/>    
      <div className='app-container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>

          {data.map((item, index) => <div key={index} className='col'>
            <Card feature={feature} imgSrc={image} title={dummyTitle}/>
          </div>)}

        </div>

      </div>
    </div>
    );
}

export default List;

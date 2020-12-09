import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import Card from './Card';
import Filter from './Filter';
import image from '../../images/carousel/placeholder1.jpg';

function List({feature}) {

  let dataList = useSelector(state => state.news);

  useEffect(() => {
    window.scrollTo(0,0);

  }, []);

  let dummyTitle = "Aliquam ligula libero, hendrerit a leo id, porttitor ultricies neque. Nulla eget enim mattis, condimentum ligula at, gravida arcu. Proin consectetur commodo porttitor. Curabitur tempus gravida quam vel pulvinar. Sed sem nisl, rutrum quis pharetra in, ullamcorper sed sapien. Donec egestas nunc at mi viverra tincidunt.";

  return (
    <div>
      <h3 className='list-title'>Showing {feature} list</h3>
      <Filter feature={feature}/>
      <div className='app-container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>

          {dataList.map((item, index) => <div key={index} className='col'>
            <Card feature={feature} id={index} imgSrc={image} title={dummyTitle}/>
          </div>)}

        </div>

        <Pagination className='pagination' count={2} />
      </div>
    </div>
    );
}

export default List;

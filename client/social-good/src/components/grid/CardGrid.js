import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import Card from './Card';
import Loading from '../utils/Loading';
import {setNewsData} from '../../controllers/news';

function CardGrid({feature}){

  let state = useSelector(state => state);
  let dispatch = useDispatch();
  let [first, setFirst] = useState(false);
  let dummyData = [1,2,3,4,5,6];
  let data = dummyData;

  if(state[feature]){
    data = state[feature];
  }else{
    data = dummyData;
  }

  if(feature === 'news' && !first){
    setNewsData(dispatch, 'business');
    setFirst(true);
  }

  if(state.loading && feature === 'news'){
    return <Loading />
  }


  return(
    <div className='app-container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>

        {data.map((item, index) => <div key={index} className='col'>
          <Card feature={feature} id={index} item={item} />
        </div>)}

      </div>

      {feature !== 'news' && <Pagination className='pagination' count={2} />}
    </div>
  )
}

export default CardGrid;

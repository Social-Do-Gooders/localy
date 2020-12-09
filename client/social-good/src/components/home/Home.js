import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Carousel from './Carousel';
import HomeFeatures from './HomeFeatures';
import Loading from '../utils/Loading';
import {setInitial} from '../../controllers/home';

function Home(){
  let load = useSelector(state => state.loading);
  let dispatch = useDispatch();

  useEffect(() => {
    setInitial(dispatch);

  },[]);

  if(load){
    return <Loading />;
  }

  return(
    <div>
      <Carousel />
      <HomeFeatures />
    </div>
  );
}


export default Home;

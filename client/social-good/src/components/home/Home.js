import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setNews} from '../../store/actions/news';
import Carousel from './Carousel';
import HomeFeatures from './HomeFeatures';
import Loading from '../utils/Loading';

function Home(){

  let [load, setLoading] = useState(true);

  const dispatch = useDispatch();

  async function initialData(){
    const newsOptions = {
      'method': 'POST',
      'body': JSON.stringify({type: 'business'}),
      'headers': {
        'content-type': 'application/json',
      },
    };

    let response = await fetch('/server/news', newsOptions);
    let resList = await response.json();

    dispatch(setNews(resList));
    setLoading(false);

  }

  useEffect(() => {
    initialData();

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

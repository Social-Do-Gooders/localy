import {useEffect, useState} from 'react';
import Carousel from './Carousel';
import HomeFeatures from './HomeFeatures';
import Loading from '../utils/Loading';
import {setNewsInitial} from '../../controllers/home';

function Home(){
  let dummyData = [1,2,3,4,5,6];
  let [load, setLoad] = useState(true)
  let [data, setData] = useState({organization: dummyData, meetups: dummyData, news: dummyData});

  async function initial(){
    let newsList = await setNewsInitial();
    setData({...data, news: newsList});
    setLoad(false);
  }

  useEffect(() => {
    initial();

  },[]);

  if(load){
    return <Loading />;
  }

  return(
    <div>
      <Carousel />
      <HomeFeatures data={data}/>
    </div>
  );
}


export default Home;

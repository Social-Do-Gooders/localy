import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from './Card';
import Loading from '../utils/Loading';
import {setNewsData} from '../../controllers/news';
import {loading} from '../../store/actions/loading';
import {setOrgs} from '../../store/actions/organization';

function CardGrid({feature}){
  let dummyData = [1,2,3,4,5,6];

  let state = useSelector(state => state);
  let dispatch = useDispatch();
  let [first, setFirst] = useState({org: false, meetup: false, news: false});
  let data = dummyData;

  if(feature === 'news'){
    if(state.news){
      data = state.news;
    }
    if(!first.news){
      setNewsData(dispatch, 'business');
      setFirst({...first, news: true});
    }
  }else if(feature === 'organization'){
    if(state.organization){
      data = state.organization.filter;
    }
    if(!first.org){
      getOrgs();
    }

  }

  async function getOrgs(){
    dispatch(loading(true));
    let response = await fetch('/server/organization');
    let orgList = await response.json();
    setFirst({...first, org: true});
    dispatch(setOrgs(orgList));
    dispatch(loading(false));
  }


  if(state.loading){
    return <Loading />
  }

  return(
    <div className='app-container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>

        {data.map((item, index) => <div key={index} className='col'>
          <Card feature={feature} id={index} item={item} />
        </div>)}

      </div>

    </div>
  )
}

export default CardGrid;

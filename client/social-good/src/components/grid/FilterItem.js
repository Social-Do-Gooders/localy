import {useDispatch} from 'react-redux';
import {setNews} from '../../store/actions/news';

function FilterItem({item}){
  const dispatch = useDispatch();

  let first = [1,2,3,4,5,6,7,8];
  let second = [1,2,3,4,5,6,7,8,9,10,11,12];

  function handleOnClick(){
    dispatch(setNews(second));
  }

  if(item === 'time'){

    return(
      <div className="filter-time">
        <button className="btn btn-light dropdown-toggle filter-item" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {item}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <span className='dropdown-item'>Oldest</span>
          <div className='dropdown-divider'></div>
          <span className='dropdown-item'>Newest</span>
        </div>
      </div>
    )

  }

  return(
    <button type="button" className="btn btn-light filter-item" onClick={handleOnClick}>
      {item}
    </button>
  )
}

export default FilterItem;

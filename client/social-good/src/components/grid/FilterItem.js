import {useDispatch, useSelector} from 'react-redux';
import {setNewsData} from '../../controllers/news';
import {filterOrgs} from '../../store/actions/organization';

function FilterItem({item, feature}){
  const dispatch = useDispatch();
  let orgs = useSelector(state => state.organization);
  if(orgs){
    orgs = orgs.primary;
  }

  let handleOnClick;
  let customTitle;

  if(feature === 'news'){
    customTitle = `${item} news`;
    handleOnClick = newsOnClick;

  }else{
    customTitle = item;
    if(feature === 'organization'){
      handleOnClick = orgsOnClick;
    }else{
      handleOnClick = defaultOnClick;
    }
  }

  function newsOnClick(){
    setNewsData(dispatch, item);
  }

  function orgsOnClick(){
    if(orgs){
      orgs = orgs.filter(value => value.organization_type === item);
      dispatch(filterOrgs(orgs));
    }
  }

  function defaultOnClick(){

  }

  if(item === 'time'){

    return(
      <div className="filter-time">
        <button className="btn btn-light dropdown-toggle filter-item" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {customTitle}
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
    <button type="button" className="btn btn-light filter-item" onClick={handleOnClick} >
      {customTitle}
    </button>
  )
}

export default FilterItem;

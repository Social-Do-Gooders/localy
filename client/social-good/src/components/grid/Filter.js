import FilterItem from './FilterItem';
import {businessTags, meetupsTags, newsTags} from '../../tags';

function Filter({feature}){

  let filterItems;

  switch(feature){
    case 'business':
    filterItems = businessTags;
    break;

    case 'meetups':
    filterItems =  [...meetupsTags, 'time'] ;
    break;

    case 'news':
    filterItems = newsTags;
    break;

    default:
    filterItems = businessTags;
  }

  return (
    <div className='bg-light filter'>
      <div className='filter-inner-bar'>
        {filterItems.map((item, index) => <FilterItem key={index} item={item} />)}
      </div>


    </div>
  )
}

export default Filter;

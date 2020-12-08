import FilterItem from './FilterItem';
import {businessTags, meetupsTags, newsTags} from '../../tags';

function Filter({feature}){

  let filterItems;

  switch(feature){
    case 'organization':
    filterItems = businessTags;
    break;

    case 'meetup':
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
      <p className='filter-title'><em>Filters</em></p>
      <div className='filter-flex'>
        <div className='filter-inner-bar'>
          {filterItems.map((item, index) => <FilterItem key={index} item={item} />)}
        </div>
      </div>



    </div>
  )
}

export default Filter;

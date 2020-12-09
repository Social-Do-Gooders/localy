import {useEffect} from 'react';
import Filter from './Filter';
import CardGrid from './CardGrid';

function List({feature}) {

  useEffect(() => {
    window.scrollTo(0,0);

  }, []);

  return (
    <div>
      <h3 className='list-title'>Showing {feature} list</h3>
      <Filter feature={feature}/>
      <CardGrid feature={feature} />
    </div>
    );
}

export default List;

import Card from './Card';

function List({feature}) {
  let data = [1,2,3,4,5,6,7,8];

  return (
    <div className='app-container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>

        {data.map((item, index) => <div key={index} className='col'>
          <Card feature={feature}/>
        </div>)}

      </div>

    </div>
    );
}

export default List;

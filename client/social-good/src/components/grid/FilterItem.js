

function FilterItem({item}){

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
    <button type="button" className="btn btn-light filter-item">
      {item}
    </button>
  )
}

export default FilterItem;

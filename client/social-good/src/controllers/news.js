import {loading} from '../store/actions/loading';
import {setNews} from '../store/actions/news';

export async function setNewsData(dispatch, category){
  dispatch(loading(true));
  
  const newsOptions = {
    'method': 'POST',
    'body': JSON.stringify({type: category}),
    'headers': {
      'content-type': 'application/json',
    },
  };

  let response = await fetch('/server/news', newsOptions);
  let resList = await response.json();

  dispatch(setNews(resList));
  dispatch(loading(false));
}

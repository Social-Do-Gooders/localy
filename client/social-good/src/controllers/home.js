import {loading} from '../store/actions/loading';
import {setNews} from '../store/actions/news';

export async function setInitial(dispatch){
  const newsOptions = {
    'method': 'POST',
    'body': JSON.stringify({type: 'business'}),
    'headers': {
      'content-type': 'application/json',
    },
  };

  let response = await fetch('/server/news', newsOptions);
  let resList = await response.json();

  dispatch(setNews(resList));
  dispatch(loading(false));
}

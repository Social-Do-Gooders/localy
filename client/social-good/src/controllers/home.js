
export async function setNewsInitial(){
  const newsOptions = {
    'method': 'POST',
    'body': JSON.stringify({type: 'business'}),
    'headers': {
      'content-type': 'application/json',
    },
  };

  let response = await fetch('/server/news', newsOptions);
  let resList = await response.json();

  return resList;
}

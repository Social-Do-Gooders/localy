export function news(state=null, action){
  switch(action.type){
    case 'SET_NEWS':
    return [...action.articles]

    default:
    return state
  }
};

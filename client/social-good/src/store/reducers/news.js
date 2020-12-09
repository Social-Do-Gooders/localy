export function news(state=[], action){
  switch(action.type){
    case 'SET_NEWS':
    return [...action.articles]

    default:
    return state
  }
};

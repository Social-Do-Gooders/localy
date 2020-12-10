export function organization(state=null, action){
  switch(action.type){
    case 'SET_ORGS':
    return {primary: [...action.primary],
      filter: [...action.filter]
    };

    case 'FILTER_ORGS':
    return {primary: [...state.primary],
      filter: [...action.filter]
    };

    default:
    return state;
  }
};

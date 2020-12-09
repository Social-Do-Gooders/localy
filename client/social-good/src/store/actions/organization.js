export function setOrgs(orgs){
  return {
    type: 'SET_ORGS',
    primary: [...orgs],
    filter: [...orgs],
  }
};

export function filterOrgs(orgs){
  return {
    type: 'FILTER_ORGS',
    filter: [...orgs],
  }
};

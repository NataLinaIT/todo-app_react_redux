import * as actions from "../constants";

const BASE_FILTER = "all";

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case actions.CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};

export default filter;

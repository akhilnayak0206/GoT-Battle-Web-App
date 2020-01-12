import { ON_SEARCH } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ON_SEARCH:
      return payload;
    default:
      return state;
  }
}

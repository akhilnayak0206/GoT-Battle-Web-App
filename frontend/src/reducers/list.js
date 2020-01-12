import { ON_LIST } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ON_LIST:
      return payload;
    default:
      return state;
  }
}

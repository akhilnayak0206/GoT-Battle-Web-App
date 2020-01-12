import { ON_AUTOCOMPLETE } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ON_AUTOCOMPLETE:
      return payload;
    default:
      return state;
  }
}

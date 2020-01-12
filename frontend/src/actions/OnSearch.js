import { ON_SEARCH } from './types';
import axios from 'axios';

export const OnSearch = query => async dispatch => {
  try {
    let res = await axios.get(`/search?location=${query}`);

    dispatch({
      type: ON_SEARCH,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

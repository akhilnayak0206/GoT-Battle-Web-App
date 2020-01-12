import { ON_AUTOCOMPLETE } from './types';
import axios from 'axios';

export const OnAutocomplete = query => async dispatch => {
  try {
    let res;
    if (query) {
      res = await axios.get(`/list/autocomplete?autocomplete=${query}`);
    } else {
      res = await axios.get(`/list/autocomplete?autocomplete=`);
    }
    let tempArray = res.data;
    let tempLocation = [];
    tempArray.map(data => {
      tempLocation.push(data.location);
    });
    let final = new Set(tempLocation);
    let finalPayload = Array.from(final);
    dispatch({
      type: ON_AUTOCOMPLETE,
      payload: finalPayload
    });
  } catch (err) {
    console.log(err);
  }
};

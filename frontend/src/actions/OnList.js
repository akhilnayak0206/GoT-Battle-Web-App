import { ON_LIST } from './types';
import axios from 'axios';

export const OnList = () => async dispatch => {
  try {
    const res = await axios.get('/list');
    let tempArray = res.data;
    let tempLocation = [];
    tempArray.map(data => {
      tempLocation.push(data.location);
    });
    let final = new Set(tempLocation);
    let finalPayload = Array.from(final);
    finalPayload = finalPayload.filter(val => val);
    dispatch({
      type: ON_LIST,
      payload: finalPayload
    });
  } catch (err) {
    console.log(err);
  }
};

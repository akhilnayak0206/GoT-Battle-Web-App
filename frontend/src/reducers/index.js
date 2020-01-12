import { combineReducers } from 'redux';
import list from './list';
import autocomplete from './autocomplete';
import search from './search';

export default combineReducers({
  list,
  autocomplete,
  search
});

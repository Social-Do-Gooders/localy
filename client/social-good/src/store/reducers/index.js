import {combineReducers} from 'redux';
import {news} from './news';
import {loading} from './loading';

export default combineReducers({news, loading});

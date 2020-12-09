import {combineReducers} from 'redux';
import {news} from './news';
import {loading} from './loading';
import {organization} from './organization'

export default combineReducers({news, loading, organization});

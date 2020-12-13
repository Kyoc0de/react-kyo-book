//从redux-immutable引入的combineReducers自动immutable
import { combineReducers } from "redux-immutable";
import {headerReducer} from '../common/header/store'

//state在这里创建
const reducer =  combineReducers({
  header: headerReducer
})

export default reducer;

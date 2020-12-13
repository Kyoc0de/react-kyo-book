import {fromJS} from 'immutable'
import { SEARCH_FOCUSED,SEARCH_BLUR} from './constants'

const defaultState = fromJS({
  focused: false
});

function headerReducer(state= defaultState, action){
  switch(action.type){
    case SEARCH_FOCUSED:
      // 生成新的对象state.set('xxx', xxx)
      return state.set('focused', true)
    case SEARCH_BLUR: 
      return state.set('focused', false)
    default:
      return state;
}
}

export default headerReducer;
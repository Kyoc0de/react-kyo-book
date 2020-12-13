import {fromJS} from 'immutable'
import { SEARCH_FOCUSED,SEARCH_BLUR, CHANGE_LIST, MOUSEENTER, MOUSELEAVE,CHANGEPAGE} from './constants'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

function headerReducer(state= defaultState, action){
  switch(action.type){
    case SEARCH_FOCUSED:
      // 生成新的对象state.set('xxx', xxx)
      return state.set('focused', true)
    case SEARCH_BLUR: 
      return state.set('focused', false)
    case CHANGE_LIST:
      return state.merge({
        'list':action.data,
        'totalPage':action.totalPage
      })
      // return state.set('list', action.data).set('totalPage',action.totalPage)
    case MOUSEENTER: 
      return state.set('mouseIn', true)
    case MOUSELEAVE:
      return state.set('mouseIn', false)
    case CHANGEPAGE:
      return state.set('page', action.page)
    default:
      return state;
}
}

export default headerReducer;
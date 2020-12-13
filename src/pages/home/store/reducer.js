import { fromJS } from 'immutable'
import {GET_HOMEPAGE_INFO} from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  witerList: []

})

function homeReducer(state = defaultState, action){
  switch(action.type){
    case GET_HOMEPAGE_INFO:
      // return state.set('topicList',action.topicList)
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        witerList: action.witerList
      })
    default: 
      return state;
  }
}

export default homeReducer
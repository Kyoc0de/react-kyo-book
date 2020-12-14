import { fromJS } from 'immutable'
import {GET_HOMEPAGE_INFO,GET_MORE_LIST} from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  witerList: [],
  articlePage: 1,
  showScroll: true
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
    case GET_MORE_LIST:
      return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      })
    default: 
      return state;
  }
}

export default homeReducer
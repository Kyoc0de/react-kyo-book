import axios from 'axios'
import { fromJS, List}  from 'immutable'
import { GET_HOMEPAGE_INFO, GET_MORE_LIST } from './constants'


const changeHomePageInfo = (data) =>({
  type: GET_HOMEPAGE_INFO,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList),
  witerList: fromJS(data.witerList)

})

const changeMoreList = (data, nextPage) =>({
  type: GET_MORE_LIST,
  list: fromJS(data.articleList),
  nextPage
})

export const getHomePageInfo = () => {
  return (dispatch) => {
    // console.log('getList');
    axios.get('/api/home.json').then((res)=>{
      const data = res.data.data
      // console.log(data);
      dispatch(changeHomePageInfo(data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/home.json?page='+page).then((res)=>{
      const data = res.data.data
      dispatch(changeMoreList(data,page+1))
    })
  }
}
import axios from 'axios'
import { fromJS}  from 'immutable'
import { GET_HOMEPAGE_INFO } from './constants'


const changeHomePageInfo = (data) =>({
  type: GET_HOMEPAGE_INFO,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList),
  witerList: fromJS(data.witerList)

})

export const getHomePageInfo = () => {
  return (dispatch) => {
    // console.log('getList');
    axios.get('/api/home.json').then((res)=>{
      const data = res.data.data
      console.log(data);
      dispatch(changeHomePageInfo(data))
    }).catch((err)=>{
      console.log(err);
    })
  }
}
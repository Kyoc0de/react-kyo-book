import axios from 'axios'
import { fromJS} from 'immutable'
import { SEARCH_FOCUSED,SEARCH_BLUR,CHANGE_LIST,MOUSEENTER,MOUSELEAVE,CHANGEPAGE } from './constants'

export const searchFocus = () => ({
  type: SEARCH_FOCUSED
})

export const searchBlur = () => ({
  type: SEARCH_BLUR
})

export const mouseEnter = () =>({
  type: MOUSEENTER
})

export const mouseLeave = () =>({
  type: MOUSELEAVE
})

export const changePage = (page) => ({
  type: CHANGEPAGE,
  page
})

const changeList = (data) =>({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const getList = () => {
  return (dispatch) => {
    // console.log('getList');
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data.data
      dispatch(changeList(data))
    }).catch(()=>{
      console.log('error');
    })
  }
}
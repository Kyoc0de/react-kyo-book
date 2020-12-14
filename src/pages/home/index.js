import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
 } from './style'

// function handleScrollTop(){
//   window.scrollTo(0,0)
// }

function Home(){
  const showScroll = useSelector((state)=>state.getIn(['home','showScroll']))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreators.getHomePageInfo())
  })
  // useEffect(()=>{
  //   window.addEventListener('scroll')
  //   dispatch()
  // })


  return(
    <HomeWrapper>
      <HomeLeft>
        <img className="banner-img" src="https://www.iyunying.org/wp-content/uploads/2017/06/17357cc23f05d1007221a24902074a26.png" alt="banner"></img>
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
      {
        showScroll?<BackTop onClick={()=>{
          // handleScrollTop()
          window.scrollTo(0,0)
        }}>顶部</BackTop>:null
      }
      
    </HomeWrapper>
  )
}

export default Home;
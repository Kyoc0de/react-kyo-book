import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
 } from './style'

function Home(){
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
    </HomeWrapper>
  )
}

export default Home;
import { useDispatch, useSelector } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem,
} from "../style";

function Recommened(){
  const recommendList = useSelector(state=>state.getIn(['home','recommendList']))
  return(
    <RecommendWrapper>
    {recommendList.map((item,index) => {
        return <RecommendItem imgUrl={item.get('imgUrl')} key={index}/>
    })}
</RecommendWrapper>
  )
}

export default Recommened
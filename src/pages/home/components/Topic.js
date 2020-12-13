import { useDispatch, useSelector } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'

function Topic() {
  const topicList = useSelector(state => state.getIn(['home', 'topicList']))
  const dispatch = useDispatch()
  return (
    <TopicWrapper>
      {
        topicList.map((item,index) => {
          return (
            <TopicItem key={index}>
              <img className="topic-pic" src={item.get('imgUrl')} alt="tag" />
              {item.get('title')}</TopicItem>
          )
        })
      }

    </TopicWrapper>

  )
}

export default Topic
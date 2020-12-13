import {  useSelector } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'

function Topic() {
  const topicList = useSelector(state => state.getIn(['home', 'topicList']))
  // const dispatch = useDispatch()
  return (
    <TopicWrapper>
      {
        topicList.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
              <img className="topic-pic" src={item.get('imgUrl')} alt="tag" />
              {item.get('title')}
              </TopicItem>
          )
        })
      }

    </TopicWrapper>

  )
}

export default Topic
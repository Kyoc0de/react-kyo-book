import { useDispatch, useSelector } from 'react-redux';
import { ListItem, ListInfo,LoadMore } from '../style'
import { actionCreators } from '../store'

function List() {
  const dispatch = useDispatch()
  const articleList = useSelector((state) => state.getIn(['home', 'articleList']))
  const articlePage = useSelector((state) => state.getIn(['home','articlePage']))
  return (
    <>
      {
        articleList.map((item, index) => {
          return (
            <ListItem key={index}>
              <img className='pic' src={item.get('imgUrl')} alt="" />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })
      }
      <LoadMore onClick={()=>{
        dispatch(actionCreators.getMoreList(articlePage))
      }}>更多内容</LoadMore>
    </>
  )
}

export default List
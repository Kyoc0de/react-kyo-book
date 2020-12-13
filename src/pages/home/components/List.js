import { useDispatch, useSelector } from 'react-redux';
import { ListItem, ListInfo } from '../style'


function List() {
  const articleList = useSelector((state) => state.getIn(['home', 'articleList']))
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

    </>
  )
}

export default List
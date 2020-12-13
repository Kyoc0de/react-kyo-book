import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "涩会二店",
    imgUrl: 'https://cdn2.hubspot.net/hub/127518/file-978936003-jpg/images/gift_tag.jpg'
  },{
    id: 2,
    title: "涩会1店",
    imgUrl: 'https://cdn2.hubspot.net/hub/127518/file-978936003-jpg/images/gift_tag.jpg'
  }],
  articleList: [
    {
      id:1,
      title: 'test',
      desc: 'test',
      imgUrl: ''
    },
    {
      id:2,
      title: 'test',
      desc: 'test',
      imgUrl: ''
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: ''
    },
    {
      id: 2,
      imgUrl: ''
    }
  ]

})

function homeReducer(state = defaultState, action){
  switch(action.type){
    default: 
      return state;
  }
}

export default homeReducer
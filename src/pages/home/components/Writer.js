import {
  WriterWrapper,
  WriterItem,
  WriterInfoTitle,
  WriterInfoChange
} from '../style'

function Writer(){
  return(
    <WriterWrapper>
                <WriterInfoTitle>
                    推荐读者
                    {/* <WriterInfoChange onClick={() => handleChangeWriterInfo(this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}} className="spin iconfont">&#xe851;</i>
                        换一批
                    </WriterInfoChange> */}
                </WriterInfoTitle>
                {/* {
                    writerList.map((item) => {
                        return(
                            <WriterItem key={item.id}>
                                <img className='avatar' src={item.avatarUrl} alt=""/>
                                <div className='auth-info'>
                                    <div>
                                        <p className='nick_name'>{item.name}</p>
                                        <p className='add'>+关注</p>
                                    </div>
                                    <p className='desc'>{item.desc}</p>
                                </div>
                            </WriterItem>
                        );
                    })
                } */}
                <div className="view-all">查看全部</div>
            </WriterWrapper>
  )
}

export default Writer
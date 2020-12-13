import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'

const getListArea = (show, mouseIn, list, page, totalPage, dispatch) => {
    const newList = list.toJS();
    const pageList = []
    //需要优化
    if (newList.length) {
        for (let i = ((page - 1) * 10); i < page * 10; i++) {
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
    }
    if (show || mouseIn) {
        return (
            <SearchInfo
                onMouseEnter={() => {
                    dispatch(actionCreators.mouseEnter())
                }}
                onMouseLeave={() => {
                    dispatch(actionCreators.mouseLeave())
                }}
            >
                <SearchInfoTitle>热门搜索
                <SearchInfoSwitch onClick={() => {
                        // console.log(page,totalPage);
                        if (page < totalPage) {
                            dispatch(actionCreators.changePage(page + 1))
                        } else {
                            dispatch(actionCreators.changePage(1))
                        }
                    }}><SyncOutlined spin />换一批</SearchInfoSwitch>

                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        pageList
                    }
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}

function Header() {

    // const [focused, setFocused] = useState(false)
    const focused = useSelector(state => state.getIn(['header', 'focused']))
    const mouseIn = useSelector(state => state.getIn(['header', 'mouseIn']))
    // console.log(focused)
    const list = useSelector(state => state.getIn(['header', 'list']))
    const page = useSelector(state => state.getIn(['header', 'page']))
    const totalPage = useSelector(state => state.getIn(['header', 'totalPage']))
    const dispatch = useDispatch()


    return (
        <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">注册</NavItem>
                <NavItem className="right">登录</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={focused}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={() => {
                                if (list.size === 0) {
                                    dispatch(actionCreators.getList())
                                }
                                dispatch(actionCreators.searchFocus())
                                // dispatch({
                                //     type: "search_focus",
                                //     // focused: !focused
                                // })
                                // setFocused(!focused)
                            }}
                            onBlur={() => {
                                dispatch(actionCreators.searchBlur())
                                // dispatch({
                                //     type: "search_blur",
                                //     // focused: !focused
                                // })
                                // setFocused(!focused)
                            }}
                        ></NavSearch>
                    </CSSTransition>
                    <SearchOutlined className={focused ? 'focused iconfont' : 'iconfont'}></SearchOutlined>
                    {/* <i className="iconfont">&#xe67c;</i> */}
                    {getListArea(focused, mouseIn, list, page, totalPage, dispatch)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">写文章</Button>
            </Addition>
        </HeaderWrapper>
    )
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispathToProps = (dispatch) => {
//     return {

//     }
// }

// export default connect(mapStateToProps, mapDispathToProps)(Header);
export default Header;
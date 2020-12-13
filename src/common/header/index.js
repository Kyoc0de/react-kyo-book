import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
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

const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>JavaScript</SearchInfoItem>
                    <SearchInfoItem>JavaScript</SearchInfoItem>
                    <SearchInfoItem>React</SearchInfoItem>
                    <SearchInfoItem>Java</SearchInfoItem>
                    <SearchInfoItem>JavaScript</SearchInfoItem>
                    <SearchInfoItem>JavaScript</SearchInfoItem>
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
    // console.log(focused)

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
                    {getListArea(focused)}
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
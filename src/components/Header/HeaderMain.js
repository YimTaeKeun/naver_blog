import blog_logo from '../../imgSrc/blog_logo.jpg';
import searchBtn from '../../imgSrc/searchBtn.jpg';
const HeaderMain = () => {
    return <div className="HeaderMain">
        <div className="blogSearch">
            <a href="https://naver.com"><img src={blog_logo} style={{ width: '140px'}}/></a>
            <input type="text" placeholder="검색하기" style={{width: '140px', height: '30px'}}/>
            <img src={searchBtn} style={{width: '35px'}} className="searchBtn"/>
        </div>
        <div className="myProfile">

        </div>
    </div>
}
export default HeaderMain;
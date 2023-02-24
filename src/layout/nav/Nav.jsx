import style from './nav.module.scss';
import { NavLink} from 'react-router-dom';
import { getCourseList } from '../../mock/data';
import { myContext } from '../../context/Context';
const Nav=()=>{
   const coursetList=getCourseList();
    return(
      <myContext.Consumer>
      {(theme) => (
       <div className={style.menu}>
           <ul>
              <li>
                 <NavLink style={({isActive})=>{
                  return {
                     color:isActive?'#fe4a55':theme.color
                  }
                 }} to='/'>صفحه اصلی</NavLink>
              </li>
              <li>
              <NavLink to="/courses"  style={{color:theme.color}}>دوره ها </NavLink>
                 <ul className={style.SubMenu} style={{
        backgroundColor: theme.background,
        color: theme.color
      }}>
                  {
                     coursetList.map(
                        (item)=>(
                             <li>
                               <NavLink style={({isActive})=>{
                  return {
                     color:isActive?'#fe4a55':theme.color
                  }
                 }} to={`course/${item.id}`}>
                                  {item.title}
                               </NavLink>
                            </li> 
                        )
                     )
                  }
                 </ul>
              </li>
              <li>
                 <NavLink style={({isActive})=>{
                  return {
                     color:isActive?'#fe4a55':theme.color
                  }
                 }} to="/aboutus">درباره ما </NavLink>
              </li>
              <li>
              <NavLink style={({isActive})=>{
                  return {
                     color:isActive?'#fe4a55':theme.color
                  }
                 }} to="/contactus">تماس با ما  </NavLink>
              </li>
           </ul>
       </div>
      )}
      </myContext.Consumer>
    )
}
export default Nav;
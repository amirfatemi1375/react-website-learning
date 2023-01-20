import style from './course-list.module.scss';
import Btn from '../../btn/Btn';
import { Link } from 'react-router-dom';
import { numberComma } from '../../../../utils/number-comma';
import { myContext } from '../../../../context/Context';
const CourseList=({courses})=>{
   return (
      <myContext.Consumer>
      {(theme) => (
      <div className='container'>
        <ul className={style.CourseList} >
             {courses.map(
                (item)=>(
                 <li className="d-flex flex-column" style={{
                  backgroundColor: theme.background,
                  color: theme.color}}>
                    <span>  {item.svg}</span>
                     <span className={style.title}>{item.title}</span>
                     <div className={style.body}>
                     <div className='d-flex justify-content-between my-3'>
                        <span className={style.count}>{item.count}</span>
                        <span className="price">{numberComma(item.price)}</span> 
                     </div>
                     </div>
                     <div className={style.footer}>
                        <Btn title="ثبت نام" width={120} isIcon={false} />
                        <Link to={`/course/${item.id}`} ><span className={style.cdetail}>مشاهده دوره</span></Link>
                     </div>
                 </li>
                )
             )}
        </ul>
        
      </div>
      )}
      </myContext.Consumer>
   )
}
export default CourseList;
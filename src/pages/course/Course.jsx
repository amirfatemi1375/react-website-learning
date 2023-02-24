import { useParams } from "react-router-dom";
import { getCourse } from "../../mock/data";
import { numberComma } from "../../utils/number-comma";
import { myContext } from '../../context/Context';
const Course=()=>{
   window.scrollTo(0,0)

    const courseId=useParams();
    let course=getCourse(parseInt(courseId.id))
   return (
     <myContext.Consumer>
     {(theme) => (
    <div className="container  jumbotron my-3 " style={{
     backgroundColor: theme.background,
     color: theme.color
   }} >
        <div className="d-flex justify-content-between">
        <section className="d-flex flex-column">
              <span style={{fontSize:'22px',fontWeight:'bold'}}>{course.title}</span>
              <span style={{color:'green',fontSize:'20px'}}>{numberComma(course.price)}</span>
              <span>{course.count}</span>
         </section>
         <figure>
              <span>{course.svg}</span>
         </figure> 
        </div>
        <p>{course.description}</p>
         
         
    </div>
     )}
     </myContext.Consumer>
   )
}
export default Course;
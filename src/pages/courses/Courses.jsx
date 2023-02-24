import { useEffect, useState } from "react";
import { getCourseList } from "../../mock/data";
import CourseList from "../../components/courses/course-list/CourseList";
import style from './Courses.module.scss';
const Courses=()=>{
   const [course,setCourse]=useState([]);
   const [getfilter,setFilter]=useState([]);
    useEffect(
 ()=>{
   const coursetList=getCourseList();
    setCourse(coursetList)
    setFilter(coursetList)
 },[]
    )
    const searchCourse=(value)=>{
        setTimeout(() => {
            setFilter(course.filter(
                (item)=>{
                    return item.title.toLowerCase().includes(value.toLowerCase())
                }
            ))  
        }, 2000);

    }
  return(
     <>
     <div className="form-group col-lg-6 mx-auto mt-4"  >
         <input type="text" className={`form-control ${style.search}`} placeholder="نام دوره "   onChange={(event)=>searchCourse(event.target.value)}/>
     </div>
       <CourseList courses={getfilter}></CourseList>
     </>
  )
}
export default Courses
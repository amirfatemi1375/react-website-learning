import Btn from '../../components/btn/Btn';
import CourseList from '../../components/courses/course-list/CourseList';
import style from './home.module.scss';
import { getCourseList } from '../../mock/data';
const Home=()=>{
   const coursetList=getCourseList();
   return(
      <>
     <div className={style.banner}>
        <div className='container'>
            <div className='row'>
         <div className={style.MainBanner}>
               <img className="main" src={require('./../../assets/images/banner/main-banner3.png')}/>
         <img src={require('./../../assets/images/banner/banner-shape20.png')}/>
         </div>
         <section className='d-flex flex-end justify-content-center mx-4  flex-column w-50'>
                  <h1>مهارت های توسعه را با eCademy در هر زمان و هر مکان بیاموزید</h1>
                  <p>ما به شما کمک میکنیم مهارت های توسعه نرم افزار را به سادگی و پروژه محور بیاموزید و وارد بازار کار شوید</p>
                  <Btn title="به ما ملحق شوید" width={170}/>
              </section>
         </div>
         </div>
         
     </div>
     <div className={style.bggray}>
     <CourseList courses={coursetList} />
     </div>
     </>
   )
}
export default Home;
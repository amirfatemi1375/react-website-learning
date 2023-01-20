import style from './footer.module.scss';
import { myContext } from '../../context/Context';
const Footer =()=>{
  return(
   <myContext.Consumer>
      {(theme) => (
    <div className={style.footer}   >
        <div className='container'>
          <section className='d-flex'>
              <article>
                   <h3>
                      eCademy
                   </h3>
                   <p>
                   برنامه های آموزشی eCademy می تواند یک تجربه فوق العاده هیجان انگیز از یادگیری از طریق آنلاین را برای شما به ارمغان بیاورد! در حالی که با نشستن در منطقه راحتی خود به طور مجازی از کلاس های خود لذت می برید، هرگز با هیچ تجربه منفی روبرو نمی شوید. ابتکارات یادگیری انعطاف پذیر ما به شما کمک می کند تا بهتر و سریعتر از روش های سنتی یادگیری مهارت ها یاد بگیرید.
                   </p>
              </article>
              <div className={style.line}>
                <span className={style.linebar}></span>
              </div>
              <article>
                   <h3>
                      لینک های مفید
                   </h3>
                   <ul>
                      <li><a href="#">راهنمای ثبت نام</a></li>
                      <li><a href="#">شیوه های پرداخت </a></li>
                      <li><a href="#">دوره ها </a></li>
                      <li><a href="#">قوانین و شرایط </a></li>
                   </ul>
              </article>
              <div className={style.line}>
                <span className={style.linebar}></span>
              </div>
              <article>
                   <h3>
                      آدرس
                   </h3>
                   <address>
                  <span><i className='fa fa-map-marker-alt'></i></span>
                  <span className='mx-2'>دفتر مرکزی: سعادت اباد میدان کاج سرو شرقی پلاک ۱۴۷ طبقه ۵</span> 

                   </address>
                   <div>
                      <i className='fa fa-phone'></i><span className='mx-2'>021-22332154</span>
                   </div>
                   <div>
                      <i className='fa fa-envelope'></i><span className='mx-2'>info@eCademy.com</span>
                   </div>
              </article>

          </section>
          </div>
    </div>
      )}
      </myContext.Consumer>
  )
}
export default Footer;

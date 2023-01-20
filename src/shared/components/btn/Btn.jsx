import style from './btn.module.scss';
const Btn=({icon="fa fa-user",title,width,click,isIcon=true,margin})=>{
    return(
        <>
           <span  className={style.btn} style={{width:width+'px',margin:margin}} onClick={click}>
            <span className={style.BtnRedR}>
            
            </span>
            <span className={style.BtnRedL}>
            
            </span>
            <span className={style.BtnContent}>
            {isIcon?<i className={icon}></i>:''}
                 <span>{title}</span>
                 </span>
           </span>
        </>
    )
}
export default Btn;
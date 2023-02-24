import style from './Send-Message.module.scss';
import { useRef,useEffect } from 'react';
import { ErrorMessage, Field, Formik,Form } from 'formik';
import { contactUsSchema } from '../../../validation/ContactUs';
const SendMessage=({onSendMessage})=>{
  const ref=useRef();
  useEffect(()=>{
    //  ref.current.focus();
  },[])

    return(
        <div> 
          <Formik  initialValues={{
      fullName:'',
      phoneNumber:'',
      email:'',
      description:''

    }} validationSchema={contactUsSchema}  onSubmit={(values)=>{
      onSendMessage(values);
    }}>
          <Form >
                     <h2>ارسال پیام</h2>
                     <div className={style.border}>
                          <span className={style.underline}></span>
                     </div>
                     <div className="my-3">
                     <div className="form-group d-flex flex-column align-items-center ">
                   <Field name="fullName"    type="text"    placeholder="نام "  className="form-control"/>
                   <ErrorMessage name="fullName" render={msg=><div className='text-danger'>{msg}</div>}/>
                 </div>
                 <div className="form-group  flex-column d-flex align-items-center ">
                  <Field name="phoneNumber"  type="text"   placeholder="شماره همراه "  className="form-control"/>
                  <ErrorMessage name="phoneNumber" render={msg=><div className='text-danger'>{msg}</div>}/>

                </div>
                <div className="form-group d-flex  flex-column align-items-center ">
                  <Field name="email"  type="text"   placeholder="آدرس ایمیل "  className="form-control"/>
                  <ErrorMessage name="email" render={msg=><div className='text-danger'>{msg}</div>}/>

                </div>
                <div className="form-group d-flex  flex-column align-items-center ">
                <Field as="textarea" name="description"    className="form-control" placeholder="توضیحات" />
                </div>
                </div>
                <div className="text-right">
                  <button  className={style['btn-accept']}  >
                      <span>ارسال</span>
                    
                  </button> 
                 </div>
                 </Form>
          </Formik>
              

        </div>
    )
}
export default SendMessage;
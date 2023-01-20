import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const contactUsSchema=Yup.object().shape({
    fullName:Yup.string().required('نام کامل خود را وارد کنید'),
    phoneNumber:Yup.string().matches(phoneRegExp, 'َشماره تلفن صحیح نیست').required('شماره تلفن را وارد کنید'),
    email:Yup.string().email('ایمیل وارد شده معتبر نیست').required('ایمیل را وارد کنید'),
    description:Yup.string('')
})
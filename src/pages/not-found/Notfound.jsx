import { useNavigate } from 'react-router-dom'
import Btn from '../../components/btn/Btn'

const NotFound=()=>{
    let navigate=useNavigate();
    return (
        <div className='text-center mt-5 '>
             <img  src={require('../../assets/images/error.png')}/>
             <h2 className='my-3'>صفحه مورد نظر پیدا نشد!</h2>
             <Btn title="صفحه اصلی" width={200} margin="auto" icon="fa fa-home" click={()=>{
             navigate('/')
             }} ></Btn>
        </div>
    )

}
export default NotFound
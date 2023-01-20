import { Link } from 'react-router-dom';
import { myContext, themes } from '../../context/Context';
const Header=({children})=>{

    return(
        <myContext.Consumer>
        {(theme) => (
            

       <div  style={{
        backgroundColor: theme.background,
        color: theme.color
      }}>
         <header className='container  d-flex align-items-center py-3 justify-content-between'>
          <Link to="/">
              <figure className="m-0">
                  <img src={theme.color=='#000000'?require('../../assets/logo/logo.png'):require('../../assets/logo/image.png')}/>
              </figure>
              </Link>
              {children}
         </header>
       </div>
    )}
    </myContext.Consumer>
    )
    
    
}
export default Header;
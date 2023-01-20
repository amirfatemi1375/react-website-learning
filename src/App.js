import './App.scss';
import Layout from './layout/Layout';
import {Outlet} from 'react-router-dom';
import { myContext } from './context/Context';
const App=()=>{

  return(
    
    <myContext.Consumer>
    {(theme) => (
      <div style={{
        backgroundColor: theme.background,
        color: theme.color
      }} >
      <Layout >
        <Outlet/>
        
      </Layout>
      </div>
    )}

    </myContext.Consumer>
  )
}

export default App;

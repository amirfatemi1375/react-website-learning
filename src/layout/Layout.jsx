import Btn from "../shared/components/btn/Btn";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import './layout.scss';
import Footer from "./footer/Footer";
import { myContext, themes } from "../context/Context";
import ToggleButton from "../shared/toggle-theme/Toggle-Theme";
import { useState,useEffect } from "react";
import { useLocalStorage } from "../hooks/LocalStorageHook";
    const Layout=({children})=>{
    const [theme, setTheme] = useState(themes.light);
    const[isDark,setDark]=useState(true)
    const toggleTheme = () => {
        console.log(isDark)
      setDark(isDark => !isDark)
      setTheme(theme === themes.dark ? themes.light : themes.dark);
      window.localStorage.setItem('theme',isDark?'dark':'light')
    };
    useEffect(()=>{
       setThemeFromStorage();
   

    },[])
    const setThemeFromStorage=()=>{
        let theme= window.localStorage.getItem('theme')?window.localStorage.getItem('theme'):null;
        if(theme){
        if(theme=='dark'){
         setTheme(theme=themes.dark)
        setDark(true)
 
        }else{
         setTheme(theme=themes.light)
     
 
 
        }
        setDark(isDark => !isDark)
     }
    }
    return(
        <myContext.Provider value={theme}>
        <div>
            <Header>
                <Nav/>
                <div className="d-flex align-items-center justify-content-between">
                <Btn title="ورود/ثبت نام" width={170} />
                <span className="mr-4 basket">
                 <span className="count">0</span>
                <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="22px" fill="#ccc" viewBox="0 0 24.661 24.019"><g transform="translate(0.5 -5.528)"><g transform="translate(0 6.028)"><g transform="translate(0 0)"><path d="M99.122,350.322a2.469,2.469,0,1,0,2.469,2.469A2.469,2.469,0,0,0,99.122,350.322Zm0,3.841a1.372,1.372,0,1,1,1.372-1.372A1.372,1.372,0,0,1,99.122,354.163Z" transform="translate(-91.577 -332.242)" fill="#ccc" stroke="#ccc" stroke-width="1"></path><path d="M297.653,350.322a2.469,2.469,0,1,0,2.469,2.469A2.469,2.469,0,0,0,297.653,350.322Zm0,3.841a1.372,1.372,0,1,1,1.372-1.372A1.372,1.372,0,0,1,297.653,354.163Z" transform="translate(-279.683 -332.242)" fill="#ccc" stroke="#ccc" stroke-width="1"></path><path d="M23.54,9.7a.686.686,0,0,0-.439-.22L5.24,9.238,4.746,7.729a2.524,2.524,0,0,0-2.36-1.7H.549a.549.549,0,1,0,0,1.1H2.387a1.427,1.427,0,0,1,1.317.96L7.188,18.594l-.274.631a2.634,2.634,0,0,0,.247,2.387,2.552,2.552,0,0,0,2.058,1.152H19.891a.549.549,0,1,0,0-1.1H9.219a1.4,1.4,0,0,1-1.152-.658,1.509,1.509,0,0,1-.137-1.317l.22-.494L19.7,17.99a3.018,3.018,0,0,0,2.606-2.3l1.317-5.515A.466.466,0,0,0,23.54,9.7Zm-2.3,5.734a1.866,1.866,0,0,1-1.674,1.454L8.149,18.072,5.6,10.335l16.818.247Z" transform="translate(0 -6.028)" fill="#ccc" stroke="#ccc" stroke-width="1"></path></g></g></g></svg>
                </span>
                </div>
                <ToggleButton isDark={isDark}  changeTheme={toggleTheme} ></ToggleButton>
            </Header>
            {children}
            <Footer/>
        </div>
        </myContext.Provider>

    )
}
export default Layout;
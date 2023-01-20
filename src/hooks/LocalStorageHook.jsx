import { useState } from "react";
export const useLocalStorage=(key,value)=>{
    window.localStorage.setItem(key,value)
    const [state,setState]=useState(null);
    setState(window.localStorage.setItem(key,value));
    return state;
}
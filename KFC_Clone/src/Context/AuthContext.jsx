import React,{useState,useEffect,useContext} from 'react'
import { createContext } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
    const[isLogin,setIsLogin]=useState(false);
    const[userName,setUserName]=useState("");
    function toggleLogin(){
        setIsLogin(!false);
    }
    function userNameData(x){
        setUserName(x);
    }
  return (
    <AuthContext.Provider value={{isLogin, toggleLogin,userNameData,userName}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
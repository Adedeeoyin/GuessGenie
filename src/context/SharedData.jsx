import { createContext, useContext, useEffect, useState } from "react";

export const AppCon = createContext()

export const ContextProvider = ({children})=>{
    const [total, setTotal]= useState('')
    const [guess, setGuess]= useState(null)
    const [isGuessing, setIsGuessing]= useState(false)
    const [memory, setMemory]= useState([])

    // useEffect(()=>{
    //     localStorage.setItem('guess', JSON.stringify(memory))
    // },[memory])

    return(
        <AppCon.Provider
         value={{
            total, setTotal,
            guess, setGuess,
            isGuessing, setIsGuessing,
            memory, setMemory}}>
            {children}
        </AppCon.Provider>
    )
}

export default function UseData() {
  return useContext(AppCon)
}

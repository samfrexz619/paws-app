import { useState, useEffect } from "react";


const useDark = (key: string) => {

  const [isDark, setIsDark] = useState(false)

  const [flag, setFlag] = useState(false);

  useEffect(()=> {
    const setMode = localStorage.getItem(key)
    if(setMode) {
      setIsDark(JSON.parse(setMode))
    }
    setFlag(true)
  }, [])

  useEffect(()=> {
    if(flag) {
      localStorage.setItem(key, JSON.stringify(isDark))
    }
  }, [isDark, flag])

  return {setIsDark, isDark}

}
 
export default useDark;
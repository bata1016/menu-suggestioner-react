import { useState } from "react"
import Login from "./login"
import Signup from "./signiup"


const Auth = () => {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const changeShowLoginPage = () => {
    setShowLoginPage(!showLoginPage)
  };

  return (
    showLoginPage ? <Login changeShowLoginPage={changeShowLoginPage} /> : <Signup changeShowLoginPage={changeShowLoginPage}/>
  )
}

export default Auth
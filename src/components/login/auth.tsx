import { render } from "@testing-library/react";
import { useState } from "react"
import Login from "./login"
import Signup from "./signiup"


const Auth = () => {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const changeShowLoginPage = () => {
    console.log("called")
    setShowLoginPage(!showLoginPage)
  };

  return (
    showLoginPage ? <Login changeShowLoginPage={changeShowLoginPage} /> : <Signup changeShowLoginPage={changeShowLoginPage}/>
  )
}

export default Auth
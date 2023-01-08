import "./App.css"
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Home as DefaultHeader, Register } from "./Default_Header";
import { Home as Main } from "./Main";
import { BoshSahifa} from "./Default_Header";
import { Context } from "./Context";
function App() {
  let parses = window.localStorage.getItem("user_server_token")
  console.log(parses)
  const [token, setToken] = useState(parses !== null? parses: null)
  useEffect(() => {
    if(token !== null){
      window.localStorage.setItem("user_server_token", token)
    }
  },[token])
  let parsesUser = window.localStorage.getItem("user_login_server") 
  const [userLogin, setUserLogin] = useState(parsesUser !== null? JSON.parse(parsesUser): null)
  useEffect(() => {
    if(userLogin !== null){
      window.localStorage.setItem("user_login_server", JSON.stringify(userLogin))
    }
  },[userLogin])
  return (
    <div className="App">
      <Context.Provider value={{token, setToken, userLogin, setUserLogin}}>
        <Routes>
          <Route path="/*" element={token !== null? <Main/> : <DefaultHeader/>}>
          </Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

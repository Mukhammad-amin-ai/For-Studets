import { Col, Row, Typography } from "antd"
import axios from "axios"
import { useContext, useRef, useState } from "react"
import { Context } from "../../Context"
const {Title}  = Typography
export const Login = () => {
    const {setUserLogin, setToken} = useContext(Context)
    const [errorEmail, setErrorEmail] = useState("Emailni to'ldiring")
    const [passwordError, setPasswordError] = useState("Passwordni to'ldiring")
    const [emailTouched, setEmailTouched] = useState(false)
    const [passwordTouched, setPasswordTouched] = useState(false)
    const email = useRef()
    const password = useRef()
    let error = new Error
    error.name = "Xatolik va siz oldin ruyhattan o'tmagansiz"
    function handleSub(event){
        event.preventDefault()
        axios({
            method: "POST",
            url: "http://localhost:8080/login",
            data:{email:email.current.value, password: password.current.value}
        }).then((response) => {
            const {user, accessToken} = response.data
            console.log(response.data)
            setToken(accessToken)
            setUserLogin(user)
        }).catch((error) => {
            if(error.name === "AxiosError"){
                throw(error)
            }
        })
    }
    const handleBlur = (event) => {
        switch(event.target.type){
            case "email":{
                setEmailTouched(true)
            }break;
            case "password":{
                setPasswordTouched(true)
            }   
        }
    }
    function handleKey(event){
        switch(event.target.type){
            case "email":{
                const re =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if(re.test(event.target.value) === true){
                    setErrorEmail("")
                    event.target.style.border = "1px solid #ced4da"
                }else{
                    event.target.style.border= "3px solid crimson"
                    setErrorEmail("Email yozilishda xatolik")
                }
            }break;
            case "password":{
                if(event.target.value.length > 3 && event.target.value.length<8){
                    setPasswordError("")
                    event.target.style.border = "1px solid #ced4da"
                }else{
                    setPasswordError("Parol 3 dan katta va 8 dan kichik bulishi zarur !")
                    event.target.style.border= "3px solid crimson"
                }
            }
        }
    }
    return(
        <Row justify={"center"} align="middle" style={{minHeight: "90vh"}}>
            <Col>
            <Title>O'z <span className="text-primary"> akkauntingizga </span>kiring</Title>
                <form onSubmit={handleSub} className="form-control bg-transparent w-100  p-5 m-5 mx-auto">
                    <input ref={email} onBlur={handleBlur} onKeyUp={handleKey}id="email" type="email" className="form-control my-3" placeholder="Email"/>
                    <label htmlFor="email" className="text-danger" style={{display: emailTouched === true?"block": "none" }}>{errorEmail}</label>
                    <input ref={password} onBlur={handleBlur} id="password" type="password" onKeyUp={handleKey} placeholder="password " className="form-control my-3"/>
                    <label htmlFor="password" className="text-danger mb-3" style={{display: passwordTouched !== true? "none": "block" }}>{passwordError}</label>
                    <div className="form-btn text-center">
                    <button className="btn btn-outline-primary ">Submit</button>
                    </div>
                </form>
            </Col>
        </Row>
    )
}
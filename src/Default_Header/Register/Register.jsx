import { Button, Col, Form, Input, Row, Typography } from "antd"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import { useLocation, useNavigate } from "react-router"
const {Title} = Typography
export const Register = () => {
    const {setToken, token} = useContext(Context)
    const [data, setData] = useState([])
    const location = useLocation()
    const navigator  = useNavigate()
    let error = new Error
    error.name = "Xatolik"
    async function handleSub(event){
        const {firstname, lastname, email, password} = event
        console.log(firstname, lastname, email, password)
        let jsons = await axios({
            url: "http://localhost:8080/register",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            data: {
                name: firstname,
                lastname: lastname,
                email: email,
                password: password
            }
        }).catch((error) => {
            if(error.name === "AxiosError"){
                throw(error)
            }
        })
        let response = await jsons.data
        console.log(response)
        setData(response)
    }
    useEffect(() => {
        if(data.length !== 0 ){
            const {accessToken, user} = data
            setToken(accessToken)
            accessToken?navigator("/"):navigator("/register")
        }
    },[data])
    useEffect(() => {
        if(token !== null){
            console.log(location)
        }
    },[token])
    return(
        <div style={{display: token !== null? "none": "block"}}>
            <Title level={1} style={{textAlign: "Center", padding: "1rem"}}>Ricky and <span style={{color: "blue"}}>Morty</span> dasturiga o'tish uchun</Title>
            <Row justify={"center"} style={{minHeight: "80vh", width: "100%"}} align="middle">
            <Col style={{width: "22%"}}>
                <Title level={2}>
                    Ruyhattan o'ting
                </Title>
                <Form onFinish={handleSub}>
                    <Form.Item className="pb-2" name={"firstname"} rules={[
                        {
                            type: "text",
                            message: "Birinchi ism"
                        },
                        {
                            required: true,
                            message: "Ism kiritish majburiy "
                        }

                    ]} hasFeedback>
                        <Input  placeholder="Ism"></Input>
                    </Form.Item>
                    <Form.Item className="pb-2" name={"lastname"} rules={[
                        {
                            type: "text",
                            message: "Ismni takrorlang"
                        },
                        {
                            required: true,
                            message: "Ismni takrorlang"
                        }
                    ]} hasFeedback>
                        <Input placeholder="Takrorlang"></Input>
                    </Form.Item>
                    <Form.Item className="pb-2" name={"email"} rules={[
                        {
                            type: "email",
                            message: "Emailingizni kiriting"
                        },
                        {
                            required: true,
                            message: "Emailingizni kiriting"
                        }
                    ]} hasFeedback>
                        <Input placeholder="Email"></Input>
                    </Form.Item>
                    <Form.Item className="mb-5" name={"password"} rules={[
                        {
                            type: "password",
                            message: "Parolingizni kiriting"
                        },
                        {
                            required: true, 
                            message: "Parolingizni kiriting"
                        }
                    ]} hasFeedback>
                        <Input placeholder="Password"></Input>
                    </Form.Item>
                    <Form.Item style={{textAlign: "center"}}>
                        <Button htmlType="submit" type="primary">Junatish</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>

        </div>
    )
}
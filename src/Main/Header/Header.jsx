import {Button, Dropdown, Input, Layout, Menu} from "antd"
import {Row, Col,Typography} from "antd"
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { Home } from "../../Pages/Home"
import { LogoutOutlined } from "@ant-design/icons"
import { About } from "../../Default_Header"
import { Characters } from "../Characters/Characters"
import { Episode } from "../Episode/Episode"
import { User } from "../User"
import { Location } from "../Location"
const {Title, Text} = Typography
const {Header: AntdHeader} = Layout
export const Header = () => {
    const navigator = useNavigate()
    function handleClick(event){
        console.log(event.currentTarget)
        if(event.currentTarget.id === "logout"){
            window.localStorage.removeItem("user_server_token")
            window.localStorage.removeItem("user_login_server")
            navigator("/login")
        }
    }
    let items = [
        {
            key: 1,
            label: <a href="" id={"logout"} onClick={handleClick} style={{display: "flex", alignItems: "center"}}><LogoutOutlined style={{paddingRight: "0.2rem"}}/> Chiqish</a>,
        },
        {
            key: 2,
            label:<NavLink to={"about"} className={(params) => params.isActive? "text-primary": "text-dark" }>Multfilm haqida</NavLink>
        }
    ]
    return( 
        <>
        <AntdHeader style={{minHeight: "10vh"}} className="bg-light border-bottom shadow">
        <Row justify={"space-between"} align="middle">
            <Col>
                <Title level={2}>
                    Ricky and <span className="text-primary">Morty</span>
                </Title>
            </Col>
            <Col className="w-50 d-flex justify-content-evenly">
                <Dropdown menu={{items}}>
                <NavLink to={"/"} className={(params) => params.isActive? "text-primary text-decoration-underline": "text-dark" }>Bosh sahifa</NavLink>
                </Dropdown>
                <NavLink to={"characters"} className={(params) => params.isActive? "text-primary text-decoration-underline": "text-dark" }>Characters</NavLink>
                <NavLink to={"episode"} className={(params) => params.isActive? "text-primary text-decoration-underline": "text-dark" }>Episode</NavLink>
                <NavLink to={"location"} className={(params) => params.isActive? "text-primary text-decoration-underline": "text-dark" }>Location</NavLink>
            </Col>
        </Row>
        </AntdHeader>
        
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/characters" element={<Characters/>}></Route>
            <Route path="/user/:id" element={<User/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/episode" element={<Episode/>}></Route>
            <Route path="/location" element={<Location/>}></Route>
        </Routes>
        </>
    )
}
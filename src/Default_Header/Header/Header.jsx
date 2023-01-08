import { Col, Layout, Row, Typography } from "antd"
import { NavLink, Route, Routes , Outlet, Link} from "react-router-dom"
import { BoshSahifa } from "../Bosh_Sahifa"
import { About } from "../About"
import { Login } from "../Login"
const {Title, Text} = Typography
const {Header: AntdHeader} = Layout
export const Header = () => {
    return(
        <>
        <AntdHeader style={{background: "white"}}>
        <Row justify={"space-between"} align="middle">
            <Col>
                <Title level={3}>
                    Ricky and <span style={{color: "blue"}}>Morty</span>
                </Title>          
            </Col>
            <Col style={{display: "flex", width: "50%", justifyContent: "space-evenly"}}>
                <NavLink to={"/"} className={(params) => params.isActive? "text-primary": "text-dark" }>Bosh sahifa</NavLink>
                <NavLink to={"about"} className={(params) => params.isActive? "text-primary": "text-dark" }>About</NavLink>
                <NavLink to={"register"} className={(params) => params.isActive? "text-primary": "text-dark" }>Register</NavLink>
                <NavLink to="login" className={(params) => params.isActive? "text-primary":"text-dark"}>Login</NavLink>
            </Col>
        </Row>
       </AntdHeader>
       <Routes>
        <Route index element={<BoshSahifa/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
       </Routes>
        </>
    )
}
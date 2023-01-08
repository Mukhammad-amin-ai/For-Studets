import {Row, Col,Typography} from "antd"
import { NavLink, Route, Routes } from "react-router-dom"
const {Title} = Typography
export const Header = () => {
    return( 
        <>
        <Row justify={"space-between"}>
            <Col>
                <Title level={2}>
                    Ricky and <span className="text-primary">Morty</span>
                </Title>
            </Col>
            <Col>
                <NavLink to={"/"}>Bosh sahifa</NavLink>
                <NavLink to={"characters"}>Characters</NavLink>
                <NavLink to={"episode"}>Episode</NavLink>
                <NavLink to={"location"}>Location</NavLink>
            </Col>
        </Row>
        <Routes>
            <Route index element={<>Bosh sahifa</>}/>
            <Route path="/characters" element={<>Characters</>}></Route>
            <Route path="/episode" element={<>Episode</>}></Route>
            <Route path="/location" element={<>Location</>}></Route>
        </Routes>
        </>
    )
}
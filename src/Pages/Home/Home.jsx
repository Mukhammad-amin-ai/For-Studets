import { Col, Row, Typography } from "antd"
const {Title} = Typography
export const Home = () => {
    return(
        <Row justify={"center"} style={{minHeight: "90vh"}} align="middle">
            <Col>
                <Title> Ricky and <span className="text-primary">Morty</span> Dasturiga hush kelibsiz</Title>
            </Col>
        </Row>
    )
}
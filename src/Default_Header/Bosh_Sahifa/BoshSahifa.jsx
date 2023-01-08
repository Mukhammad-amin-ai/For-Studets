import { Row, Col, Image, Typography} from "antd"
import { Container } from "../../Container/Container"
const {Title, Text} = Typography
export const BoshSahifa = () => {
    
    return(
        <Row style={{minHeight: "90vh"}} justify="center" align="middle">
            <Container>
                <Row justify={"center"} style={{flexDirection: "column", textAlign: "center"}}>
                    <Col>
                       <Title>Ricky and <span style={{color: "blue"}}>Morty</span> ga hush kelibsiz</Title>
                    </Col>
                    <Col>
                        <Title level={4}>Dasturdan foydalanish uchun Ruyhattan o'ting</Title>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}
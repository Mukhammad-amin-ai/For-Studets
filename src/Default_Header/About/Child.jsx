import { Col, Row, Image, Typography } from "antd"
const {Title} = Typography
export const Child = ({array}) => {
    const {posts}  = array
    return(
        <Row justify={"space-around"}>
            {posts?.map((item) => (
                <Col style={{textAlign: "center"}}>
                    <Image src={item.image}></Image>
                    <Title style={{padding: "1rem"}} level={2}>{item.location.name}</Title>
                </Col>
            ))}
        </Row>
    )
}
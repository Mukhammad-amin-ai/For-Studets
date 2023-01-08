import {Row, Col, Typography,Image, Button} from "antd"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
const {Title, Text} = Typography
export const User = () => {
    const params = useParams()
    let [data, setData] = useState([])
    const navigator = useNavigate()
    useEffect(() => {
        ;(async function(){
            let jsons = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            let response = await jsons.json()
            setData([response])
        }())
    },[])
    function handleClick(){
        navigator(-1)
    }
    return(
        <>
        <Row justify={"start"} style={{padding: "1rem"}}>
            <Col>
            <Button type="primary" onClick={handleClick}>Oraga</Button>
            </Col>
        </Row>
         
            <Row justify={"center"} style={{minHeight: "80vh"}} align="middle">
               
                {data?.map((item) => (
                        <Col style={{textAlign: "CENTER"}} key={item.id}  className="rounded mx-auto p-2 border shadow m-2">
                        {
                            (function(status){
                                if(status === "Alive"){
                                    return(
                                    <span className="position-absolute bg-success p-3 rounded-pill text-light fs-6" style={{top: "8px", right: "5px", zIndex: "1"}}>{status}</span>
                                    )
                                }else if(status === "Dead"){
                                    return(
                                        <span className="position-absolute bg-danger p-3 rounded-pill text-light fs-6" style={{top: "8px", right: "5px", zIndex: "1"}}>{status}</span>
                                    )
                                }else{
                                    return(
                                    <span className="position-absolute bg-secondary p-3 rounded-pill text-light fs-6" style={{top: "8px", right: "5px", zIndex: "1"}}>{status}</span>
                                    )
                                }
                            }(item.status))
                        }
                        <Image src={item.image} className="rounded"></Image>
                        <Title level={3}>{item.location.name}</Title>
                        <Text className="fs-4">{item.name}</Text>
                    </Col>    
                ))}
            </Row>
        </>
    )
}
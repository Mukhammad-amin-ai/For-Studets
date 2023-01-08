import {Row, Col, Typography, Select} from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { Card } from "../Characters/Card";
const {Title, Text} = Typography
export const Location = () => {
    const {locationNumber, setLocationNumber} = useContext(Context)
    const api = `https://rickandmortyapi.com/api/location/${locationNumber}`
    const [data, setData] = useState([])
    let [user, setUser] = useState([])
    const [parent, setParent] = useState([])
    useEffect(() => {
        ;(async function(){
            let jsons = await axios({
                method: "GET",
                url: api
            })
            let response = await jsons.data
            setData(response)
            console.log(response)
            let users = await Promise.all(
                response.residents.map((item) => {
                    return(
                        fetch(item).then((response) => response.json())
                    )
                })
            )
            setUser(users)
        }())
    },[api])
    const {name, type} = data
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
        .then((response) => response.json())
        .then((data) => setParent(data))
    },[])
    const {info, results} = parent
    let arrayCount = [...Array(info?.count).keys()]
    function handleChange(event){
        setLocationNumber(event)        
    }
    return(
        <>
                <Row justify={"center"} className="p-3 flex-column text-center">
                <Col>
                    <Title level={2}> <span className="text-primary"> Location =</span> {name}</Title>
                </Col>
                <Col>
                    <Title level={4}>{type}</Title>
                </Col>
            </Row>
            <Row>
                <Col className="border text-center" span={10}>
                    <Select onChange={handleChange}  style={{width: "100%", fontSize: "17px"}} defaultValue={`Location ${1}`} options={arrayCount.map((item, index) => (
                       {
                            label: <Text style={{fontSize: "18px"}}>Location {index+1}</Text>,
                            value: index+1
                       }
                    ))}></Select>
                </Col>
                <Col className="border" span={14}>
                <Row style={{width: "100%"}}  className="d-flex justify-content-evenly flex-wrap text-center">
                    {user?.map((user) => (
                        <Card image={user.image} name={user.location.name} id={user.id} status={user.status} location={user.name}/>
                    ))}
                </Row>
                </Col>  
            </Row>
        
        </>        
    )
}
import {Row, Col, Typography, Select} from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { Card } from "../Characters/Card";
const {Title, Text} = Typography
export const Episode = () => {
    const {episodeNumber, setEpisodeNumber} = useContext(Context)
    const api = `https://rickandmortyapi.com/api/episode/${episodeNumber}`
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    useEffect(() => {
        ;(async function(){
            let jsons = await axios({
                method: "GET",
                url: api
            })
            let response = await jsons.data
            setData(response)
            let characters = await Promise.all(
                response.characters.map((item) => {
                  return fetch(item).then(response => response.json())
                })
            )
            setUser(characters)
        }())
    },[api])
    const [counter, setCounter] = useState(0)
    useEffect(() =>{
        fetch("https://rickandmortyapi.com/api/episode")
        .then((response) => response.json())
        .then((data) =>setCounter(data))
    },[])
    let {info} = counter
    let arrayCount = [...Array(info?.count).keys()]
    function handleChange(event){
        setEpisodeNumber(event)
    }
    return(
        <>
            <Row justify={"center"} className="p-3 flex-column text-center">
                <Col>
                    <Title level={2}> <span className="text-primary"> Episode ({data.id}) = </span>{data.name}</Title>
                </Col>
                <Col>
                    <Title level={4}> {data.air_date? data.air_date: "unknown"}  </Title>
                </Col>
            </Row>
            <Row>
                <Col className="border text-center" span={10}>
                    <Select onChange={handleChange} style={{width: "100%", fontSize: "17px"}} defaultValue={`Episode ${1}`}  options={arrayCount.map((item, index) => (
                        {
                            label: <Text style={{fontSize: "18px"}}>Episode {index+1}</Text>,
                            value: `${index+1}`
                            
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
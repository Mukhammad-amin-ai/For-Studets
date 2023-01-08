import { Col, Input, Row , Typography} from "antd"
import axios from "axios"
import { useContext, useEffect } from "react"
import { Context } from "../../Context"
import { Card } from "./Card"
import { Filter } from "./Filter"
import {Inputs} from "./Input"
import { Pagination } from "./Pagination"
const {Title} = Typography
export const Characters = () => {
    const {data, setData, gender, status, species, activePage, setStatus, setGender, setSpecies, name, setName} = useContext(Context)
    let api = `https://rickandmortyapi.com/api/character?page=${activePage}&name=${name}&status=${status}&species=${species}&gender=${gender}`
    useEffect(() => {
        ;(async function(api) {
            let jsons = await axios({
                url: api,
                method: "GET",
            })
            let response = await jsons.data
            setData(response)
        }(api))
    },[api])
    const {info, results} = data
    function handleDelete(){
        setGender("")
        setName("")
        setSpecies("")
        setStatus("")
    }
    return(
        <>
            <Row justify={"center"} style={{padding: "1rem"}}>
                <Col>
                    <Title level={2}> Characters <span className="text-primary">qaxramonlar</span> sahifasi</Title>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={12}>
                    <Inputs/>
                </Col>
            </Row>
            <Row justify={"space-between"}>
                <Col span={8} style={{ textAlign: "center"}}>
                    <Title className="text-primary text-decoration-underline" style={{cursor: "pointer"}} onClick={handleDelete}>Clear</Title>
                    <Filter/>
                </Col>
                <Col span={16} style={{padding:"1rem"}}>
                    {results !== undefined && results.length > 0?
                        <Row style={{width: "100%"}}  className="d-flex justify-content-evenly flex-wrap text-center">
                            {results?.map((user) => (
                                <Card image={user.image} name={user.location.name} id={user.id} status={user.status} location={user.name}/>
                            ))}
                        </Row>
                    :false}
                </Col>
            </Row>
            {info?.pages && 
            <Row justify={"center"}>
                <Col>
                    <Pagination pages={info.pages}/>
                </Col>
            </Row>}
        </>
        
    )
}
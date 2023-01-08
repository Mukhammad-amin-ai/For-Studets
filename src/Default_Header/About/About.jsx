import { useEffect, useState } from "react"
import { Button, Col, Row, Typography} from "antd"
import { useDispatch, useSelector } from "react-redux"
import { PostsAction } from "../../store/Reducer/Reducer"
import { Child } from "./Child"
import { Link } from "react-router-dom"
const {Title, Text} = Typography
export const About = () => {
    const [character, setCharacter] = useState(null)
    let initial = useSelector((state) => state.PostsReducer)
    let dispatch = useDispatch()
    let error = new Error
    error.message = "Xatolik"
    error.name = "API 404"
    useEffect(() => {
        ;(async function(){
            let jsons = await fetch("https://rickandmortyapi.com/api/character/1,2")
            if(jsons.ok !== false){
                let response = await jsons.json()
                let result = []
                setCharacter(response)
                
            }else{
                throw(error)
            }
        }())    
    },[])
    useEffect(() => {
        if(character !== null){
            dispatch(PostsAction.setPosts(character))
        }
    },[character])
    return(
        <>
            <Row justify={"center"}>
                <Col style={{padding: "1rem"}}>
                    <Title level={2}>Bosh qaxramonlar va <span className="text-primary">multfilm</span> haqida</Title>
                </Col>
                
            </Row>
            <Row justify={"center"} style={{flexDirection: "column", textAlign: 'center'}}>
                <Col style={{width: "100%", paddingTop: "1rem"}}>
                    <Child array={initial}/>
                </Col>
                <Col>
                    <Title level={3}><span style={{color:"blue"}}>MultFilm</span> asosan shu ikki qaxramonning sarguzashtlari haqida bo'ladi</Title>
                </Col>
                <Col style={{padding: "3rem"}}>
                    <Link to={"/register"}><button className="btn btn-primary">Episode larni ko'rish uchun bosing</button></Link>
                </Col>
            </Row>
        </>
    )
}
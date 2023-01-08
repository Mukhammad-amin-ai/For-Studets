import { Col, Image, Typography } from "antd"
import { Link } from "react-router-dom"
const {Title, Text} = Typography
export const Card = ({image, status, name, id, location}) => {
    return(
        <Link to={`/user/${id}`} style={{width: "30%"}}>
            <Col key={id}  className="rounded mx-auto p-2 border shadow m-2">
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
                }(status))
            }
            <Image src={image} className="rounded"></Image>
            <Title level={3}>{name}</Title>
            <Text className="fs-4">{location}</Text>
        </Col>
        </Link>
        
    )
}
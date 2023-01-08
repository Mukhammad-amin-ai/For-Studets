import { Input as AntdInput } from "antd"
import { useContext } from "react"
import { Context } from "../../Context"
export const Inputs = () => {
    const {setActivePage, setName} = useContext(Context)
    function handleKey(event){
        setName(event.target.value)
        setActivePage(1)
    }
    return(
        <AntdInput onKeyUp={handleKey}></AntdInput>
    )
}
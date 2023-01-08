import { useContext } from "react"
import { Context } from "../../Context"

export const Filter_Btn = ({text, index, setState}) => {
    const {setActivePage} = useContext(Context)
    const handleChange = () => {
        setState(text)
        setActivePage(1)
    }
    return(
        <div key={text}>
            <input  type="radio" name="filter" onChange={handleChange} className="btn-check" id={`${text}-${index}`} autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor={`${text}-${index}`}>{text}</label><br /><br />
        </div>
    )
}
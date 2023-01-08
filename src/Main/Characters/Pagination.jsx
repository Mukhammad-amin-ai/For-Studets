import { useContext } from "react"
import ReactPaginate from "react-paginate"
import { Context } from "../../Context"
export const Pagination = ({pages}) => {
    const {setActivePage} = useContext(Context)
    function handleChange(event){
        setActivePage(event.selected+1)
    }
    return(
         <ReactPaginate pageCount={pages} className="pagination align-items-center" previousClassName="btn btn-primary" previousLinkClassName="text-light" nextClassName="btn btn-primary" pageClassName="p-2 border m-2 rounded btn btn-outline-primary" onPageChange={handleChange} nextLinkClassName="text-light"  />
    )
}
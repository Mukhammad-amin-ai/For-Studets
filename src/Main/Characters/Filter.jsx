import { useContext } from "react"
import { Context } from "../../Context"
import { Filter_Btn } from "./Filter_Btn"

export const Filter = () => {
    const {setGender, setStatus, setSpecies} = useContext(Context)
    let array = ["alive", "dead", "unknown"]
    const array_species = ['human', "alien", "mythological-Creature", "animal", "humanoid", "unknown"]
    const array_gender =  ["male", "unknown", "female"]
    return(
       <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Filter by status
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body  d-flex justify-content-evenly pt-5 flex-wrap">
        {array.map((item, index) => (
            <Filter_Btn text={item} setState={setStatus} index={index}/>
        ))}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Filter by species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body  d-flex justify-content-evenly pt-5 flex-wrap">
        {array_species.map((item, index) => (
            <Filter_Btn setState={setSpecies} text={item} index={index}/>
        ))}
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Filter by gender
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex justify-content-evenly pt-5">
        {array_gender.map((item, index) => (
            <Filter_Btn setState={setGender} text={item} index={index}/>
        ))}
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
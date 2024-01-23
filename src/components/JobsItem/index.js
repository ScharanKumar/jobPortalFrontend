import "./index.css"
import {Link} from "react-router-dom"
const JobsItem=(props)=>{
    const {details}=props
    const {role,company,salary,location,id}=details
   //  const x=()=>{
   //     fun(id)
   //  }
   return(
    <Link className="item" to={`/jobdes/${id}`}>
       <li className="x223">
        <h1 className="jobsP">{role}</h1>
        <p className="jobsP">Company - {company}</p>
        <p className="jobsP">Salary - {salary}</p>
        <p className="jobsP">Location - {location}</p>
       </li>
       </Link>
   )
}
export default JobsItem
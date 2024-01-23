import "./index.css"
const AdminJobsItem=(props)=>{
    const {details,fun}=props
    const {role,company,salary,location,id}=details
    const x=()=>{
        fun(id)
     }
   return(
       <div className="x220">
        <h1>{role}</h1>
        <p>{company}</p>
        <p>{salary}</p>
        <p>{location}</p>
        <button type="button" onClick={x}>DELETE</button>
       </div>
   )
}
export default AdminJobsItem
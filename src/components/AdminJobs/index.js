import {Component} from 'react'
import AdminJobsItem from '../AdminJobsItem'
import Headeradmin from "../Headeradmin"
// import Cookies from 'js-cookie'
import "./index.css"
import {v4 as uuidv4} from 'uuid'

class AdminJobs extends Component{
    state={there1:true,list1:[],role:"",company:"",salary:"",location:"",skills:"",des:""}
    fun=async(id)=>{
    //     const name1 = Cookies.get("name");
      const options1 = {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
          }
    }
      const responsedata=await fetch(`https://jobportalwebsite-pjzk.onrender.com/delete/jobs/${id}`,options1) 
      const data = await responsedata.text()
      console.log(data)

      const options3 = {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
          }
    }
      const responsedata2=await fetch(`https://jobportalwebsite-pjzk.onrender.com/delete/desjobs/${id}`,options3) 
      const data1 = await responsedata2.text()
      console.log(data1)

      const options2 = {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
    }
      const responsedata1=await fetch("https://jobportalwebsite-pjzk.onrender.com/get/jobs",options2) 
      const y = await responsedata1.json()
      this.setState({list1:y,there1:true,jobrole:"",comapany:"",salary:"",closeson:""})
    }
    add=async()=>{
        // const name1 = Cookies.get("name");
      const {role,company,salary,location,skills,des}=this.state
      const id = uuidv4()
      if (role!=="" && company!=="" && salary!=="" && location!=="" && skills!=="" && des!=="" ){
          const data = {
            id,
              role,
              company,
              salary,
              location
          }
          const data2 = {
            id,
              role,
              company,
              salary,
              location,
              skills,
              des
          }
          console.log(data)
          console.log(data2)

          const options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify(data),      
          };

          const response=await fetch("https://jobportalwebsite-pjzk.onrender.com/jobs/post",options)

          const options2 = {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify(data2),      
          };

          const response2=await fetch("https://jobportalwebsite-pjzk.onrender.com/desjobs/post",options2)

          const data3 = await response2.text()
          const data1 = await response.text()
          console.log(data1)
          console.log(data3)
          const options1 = {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",

              }
        }
          const responsedata=await fetch("https://jobportalwebsite-pjzk.onrender.com/get/jobs",options1) 
          const y = await responsedata.json()
          this.setState({list1:y,there1:true,role:"",company:"",salary:"",location:"",skills:"",des:""})
    }
  }
  w=(event)=>{
    this.setState({role:event.target.value})
}
  x=(event)=>{
    this.setState({company:event.target.value})
}
    y=(event)=>{
      this.setState({salary:event.target.value})
  }
  
  z=(event)=>{
    this.setState({location:event.target.value})
}
a=(event)=>{
  this.setState({skills:event.target.value})
}
b=(event)=>{
  this.setState({des:event.target.value})
}

  componentDidMount(){
    this.after()
  }
  after=async()=>{
    
    const options1 = {
      method:"GET",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        }
  }
    const responsedata=await fetch("https://jobportalwebsite-pjzk.onrender.com/get/jobs",options1) 
    const y = await responsedata.json()
    this.setState({list1:y})
  }
    render(){
        const {there1,list1,role,company,salary,location,skills,des}=this.state
        return(
            <div className='container14'>
              <Headeradmin/>
              <h1 className='head14'>Jobs List</h1>

              <div className='box14'>
              <div className='x14'>
              <label htmlFor='todo0'>Role</label>
              <input onChange={this.w}  id='todo0' value={role} type='text' placeholder='Enter the Role'/>
              </div>

              <div className='x14'>
              <label htmlFor='todo'>Company</label>
              <input onChange={this.x} id='todo' value={company} type='text' placeholder='Enter the Company name'/>
              </div>
              <div className='x14'>
              <label htmlFor='todo1'>Salary</label>
              <input onChange={this.y}  id='todo1' value={salary} type='text' placeholder='Enter the Salary'/>
              </div>

              <div className='x14'>
              <label htmlFor='todo2'>Location</label>
              <input onChange={this.z} id='todo2' value={location} type='text' placeholder='Enter the Location'/>
              </div>

              <div className='x14'>
              <label htmlFor='todo3'>Skills</label>
              <input onChange={this.a} id='todo3' value={skills} type='text' placeholder='Enter the Skills'/>
              </div>

              <div className='x14'>
              <label htmlFor='todo4'>Description</label>
              <input onChange={this.b} id='todo4' value={des} type='text' placeholder='Enter the description'/>
              </div>

              <button className='but14' type='button' onClick={this.add}>Add</button>
              </div>
              
        
              {there1 && (
                <ul className='card14'>{
                    list1.map(every=>
                        (<AdminJobsItem fun={this.fun} details={every} key={every.id}/>))
                }</ul>
              )}
            
            </div>
        )
    }
}

export default AdminJobs
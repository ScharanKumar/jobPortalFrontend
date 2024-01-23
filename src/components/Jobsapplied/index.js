import {Component} from 'react'
import JobsItemapplied from '../JobsItemapplied'
import Headerjobs from "../Headerjobs"
// import Apply from "../Apply"
// import {v4 as uuidv4} from 'uuid'
import Cookies from 'js-cookie'
import "./index.css"

class Jobs extends Component{
    state={there1:true,list1:[]}
    // fun=async(id)=>{
    //   const id1 = uuidv4()
    //    const rollno1= Cookies.get('roll1')
    //    const email1= Cookies.get('email1')
    //    const name1= Cookies.get('name')
    //    const data = {
    //       "rollno":`${rollno1}`,
    //       "name":`${name1}`,
    //     "jobid":`${id}`,
    //     "id":`${id1}`,
    //       "email":`${email1}`
    //   }
    //    const options = {
    //     method:"POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",

    //       },
    //       body: JSON.stringify(data),
    // }
    // const response=await fetch("https://jobportalwebsite-pjzk.onrender.com/apply/post",options)
    // const data1 = await response.text()
    // console.log(data1)
    // }
    

  componentDidMount(){
    this.after()
  }
  after=async()=>{
    const name= Cookies.get('name')
    console.log(name)
    const options1 = {
      method:"GET",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        }
  }
    const responsedata=await fetch(`https://jobportalwebsite-pjzk.onrender.com/applied/${name}`,options1) 
    const y = await responsedata.json()
    console.log(y)
    this.setState({list1:y})
  }
    render(){
        const {there1,list1}=this.state
        return(
            <div className='container15'>
              <Headerjobs/>
              <h1 className='head15'>Applied Jobs</h1>

              {there1 && (
                <ul className='card15'>{
                    list1.map(every=>
                        (<JobsItemapplied  details={every} key={every.id}/>))
                }</ul>
              )}
            
            </div>
        )
    }
}

export default Jobs
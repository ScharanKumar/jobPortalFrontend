import { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import Cookies from 'js-cookie'
// import Loader from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = { there:false,list1: [],x:false}

  componentDidMount() {
    this.getBlogItemData()
  }
  y=async()=>{
    const { match } = this.props
    const { params } = match
    const { id } = params
    const id1 = uuidv4()
       const rollno1= Cookies.get('roll1')
       const email1= Cookies.get('email1')
       const name1= Cookies.get('name')
       const data = {
          "rollno":`${rollno1}`,
          "name":`${name1}`,
        "jobid":`${id}`,
        "id":`${id1}`,
          "email":`${email1}`
      }
       const options = {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",

          },
          body: JSON.stringify(data),
    }
    const response=await fetch("https://jobportalwebsite-pjzk.onrender.com/apply/job",options)
    const data1 = await response.text()
    console.log(data1)


    this.setState((prevState)=>({x:!prevState.x}))
  }
  apply=()=>{
    const {x}=this.state
    console.log(x)
    if (x===true){
      return(
        <button className='butb'>Applied</button>
      )
    }
    else{
      return (
        <button className="butb" onClick={this.y}>Apply</button>
      )
    }
  }

  getBlogItemData = async () => {
    const { match } = this.props
    const { params } = match
    const { id } = params

    const response = await fetch(`https://jobportalwebsite-pjzk.onrender.com/jobdes/${id}`)
    const data = await response.json()
    // const y = await responsedata.json()
    this.setState({list1:data,there:true})

  }

  renderBlogItemDetails = () => {
    const { list1,there } = this.state
    if (there===false) return (<div></div>)
    const { role,location,salary,skills,des,company } = list1[0]

    return (
      <div >
          <div className='details'>
        <img className='imageblog' alt='jobImage' src='https://media.istockphoto.com/id/1477362532/vector/company-employee-writing-job-description-in-flat-design.jpg?s=612x612&w=0&k=20&c=CowdJkazd3DPBXzQIrdHNJsX0OeNyhhKTHMvNB5ZQfw='/>
        <div className='det'>
        <h1>Role</h1>
        <button className='butblog'>{role}</button>
        <h1>Location</h1>
        <button className='butblog'>{location}</button>
        <h1>Salary</h1>
        <button className='butblog'>{salary}</button>
        <h1>Skills</h1>
        <button className='butblog'>{skills}</button>
        <h1>Description - <span className='h12'>{des}</span></h1>
        {/* <p className='butblog'>{des}</p> */}
        <h1>Company</h1>
        <button className='butblog'>{company}</button>
        {this.apply()}
        {/* <p>Location - {location}</p>
        <p>Salary - {salary}</p>
        <p>Skills - {skills}</p>
        <p>Description - {des}</p>
        <p>Company - {company}</p> */}
  
        </div>
      </div>
        
        
      </div>
    )
  }

  render() {

    return (
      <div >
        {
          this.renderBlogItemDetails()
        }
      </div>
    )
  }
}

export default BlogItemDetails
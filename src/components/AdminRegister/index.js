import {Component} from 'react'
import "./index.css"

class AdminRegister extends Component{
    state={username:"",password:""}
    y=(event)=>{
        this.setState({username:event.target.value})
    }
    x=(event)=>{
        this.setState({password:event.target.value})
    }
    reg=async()=>{
        const {username,password}=this.state
        if (username!=="" && password!==""){
            const data = {
                username,
                password
            }
            const options = {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",

                  },
                  body: JSON.stringify(data)
            }
            const res1=await fetch("https://jobportalwebsite-pjzk.onrender.com/admin/register",options)
            console.log(res1)
            const resdata = await res1.text()
            console.log(resdata)
            const {history}=this.props
            history.replace("/admin/login")
        }
        
    }
    render(){
        const {username,password}=this.state
        return(
           <div className='container11'>
            <div>
            <img src='https://www.vigrotechnology.com/wp-content/uploads/2020/12/register.png' alt='imm' className='img2' />
            </div>
              
              <div className='box11'>
                <h1>ADMIN REGISTER</h1>
                <div className='x11'>
                <label htmlFor="user">Username</label>
                <input className='inputar' value={username} onChange={this.y} id='user' type="text" placeholder='Enter the username'/>
                </div>
                
                <br/>

                <div className='x11'>
                <label htmlFor="pass">Password</label>
                <input className='inputar' value={password} onChange={this.x} id='pass' type="password" placeholder='Password'/>
                </div>

                <div>
                <button onClick={this.reg} className='but11' type='button' >Register</button>
                </div>
                
                
              </div>
           </div>
        )
    }
} 

export default AdminRegister
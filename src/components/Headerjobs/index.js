import { Link, withRouter } from 'react-router-dom'
// import Cookies from 'js-cookie'
import "./index.css"
const Headerjobs = (props) => {
    // const { history } = props
    // const x = () => {
    //     Cookies.remove('jwt_token')
    //     Cookies.remove('name')
    //     history.replace('/login')
    // }
    return (
        <div className='xdiv'>
            <ul className='headercon'>

            <li className='headerli1'>
                    <Link className="headery" to="/">GoToHomePage</Link>
                </li>
                <li className='headerli1'>
                    <Link className="headery" to="/notapplied">Oppurtunities</Link>
                </li>
                <li className='headerli1'>
                    <Link className="headery" to="/applied">Applications</Link>
                </li>
                
            
                {/* <button type='button' className='headerBut' onClick={x}>Log Out</button> */}

            </ul>


        </div>

    )
}
export default withRouter(Headerjobs)
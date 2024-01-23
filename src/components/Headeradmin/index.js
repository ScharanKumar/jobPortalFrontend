import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import "./index.css"
const Headeradmin = (props) => {
    const { history } = props
    const x = () => {
        Cookies.remove('jwt_token1')
        history.replace('/admin/login')
    }
    return (
        <ul className='headercon1'>
            <li className='headerli1'>
                <Link className="headerx1" to="/admin/jobs">JOBS LIST</Link>
            </li>
            <li className='headerli1'>
                <Link className="headerx1" to="/companies/applied">APPLIED</Link>
            </li>
            <button type='button' className='headerBut1' onClick={x}>Log Out</button>

        </ul>

    )
}
export default withRouter(Headeradmin)
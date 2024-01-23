import { Route, Switch} from "react-router-dom"

import Login from "./components/Login"
import Register from "./components/Register"
import AdminLogin from "./components/AdminLogin"
import AdminRegister from "./components/AdminRegister"
import AdminJobs from "./components/AdminJobs"
import Home from "./components/Home"
import Jobs from "./components/Jobs"
import Jobsapplied from "./components/Jobsapplied"
import BlogItemDetails from "./components/BlogItemDetails"
import BlogItemDetailsapplied from "./components/BlogItemDetailsapplied"
import CompaniesApplied from "./components/CompaniesApplied"
// import Todolist from "./components/Todolist"
import ProtectedRoute from "./components/ProtectedRoute"
import ProtectedRoute1 from "./components/ProtectedRoute1"

const App=()=>{
    return(
      // <BrowserRouter>
         <Switch>
             <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/admin/login" component={AdminLogin}/>
              <Route exact path="/admin/register" component={AdminRegister}/>
              <Route path="/jobdes/:id" component={BlogItemDetails} />
              <Route path="/jobdesapplied/:id" component={BlogItemDetailsapplied} />
              <ProtectedRoute1 exact path="/admin/jobs" component={AdminJobs}/>
              <ProtectedRoute exact path="/" component={Home}/>
              <ProtectedRoute exact path="/applied" component={Jobsapplied}/>
              <ProtectedRoute exact path="/notapplied" component={Jobs}/>
             <ProtectedRoute exact path="/jobs" component={Jobs}/>
              <ProtectedRoute1 exact path="/companies/applied" component={CompaniesApplied}/>
            
         </Switch>
      // </BrowserRouter>
    )
}

export default App

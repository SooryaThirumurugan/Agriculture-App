import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Provider} from 'react-redux';
import store from "./assets/Others/store";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/Login";
import Navbar from "./Components/Navbar";
import FundPage from "./pages/Funds";
import RegistrationForm from "./pages/Register";
import Sidebar from "./Components/Sidebar";
import DashboardPage from "./Components/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProfilePage from "./pages/Profile";
import LoanApplyForm from "./pages/Loanapply";
import AdminHome from "./pages/AdminHome";
// import AdminSettings from "./pages/AdminSettings";
import { Login } from "@mui/icons-material";
import UserDetails from "./pages/UserDetails";

function App()
{
  return(
    <Provider store={store}>

    <Router>
      <Routes>
     
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/Login" element={<LoginPage/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/Register" element={<RegistrationForm/>}></Route>
        <Route path="/sidebar" element={<Sidebar/>}></Route>
        <Route path="/funds" element={<FundPage/>}></Route>
        <Route path="/dashboard" element={<DashboardPage/>}></Route>
        <Route path="/admin/login" element={<AdminLogin/>}></Route>
        <Route path="profile" element={<ProfilePage/>}></Route>
        <Route path="/admin/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/loanapply" element={<LoanApplyForm/>}></Route>
        <Route path="/admin/admin-home" element={<AdminHome/>}></Route>
        <Route path="/admin/user-details" element={<UserDetails/>}></Route>
                
      
      </Routes>
    </Router>
    </Provider>
  )
}
export default App;


import Home from "./components/Home/Home"
import './index.css';
import { BrowserRouter as Router,Routes,Route ,Navigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import Main from "./components/Home/Admin/Main/main";
import Login from "./components/Home/Admin/Login/login";
import Signup from "./components/Home/Admin/Signup/signup";
import axios from "axios";
import Admin from "./components/Home/Admin/index"
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from "./redux/rootslice";

function App() {
  const user = localStorage.getItem("token");

  const{loading,portfolioData,realoadData}=useSelector((state)=>state.root)
  const dispatch=useDispatch();
  const getPortfolioData=async()=>{
    try{
      dispatch(ShowLoading());
      const response =await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
dispatch(HideLoading());
    }catch(err){
      dispatch(HideLoading());
     console.log(err);

    }
  }
  useEffect(()=>{
    if(!portfolioData){
    getPortfolioData();}
  },[portfolioData]);
  useEffect(()=>{
    if(!realoadData){
    getPortfolioData();}
  },[realoadData]);
 
  
  return (
   <Router>
    {loading?<Loader/>:null}
    <Routes>
    {user && <Route path="/" exact element={<Admin />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
      <Route path='/home' element={<Home/>}/>
			<Route path="/" element={<Navigate replace to="/login" />} />
      {/* <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/admin-login' element={<Login/>} /> */}
    </Routes>
   </Router>
  );
}

export default App;

import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { TOKEN,http } from '../components/util/setting'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileActionAsync } from './reduxDemo/userReducer'
const Profile = () => {
  // const [profile, setProfile] = useState({})

  //Lay userProfile ve redux
  const {profile} = useSelector(state=>state.userReducer) //  B2
  const dispatch = useDispatch()

  const navigate=useNavigate();


  const getProfileApi= async ()=>{
  //   try{
  //     const res= await http.post('/api/Users/getProfile')

  //   // const res = await axios({
  //   //   // url:'https://apistore.cybersoft.edu.vn/api/Users/getProfile',
  //   //   // method:'POST',
  //   //   // headers:{
  //   //   //   'Authorization':localStorage.getItem(TOKEN)
  //   //   // }

  //   // });
    
  //   console.log(res.data.content);
  //   // console.log(localStorage.getItem(TOKEN));
  //   //Đưa vào state
  //   setProfile(res.data.content)
  // }catch(err){
  //   console.log(err);
    
  //   // Thất bại thì sẽ chuyển hướng trang
  //   alert('Đăng nhập để vào profile')
  //   navigate('/login')
  // }

  //redux action async (goi api) B3
    const actionAsync = getProfileActionAsync; //actionAsync la mot ham chua goi (callback co 1 tham so dispatch)
    dispatch (actionAsync)
}
  useEffect(()=>{
    getProfileApi();
  },[])

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 sidebar">
          <img src={profile.avatar} alt="User Avatar" className="img-fluid" />
          <h3>{profile.name}</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Setting</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Signout</a>
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="col-md-9">
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">About</h4>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  nam hacker
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  namhacker@gmail.com
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  090909
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Gender</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Male
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Projects</h4>
              <p>No recent projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
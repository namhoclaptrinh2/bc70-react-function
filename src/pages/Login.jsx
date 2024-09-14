import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setCookie, TOKEN } from "../components/util/setting";
import { loginActionAsync } from "./reduxDemo/userReducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch()
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      // console.log(values)
      // if(values.email === 'cybersoft' && values.password === 'cybersoft'){
      //   //Chuyển hướng profile
      //   navigate('/profile');
      // }else{
      //   //Chuyển hướng forgot
      //   // navigate('/user/forgot-pass',{replace:true}); //thay thế route hiện tại = route tương ứng

      //   navigate('user/forgot-pass');
      // }


       //Xử lý gửi dữ liệu về api login của backend để lấy token lưu vào máy client
      //  const res = await axios({
      //   url:'https://apistore.cybersoft.edu.vn/api/Users/signin',
      //   method:'POST',
      //   data: values
      // })
      //  //Lưu token vào client (localstorage, cookie)
      //   // localstorage (server không lấy được) 
      // console.log(res.data.content)

      // const token = res.data.content.accessToken;
      // localStorage.setItem('accessToken', token)
      // const userLogin = JSON.stringify(res.data.content);
      // localStorage.setItem('userLogin',userLogin)

      // //LƯU VÀO COOKIE
      // // setCookie('accessToken',token,7)
      // setCookie(TOKEN,token,7)
      // navigate('/profile')

      //Cách 2 : sử dụng redux thunk
      const actionAsync = loginActionAsync(values);
      dispatch(actionAsync)
    },
  });
  return (
    <form className="container" onSubmit={frmLogin.handleSubmit}>
      <div className="w-50 mx-auto">
        <h3 className="text-center fs-1 text-white">Login</h3>
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                name="email"
                onChange={frmLogin.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              {/* <input
                className="form-control"
                id="password"
                name="password"
                onChange={frmLogin.handleChange}
                type="password"
              /> */}
              <input className="form-control" id="password" name="password" type="password" autoComplete="current-password" 
              onChange={frmLogin.handleChange} />

            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-dark mt-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

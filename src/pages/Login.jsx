import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate= useNavigate();
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
      if(values.email === 'cybersoft' && values.password === 'cybersoft'){
        //Chuyển hướng profile
        navigate('/profile');
      }else{
        //Chuyển hướng forgot
        // navigate('/user/forgot-pass',{replace:true}); //thay thế route hiện tại = route tương ứng

        navigate('user/forgot-pass');
      }
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
              <input
                className="form-control"
                id="password"
                name="password"
                onChange={frmLogin.handleChange}
                type="password"
              />
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

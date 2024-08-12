import React, { useState } from 'react'

const BtForm = () => {

  const [userLogin, setUserLogin] = useState({
    username:'',
    email: '',
    password: '',
    country:''
});
const [error, setError] = useState({
    username:'',
    email: '',
    password: '',
    country:''
})

console.log(userLogin);
const handleSubmit = (e) => {
    e.preventDefault();//Chặn reload browser
    // Chặn submit khi form không hợp lệ
    // Hợp lẹ khi (các error bằng roomgx và form đã nhập liệu)
    for (let key in error){
        if(error[key] !== ''){ //Chỉ cần 1 lỗi xảy ra (obbjectError có ít nhất 1 trường có giá trị)
            alert('Dữ liệu không hợp lệ !!')
            return; //Dừng hàm submit
        }
    }
    for(let key in userLogin){
        if(userLogin[key] === '' && key !== 'phone'){
            alert('Dữ liệu không hợp lệ !!')
            return;
        }
    }
    // Xử lý submit
    console.log('submit');
}

const handleChangeInput = (e) => {
    //state value
    const { name, value } = e.target;
    let attrType = e.target.getAttribute('data-type');
    console.log(attrType);
    //state error
    let messError = '';
    if(value === ''){ //nếu value rỗng thì lỗi 
        messError = `${name} is required !`;
    }else {
        //xét lỗi nếu như đã nhập liệu thì xét lỗi regex
        switch(attrType){
            case 'email' :{
                const regexEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                
                if(!regexEmail.test(value)) {
                    messError = `${name} is invalid!`;
                }
            };break;
            case'password':{
                const regexPhone = /^(0[1-9]{1}[0-9]{8}|(84|0)(9[0-9]|8[1-9]|7[0-9]|6[2-9]|5[0-9]|4[0-9]|3[2-9]|2[0-9]|1[0-9])[0-9]{7})$/;
                if(!regexPhone.test(value)){
                    messError = `${name} is invalid (ex: 0909090909)`
                }break;
            }
        }
        
    }
    setError({
        ...error, // clone lại giá trị cũ,giúp lưu giữ giá trị cũ
        [name]: messError
    })
    //setState(cuối cùng)
    setUserLogin({
        ...userLogin,
        [name]: value
    });
  }


  
  return (
<form className="container mt-5" onSubmit={handleSubmit}>
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center mb-4">User Registration</h3>
          <form>
         {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" />
            </div>
            {/* Email */} *
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
                {/* Gioi tinh */}
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="male" />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="female" />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            {/* Country */}
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country">
                <option selected>Australia</option>
                <option value={1}>United States</option>
                <option value={2}>Canada</option>
                <option value={3}>United Kingdom</option>
              </select>
            </div>
            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>
            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</form>  )
}

export default BtForm
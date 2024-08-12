import React from "react";

const DemoRenerCondition = () => {
  const isLogin = true; //true là dăng nhập rồi | false chưa đăng nhập
  const dtb = 6.8;
  const renderLogin = () => {
    if (isLogin) {
      return (
        <div>
          Hello Nam
          <ul>
            <li>Thông tin tài khoản</li>
            <li>Đăng xuất</li>
          </ul>
        </div>
      );
    }
    return <button className="btn btn-dark">Đăng nhập</button>;
  };

  const renderXepLoai = () => {
    let jsxKQ = <h1>Yếu</h1>;
    if (dtb >= 8) {
      jsxKQ = <h1>Giỏi</h1>;
    } else if (dtb < 8 && dtb > 6.5) {
      jsxKQ = <h1>Khá</h1>;
    } else {
      jsxKQ = <h1>Yếu</h1>;
    }
    return jsxKQ;
  };
  return (
    <div className="container">
      {/* {isLogin ? <div>Hello Nam
          <ul>
              <li>Thông tin tài khoản</li>
              <li>Đăng xuất</li>
          </ul>
      </div> : <div>Đăng nhập</div>} */}
      {renderLogin()}

      {/* {dtb >= 8 ? <h1>{dtb} : Xếp loại Giỏi</h1> : dtb < 8 && dtb>= 6.5? <h1>Khá</h1> : 'Yếu'} */}
      {renderXepLoai()}
    </div>
  );
};

export default DemoRenerCondition;

import React, { useState } from "react";

import CartProduct from "./CartProduct";

import ArticleItem from "./ArticleItem";
import ModalComponent from "./ModalComponent";
import ChangeColor from "../components/DemoState/ChangeColor";
import ChangeFontSize from "../components/DemoState/ChangeFontSize";
import DemoPropsChildren from "./DemoPropsChildren";
import TinkerApp from "../components/DemoState/TinkerApp";
import DemoPropsCallback from "./DemoPropsCallback";
const DemoProps = () => {
  const data1 = {
    title: "ABC",
    content: "abc123",
    like: 1000,
    dislike: 1,
    view: 1000,
  };
  const data2 = {
    title: "XYZ",
    content: "321321",
    like: 50,
    dislike: 21,
    view: 200,
  };
  const [login,setLogin] = useState(false);
  const renderLogin = () => {
    if(login) {
        return <h3>Hello Nam</h3>
    }else {
        return <button className='btn btn-success' onClick={()=>{
            setLogin(true)
        }}>Login</button>
    }
}
  return (
    <div className="container">
      <h3>Danh sách sản phẩm</h3>
      <div className="row">
        <div className="col-3">
          <CartProduct tenSanPham="Sản phẩm A" gia="1000"></CartProduct>
        </div>
        <div className="col-3">
          <CartProduct tenSanPham="Sản phẩm B"></CartProduct>
        </div>
        <div className="col-3">
          <CartProduct tenSanPham="Sản phẩm C"></CartProduct>
        </div>
      </div>
      <h3>Danh mục bài viết</h3>
      {/* <ArticleItem contentArticle={{title:'ABC',contemt:'abc123',like:'100',dislike:'1',view:'1000'}}></ArticleItem> */}
      <ArticleItem contentArticle={data1}></ArticleItem>
      <ArticleItem contentArticle={data2}></ArticleItem>
      <h3>Popup</h3>
      <ModalComponent
        title="LoginForm"
        contentJSX={
          <>
            <div className="form-group">
              <input className="form-control" placeholder="username" />
            </div>
            <div className="form-group mt-2">
              <input className="form-control" placeholder="password" />
            </div>
          </>
        }
      ></ModalComponent>
      <ModalComponent
        title="ChangeColorApp"
        contentJSX={<ChangeColor></ChangeColor>}
      />
      <ModalComponent
        title="changeFonSize"
        contentJSX={<ChangeFontSize></ChangeFontSize>}
      />
      <DemoPropsChildren title="jsxElement Children">
        <h3>ABC</h3>
        <ChangeColor />
      </DemoPropsChildren>
      <ModalComponent title="Apptiker" contentJSX={<TinkerApp></TinkerApp>} />
        
      <hr />
      
         <h3>Demo callback</h3>
         <DemoPropsCallback renderCondition={renderLogin}></DemoPropsCallback>

    </div>
  );
};

export default DemoProps;

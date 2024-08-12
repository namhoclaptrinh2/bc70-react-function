import React from "react";
import Databinding from "./databinding/Databinding";
import DemoHandleEvent from "./components/eventHandler/DemoHandleEvent";
import DemoRenerCondition from "./components/renderCondition/DemoRenerCondition";
import DemoRenderCondition from "./components/renderCondition/DemoRenerCondition";
import ChangeNumber from "./components/DemoState/ChangeNumber";
import ChangeFontSize from "./components/DemoState/ChangeFontSize";
import TinkerApp from "./components/DemoState/TinkerApp";
import ChangeColor from "./components/DemoState/ChangeColor";
import ReMakeChangeNumber from "./components/ReMake/ReMakeChangeNumber";
import DemoProps from "./props/DemoProps";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BTProductList from "./RenderWithMap/BTProductList/BTProductList";
import DanhSachSanPham from "./LiftingStatdeup/DanhSachSanPham";
import EXCarStore from "./LiftingStatdeup/EXCarStore/EXCarStore";
import GioHang from "./LiftingStatdeup/GioHang";
import Shoes from "./ApiDemo/Shoes";
import DemoLoginForm from "./FormDemo/DemoLoginForm";
import DemoLoginForm_useFormik from "./FormDemo/DemoLoginForm_useFormik";
//Cấu hình react router dom
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Search from "./pages/Search";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import HeaderMenu from "./components/HeaderMenu";
import HomePageMaster from "./components/MasterPages/HomePageMaster";
import UserPageMaster from "./components/MasterPages/UserPageMaster";
import Register from "./pages/Register";
import AdminPageMaster from "./components/MasterPages/AdminPageMaster";
import UserManagement from "./pages/UserManagement";
import ProductManagement from "./pages/ProductManagement";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";
import Detail from "./pages/Detail";
import DashBoard from "./pages/DashBoard";
import AddProduct from "./pages/ProductManagement/AddProduct";
import EditProduct from "./pages/ProductManagement/EditProduct";
import Product from "./pages/ProductManagement/Product";
import AntDesignDemo from "./AntDesignDemo/AntDesignDemo";
import AntDesignTable from "./AntDesignDemo/AntDesignTable";
import ProductManagementAntDesign from "./AntDesignDemo/ProductManagementAntDesign";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChangeNumberRedux from "./pages/reduxDemo/ChangeNumberRedux";
import BtForm from "./FormDemo/BtForm";
const App = () => {
  return (
    <>
      {/* <Databinding></Databinding> */}
      {/* <DemoHandleEvent></DemoHandleEvent> */}
      {/* <DemoRenerCondition></DemoRenerCondition> */}
      {/* <ChangeNumber></ChangeNumber> */}

      {/* <ChangeFontSize></ChangeFontSize> */}
      {/* <TinkerApp></TinkerApp> */}
      {/* <ChangeColor></ChangeColor> */}

      {/* <DemoProps></DemoProps> */}
      {/* <RenderWithMap ></RenderWithMap> */}
      {/* <BTProductList></BTProductList> */}

      {/* <DanhSachSanPham></DanhSachSanPham> */}
      {/* <EXCarStore></EXCarStore> */}
      {/* <Shoes></Shoes> */}
      <DemoLoginForm></DemoLoginForm>
      {/* <DemoLoginForm_useFormik></DemoLoginForm_useFormik> */}

      {/* <ReMakeChangeNumber></ReMakeChangeNumber> */}

      <BrowserRouter>
        {/* <HeaderMenu></HeaderMenu> */}
        <Provider store={store}>
        <Routes>
          {/* <Route path='' element={<HomePage></HomePage>}></Route> */} /*cách
          để mặc định trang chủ */
          {/* <Route index element={<HomePage></HomePage>}></Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='search' element={<Search></Search>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route> */}

          <Route path="" element={<HomePageMaster></HomePageMaster>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="antd" element={<AntDesignDemo></AntDesignDemo>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route path="search" element={<Search></Search>}></Route>
            <Route path='antd-table' element={<AntDesignTable />}></Route>    
            <Route path='antd-table-product' element={<ProductManagementAntDesign />}></Route>
            <Route path="btform" element={<BtForm></BtForm>}></Route>

          <Route path="redux" element={<>
            <h1>Demo Redux</h1>
            <Outlet></Outlet>
            </>}>
              <Route path="change-number" element={<ChangeNumberRedux></ChangeNumberRedux>}></Route>
            </Route>

            <Route path="detail">
              <Route path=":proId" element={<Detail></Detail>}></Route>
            </Route>
            <Route path="*" element={<Page404></Page404>}></Route>
          </Route>
          <Route path="user" element={<UserPageMaster></UserPageMaster>}>  /*http://localhost:5173/user */
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="forgot-pass" element={<ForgotPass></ForgotPass>}></Route>
            <Route path="*" element={<Navigate to="./login"></Navigate>}></Route>
          </Route>

          <Route path='admin' element={<AdminPageMaster />}>
          <Route index element={<DashBoard />}></Route>
          <Route path='usermanagement' element={<UserManagement />}></Route>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="product">
            <Route path=":id" element={<Product></Product>}></Route>
          </Route>
          <Route path='add-product' element={<AddProduct />}></Route>     
          <Route path='product-edit'>
            <Route path=':id' element={<EditProduct />}></Route>
          </Route>
          
          <Route path='productmanagement' element={<ProductManagement />}></Route>
          <Route path='*' element={<Page404 />} />

        </Route>

          
        </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;

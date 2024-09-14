import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteCookie, TOKEN, USER_LOGIN } from "./util/setting";

const HeaderMenu = () => {

  const cartStore = useSelector(state => state.cartSliceReducer.cart);

  const {userLogin} =useSelector(state => state.userReducer);

  const navigate=useNavigate()

  const renderLogin = () => {
      if(userLogin) {
        return <>
          <NavLink
        to="/profile"
        className={(props) =>
          props.isActive
            ? "mx-2 bg-white text-dark p-3 text-decoration-none"
            : "mx-2 text-white link"
        }
        style={(props) => (props.isActive ? { fontWeight: "bold" } : {})}
      >
        Hello !{userLogin.email}
      </NavLink>

      <NavLink className={'mx-2 text-white link'} onClick={()=>{
                deleteCookie(TOKEN);
                localStorage.removeItem(TOKEN);
                localStorage.removeItem(USER_LOGIN);
                navigate('/login');
                window.location.reload();
            }}>Đăng xuất</NavLink>
        </>
        
      }
      return         <NavLink
      to="/login"
      className={(props) =>
        props.isActive
          ? "mx-2 bg-white text-dark p-3 text-decoration-none"
          : "mx-2 text-white link"
      }
      style={(props) => (props.isActive ? { fontWeight: "bold" } : {})}
    >
      Login
    </NavLink>
  }
  return (
    <header className="bg-dark text-white">
      <div className='d-flex justify-content-between'>
      <nav className="p-2">
        <NavLink
          to="/"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white text-dark p-3 text-decoration-none"
              : "mx-2 text-white link"
          }
        >
          Home
        </NavLink>

        {/* <NavLink
          to="/login"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white text-dark p-3 text-decoration-none"
              : "mx-2 text-white link"
          }
          style={(props) => (props.isActive ? { fontWeight: "bold" } : {})}
        >
          Login
        </NavLink> */} {renderLogin()}

        <NavLink
          to="/register"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white text-dark p-3 text-decoration-none"
              : "mx-2 text-white link"
          }
          style={(props) => (props.isActive ? { fontWeight: "bold" } : {})}
        >
          Register
        </NavLink>        
        <NavLink
          to="/user/login"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white text-dark p-3 text-decoration-none"
              : "mx-2 text-white link"
          }
          style={(props) => (props.isActive ? { fontWeight: "bold" } : {})}
        >
          User Login
        </NavLink>

        <NavLink
          to="/about"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white text-dark p-3 text-decoration-none"
              : "mx-2 text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white p-3 text-decoration-none"
              : "mx-2 text-white"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/search"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white p-3 text-decoration-none"
              : "mx-2 text-white"
          }
        >
          Search
        </NavLink>

        <NavLink
          to="/btform"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white p-3 text-decoration-none"
              : "mx-2 text-white"
          }
        >
          BtForm
        </NavLink>

        <NavLink
          to="/antd"
          className={(props) =>
            props.isActive
              ? "mx-2 bg-white text-dark p-3 text-decoration-none"
              : "mx-2 text-white"
          }
        >
          Antd
        </NavLink>
        <div className="dropdown d-inline w-auto">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Antd - Demo
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              {" "}
              <NavLink className="dropdown-item" to="/antd-table">
                {" "}
                Table{" "}
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="dropdown-item" to="/antd-table-product">
                {" "}
                Table - Product{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown d-inline w-auto">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Redux - Demo
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              {" "}
              <NavLink className="dropdown-item" to="/redux/change-number">
                {" "}
                Change number{" "}
              </NavLink>
            </li>
            <li> <NavLink className="dropdown-item" to="/redux/change-fontsize"> Change font size </NavLink></li>

          </ul>
        </div>
      </nav>
      <NavLink to='/cart' className={(props) => props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' : 'mx-2 text-white link'}>
                    <i className='fa fa-cart-plus fs-2'></i>  ({cartStore.length})
                </NavLink>
      </div>
      
    </header>
  );
};

export default HeaderMenu;

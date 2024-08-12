import React from "react";
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <header className="bg-dark text-white">
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
        <NavLink
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMenu;

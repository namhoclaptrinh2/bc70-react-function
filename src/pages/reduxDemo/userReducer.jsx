//rxslice
import { createSlice } from "@reduxjs/toolkit";
import {
  http,
  setCookie,
  TOKEN,
  USER_LOGIN,
} from "../../components/util/setting";

let getUserLoginDefault = () => {
  if (localStorage.getItem(USER_LOGIN)) {
    const usDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
    return usDefault;
  }
  return null;
};

const initialState = {
  userRegister: {
    id: 0,
    email: "",
    password: "",
    name: "",
    gender: true,
    phone: "",
  },
  userLogin: getUserLoginDefault(),
  profile: {} //B1
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    handleChangeInputAction: (state, action) => {
      //Xử lý state
      const { id, value } = action.payload;
      state.userRegister[id] = value;
    },
    setUserLoginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    setProfileAction: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { handleChangeInputAction, setUserLoginAction,setProfileAction } =
  userReducer.actions;

export default userReducer.reducer;

// -----------action async-------------

export const loginActionAsync = (userLoginModel) => {
  return async (dispatch, getState) => {
    // Gọi api để lấy dữ liệu
    const res = await http.post(
      "https://apistore.cybersoft.edu.vn/api/Users/signin",
      userLoginModel
    );
    //Lưu token vào client (localstorage, cookie)
    // localstorage (server không lấy được)
    console.log(res.data.content);

    const token = res.data.content.accessToken;
    localStorage.setItem(TOKEN, token);
    const userLogin = JSON.stringify(res.data.content);
    localStorage.setItem(USER_LOGIN, userLogin);

    //LƯU VÀO COOKIE
    // setCookie('accessToken',token,7)
    setCookie(TOKEN, token, 7);
    //Nạp dữ liệu lên store
    const actionPayload = setUserLoginAction(res.data.content);
    dispatch(actionPayload);

    //Gọi api
    const actionAsync = getProfileActionAsync;
    dispatch(actionAsync)

    const globalState = getState();
    console.log(globalState)
  };
};

export const getProfileActionAsync = async (dispatch) => {
  try{
  //Xu ly logic

    const res = await http.post("https://apistore.cybersoft.edu.vn/api/Users/getProfile");


  //Sau khi lay du lieu thanh cong tu api => dung action payload de dua len store
  const actionPayload = setProfileAction(res.data.content);
  dispatch(actionPayload);
  

  
  }catch(err){
    console.log(err)
  }
  
};

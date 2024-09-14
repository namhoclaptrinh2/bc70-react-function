import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../components/util/setting';

const initialState = {
    arrProduct:[], //state arrProduct của trang chủ
    prodDetail:{}
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductAction:(state,action)=>{
        state.arrProduct= action.payload
    },
    setProductDetailAction:(state,action)=>{
        state.prodDetail=action.payload
    }
  }
});

export const {setProductAction,setProductDetailAction} = productReducer.actions

export default productReducer.reducer


//---------------------action thunk-----------------

export const getProductApiActionThunk = () => {
    return async (dispatch)=>{ 
        //Cho phép thực thi logic api 
        const res = await http.get('https://apistore.cybersoft.edu.vn/api/Product');
        console.log(res)
        //Sau khi thực thi logic api xong thì có được dữ liệu sẽ đưa lên store = tham số dispatch của thunk
        const actionPayload = setProductAction(res.data.content);
        dispatch(actionPayload);
    }
}

export const getProductDetailByIdActionThunk =  (id)=>{ //closure function

    return async (dispatch)=>{ //hàm action thunk
        const res = await http.get(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`)

        //Sau khi gọi api và có dữ liệu => tạo ra action payload đưa lên store
        const actionPayLoad = setProductDetailAction(res.data.content)
        console.log(actionPayLoad)
        dispatch(actionPayLoad)
    }
}




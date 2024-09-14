//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart : [{id:1, name:'product 1',price:1000,quantity:2,image:'https://picsum.photos/200/200' }]
}

const cartReducer = createSlice({
  name: 'cartReducer', //tên reducer
  initialState, // giá trị dafault
  reducers: {
    addProductAction: (state, action) => {
        const { type, payload } = action;
        console.log(payload)
        // if (type === 'ADD_PRODUCT') {
            const itemCart = state.cart.find(item => item.id == payload.id);
            if (itemCart) {
                itemCart.quantity += 1;
            } else {
                state.cart.push(payload);
            }
        // }
        //  
        //Tự xử lý imutable
    },
    deleteProductAction:(state,action) => {
        const {payload} = action;
            state.cart = state.cart.filter(item => item.id !== payload);
    },
    changeQuantityProductAction:(state,action) => {
        const {payload} = action;
        let itemCart = state.cart.find(item=>item.id === payload.id);
            if(itemCart) {
                itemCart.quantity += payload.quantity;
            }
    }
  } // hàm xử lý action
});

export const {addProductAction,deleteProductAction,changeQuantityProductAction} = cartReducer.actions // bóc tách hàm xử lý action

export default cartReducer.reducer  //cartReducer.reducer chính là reducer của file này
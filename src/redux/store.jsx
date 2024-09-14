//File này sẽ chứa toàn bộ state của ứng dụng
import { configureStore } from '@reduxjs/toolkit'
import _ from 'lodash';
import { numberReducer } from './reducers/numberReducer';
import { fontSizeReducer } from './reducers/fontSizeReducer';
import cartReducer from './reducers/cartReducer';
import userReducer from '../pages/reduxDemo/userReducer';
import productReducer from '../pages/reduxDemo/productReducer';

const cartDefault =[
    {id:1, name:'product 1',price:1000,quantity:2,image:'https://picsum.photos/200/200' }
]
export const store = configureStore ({
    reducer:{
        numberReducer :(number = 200,action) => {
            //tất cả reducer đều chạy khi dispatch bất kì component nào

            if(action.type == 'CHANGE_QUANTITY'){
                number += action.payload;
            }
            return number;//return state mới
        },
        AReducer: (state='A',action) => state, 
        BReducer: (state='B',action) => state, 
        fontSizeReducer:(fSize =17, action)=>{
             //tất cả reducer đều chạy khi dispatch bất kì component nào
             const {type,payload} = action;
             if(type==='CHANGE_FONT_SIZE') {
                 fSize += payload;
             }
             return fSize; //imutatble : tính bất biến
        },
        
        //cách cũ
        cartReducer: (cart = cartDefault, action) => {
            const { type, payload } = action;
            if (type === 'ADD_PRODUCT') {
                const itemCart = cart.find(item => item.id == payload.id);
                if(itemCart){
                    itemCart.quantity += 1;
                }else {
                    cart.push(payload);
                }
            }
            //Clone ra địa chỉ mới 
            // let newCart = [...cart];
            return _.cloneDeep(cart);
        },

        
        cartSliceReducer: cartReducer,
        userReducer:userReducer,
        productReducer:productReducer
    }
})

/*
    imutable: 
    Khi reducer trả về giá trị mới (shallow compare) thì component useSelector đến state đó sẽ render lại, còn các component follow từ các reducer khác nếu không thay đổi sẽ không render. 
*/

//hàm này là hàm return về state(reducer)
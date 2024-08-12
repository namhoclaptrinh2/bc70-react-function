//File này sẽ chứa toàn bộ state của ứng dụng
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore ({
    reducer:{
        numberReducer :(number = 200,action) => {
            if(action.type == 'CHANGE_QUANTITY'){
                number += action.payload;
            }
            return number;
        },
        AReducer: (state='A',action) => state, 
        BReducer: (state='B',action) => state, 
    }
})
//hàm này là hàm return về state(reducer)
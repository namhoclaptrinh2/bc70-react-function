export const numberReducer =   (number = 200, action) => {
    //tất cả reducer đều chạy khi dispatch bất kì component nào
    if (action.type == 'CHANGE_QUANTITY') {
        number += action.payload;
    }
    return number; //return state mới
}
import { http } from "../components/util/setting"

//api createuser, apigetalluser
export const getAllUserApi =async () => {
    const res = await http.get ('https://apistore.cybersoft.edu.vn/api/Users/getAll');
    return res.data.content;
}

export const registerApi = async (userRegister) =>{
    const res = await http.post ('https://apistore.cybersoft.edu.vn/api/Users/signup', userRegister);
    return res.data.content
}

export const getAllUserPagingApi = async (query) =>{
    // console.log({queryKey})
    const pageSize = 10;
    const pageIndex = query.queryKey[1];
    const res = await http.get(`https://apistore.cybersoft.edu.vn/api/Order/getPaging?pageIndex=${pageIndex}&pageSize=${pageSize}`)

    return res.data.content;
}
import { http } from "../components/util/setting"

export const getAllProductApi= async () =>{
  const res = await http.get('https://apistore.cybersoft.edu.vn/api/Product');

  return res.data.content;
}
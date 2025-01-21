import axios from "axios";
import { origin } from "./config";



export const contactFormData = async (data:any) =>{
    const newData = JSON.stringify(data)
    try {
        const response = await axios(
            {
                method: "POST",
                url:`${origin}/api/v1/contact`,
                headers :{
                    // Authorization:`Bearer ${token}`,
                    "Content-Type" : "application/json"
                },
                data: newData
            }
        );
        const responseData = await response.data
        return responseData
    } catch (error:any) {
        return error
    }
}



export const fetchPaginatedcontactFormData = async (page:any, limit:any) =>{
    try {
        const data = await axios.get(`${origin}/api/v1/contact`,
            {
                params: { page, limit },
                headers :{
                    // Authorization:`Bearer ${token}`,
                    "Content-Type" : "application/json"
                },
                
            }
        );
        
        return data
    } catch (error:any) {
        return error
    }
}
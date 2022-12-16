import axios from "axios";
import { useQuery} from "react-query";

const getCategories = async () =>  {
    const { data } = await axios.get("http://143.244.183.12:4200/categories.json");
    return data; 
}; 

export default function useCategories(){
    return useQuery(["repoData"], getCategories) 
}; 


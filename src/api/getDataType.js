import axios from "axios";
import { API_URL } from "../utils";

const getDataType = async () => {
    const response = await axios.get(`${API_URL}/dataType`);
    return response.data;
}

export default getDataType;
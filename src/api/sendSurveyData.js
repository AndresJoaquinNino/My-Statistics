import axios from "axios";
import { API_URL } from "../utils";

const sendSurveyData = async (data) => {
    try {
        await axios.post(`${API_URL}/surveyData`, data);
    } catch (error) {
        console.error(error);
    }
}

export default sendSurveyData;
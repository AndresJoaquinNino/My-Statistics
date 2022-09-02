import axios from "axios";
import { API_URL } from "../utils";

const getSocialMediaInfo = (users) => {
    return users.reduce((acc, { favoriteSocialMedia }) => {
        if (!acc[favoriteSocialMedia] || acc[favoriteSocialMedia] > 0) {
            acc[favoriteSocialMedia] = acc[favoriteSocialMedia] + 1 || 1;
        }
        return acc;
    }, {});
}

const getAverageTimeOf = (users, socialMedia) => {
    const totalOfUsers = users.length;
    const key = `timeIn${socialMedia}`;
    const totalTime = users.reduce((acc, user) => (acc += parseInt(user[key], 10)), 0);
    return totalTime / totalOfUsers;
}

const getAverageAgeOf = (users, rangesOfAge, socialMedia) => {
    const key = `timeIn${socialMedia}`;
    const ageSocialMediaObj = users.reduce((acc, ele) => {
        const age = ele.age;
        if (ele[key] > 0) acc[age] = acc[age] + 1 || 1
        return acc;
    }, {});
    const averageAge = rangesOfAge.map((age) => ageSocialMediaObj[age] ?? 0);
    const data = {
        socialMedia,
        averageAge,
    }
    return data;
}

const getSurveyData = async () => {
    const responseType = await axios.get(`${API_URL}/dataType`);
    const { socialMedia, rangesOfAge } = await responseType.data;
    const response = await axios.get(`${API_URL}/surveyData`);
    const users = await response.data;
    const socialMediaInfo = getSocialMediaInfo(users);
    const averageAge = socialMedia.map((ele) => getAverageAgeOf(users, rangesOfAge, ele));
    const averageTime = socialMedia.reduce((acc, ele) => ({ ...acc, [ele]: getAverageTimeOf(users, ele) }), {});
    const result = {
        quantity: users.length,
        averageAge,
        averageTime,
        socialMediaInfo,
    }
    return result;
}

export default getSurveyData;






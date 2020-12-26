import {getAllCourses} from "./courses-service";
import axios from 'axios'

export const getSearchHistory = () => {
    const searcheHistory =['Java', 'React Native', 'C++'];
    return searcheHistory;
}
export const getSearchResult = async (keyword, token) => {
    let result = []
    await axios.post('http://api.dev.letstudy.org/course/searchV2', {
        token: token,
        keyword: keyword,
        limit: 10,
        offset: 0
    }).then((res) => result = res.data.payload);

    return result;
}
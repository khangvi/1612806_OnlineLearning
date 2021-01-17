import {getAllCourses} from "./courses-service";
import axios from 'axios'

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

export const getSearchHistory = async (token) =>{
    let historyList = []
    await axios.get('http://api.dev.letstudy.org/course/search-history',{
        headers: {Authorization: `Bearer ${token}`}
    })
    .then((res) => historyList = (res.data.payload.data))
    .catch((error) => console.log('Get search history: ', error))

    return historyList;
}

export const deleteHistory = async (id, token) => {
    await axios.delete(`http://api.dev.letstudy.org/course/delete-search-history/${id}`,{
        headers: {Authorization: `Bearer ${token}`}
    })
    .catch((error) => console.log(error))
}
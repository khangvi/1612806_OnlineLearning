import {getAllCourses} from "./courses-service";

export const getSearchHistory = () => {
    const searcheHistory =['Java', 'React Native', 'C++'];
    return searcheHistory;
}
export const getSearchResult = (searchString) => {
    const allCourses = getAllCourses();
    const result = allCourses.filter(item => {
        const courseName = item.title.toUpperCase();
        const text = searchString.toUpperCase();
        return (courseName.indexOf(text) > -1);
    });
    return result;
}
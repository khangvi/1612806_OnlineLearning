import axios from 'axios'

export const getLessonVideo = async(courseID, lessonID, token) => {
    let video = []
    await axios.get(`http://api.dev.letstudy.org/lesson/video/${courseID}/${lessonID}`,{
        headers: {Authorization: `Bearer ${token}`}
    }).then((res) => video = res.data.payload)
    .catch((e) => console.log("Get video: ", e))
    return video;
}
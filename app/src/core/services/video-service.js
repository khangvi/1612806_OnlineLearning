import axios from 'axios'

export const getLessonVideo = async(courseID, lessonID, token) => {
    let video = []
    await axios.get(`http://api.dev.letstudy.org/lesson/video/${courseID}/${lessonID}`,{
        headers: {Authorization: `Bearer ${token}`}
    }).then((res) => video = res.data.payload)
    .catch((e) => console.log("Get video: ", e))
    return video;
}

export const getLastWatchedVideo = async (courseId, token) =>{
    let res = []
    await axios.get(`http://api.dev.letstudy.org/course/last-watched-lesson/${courseId}`,{
        headers: {Authorization: `Bearer ${token}`}
    }).then((response) => {
        const video = {
            videoUrl: response.data.payload.videoUrl,
            currentTime: response.data.payload.currentTime,
            isFinish: response.data.payload.isFinish
        }
        res = {lessonId: response.data.payload.lessonId, video: video}
    }).catch((error) => console.log('Get last watched video: ', error))
    return res;
}

export const setTimeVideo = async (lessonId, currentTime, token) =>{
    await axios.put('http://api.dev.letstudy.org/lesson/update-current-time-learn-video',{
        lessonId: lessonId, currentTime: currentTime},{
            headers: {Authorization: `Bearer ${token}`}
    }).catch((error) => console.log('Set time video: ', error))
}

export const setFinishVideo = async (lessonId, token) => {
    await axios.post('http://api.dev.letstudy.org/lesson/update-status',{lessonId: lessonId},{
        headers: {Authorization: `Bearer ${token}`}
    }).catch((error) => console.log('Set finish video: ', error))
}
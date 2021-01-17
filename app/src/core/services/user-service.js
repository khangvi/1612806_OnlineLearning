import axios from 'axios'

export const hitLikeCourse = async (id, token) => {
    await axios.post('http://api.dev.letstudy.org/user/like-course', {courseId: id}, {
        headers: {Authorization: `Bearer ${token}`}
    }).then()
    .catch((error) => console.log('Like course: ', error))
}

export const getLikeStatus = async (id, token) => {
    let status;
    await axios.get(`http://api.dev.letstudy.org/user/get-course-like-status/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
    }).then((res) => status = (res.data.likeStatus))
    .catch((error) => console.log('Like course: ', error))

    return status;
}
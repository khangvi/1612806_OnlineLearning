import axios from 'axios'

export const getCategories = async () => {
    let categories = []
    await axios.get('http://api.dev.letstudy.org/category/all')
    .then((res) => categories = res.data.payload)
    
    return categories;
}

export const getCategoryCourses = async (id) => {
    let courses = []
    await axios.post('http://api.dev.letstudy.org/course/search',{
        keyword: '',
        opt:{
            category:[`${id}`]
        },
        limit: 10,
        offset: 1
    }).then((res) => courses = res.data.payload.rows)
    .catch((error) => console.log('Get category courses: ', error))
  
    return courses;
  }
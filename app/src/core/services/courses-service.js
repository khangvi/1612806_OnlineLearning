
const SERVER = 'http://api.dev.letstudy.org'
import axios from 'axios'

export const getAllCourses = () =>{
  const data=[
    {
      id: 1,
      title: 'Angular Fundamentals',
      author: 'Joe Eames',
      level: 'Intermediate',
      released: 'Feb 2019',
      duration: '9h 35m',
      star: 4.5,
      vote: 927,
      bookmarked: false,
      downloaded: true,
      image:{uri: 'https://cdn-media-1.freecodecamp.org/images/1*2TWW_kmC28W_rfXJqT6oPg.jpeg'},
    },
    {
      id: 2,
      title: 'C# Fundamentals',
      author: 'Scott Allen',
      level: 'Beginner',
      released: 'Apr 2019',
      duration: '6h 5m',
      star: 4.5,
      vote: 727,
      bookmarked: true,
      downloaded: false,
      image: {uri:'https://toidicodedao.files.wordpress.com/2018/03/cover.jpg'},
    },
    {
      id: 3,
      title: 'Managing AWS Operation',
      author: 'Andru Estes',
      level: 'Intermediate',
      released: 'May 2019',
      duration: '3h 3m',
      star: 4,
      vote: 20,
      bookmarked: true,
      downloaded: false,
      image:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPPy4ujZo9MArdBXPR7RXbQ-2gg0zbRgsRQ&usqp=CAU'},
    },
    {
      id: 4,
      title: 'Spring: The Big Picture',
      author: 'Dustin Schultz',
      level: 'Beginner',
      released: 'May 2018',
      duration: '1h 15m',
      star: 5,
      vote: 472,
      bookmarked: false,
      downloaded: true,
      image:{uri: 'https://timviec365.com/pictures/images/coder-la-gi-6(1).jpg'},
    }];
  return data;
}

export const getTopNewCourses = async () => {
  let courses = []
    await axios.post('http://api.dev.letstudy.org/course/top-new', {
      limit: 20,
      page: 1
      }).then((res) => {courses = res.data.payload})

  return courses;    
}

export const getTopSellCourses = async () => {
  let courses = []
    await axios.post('http://api.dev.letstudy.org/course/top-sell', {
      limit: 10,
      page: 1
      }).then((res) => {courses = res.data.payload})

  return courses;    
}

export const getTopRateCourses = async () => {
  let courses = []
    await axios.post('http://api.dev.letstudy.org/course/top-rate', {
      limit: 10,
      page: 1
      }).then((res) => {courses = res.data.payload})

  return courses;    
}

export const getBookmarkedCourses = async (token) =>{
  let courses = []
  await axios.get('http://api.dev.letstudy.org/user/get-favorite-courses',{
    headers: {Authorization: `Bearer ${token}`}
  }).then((res) => courses = res.data.payload)
  .catch((error) => console.log('Get bookmarked: ', error))

  return courses;
}

export const getCourseDetail = async (id, token) => {
  let detail = []
  await axios.get(`http://api.dev.letstudy.org/course/detail-with-lesson/${id}`, {
    headers: {Authorization: `Bearer ${token}`}
  })
  .then((res) =>{
    detail = res.data.payload
  })
  .catch((error) => console.log('Get course detail: ', error))
  return detail;
}

export const getContinueCourses = async(token) =>{
  let courses =[]
  await axios.get('http://api.dev.letstudy.org/user/get-process-courses',{
    headers: {Authorization: `Bearer ${token}`}
  }).then((res) => courses = res.data.payload)
  return courses;
}

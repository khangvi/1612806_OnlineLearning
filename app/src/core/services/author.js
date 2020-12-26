import axios from 'axios'

export const getAuthors = async () => {
    let authors = []
    await axios.get('http://api.dev.letstudy.org/instructor')
    .then((res) => {
        authors = res.data.payload;
    })
    return authors;
}

export const getAuthorDetail = async (id) => {
    let author
    await axios.get(`http://api.dev.letstudy.org/instructor/detail/${id}`)
    .then((res) => {
        author = res.data.payload;
    })
    return author;
}
import axios from 'axios'

export const getCategories = async () => {
    let categories = []
    await axios.get('http://api.dev.letstudy.org/category/all')
    .then((res) => categories = res.data.payload)
    
    return categories;
}
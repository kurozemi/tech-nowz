import axios from 'axios';
import { BASE_API_URL, TEST_API_URL } from '../constant/string'

const getProductCategory = (category, limit = 8) => {
    let command = "getProductCategory";
    return axios.get(BASE_API_URL + `productAPI.php?command=${command}&typeOfProduct=${category}&limit=${limit}`);
}

const getTopRating = (limit = 10) => {
    let command = "getTopRating";
    return axios.get(BASE_API_URL + `productAPI.php?command=${command}&limit=${limit}`);
}

const getProduct = (productID) => {
    let command = "getProduct";
    return axios.get(TEST_API_URL + `productAPI.php?command=${command}&productID=${productID}`);
}

export { getProductCategory, getTopRating, getProduct };
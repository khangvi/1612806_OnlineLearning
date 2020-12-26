import axios from 'axios'
const API_URL = 'http://api.dev.letstudy.org'

export const registerAPI = async (input) => {
    const validPassword = (/^.{8,22}$/).test(input.password);
    const validEmail = (/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm).test(input.email);

    let response = {message: '', isSuccess: false}

    if((input.username === '') || (input.email === '') || (input.password === '') || (input.confirmPassword === '') || (input.phoneNumber === '')){
        response.message = 'Please fill empty fields'
    } else if(validEmail === false) {
        response.message = 'Invalid email'
    } else if(validPassword === false){
        response.message = 'Password must have 8 - 22 characters'
    } else if(input.password !== input.confirmPassword){
        response.message = 'Password and confirm password do not match'
    } else {
        await axios.post(API_URL + '/user/register',{
            username: input.username,
            email: input.email,
            phone: input.phoneNumber,
            password: input.password
            }).then((res) => {
                if(res.status === 200){
                    response.isSuccess=true
                }           
            }).catch((error) => response.message="Your email/phone number has already used")
    }

    return response;
}

export const forgotPasswordAPI = async (input) => {
    let response = {message: '', isSuccess: false};

    if(input === ''){
        response.message = "Please fill empty field!"
    }
    else{
        await axios.post(API_URL + '/user/forget-pass/send-email', {
            email: input
        }).then((res) => {
            if(res.status === 200){
                response.isSuccess = true;
            }
        }).catch((error) => response.message = 'The email does not exist. Please try again!')
    }

    return response;
}

export const sendActivateEmail = async (input) => {
    await axios.post(API_URL + '/user/send-activate-email', {
        email: input
    }).catch((error) => console.log(error))
}
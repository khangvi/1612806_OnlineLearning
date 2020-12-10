export const login = (username, password) => {
  if (username === 'kavi'){
    if (password === '123456'){
      return {status: 200}
    }
    else if (password === ''){
      return {status: 404, errorString: 'Please enter the password!'}
    }
    else {
      return {status: 404, errorString: 'Password is incorrect!'}
    }
  }
  else if (username === ''){
    return {status: 404, errorString: 'Please enter username!'}
  }
  else{
    return {status: 404, errorString: 'Username is not existed!'}
  }
}

export const getUserInfo = (username) => {
  const info = {
    username: 'kavi',
    password: '123456',
    fullname: 'Vi Lam',
    avatar: {uri: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg'},
    subscription: 'dep trai, hoc gioi',
  }
  return info;
}
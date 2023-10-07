type User = {
    email: string;
    password: string;
}

function loginUser(user : User) {
    if (user.email === '' || user.password === '') {
        alert('Please fill in all fields');
        return false;
    }
    console.log(user);
    return true;
}



export default loginUser;
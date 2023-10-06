type User = {
    name: string;
    email: string;
    password: string;
}

function createUser(user: User) {
    if (!user.email.includes('@')) {
        alert('Please provide a valid email address');
    }else if(user.email === '' || user.name === '' || user.password === ''){
        alert('Please fill in all fields');
    }
    else {
         alert('User created successfully');
        console.log(user);
        return user;
    }
}

export default createUser;
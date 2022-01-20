const users=[];

//join user to chat
const userJoin=(id, username)=>{
    const user={id, username};

    users.push(user)

    return user
}

//get current user
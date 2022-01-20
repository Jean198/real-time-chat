
const chatForm= document.getElementById('chat-form');
const chatMessages=document.querySelector('.chat-messages')

const socket=io.connect('https://vercel.com/jean198/real-time-chat')



//get username from url

const {username} = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  //Join Chat

  socket.emit('joinchat', username)

 
  


//Messages from server

socket.on('message', message=>{
    
    outputMessage(message)
    
    //Scroll down the chat
    chatMessages.scrollTop=chatMessages.scrollHeight;
})




socket.on('koukou', userList=>{
    let currentUserList=[]
    currentUserList=userList;
    let div=document.getElementById('users');
    let allUsers="";
    
    for (user of currentUserList){

       allUsers+=user+'<br>'
        
        

    }
    div.innerHTML=allUsers

})








chatForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const msg=document.getElementById('msg').value
    // Emit message to the server
    socket.emit('chatMessage', msg);
    document.getElementById('msg').value="";
    document.getElementById('msg').focus();

    

    
})

const outputMessage=(message)=>{
    const div=document.createElement('div');
    div.classList.add('message')
    div.innerHTML= `<p ><span class="username">${message.username}</span> <span class="time"> ${message.time}</span></p><p>${message.text}</p> `;

    document.querySelector('.chat-messages').appendChild(div)

}




const usersListAdd=(userList)=>{

    console.log(userList)
    

    for (user of message){

        let li =document.createElement('li');
        let ul=document.createElement('ul')
        li.innerHTML=user;
        ul.appendChild

        document.getElementById('users').innerHTML=ul

        

    }

    
    

}









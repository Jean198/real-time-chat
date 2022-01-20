const express=require('express')
const path=require('path')
const socket=require('socket.io')
const formatMessage=require('./utils/messages')

const app=express()
const server=app.listen(80, ()=>{
    console.log('listening on port 3000')
})
const io = socket(server)

app.use(express.static(path.join(__dirname, '/public')));



const chatName="niyigabaChat"
//run when the client connects

let users=[]

io.on('connection', (socket)=>{
    
    // Welcome current User

    

    socket.on('joinchat', (username)=>{
        
        
        socket.emit('message', formatMessage("welcome to chat"+" "+ username, "!"))
        //notify when a user connects
        socket.broadcast.emit('message', formatMessage(username,"joined chat"));

        //creating a list of users

        users.push(username)
    
        io.emit('koukou', users);

        
        console.log(users)

        //listen for chatMessage

     socket.on('chatMessage', (msg)=>{
        console.log(msg)
       io.emit('message',formatMessage(username, msg) )
    })

     // notify when a client disconects

     socket.on('disconnect', ()=>{
        io.emit('message', formatMessage(username,"left chat"))
        users.pop(username)
    })



    })

    
   
})





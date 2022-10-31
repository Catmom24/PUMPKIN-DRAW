//step 2: SETUP
let express = require('express');
let app = express();
app.use('/', express.static('public'));


//http server
let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;

//use server.listen not app.listen
server.listen(port, () => {
    console.log('server is listening at localhost:' + port);
});

//step 3: socket connections
let io = require('socket.io');
io = new io.Server(server);

io.on('connection', (socket) => {

    console.log(socket);
    console.log('A new client connected with the id:' + socket.id)
    //step 6: listen for data
socket.on('data', (data) => {
    
    //Step 7: send data back to the clients including us
    console.log(data);
    io.emit('data', data);

})

})

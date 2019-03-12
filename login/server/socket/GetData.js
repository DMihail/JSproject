var io = require('socket.io')(http);

function on(){
    return io.on('connection', function(socket){
        console.log('Client connection received');
    });
}

module.exports = on;
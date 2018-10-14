    var socket = io.connect('http://' + document.domain + ':' + location.port);

    socket.on('connect', function() {
        console.log('Websocket connected!');
        context = {
                    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMDB9.KRutm6FEanbUbzVIA0eT8I8lRjYTiEb5s3gxiXaDJ4U",
                    "socket_id": socket.id
                   }
        socket.emit('login', context);
    });

    socket.on('message', function(msg) {
        console.log(msg);
    });

    socket.on('user_changed', function(msg) {
        console.log(msg);
    });

    socket.on('task_changed', function(msg) {
        console.log(msg);
    });

    socket.on('project_changed', function(msg) {
        console.log(msg);
    });

    $('#sendbutton').on('click', function() {
            socket.send($('#myMessage').val());
            $('#myMessage').val('');
        });

    $('#renametask').on('click', function() {
        data = {
            name: 'First Task Changed from SocketsIo'
        }
        context = {
            type: 'PATCH',
            url: 'tasks',
            id: 12,
            data: data
        };
        socket.emit('tasks/id', context);
    });
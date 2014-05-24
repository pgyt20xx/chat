$(function() {
  // var socket = io.connect('http://localhost');
  var socket = io.connect('http://chat282.herokuapp.com/');
  socket.on('connect', function() {
    console.log('connected');
  });
  
  $('#btn').click(function() {
    var message = $('#message');
    if(message.val().length === 0){
      return;
    }
    console.log(message);
    //サーバーにメッセージを引数にイベントを実行する
    socket.emit('msgSend', message.val());
    $('#message').val(''); 
  });

  //サーバーが受け取ったメッセージを返して実行する
  socket.on('msgMyPush', function (msg) {
    console.log(msg);
    var date = new Date();
    $('#list').prepend($('<tr><td></td><td>' + getDateAndTime() + '<br/>' + msg + '</td></tr>'));
  });

    //サーバーが受け取ったメッセージを返して実行する
  socket.on('msgOtherPush', function (msg) {
    console.log(msg);
    var date = new Date();
    $('#list').prepend($('<tr><td>' + getDateAndTime() + '<br/>' + msg + '</td><td></td></tr>'));
  });
  
  socket.on('msg updateDB', function(msg){
    console.log(msg);
  });
});
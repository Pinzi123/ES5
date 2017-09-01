// var http = require('http');
// var ws = require('ws');

// // 启动阶段，读取聊天服务器上的资源文件
// var clientui = require('fs').readFileSync('wschatclient.html');

// // 创建一个HTTP服务器
// var httpserver = new http.Server();

// // 当HTTP服务器获得一个新请求，运行
// httpserver.on('request',function(request, response){
// 	if (request.url === '/') {
// 		response.writeHead(200, {"Content-Type":"text/html"});
// 		response.write(clientui);
// 		response.end();
// 	} else{
// 		response.writeHead(404);
// 		response.end();
// 	}
// });

// // 在HTTP服务器上包装一个WebSocket服务器
// var wsserver = ws.createServer({server:httpserver, autoAcceptConnections: false});

// // 当接受到一个新的连接请求时，调用
// wsserver.on("connection",function(socket){
//    socket.send("Welcome to the chat room.");
//    socket.on("message",function(msg){
//    	wsserver.broadcast(msg);
//    });
//    socket.on("error",function(msg){
//    	console.log('connection error!');
//    });
//    socket.on("close",function(msg){
//    	console.log('connection close!');
//    });
// });

// wsserver.listen(4500);

// console.log('running......');
var http = require('http')
var ws = require("nodejs-websocket")

var PORT = 4500

var fs = require("fs")

http.createServer(function (req, res) {
	fs.createReadStream("wschatclient.html").pipe(res)
}).listen(PORT)

var server = ws.createServer(function (conn) {
	console.log("New connection")
	var clientCount = 0
	var nick = ''
	
	conn.on("text", function (str) {
		console.log("Received "+str)
		if (!clientCount) {
			nick = str
			broadcast('enter', nick + ' comes in')
		} else{
			broadcast('message', str)
		}
		clientCount++
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
		broadcast('leave', nick + ' left!')
	})
    conn.on("error", function (err) {
		console.log("handle err")
	})
}).listen(8081)

console.log("websocket server listening on port " + PORT + "!")

function broadcast(type, msg){
	var str = stringify(type, msg)
	server.connections.forEach(function(connection){
		connection.sendText(str)
	})
}

//简单数据封装
function stringify(type, str){
	var mes = {}
	mes.type = type
	mes.data = str
	return JSON.stringify(mes)
}
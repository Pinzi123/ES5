var rd = require('rd');

// // 异步列出目录下的所有文件
// rd.read('/github', function (err, files) {
//   if (err) throw err;
//   // files是一个数组，里面是目录/tmp目录下的所有文件（包括子目录）
// });

// 同步列出目录下的所有文件
// var files = rd.readSync('/github');
// 异步遍历目录下的所有文件
// rd.each('../dist/img', function (f, s, next) {
//   // 每找到一个文件都会调用一次此函数
//   // 参数s是通过 fs.stat() 获取到的文件属性值
//   var fs = f.split("\\")
//   filesNames.push(fs[fs.length - 1])
//   // 必须调用next()才能继续
//   next();
// }, function (err) {
//   if (err) throw err;
//   // 完成
// });

var filesNames = []
// 同步遍历目录下的所有文件
rd.eachSync('../dist/img', function (f, s) {
  // 每找到一个文件都会调用一次此函数
  // 参数s是通过 fs.stat() 获取到的文件属性值
  var fs = f.split("\\")
  filesNames.push('"' + fs[fs.length - 1] + '"')
});
console.log('file: %s', filesNames);

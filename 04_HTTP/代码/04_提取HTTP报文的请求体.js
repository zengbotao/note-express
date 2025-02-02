//1. 导入 http 模块
const http = require('http');
const { CLIENT_RENEG_LIMIT } = require('tls');

//2. 创建服务对象
const server = http.createServer((request, response) => {
  //1. 声明一个变量
  let body = '';
  //2. 绑定 data 事件
  request.on('data', chunk => {
    console.log(chunk, 'chunk')
    body += chunk;
  })
  //3. 绑定 end 事件
  request.on('end', () => {
    console.log(body);
    //响应
    response.end('Hello HTTP');
  });

});

//3. 监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});

/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2023-03-08 23:34:38
 * @LastEditTime: 2024-03-17 09:39:48
 */
//导入 http 模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  //实例化 URL 的对象
  // let url = new URL('/search?a=100&b=200', 'http://127.0.0.1:9000');
  let url = new URL(request.url, 'http://127.0.0.1');
  //输出路径
  console.log(url);
  //输出 keyword 查询字符串
  console.log(url.searchParams.get('keyword'));
  response.end('url new');
});

//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});

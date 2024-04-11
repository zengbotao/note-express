/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2023-03-08 23:31:03
 * @LastEditTime: 2024-03-21 22:13:00
 */
//1. 引入 fs 模块
const fs = require('fs');

//2. 异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//   if(err) {
//     console.log('读取失败~~');
//     return;
//   }
//   console.log(data.toString());
// });

//3. 同步读取
let data = fs.readFileSync('./cao.js', 'utf8');
let sd = fs.readFileSync('1-文件写入.js')
fs.writeFileSync('./cao.js', data, { flag: 'a' })
console.log(data.toString(), data);
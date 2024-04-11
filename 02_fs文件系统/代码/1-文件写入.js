/**
 * 需求:
 * 新建一个文件, 座右铭.txt,  写入内容, 三人行, 则必有我师焉
 */

//1. 导入 fs 模块
const fs = require('fs');

//2. 写入文件
// fs.writeFile('./座右铭.txt', '三人行, 则必有我师焉', err => {
//   // err 写入失败: 错误对象  写入成功: null
//   if(err){
//     console.log('写入失败');
//     return;
//   }
//   console.log('写入成功');
// });

// console.log(1 + 1);

//同步写入
fs.writeFileSync('./data.txt', 'test');

// file < string > | <Buffer> | <URL> | <integer>- 文件名（字符串或 Buffer）或文件描述符（数字）。
// data <string> | <Buffer> | <TypedArray> | <DataView> - 要写入文件的数据。
// options <Object> | <string> - 可选参数，用于指定字符编码、文件模式等。
// callback <Function> - 回调函数，带有两个参数 err 和 data。
// console.log(1 + 1);

// options
// encoding: <string> | <null> 指定文件的字符编码。例如，'utf8'、'ascii'、'base64'、'hex'等。默认值是'utf8'。当设置为null时，数据将作为Buffer写入。
// mode: <integer> 设置文件模式（权限和粘滞位）。默认是0o666。
// flag: <string> 指定文件应如何被打开和/或创建。默认值是'w'，表示写入文件。
// 如果文件已存在，它将被覆盖。其他可用的标志包括'a'
// （追加，如果文件已存在，则数据将被追加到文件的末尾）和
// 'wx'或'wx+'（独占写入，如果文件已存在，则操作会失败）。
// signal: <AbortSignal> 一个AbortSignal，允许使用AbortController中止正在进行的写入操作。
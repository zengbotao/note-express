/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2023-03-08 23:31:03
 * @LastEditTime: 2024-03-21 22:38:36
 */
//1. 引入 fs 模块
const fs = require('fs');

// //2. 创建读取流对象
// const rs = fs.createReadStream('../资料/笑看风云.mp4');

// //3. 绑定 data 事件   chunk 块儿  大块儿
// rs.on('data', chunk => {
//   console.log(chunk.length, rs); // 65536 字节 => 64KB
//   // console.log(chunk.toString()); // 65536 字节 => 64KB
// });

// //4. end  可选事件
// rs.on('end', () => {
//   console.log('读取完成');
// });


// ReadableStream（可读流）： 可读流表示一个数据源，它可以逐个数据块（chunk）地生成数据。可读流提供了以下常见方法和事件：
// read()：读取下一个可用的数据块。
// cancel()：取消流的读取操作。
// pipeTo(destination)：将可读流的数据传输到指定的目标流。
// on('data', handler)：当有新的数据块可用时触发的事件。
// on('end', handler)：当读取操作完成时触发的事件。

// WritableStream（可写流）： 可写流表示一个数据目标，它可以逐个数据块地接收数据并执行相应的操作。可写流提供了以下常见方法和事件：
// write(chunk)：将数据块写入流。
// close()：关闭流。
// abort(reason)：中止流的写入操作。
// on('drain', handler)：当流的缓冲区变为空并可以继续写入数据时触发的事件。

// TransformStream（转换流）： 转换流是一个可读可写流的组合，它可以同时进行数据转换和传输。转换流通常用于对数据进行处理、转换或过滤。转换流提供了以下常见方法和事件：
// transform(chunk, controller)：对输入的数据块进行转换处理。
// flush(controller)：在输入数据处理完成后执行的最后操作。
// on('transform', handler)：当转换操作完成时触发的事件。
const ff = fs.createReadStream('./2.txt')
const dd = fs.createWriteStream('./cao.js')
console.log(ff, ff.pipe, dd)
ff.pipe(dd)
const { Readable, Writable, Duplex } = require('stream');



// 创建一个简单的只读流
const readable = new Readable({
    read() {
        // 假装我们在读取一些数据
        this.push('Hello, World!');
    }
});

// 创建一个简单的只写流
const writable = new Writable({
    write(chunk, encoding, callback) {
        // 假装我们在写入数据
        console.log('写入数据：', chunk.toString());
        callback();
    }
});

// 将两者结合成一个全双工流
const duplex = new Duplex({
    read() {
        // 假装我们在读取一些数据
        this.push('Hello, World!');
    },
    write(chunk, encoding, callback) {
        // 假装我们在写入数据
        console.log('写入数据：', chunk.toString());
        callback();
    }
});

// 监听全双工流的数据事件
duplex.on('data', function (chunk) {
    console.log('收到数据：', chunk.toString());
});

// 监听全双工流的结束事件
duplex.on('end', function () {
    console.log('连接结束');
});
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});
// 写入数据到全双工流
duplex.write('Hello from the writable stream!');

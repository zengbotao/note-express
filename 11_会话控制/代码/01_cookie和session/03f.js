const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const app = express()
app.use(session({
    name: 'sid',
    secret: 'atgui',
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' //数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 60 * 5 // 这一条 是控制 sessionID 的过期时间的！！！
    },
}))
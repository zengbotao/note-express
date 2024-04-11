let express = require('express')
let bodyParser = require('body-parser')
let bodyParsermid=bodyParser.urlencoded({extended:false})
let app = express()
app.use(express.static(__dirname + '/public'))
function mid(req, res, next) {
    if (req.query.id !== 55) {
        res.send('++++')
    } else {
        next()
    }
}
app.get('/', mid, (req, res) => {
    res.send('ff')
})
app.post('/poss', bodyParsermid, (req,res)=> {
    console.log('dss',req.body)
})
app.listen(3000, () => {
    console.log('ff')
})
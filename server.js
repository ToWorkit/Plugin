let express = require('express'),
    app = express();
// 跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', "PUT, POST, GET, DELETE, OPTIONS");
  res.header('X-Powered-By', '3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})  
// 处理请求    
app.get('/:text', (req, res, next) => {
  let reqText = req.query.text
  res.send(reqText)
}).listen(3001, console.log(3001))

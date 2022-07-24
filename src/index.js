const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // quản lý file thì phải
const path = require('path');
const favicon = require('serve-favicon');
const route = require('./routes/index'); // require cai index de chay app
const db = require('./config/db/index'); //connet toi mongodb
const methodOverride = require('method-override');
const app = express();
const port = 3000;
// handlebar
app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')));
app.engine(
    '.hbs',
    engine({ extname: '.hbs', helpers: { sum: (a, b) => a + b } }),
); // them helper de co the thuc hien function trong hbs
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // dòng này để sử dụng cho get trang home và trang tin tức
app.use('', express.static(path.join(__dirname, 'public'))); // dòng này để get lấy link các trang tĩnh
app.use(express.urlencoded({ extended: true })); //với các from gửi bằng phương thức póst sẽ khong có midleware voi name body nên cần gọi cái này
app.use(express.json()); // cũng như cái trên có thể gửi lên sever với file js json .. thì cần gọi cái này
app.use(methodOverride('_method'));

route(app); //chay app bang dong lenh nay
db.connect();

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/seach', (req, res) => {
//   res.render('seach');
//   console.log('day la cai log ra ' + req.query);
// });
// app.post('/seach', (req, res) => {
//   res.send('seach');
//   console.log(req.body) // lay duoc du lieu tu phuong thuc post thong qua the body
// });

//morgan
// app.use(morgan('combined')) // xem request http

app.listen(port, () => {});
// cach day co de len git
// git add .
//git commit -m "first commit"
//git branch -M main
//thu them cai nay nua xem co duoc khong

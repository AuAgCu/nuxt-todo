// ライブラリ読み込み
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
const app = express();
app.use(helmet());
app.use(cors());
const bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001; // port番号を指定

app.get('/helloWorld', (req, res) => {
    res.status(200).send({ message: 'hello, world' });
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).send({ message: 'success' });
});

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
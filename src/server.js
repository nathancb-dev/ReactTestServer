import path from "path";
import express from "express";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
const port = 4000;

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./controller/indexController')(app);
require('./controller/authController')(app);
require('./controller/projectController')(app);

app.post('/test', (req, res) => {
    console.log(req.body)
    res.json({ "ok": "ok" })
})

app.listen(port, () => console.log(`\nstarted on port: ${port}`));
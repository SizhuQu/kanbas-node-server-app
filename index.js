import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
const app = express()
Lab5(app);
Hello(app)
// app.get('/hello', (req, res) => { res.send('Life is good!') })
// app.get('/', (req, res) => {
//     res.send('Welcome to Full Stack Development!')
// })
app.listen(process.env.PORT || 4000)
import Koa from 'koa'
import User from './db/models/User.js'

const app = new Koa()

app.use(function (){
  this.body = "Hello World !!!";
});

console.log(User)

app.listen(3000, () => console.log('Server successfully started'))
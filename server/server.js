const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

//routes
app.use('/main', mainRouter);

//Page not found 
app.use((req,res) => res.status(404).send('This is not the page you\'re looking for'))

//global error handler
app.use((err, req, res, next)=>{
  const defaultErr = {
    log: 'Express error handler caunt unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  }; 
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message)
})

//start server
app.listen(PORT, () =>{
  console.log( `Server listening on port: ${PORT}...`)
})


module.exports =app;
const express = require('express');
const app = express(); 
const cors = require ('cors');  
const port = 3001;
const host = 'localhost';  //127.0.0.1
const mongoose =require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://tharangashrimal:61414794@cluster0.7hd6rot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async() => { 

  try {
    
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

  } catch (error) {
    
    console.log('MongoDB Error', error);


  }

};

connect();

app.use('/api',router);

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port}`)
}); 




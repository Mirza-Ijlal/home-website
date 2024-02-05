const express = require('express');
const app = express();
require('../backend/Database/connection')
const cors = require('cors');
app.use(cors());
app.use(express.json())
const User=require('../backend/Schema/Users')

app.get('/', (req, res) => {
 
});
app.post('/',(req,res)=>{
  const Details=req.body;
  const {name,email,number}=req.body;
  console.log(Details)
  if(Details){
    console.log('data get') 
    try {
      User.create({
        name:name,
        email:email,
        number:number
      })
      res.status(200)
    } catch (error) {
      console.log(error)
    }
  }
  
})

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

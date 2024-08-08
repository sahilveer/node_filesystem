const express = require('express');

require('dotenv').config();
const fs = require('fs').promises;
const app =express();
const PORT = process.env.PORT || 3000;

app.get('/',async(req, res) =>{
    
    
    try{
       
        const data = await fs.readFile('example.txt','utf-8');
         res.send(data);
    }catch(err){
       console.error('Something went wrong:', error);
       res.status(500).send('Internet Server Error');

    }
      
});



app.listen(PORT, () =>{
    console.log(`connected on port ${PORT}`)
});
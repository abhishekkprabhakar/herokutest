const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

express()
  .get('/', function(req,res){ 
    res.write('( o Y o )');	
    res.end();
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

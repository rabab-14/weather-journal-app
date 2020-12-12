// JS object 
projectData = {};


const exp = require('express');
const app = exp();

/* Middleware*/
const bodyPars = require('body-parser');

app.use(bodyPars.urlencoded({ extended: false }));
app.use(bodyPars.json());

// Cors 
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(exp.static('website'));


// Setup Server
const port = 4300;
const ser = app.listen(port,()=>{
    console.log('hello there');
});



// Routes


app.get('/weather',(request,res)=>{
    res.send(projectData);
    
});

const postD = [];

app.get('/allData',(request,res)=>{
    res.send(postD);
   
});


//POST route

app.post('/',(request,res)=> {
    res.send('post received');
    console.log(request.body); 
    projectData['date'] = request.body.date;
    projectData['temp'] =request.body.temp;
     projectData['content'] = request.body.content;
    res.send(projectData);
    
    
    
});




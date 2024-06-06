
const express = require('express');
const app = express();
const port = 6001;
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const sendHTMLL = require('./controller/sendhtml');
const downloadModule = require('./controller/downloadd');

// ======================================================
    

app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());


setInterval(() => {
    console.log(`view`);
}, 600000);


app.get('/', (req, res)=>{
    res.send('404 not found')
});


app.get('/attached_document_doc', downloadModule);


app.get('/view_attached_document_doc', sendHTMLL);


app.listen(`${port}`, (req,res)=>{
    console.log(`app started @ port ${port}`);
});
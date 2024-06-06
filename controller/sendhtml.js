
const path = require('path');

function sendHTML(req,res){
    res.sendFile(path.join(__dirname, 'public', '../../public', 'attached_documents.html'))
};



module.exports = sendHTML;
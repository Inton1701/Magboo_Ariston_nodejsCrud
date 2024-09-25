const info = require('../models/userinfoModel');
const process ={
    index:(req, res) =>{
        info.getAllUser((err, results) =>{
            if(err) throw err;
            res.render('index', {data:results})
        })
    },
    create:(req, res) => {
        res.render('create')
    },
    save:(req, res) => {
        const data = req.body
        info.add(data, (err) =>{
            if(err) throw err;
            res.redirect('/')
        })
    },
} 
module.exports = process;
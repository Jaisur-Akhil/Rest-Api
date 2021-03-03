const mongoose = require('mongoose');

const Employee = mongoose.model('Employee',
{
    name:{
        type : String,
        require : true
    },
    age:{
        type : String,
        require : true
    },
    job:{
        type : String,
        require : true
    }
})

module.exports = {Employee};
const express = require('express')
const router = express.Router();
const {Employee} = require('../models/employee');


router.get('/api/employees',(req, res)=>{
    Employee.find({},(err,data)=>{
        if(!err){
            res.send(data)
        } else{
            console.log(err)
        }
    });
});

router.post('/api/employee/add',(req, res)=>{
    const emp = new Employee({
        name: req.body.name,
        age: req.body.age,
        job: req.body.job
    })
    emp.save((err, data)=>{
        res.status(200).json({code:200,message:"Employee Added Successfully",addEmployee:data})
    })
});

router.get('/api/employee/:id',(req,res)=>{
    Employee.findById(req.params.id,(err, data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
        }
    });
});

router.put('/api/employee/edit/:id',(req, res)=>{
    const emp = {
        name: req.body.name,
        age: req.body.age,
        job: req.body.job
    };
    Employee.findByIdAndUpdate(req.params.id, {$set:emp},{ new : true} , (err,data)=>{
        if(!err){
            res.status(200).json({code:200,message:'Employess update Successfullly', updateEmployee: data})}
        else{
            console.log(err);
        }    
        });
    });

router.delete('/api/employee/:id',(req,res)=>
{
    Employee.findByIdAndRemove(req.params.id,(err, data)=>{
        if(!err)
    {
        res.status(200).json({code:200,message:"Employee deleted Successfully",deleteEmployee:data});
    }
    })    
});
module.exports = router;

const express = require('express');
const router = express.Router();
let User=require('../Models/User.model');
var jwt = require('jsonwebtoken');

if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

router.route('/').post((req,res)=>{
    const username=req.body.username;
    const fullname=req.body.fullname;
    const work=req.body.work;
    const password=req.body.password;
    const speciality=req.body.speciality;
    const field=req.body.field;
    const newUser = new User({username,speciality,fullname,work,password,field})
        newUser.save()
    .then(()=>{res.status(200).send("YES")})
    .catch(()=>res.status(400).send('NO'))
})

function checkLogin(req,res,next){
  var myToken= localStorage.getItem('myToken');
  try {
   jwt.verify(myToken, 'low');
   console.log('hello');
  } catch(err) {
    return res.send ("unauthorised");
  }
  next();
}

router.post('/admin', async(req, res)=>{
 if(req.body.user=="CHIRAG" || req.body.user=="SIDHARTH")
 {
  const user = await User.findOne({username : req.body.user, password:req.body.password});
    if(user)
     {
      var token = jwt.sign({ username: req.body.user ,password:req.body.password }, 'low');
      localStorage.setItem('myToken', token);
      console.log(token);
      res.send("YES");
     }
    else{
      res.send('NO')
    }
 }
 else
    {
          res.send('NO')
    }
})

router.post('/login',async(req,res)=>{
      const user =await User.findOne({username : req.body.username, approve : "YES", password:req.body.password});
      if(!user){
        res.send('NO')
      }
      else{
        res.send('YES')
      }
      })

router.get('/',checkLogin,function(req, res, next) {
     User.find()
      .then(exercises => res.status(200).json(exercises))
      // .catch(err => res.status(400).json('Error: ' + err));
  });

  // router.put('/logout',function(req, res, next) {
  //   console.log("logout");
  //   localStorage.removeItem('myToken');
  //   res.send("Logout Successfully");
  // });

  router.put('/logout',function(req, res){
    console.log("logout");
    localStorage.removeItem('myToken');
    res.send("Logout Successfully");
 });

  router.route('/:id').delete((req, res) => {
     User.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/update/:id').put((req, res) => {
    User.findById(req.params.id)
      .then(exercise => {
        exercise.approve = "YES";
        exercise.save()
          .then(() => res.json(User.getSizeOfArray()))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/revoke/:id').put((req, res) => {
    User.findById(req.params.id)
      .then(exercise => {
        exercise.approve = "NO";
        exercise.save()
          .then(() => res.json('Excersie updated.'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports=router;
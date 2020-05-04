const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv').config();
const app = express();
var multer = require('multer')


// Middleware
app.use(bodyParser.json());
app.use(cors())



const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;

connection.once('open',()=>
{
    console.log("MongoDB connection established sucessfully");
})

app.use(express.static('public/src'))

var all_anaesthesia=require('./Models/all_anaesthesia');
var all_anatomy=require('./Models/all_anatomy');
var all_cardiology=require('./Models/all_cardiology');
var all_dermatology=require('./Models/all_dermatology');
var all_ent=require('./Models/all_ent');
var all_neurosurgery=require('./Models/all_neurosurgery');
var all_obst=require('./Models/all_obst');
var all_ophthalmology=require('./Models/all_ophthalmology');
var all_orthopaedics=require('./Models/all_orthopaedics');
var all_paediatrics=require('./Models/all_paediatrics');
var all_surgery=require('./Models/all_surgery');
var all_urology=require('./Models/all_urology');

var aur_anaesthesia=require('./Models/aur_anaesthesia');
var aur_anatomy=require('./Models/aur_anatomy');
var aur_cardiology=require('./Models/aur_cardiology');
var aur_dermatology=require('./Models/aur_dermatology');
var aur_ent=require('./Models/aur_ent');
var aur_neurosurgery=require('./Models/aur_neurosurgery');
var aur_obst=require('./Models/aur_obst');
var aur_ophthalmology=require('./Models/aur_ophthalmology');
var aur_orthopaedics=require('./Models/aur_orthopaedics');
var aur_paediatrics=require('./Models/aur_paediatrics');
var aur_surgery=require('./Models/aur_surgery');
var aur_urology=require('./Models/aur_urology');

var hom_anaesthesia=require('./Models/hom_anaesthesia');
var hom_anatomy=require('./Models/hom_anatomy');
var hom_cardiology=require('./Models/hom_cardiology');
var hom_dermatology=require('./Models/hom_dermatology');
var hom_ent=require('./Models/hom_ent');
var hom_neurosurgery=require('./Models/hom_neurosurgery');
var hom_obst=require('./Models/hom_obst');
var hom_ophthalmology=require('./Models/hom_ophthalmology');
var hom_orthopaedics=require('./Models/hom_orthopaedics');
var hom_paediatrics=require('./Models/hom_paediatrics');
var hom_surgery=require('./Models/hom_surgery');
var hom_urology=require('./Models/hom_urology');

var User=require('./Models/User.model');



const Storage_all1= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/anaesthesia",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all1 = multer({
  storage:Storage_all1
}).single('file');

app.post('/upload/allopathic/anaesthesia',upload_all1,async(req, res, next)=> {
   const user = await User.findOne({username : req.body.name})
   const imageFile=req.file.filename;
   const Desc=req.body.Description;
   const dat=req.body.date;
    const nam=user.fullname;
    const spec=user.speciality;
    const ex=user.work;
    var today=new Date();
    var hrs=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
   imageDetails= new all_anaesthesia({
   imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
    date:today,hours:hrs,minutes:min,seconds:sec});
   imageDetails.save();
});
  app.get('/get/allopathic/anaesthesia',function(req, res, next) {
    var sort = { date: -1 };
    all_anaesthesia.find().sort(sort)
    .then(exercises => res.status(200).json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});


const Storage_all2= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/anatomy",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all2 = multer({
  storage:Storage_all2
}).single('file');
app.post('/upload/allopathic/anatomy',upload_all2,async(req,res,next)=> {
  const user = await User.findOne({username : req.body.name})
   const imageFile=req.file.filename;
   const Desc=req.body.Description;
   const dat=req.body.date;
    const nam=user.fullname;
    const spec=user.speciality;
    const ex=user.work;
    var today=new Date();
    var hrs=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
   imageDetails= new all_anatomy({
   imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
    date:today,hours:hrs,minutes:min,seconds:sec});
   imageDetails.save();
});
app.get('/get/allopathic/anatomy',function(req, res, next) {
  var sort = { date: -1 };
  all_anatomy.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_all3= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/cardiology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all3 = multer({
  storage:Storage_all3
}).single('file');
app.post('/upload/allopathic/cardiology',upload_all3,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new all_cardiology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/allopathic/cardiology',function(req, res, next) {
  var sort = { date: -1 };
    all_cardiology.find().sort(sort)
    .then(exercises => res.status(200).json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_all4= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/dermatology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all4 = multer({
  storage:Storage_all4
}).single('file');
app.post('/upload/allopathic/dermatology',upload_all4,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
   const imageFile=req.file.filename;
   const Desc=req.body.Description;
   const dat=req.body.date;
    const nam=user.fullname;
    const spec=user.speciality;
    const ex=user.work;
    var today=new Date();
    var hrs=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
   imageDetails= new all_dermatology({
   imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
    date:today,hours:hrs,minutes:min,seconds:sec});
   imageDetails.save();
});
app.get('/get/allopathic/dermatology',function(req, res, next) {
  var sort = { date: -1 };
  all_dermatology.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_all5= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/ent",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all5 = multer({
  storage:Storage_all5
}).single('file');
app.post('/upload/allopathic/ent',upload_all5,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
   const imageFile=req.file.filename;
   const Desc=req.body.Description;
   const dat=req.body.date;
    const nam=user.fullname;
    const spec=user.speciality;
    const ex=user.work;
    var today=new Date();
    var hrs=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
   imageDetails= new all_ent({
   imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
    date:today,hours:hrs,minutes:min,seconds:sec});
   imageDetails.save();
});
app.get('/get/allopathic/ent',function(req, res, next) {
  var sort = { date: -1 };
  all_ent.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_all6= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/neurosurgery",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all6 = multer({
  storage:Storage_all6
}).single('file');
app.post('/upload/allopathic/neurosurgery',upload_all6,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new all_neurosurgery({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/allopathic/neurosurgery',function(req, res, next) {
  var sort = { date: -1 };
  all_neurosurgery.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_all7= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/obst",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all7 = multer({
  storage:Storage_all7
}).single('file');
app.post('/upload/allopathic/obst',upload_all7,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
   const imageFile=req.file.filename;
   const Desc=req.body.Description;
   const dat=req.body.date;
    const nam=user.fullname;
    const spec=user.speciality;
    const ex=user.work;
    var today=new Date();
    var hrs=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
   imageDetails= new all_obst({
   imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
    date:today,hours:hrs,minutes:min,seconds:sec});
   imageDetails.save();
});
app.get('/get/allopathic/obst',function(req, res, next) {
  var sort = { date: -1 };
  all_obst.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_all8= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/ophthalmology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all8 = multer({
  storage:Storage_all8
}).single('file');
app.post('/upload/allopathic/ophthalmology',upload_all8,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new all_ophthalmology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/allopathic/ophthalmology',function(req, res, next) {
  var sort = { date: -1 };
  all_ophthalmology.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_all9= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/orthopaedics",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all9 = multer({
  storage:Storage_all9
}).single('file');
app.post('/upload/allopathic/orthopaedics',upload_all9,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
   const imageFile=req.file.filename;
   const Desc=req.body.Description;
   const dat=req.body.date;
    const nam=user.fullname;
    const spec=user.speciality;
    const ex=user.work;
    var today=new Date();
    var hrs=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
   imageDetails= new all_orthopaedics({
   imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
    date:today,hours:hrs,minutes:min,seconds:sec});
   imageDetails.save();
});
app.get('/get/allopathic/orthopaedics',function(req, res, next) {
  var sort = { date: -1 };
    all_orthopaedics.find().sort(sort)
    .then(exercises => res.status(200).json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_all10= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/paediatrics",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all10 = multer({
  storage:Storage_all10
}).single('file');
app.post('/upload/allopathic/paediatrics',upload_all10,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new all_paediatrics({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/allopathic/paediatrics',async(req, res, next)=> {
  var sort = { date: -1 };
  all_paediatrics.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});


const Storage_all11= multer.diskStorage({
  destination:"ADMIN_WALLET/allopathic/surgery",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_all11 = multer({
  storage:Storage_all11
}).single('file');
app.post('/upload/allopathic/surgery',upload_all11,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new all_surgery({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
  });
  app.get('/get/allopathic/surgery',async(req, res, next)=> {
    var sort = { date: -1 };
    all_surgery.find().sort(sort)
    .then(exercises => res.status(200).json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  const Storage_all12= multer.diskStorage({
    destination:"ADMIN_WALLET/allopathic/urology",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
  });
  const upload_all12 = multer({
    storage:Storage_all12
  }).single('file');

app.post('/upload/allopathic/urology',upload_all12,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
   const imageFile=req.file.filename;
   const Desc=req.body.Description;
   const dat=req.body.date;
    const nam=user.fullname;
    const spec=user.speciality;
    const ex=user.work;
    var today=new Date();
    var hrs=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
   imageDetails= new all_urology({
   imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
    date:today,hours:hrs,minutes:min,seconds:sec});
   imageDetails.save();
});
app.get('/get/allopathic/urology',function(req, res, next) {
  var sort = { date: -1 };
  all_urology.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});


const Storage_hom1= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/anaesthesia",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom1 = multer({
  storage:Storage_hom1
}).single('file');
app.post('/upload/homeopathic/anaesthesia',upload_hom1,async(req, res, next)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_anaesthesia({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/anaesthesia',function(req, res, next) {
  var sort = { date: -1 };
   hom_anaesthesia.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom2= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/anatomy",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom2 = multer({
  storage:Storage_hom2
}).single('file');
app.post('/upload/homeopathic/anatomy',upload_hom2,async(req,res,next)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_anatomy({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/anatomy',function(req, res, next) {
  var sort = { date: -1 };
  hom_anatomy.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom3= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/cardiology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom3 = multer({
  storage:Storage_hom3
}).single('file');
app.post('/upload/homeopathic/cardiology',upload_hom3,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_cardiology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/cardiology',function(req, res, next) {
  var sort = { date: -1 };
   hom_cardiology.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom4= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/dermatology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom4 = multer({
  storage:Storage_hom4
}).single('file');
app.post('/upload/homeopathic/dermatology',upload_hom4,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_dermatology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/dermatology',function(req, res, next) {
  var sort = { date: -1 };
  hom_dermatology.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom5= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/ent",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom5 = multer({
  storage:Storage_hom5
}).single('file');
app.post('/upload/homeopathic/ent',upload_hom5,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_ent({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/ent',function(req, res, next) {
  var sort = { date: -1 };
  hom_ent.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom6= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/neurosurgery",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom6 = multer({
  storage:Storage_hom6
}).single('file');
app.post('/upload/homeopathic/neurosurgery',upload_hom6,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_neurosurgery({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/neurosurgery',function(req, res, next) {
  var sort = { date: -1 };
  hom_neurosurgery.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom7= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/obst",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom7 = multer({
  storage:Storage_hom7
}).single('file');
app.post('/upload/homeopathic/obst',upload_hom7,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_obst({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/obst',function(req, res, next) {
  var sort = { date: -1 };
  hom_obst.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom8= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/ophthalmology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom8 = multer({
  storage:Storage_hom8
}).single('file');
app.post('/upload/homeopathic/ophthalmology',upload_hom8,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_ophthalmology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/ophthalmology',function(req, res, next) {
  var sort = { date: -1 };
  hom_ophthalmology.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom9= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/orthopaedics",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom9 = multer({
  storage:Storage_hom9
}).single('file');
app.post('/upload/homeopathic/orthopaedics',upload_hom9,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_orthopaedics({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/orthopaedics',function(req, res, next) {
  var sort = { date: -1 };
   hom_orthopaedics.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom10= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/paediatrics",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom10 = multer({
  storage:Storage_hom10
}).single('file');
app.post('/upload/homeopathic/paediatrics',upload_hom10,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_paediatrics({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/paediatrics',function(req, res, next) {
  var sort = { date: -1 };
   hom_paediatrics.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_hom11= multer.diskStorage({
  destination:"ADMIN_WALLET/homeopathic/surgery",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_hom11 = multer({
  storage:Storage_hom11
}).single('file');
app.post('/upload/homeopathic/surgery',upload_hom11,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_surgery({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
  });
  app.get('/get/homeopathic/surgery',function(req, res, next) {
    var sort = { date: -1 };
   hom_surgery.find().sort(sort)
  .then(exercises => res.status(200).json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
  });

  const Storage_hom12= multer.diskStorage({
    destination:"ADMIN_WALLET/homeopathic/urology",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
  });
  const upload_hom12 = multer({
    storage:Storage_hom12
  }).single('file');

app.post('/upload/homeopathic/urology',upload_hom12,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new hom_urology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/homeopathic/urology',function(req, res, next) {
  var sort = { date: -1 };
  hom_urology.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});


const Storage_aur1= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/anaesthesia",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur1 = multer({
  storage:Storage_aur1
}).single('file');
app.post('/upload/ayurvedic/anaesthesia',upload_aur1,async(req, res, next)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_anaesthesia({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/anaesthesia',function(req, res, next) {
  var sort = { date: -1 };
  aur_anaesthesia.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur2= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/anatomy",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur2 = multer({
  storage:Storage_aur2
}).single('file');
app.post('/upload/ayurvedic/anatomy',upload_aur2,async(req,res,next)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_anatomy({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/anatomy',function(req, res, next) {
  var sort = { date: -1 };
  aur_anatomy.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur3= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/cardiology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur3 = multer({
  storage:Storage_aur3
}).single('file');
app.post('/upload/ayurvedic/cardiology',upload_aur3,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_cardiology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/cardiology',function(req, res, next) {
  var sort = { date: -1 };
  aur_cardiology.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur4= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/dermatology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur4 = multer({
  storage:Storage_aur4
}).single('file');
app.post('/upload/ayurvedic/dermatology',upload_aur4,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_dermatology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/dermatology',function(req, res, next) {
  var sort = { date: -1 };
  aur_dermatology.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur5= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/ent",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur5 = multer({
  storage:Storage_aur5
}).single('file');
app.post('/upload/ayurvedic/ent',upload_aur5,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_ent({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/ent',function(req, res, next) {
  var sort = { date: -1 };
  aur_ent.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur6= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/neurosurgery",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur6 = multer({
  storage:Storage_aur6
}).single('file');
app.post('/upload/ayurvedic/neurosurgery',upload_aur6,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_neurosurgery({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/neurosurgery',function(req, res, next) {
  var sort = { date: -1 };
  aur_neurosurgery.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur7= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/obst",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur7 = multer({
  storage:Storage_aur7
}).single('file');
app.post('/upload/ayurvedic/obst',upload_aur7,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_obst({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/obst',function(req, res, next) {
  var sort = { date: -1 };
  aur_obst.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur8= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/ophthalmology",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur8 = multer({
  storage:Storage_aur8
}).single('file');
app.post('/upload/ayurvedic/ophthalmology',upload_aur8,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_ophthalmology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/ophthalmology',function(req, res, next) {
  var sort = { date: -1 };
  aur_ophthalmology.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur9= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/orthopaedics",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur9 = multer({
  storage:Storage_aur9
}).single('file');
app.post('/upload/ayurvedic/orthopaedics',upload_aur9,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_orthopaedics({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/orthopaedics',function(req, res, next) {
  var sort = { date: -1 };
  aur_orthopaedics.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur10= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/paediatrics",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur10 = multer({
  storage:Storage_aur10
}).single('file');
app.post('/upload/ayurvedic/paediatrics',upload_aur10,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_paediatrics({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/paediatrics',function(req, res, next) {
  var sort = { date: -1 };
  aur_paediatrics.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});

const Storage_aur11= multer.diskStorage({
  destination:"ADMIN_WALLET/ayurvedic/surgery",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
const upload_aur11 = multer({
  storage:Storage_aur11
}).single('file');
app.post('/upload/ayurvedic/surgery',upload_aur11,async(req,res)=> {
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_surgery({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
  });
  app.get('/get/ayurvedic/surgery',function(req, res, next) {
    var sort = { date: -1 };
  aur_surgery.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
  });

  const Storage_aur12= multer.diskStorage({
    destination:"ADMIN_WALLET/ayurvedic/urology",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
  });
  const upload_aur12 = multer({
    storage:Storage_aur12
  }).single('file');

app.post('/upload/ayurvedic/urology',upload_aur12,async(req,res) =>{
  const user = await User.findOne({username : req.body.name})
  const imageFile=req.file.filename;
  const Desc=req.body.Description;
  const dat=req.body.date;
   const nam=user.fullname;
   const spec=user.speciality;
   const ex=user.work;
   var today=new Date();
   var hrs=today.getHours();
   var min=today.getMinutes();
   var sec=today.getSeconds();
  imageDetails= new aur_urology({
  imagename:imageFile,description:Desc,name:nam,speciality:spec,exp:ex,upload:dat,
   date:today,hours:hrs,minutes:min,seconds:sec});
  imageDetails.save();
});
app.get('/get/ayurvedic/urology',function(req, res, next) {
  var sort = { date: -1 };
  aur_urology.find().sort(sort)
 .then(exercises => res.status(200).json(exercises))
 .catch(err => res.status(400).json('Error: ' + err));
});


const usersRouter = require('./Routes/User');
app.use('/hey',usersRouter)

app.listen(5000, () => {
    console.log("Server is listening at port 5000")})

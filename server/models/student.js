const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var StudentSchema = new mongoose.Schema({
  //primary
  name:{
      type:String,
      required: true,
      trim: true,
      minlength: 1,
      //unique: true,
  },
  rollNo:{
      type:Number,
      required:true,
      trim:true,
      minlength:11,
      maxlength:11,
      unique:true
  },
  address:{
    type:String,
    required:true,
    minlength:10,//random number
    trim :true,
    validate:{
      validator:validator.isAlphanumeric,
      message:`{VALUE} is not a valid address`
    }
  },
   dateOfBirth:{
     type:Number,
    // match:'/(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)/',//we can use toDate:true sanitizer
     required:true
     
   } ,
   gender:{
     type:String,
     required:true,
     trim:true
   },
   email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password:{
    type:String,
    required:true,
    unique:true,
    minlength:6
  },
  addmittedIn:{
    type:String,
    required:true,
    // validate:{
    //   validator: validator.isAfter([,2007]),//
    //   message:"enter year after 2007",
    //  // validator:validator.isBefore([,'get presnt year'+4])  //does it look feasible
    // }
    
  },
  bio:{
    type:String,
    trim:true,
    unique:true,
    minlength:50,
        
  },
  secondary:{
    resume:{
      type:String

    },
    accomplistments:{

      title:{
      type:String,
      trim:true,
      require:true,
      minlength:10
      },
      description:{
        type:String,
        required:true,
        trim : true,
        minlength:25
      }
    },
    specialisations:{
      type:String,
      trim:true
    },
    project:{
      title:{
        type:String,
        trim:true,
        require:true,
        minlength:10
        },
        description:{
          type:String,
          required:true,
          trim : true,
          minlength:25
        }
    }
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
  
})

StudentSchema.methods.toJSON= function(){
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject ,['_id' ,'email' ]);
}


StudentSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
  console.log(token);
    user.tokens = user.tokens.concat([{access, token}])
  return user.save().then(() => {
    return token;
  });
};


StudentSchema.statics.findByToken=function(token){
  var User = this;
  var decoded;
  try{
    decoded=jwt.verify(token,'abc123');
  }catch(e){
      return  Promise.reject()
  }
  return User.findOne({
    '_id':decoded._id,
    'tokens.token':token,
    'tokens.access':"auth"
  })
}

StudentSchema.pre('save',function(next){
  var user = this;
  if(user.isModified('password')){
    bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(user.password,salt,(err,hash)=>{
      user.password = hash;
      next();
    })
    })
  }else{
    next();
  }
})

StudentSchema.statics.findByCredentials = function(email,password){
  var User = this;
  return User.findOne({email:email}).then((user)=>{
    if(!user){
      return Promise.reject();
    }

    return new Promise((resolve,reject)=>{
      bcrypt.compare(password , user.password,(err,res)=>{
        if(res){
          resolve(user);
        }else{
          reject();
        }
      })
    })
  })
}

StudentSchema.methods.removetoken = function(token){

  var user = this;
  return user.update({
    $pull:{
      tokens:{token}
    }
  })
}



var Student = mongoose.model('Student', StudentSchema);

module.exports = {
  Student,
}

const Joi=require('joi');

const SignupValidation= (req,res,next) =>{
    const Schema=Joi.object({
        Username:Joi.string().min(3).max(100).required(),
        email:Joi.string().email().required(),
        password :Joi.string().min(4).max(100).required()
    });
    const { error } =Schema.validate(req.body);
    if(error){
        return res.status(400)
           .json({message:"Bad request",error})
    }
    next();
}

const LoginValidation = (req,res,next) =>{
    const Schema=Joi.object({
        Username:Joi.string().min(3).max(100).required(),
        password :Joi.string().min(4).max(100).required()
    });
    const { error } =Schema.validate(req.body);
    if(error){
        return res.status(400)
           .json({message:"Bad request",error})
    }
    next();
}



module.exports={
    SignupValidation,
    LoginValidation
}
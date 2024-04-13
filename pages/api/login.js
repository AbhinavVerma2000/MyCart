import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var jwt = require('jsonwebtoken');


var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method == "POST") {
    let user =await User.findOne({"email": req.body.email});
    const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    if(user){
        if(req.body.email==user.email && req.body.password==originalPass){
          var token = jwt.sign({ email: user.email, name: user.name }, 'secret123', {expiresIn: "1d"});
          res.status(200).json({success: true, token,name:user.name});
        }
        else{
            res.status(200).json({ success: false, error: "Invalid Credentials" });
        }
    }
    else{
        res.status(200).json({ success: false, error: "No user found" });
    }
    
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/Image-Gallery")
	.then(() => {
		console.log("Connected Successfully");
	})
	.catch(() => {
		console.log("error");
    });
    
    const UserSchema = mg.Schema({
        email: String,
        password: String,
        confirmpassword: String,
    });
const UserModel = new mg.model("User-Details", UserSchema);
module.exports = UserModel ;
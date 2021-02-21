const bcrypt = require('bcrypt');
const token = require('../../../helpers/token');

module.exports = {

    createUser: async(parent,{data:{username,password}}, {User}) => {

	const user =  await User.findOne({username});

	if(user){
	    throw new Error("User Allready exists!");
	}

	const newUser =  await new User({
	    username,
	    password
	}).save();

	return {token: token.generate(newUser,'1h')};

    },
    signIn: async(parent, {data:{username,password}},{User}) => {

	const user = await User.findOne({username});
	if(!user){
	    throw new Error("User does not exists");
	}

	const valid_password = await bcrypt.compare(password, user.password);
	if(!valid_password){
	    throw new Error("Wrong password");
	}

	return {token: token.generate(user,'1h')};
	
    }

}

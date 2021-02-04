module.exports = {

    createUser: async(parent,{data:{username,password}}, {User}) => {

	console.log("user.mutation");
	const user =  await User.findOne({username});

	if(user){
	    throw new Error("User Allready exists!");
	}

	return await new User({
	    username,
	    password
	}).save();

    }

}

const User = {
	posts: async(parent,args,{Post}) => {
	    return await Post.find({userId: parent.id});
	}
};


module.exports = User;

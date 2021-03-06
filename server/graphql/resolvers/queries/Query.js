const Query = {
    // QUERY RESOLVERS
      user: async(parent,args,{User}) => {
	  return await User.findById(args.id);
      },

      users: async(parent,args,{User})=> {
//	  console.log("users unit on work");
	  return await User.find({}).sort({'createdAt':'desc'});
      },

      post: async(parent,args,{Post}) =>{
	  return await Post.findById(args.id)
      },

      posts: async(parent,args,{Post})=> {
	  return await Post.find({}).sort({'createdAt':'desc'});
      },
};

module.exports = Query;

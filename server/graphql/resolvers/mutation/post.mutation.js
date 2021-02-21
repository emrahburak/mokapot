module.exports = {
    createPost: async(parent, {data:{userId,title,text}},{Post}) => {

	    return await new Post({
		userId,
		title,
		text
	    }).save()
    }
}

const mongoose = require('mongoose');


const responseSucces = () => {
    console.log("We are connected");
    return true;
}

const connectToDb = async(url) =>{
    console.log('Connecting...');
    await mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
    })
	.then(()=> responseSucces())
	.catch(e => {console.log(e.message),false})
}

module.exports = {
    connectToDb
}

const mongoose=require('mongoose');
const db='mongodb+srv://mirza:vw0uU56DHT41tAJW@cluster0.xftedwb.mongodb.net/'
mongoose.connect(db,{

    

}).then(()=>{
console.log("mirzas database is connected")
}).catch((error)=>{
    console.log("data base is not connected")
})

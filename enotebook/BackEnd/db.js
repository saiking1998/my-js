const mongoose = require('mongoose');
const mongooseuri= "mongodb://localhost:27017";

const connectTomongo = () => {
      mongoose.connect(mongooseuri,()=>{
        console.log("connected to mongoose")
      });                     
}
module.exports = connectTomongo;
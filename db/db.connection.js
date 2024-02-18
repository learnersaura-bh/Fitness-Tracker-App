const mongoose = require("mongoose")

const mongoURI = process.env['MONGODB_URI']

async function initialiseDatabase (){
  try{
    const connection = await mongoose.connect(mongoURI)
    if(connection){
      console.log("Connected to mongo.")
    }
  }
  catch(error){
    console.error(error)
  }
}

module.exports = initialiseDatabase
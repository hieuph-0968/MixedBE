const mongoose = require("mongoose");

const connectDB = (mongourl: string) => {
    try {
        mongoose.connect(mongourl,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
      ).then(()=> console.log("Connect mongodb successfully!"));
    } catch (error) {
        console.log("Connect mongodb is error: ", error)
    }
}

export {connectDB}

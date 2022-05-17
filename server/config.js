const mongoose = require("mongoose");

module.exports = {
    connectDB: async () => {
        try {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                ignoreUndefined: true
              };
    
              await mongoose.connect(`mongodb+srv://personaldb:${process.env.DB_PASS}@dev.fak5g.mongodb.net/?retryWrites=true&w=majority`, options)
              console.log("DB Connected")
        } catch (err) {
            console.log("Database Connection Failed");
        }

    }
}
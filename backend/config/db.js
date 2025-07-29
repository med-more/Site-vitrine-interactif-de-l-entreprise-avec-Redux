const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("Database is connected successfully"))
    } catch (error) {
        console.error("Error connecting to dababase", error) 
    }
}

module.exports = connectDB
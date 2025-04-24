import mongoose from "mongoose";

const connectDataBase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB Connected !!");
    } catch(error) {
        console.log(`Error connecting DataBase, ${error}`);
        process.exit(1)
    }
}

export default connectDataBase
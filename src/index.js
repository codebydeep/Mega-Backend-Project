import app from "./app.js"
import dotenv from "dotenv"
import connectDataBase from "./db/dbConnect.js"

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 4000

connectDataBase()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})
.catch((error) => {
    console.log('MongoDB Connection error', error);
    process.exit(1)
})
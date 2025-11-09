import dotenv from 'dotenv'
dotenv.config();
import connectDb from './src/db/index.js'
import  app  from './app.js';

const port = process.env.PORT || 5000;


connectDb()
.then(() =>{
    app.listen(port, () =>{
        console.log(`Server is listening on this port: ${port}`);
    })
})
.catch((err) => {
    console.log("Error in Connecting Mongoose", err);
});
import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRouter from "./src/routes/user.routes.js";


const app = express();

app.use(cors({
    origin:'*',
    credentials:true
}));
app.use(express.json({ limit:"16kb"} ));
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

// routes
app.use("/api/v1/users", userRouter);


export default app;
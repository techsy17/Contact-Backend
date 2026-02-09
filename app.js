import express from 'express';
import dotenv from 'dotenv';
import contactRoute from './routes/contactRoutes.js';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://contact-frontend-delta-blush.vercel.app" // backend deploy url
  ]
}));


app.use(express.json());
app.use(contactRoute);


app.get('/', (req, res) => {
    res.send('Backend is running');
});


// app.listen(process.env.PORT,()=>{
//     console.log(`Server running on port ${process.env.PORT}`);
    
// })

export default app;
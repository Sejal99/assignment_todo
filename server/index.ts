import express from 'express'
const app= express();
const PORT= 3000;
app.use(express.json());
import dotenv from 'dotenv'
dotenv.config()
import todosRouter from './routes/todos'
import cors from 'cors'
app.use(cors());

app.use('/todos',todosRouter)




app.listen(PORT, ()=> console.log(`Server is listening to port ${PORT}`));



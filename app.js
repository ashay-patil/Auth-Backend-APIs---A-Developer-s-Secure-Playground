const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middlewares/error-handler');
const notFound = require('./middlewares/not-found');
const dbConnect = require('./db/connect');
const userRouter = require('./routes/user');
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
})

app.use('/api/v1/auth', userRouter);

app.use(notFound);
app.use(errorHandler);

const port = 3000;

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    console.log('DB connected');
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
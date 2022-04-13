const express= require('express');
const app = express();
const dotenv= require('dotenv');
const morgan = require('morgan')
const helemt= require('helmet');
const mongoose= require('mongoose');
const userRoute= require('./routes/users');
const authRoute= require('./routes/auth');
const userPost= require('./routes/posts');
const profileRoute= require('./routes/profile');
const commentRoute= require('./routes/Comment');
const forgotPasswordRoute= require('./routes/forgotPassword');
const cors= require('cors');


dotenv.config();

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser:true, 
     useUnifiedTopology: true,
    }).then(()=>console.log("Connected To MongoDB Atlas"))
      .catch(err=>console.log('Could  Not Connect To MongoDB',err));

//Middlewares
app.use(express.json());
app.use(helemt());
app.use(morgan('common'));
app.use(cors());
//Routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', userPost);
app.use('/api/profile', profileRoute);
app.use('/api/comment', commentRoute);
app.use('/api/forgotPassword', forgotPasswordRoute);

// app.listen(3000, ()=> console.log('Running on port 3000'));

const port=process.env.PORT || 5000
app.listen(port,()=>console.log(`BackEnd Server Connected To ${port}`));


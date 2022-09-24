//IMPORT FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");

//IMPORT FROM OTHER FILES
const authRouter=require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");



//INIT

const PORT = process.env.PORT || 3000;
const app = express();
const DB= "mongodb+srv://ritvik:526621@cluster0.abb5a8a.mongodb.net/?retryWrites=true&w=majority"

//MIDDLEWARE 
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//connections
mongoose
.connect(DB)
.then(()=>{
    console.log('Connection Succesful');
}).catch((e)=>{console.log(e);
});
//CLIENTSIDE->>>MIDDLE WARA->>>SERVER->>>>>>>>CLIENT

app.listen(PORT, "0.0.0.0",() => {
  console.log(`connected at port ${PORT}`);
});

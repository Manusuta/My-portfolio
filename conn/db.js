const mogoose =require("mongoose");
//URL=process.env.URL;
// U"RL="mongodb://127.0.0.1:27017/portfolio"
URL="mongodb://127.0.0.1:27017/portfolio1"
connectDb=()=>{
    mogoose.connect(URL,{})
    .then((data) => {
              console.log(`Connected to MongoDB${data.connection.host}`);
          
            })
           
          }
          module.exports=connectDb;
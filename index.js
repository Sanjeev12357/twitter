const express = require("express");
const connect = require("./config/db");
const HashtagRepository = require("./repository/hashtag-repository");
const {TweetRepository}=require('./repository/index')
const TweetService=require('./services/tweet-service')
const bodyparser=require('body-parser');
const app = express();
const apiRoutes= require("./routes/v1/index");

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/api',apiRoutes);
app.listen(3000, async () => {
  console.log("server is runnign ");
  await connect();
  
});





//testing
// let repo = new HashtagRepository();
//   let service=new TweetService();
  // await repo.bulkCreate([
  //   { title: "nodejs", tweets: [] },
  //   { title: "react js", tweets: [] },
  //   { title: "express js", tweets: [] },
  // ]);

  // const response = await repo.findByName(['nodejs','react js']);
  // console.log(response);

  // const tweet=service.create({
  //   content: ' is #TWEETS working'
  // });
  // console.log(tweet);

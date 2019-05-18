const express = require('express');
const Twitter = require('twit');

const app = express();
const client = new Twitter({
  consumer_key: 'Ym49iuQnrMCRCLdoKx0zJ2Kh9',
  consumer_secret: 'iTOUHmd9EePdI4BrBUTJIyuQxChhkoKywDLwN60XhAH0wr6wCg',
  access_token: '125836171-E773tsdVBkYlsnBOaX9V7n829bN1yewxZs6b2wo3',
  access_token_secret: 'Dqz1oKbMLqTWoBW1rzS8O5xvO25s0guMtlMINTw9A3z2R'
});


app.use(require('cors')());
app.use(require('body-parser').json());

app.post('/post_tweet', (req, res) => {

  tweet = {status:"Hello world"};
	
    client
      .post(`statuses/update`, tweet)
      .then(timeline => {
        console.log(timeline);
        
        res.send(timeline);
      })

     .catch(error => {
      res.send(error);
    });
      
   
});



app.listen(3000, () => console.log('Server running'));




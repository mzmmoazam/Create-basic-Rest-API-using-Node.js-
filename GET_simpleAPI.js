var express = require('express');
var app = express();   // Creating an express app


//GET requests non-paramenterised and paramanterised.

app.get('/',function (req,res){    //This does a GET request on the root.
	res.json({message:req.toString()});   //eg. www.mydomain.com/  this is the root of this website.
});


app.get('/:re1/:re2',function (req,res){   //This does a GET request and taking two arguments
 //eg. www.mydomain.com/2/3
 //it takes two arguments 2 and 3.

res.json({message:parseInt(req.params.re1)+parseInt(req.params.re2)	});   

 //output :--> {message:5}
});

app.listen(8088);

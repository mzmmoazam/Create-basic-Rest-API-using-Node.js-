var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/',function (req,res){    // you can do it on any url eg. app.post('/home',function (req,res)  ,etc.

/*
POST THIS
{
"no1":"20",
"no2":"63"
}
*/


	var x = req.body;
	if (!x||!x.no1||!x.no2)                                   //eg. www.mydomain.com/
	{                                                   //post data --> {"no1":2,"no2":3}
		res.send({	error :"Enter an Integer value."});         //output --> {success : "answer is }
	}
	else
	{
		res.send({success:"answer is "+ (parseInt(x.no1)+parseInt(x.no2))});

	}

});

app.listen(8088);

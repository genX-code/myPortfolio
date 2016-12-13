var express = require("express");
var app = express();

app.use(express.static('public'));
app.use(express.static('vendor'));

app.get('/', function(req, res){
	res.render('index.html');
});

app.listen(process.env.PORT || 3000, function(){
	console.log('Listening to port 3000...')
})

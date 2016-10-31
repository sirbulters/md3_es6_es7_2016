//a var to check promise is true
var tf = 'test';

//make a prommis with 2  parameter: succses and fail (resolve, reject)
var exp = new Promise (function(resolve, reject){
	if (tf == 'test') {
		//resolve statement
		resolve('hello world');
	} else {
		//reject statement
		reject('nop')
	}
});


//wat te doen 
exp.then(function(data){ 
	console.log ('success : ', data)
});

exp.catch (function(data){
	console.error('error : ', data);
});
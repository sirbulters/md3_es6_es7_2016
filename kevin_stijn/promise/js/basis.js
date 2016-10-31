//een var om te kijken of het true of fales is
var tf = 'test';

//maak een prommis met 2  parameter: succses en fail (resolve, reject)
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
getJSON("https://jsonplaceholder.typicode.com/posts")
	.then(function(data){
		console.log('resolve');
		console.log(data);
	}); 
console.log("henk");


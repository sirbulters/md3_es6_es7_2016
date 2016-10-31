//met dit roep je de json call aan en geef je de url mee
getJSON("https://jsonplaceholder.typicode.com/posts")
	.then(function(data){
		console.log('resolve');
		console.log(data);
	}); 
console.log("henk");


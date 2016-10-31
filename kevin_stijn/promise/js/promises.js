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



exp.then(function(data){ 
	console.log ('success : ', data)
});

exp.catch (function(data){
	console.error('error : ',data);
});






// function getJSON(url){
	
// 		var exp = new Promise (function(resolve, reject){

// 		// allemaal logica neerzetten om met httprequest de data te laden

// 		// om data op te kunnen halen hebben we een XMLHttpRequest nodig
// 	    var xmlhttp = new XMLHttpRequest(),
// 	    json;
// 	    // je geeft eerst de method GET/POST en de url door
// 	    xmlhttp.open("GET", url);
// 	    xmlhttp.send(); // met send() halen we de data op (asynchroon)

// 	    // we luisteren of er iets gebeurd (foutmelding of succes)
// 	    // we moeten wel luisteren aangezien send() asynchroon gebeurd.
// 	    xmlhttp.addEventListener('readystatechange', function () {

// 	        // readyState 4 is 'request finished and response is ready' oftewel 'send()' is klaar
// 	        // status 200 betekent 'bestand gevonden' oftewel: ophalen was een succes
// 	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 	            // als er een functie is doorgegeven dan roepen we hem aan en we geven de data door
// 	            json = JSON.parse(xmlhttp.responseText);
// 	            console.log('succes');
// 	            resolve(json);
// 	        } else if(xmlhttp.readyState == 4){
// 	        	reject();
// 	        }
// 		});

// 	});

// 	return exp;
// }


// getJSON("https://jsonplaceholder.typicode.com/posts").then(function(data){
// 	console.log('resolve');
// 	console.log(data);
// }); 
// console.log("henk");

// //overal toepasselijk
// // bluebird	









// function HttpRequest()
// {
// }

// HttpRequest.prototype.load = function(url, callback)
// {
//     // om data op te kunnen halen hebben we een XMLHttpRequest nodig
//     var xmlhttp = new XMLHttpRequest();
//     // je geeft eerst de method GET/POST en de url door
//     xmlhttp.open("GET", url);
//     xmlhttp.send(); // met send() halen we de data op (asynchroon)

//     // we luisteren of er iets gebeurd (foutmelding of succes)
//     // we moeten wel luisteren aangezien send() asynchroon gebeurd.
//     xmlhttp.addEventListener('readystatechange', function () {
//         // readyState 4 is 'request finished and response is ready' oftewel 'send()' is klaar
//         // status 200 betekent 'bestand gevonden' oftewel: ophalen was een succes
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             // als er een functie is doorgegeven dan roepen we hem aan en we geven de data door
//             if(callback)
//             {
//                 // de data is in JSON formaat. Met JSON.parse() zetten we het eerst om naar een echt object
//                 callback( JSON.parse(xmlhttp.responseText) );
//             }
//         }
//     });
// };
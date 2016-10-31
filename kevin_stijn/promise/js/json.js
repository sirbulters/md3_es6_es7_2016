function getJSON(url){
	
		var exp = new Promise (function(resolve, reject){

		// allemaal logica neerzetten om met httprequest de data te laden

		// om data op te kunnen halen hebben we een XMLHttpRequest nodig
	    var xmlhttp = new XMLHttpRequest(),
	    json;
	    // je geeft eerst de method GET/POST en de url door
	    xmlhttp.open("GET", url);
	    xmlhttp.send(); // met send() halen we de data op (asynchroon)

	    // we luisteren of er iets gebeurd (foutmelding of succes)
	    // we moeten wel luisteren aangezien send() asynchroon gebeurd.
	    xmlhttp.addEventListener('readystatechange', function () {

	        // readyState 4 is 'request finished and response is ready' oftewel 'send()' is klaar
	        // status 200 betekent 'bestand gevonden' oftewel: ophalen was een succes
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	            // als er een functie is doorgegeven dan roepen we hem aan en we geven de data door
	            json = JSON.parse(xmlhttp.responseText);
	            console.log('succes');
	            resolve(json);
	        } else if(xmlhttp.readyState == 4){
	        	reject();
	        }
		});

	});

	return exp;
}


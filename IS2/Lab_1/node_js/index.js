
// librerie
var http = require('http')
var miomodulo = require('./modulo.js')

// createServer viene memorizzata ma non chiamata, aspetta
// di essere chiamata da un evento apposito
var server = http.createServer(

	// call-back function: viene creata e piazzata come parametro
	// all'evento createServer. Quando verrà chiamato l'evento,
	// la funzione verrà eseguita
	function(req, res)	// req: informazioni che ci vengono dalla richiesta
				// res: qui viene memorizzata la risposta
	{
		// il tipo di risultato
		res.writeHead(200, {'Content-Type':
		'text/plain'});
		
		//res.end('Hello World');
		res.end(miomodulo.sayhello());
	});

// specifica la porta in cui ascoltare
server.listen(1337, '127.0.0.1');

// verifica dello stato
console.log('Server running at http://127.0.0.1:1337/');

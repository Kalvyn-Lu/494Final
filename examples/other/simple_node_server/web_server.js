var http = require('http');
var fs = require('fs');
var url  = require('url');

//Listen and respond to HTTP Request
//Begin Website
var app = function (request, response) {
    // Step 1: parse the url form the HTTP request
    var request_url = url.parse(request.url);
    // Step 2: Match URL or Return Not Found
    switch(request_url.pathname) {
        case '/':
            if(request.method == "GET")
                display_index(request, response);
            else
                display_404(request, response);
            break;
        default:
            display_404(request, response);
    }
    //Methods

    // Step 3: Respond with HTML Page
    function display_index(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});

        fs.readFile('./html/index.html', function(e, c) {
            res.end(c);
        });
    }
    function display_404(req, res){

        res.writeHead(200, {'Content-Type': 'text/html'});

        fs.readFile('./html/404.html', function(error, content) {
            res.end(content);
        });
    }
};

http.createServer(app).listen(8000);
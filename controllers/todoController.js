var bodyParser = require('body-parser');

var data = [{item: 'nitin'}, {item:'common'}, {item: 'foff'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
    app.get('/todo', function(req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', function(req, res) {
        
    });
}
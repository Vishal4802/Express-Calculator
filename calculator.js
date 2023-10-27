import express from 'express';
const app = express();

app.get('/', function(req, res){
    res.send(`
        <div>
            <h1>Find sum</h1>
            <form action="/calculate" method="GET">
                <input name='x' id='x' placeholder='Enter X'/>
                <input name='y' id='y' placeholder='Enter Y'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    `);
});

app.get('/calculate', function(req, res) {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    const sum = x + y;
    res.send(`<h1>Ans is ${sum}</h1>
        <a href="/">
        <button>Go Back</button>
        </a>`);
});

app.listen(3000, function(){
    console.log('server started :)');
});

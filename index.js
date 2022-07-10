// create a new express server
const express = require('express');
const path = require('path');
const glob = require('glob');
const statSync = require('fs').statSync;
const whiskers = require('whiskers');
const app = express();
const port = 3000;

app.use("/css", express.static('./src/css'));
app.use("/js", express.static('./src/js'));
app.use("/assets", express.static('./src/assets'));
app.engine('.html', whiskers.__express);


const cacheUUID = () => glob.sync('./src/**/*.*').map(name => statSync(name).ctime).sort((a, b) => b - a)[0].getTime();

app.get('/', function(req, res) {
    res.render(path.join(__dirname, '/src/index.html'), { cache: cacheUUID() });
});

app.listen(port, "0.0.0.0", () => console.log(`——— \x1b[38;5;48m app listening on port \x1b[38;5;136m${port}\x1b[0m ———`));
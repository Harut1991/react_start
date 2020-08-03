import * as express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

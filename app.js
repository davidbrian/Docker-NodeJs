const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Docker NodeJs  🚀' }) 
);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
const express = require('express');
const app = express();

const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});
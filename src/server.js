const config=require('./config');
const PORT=config.port;
const app=require('./app');
app.listen(PORT ,function () {
    console.log(`Server is running on Port: `+ PORT);
});
